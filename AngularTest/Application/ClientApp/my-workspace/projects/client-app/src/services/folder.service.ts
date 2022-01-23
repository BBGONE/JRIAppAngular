import { Injectable, Optional, SkipSelf } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DataView, Utils } from "jriapp-lib";
import * as FOLDER_DB from "../db/folderDB";
import { ExProps } from "../db/ExProps";

const utils = Utils;

export interface IFileSystemObject extends FOLDER_DB.IFileSystemObject {
  readonly exProp: ExProps;
}

export interface IOptions {
  service_url: string;
}

class RootDataView extends DataView<FOLDER_DB.FileSystemObject> {
}

@Injectable({
  providedIn: 'root',
})
export class FolderService {
  private count: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private items: BehaviorSubject<IFileSystemObject[]> = new BehaviorSubject<IFileSystemObject[]>([]);
  private _dbSet: FOLDER_DB.FileSystemObjectDb;
  private _dbContext: FOLDER_DB.DbContext;
  private _rootView: DataView<FOLDER_DB.FileSystemObject>;

  count$: Observable<number> = this.count.asObservable();
  items$: Observable<IFileSystemObject[]> = this.items.asObservable();

  constructor(@Optional() @SkipSelf() existingService: FolderService) {
    if (existingService) {
      throw Error(
        'The service has already been provided in the app. Avoid providing it again in child modules'
      );
    }
    const self = this, options: IOptions = { service_url: "/FolderBrowserService" };

    self._dbContext = new FOLDER_DB.DbContext();
    self._dbContext.initialize({
      serviceUrl: options.service_url
    });

    self._dbSet = self.dbContext.dbSets.FileSystemObject;

    self._dbContext.dbSets.FileSystemObject.definefullPathField(function (item) {
      return self.getFullPath(item);
    });

    self._dbContext.dbSets.FileSystemObject.defineExtraPropsField(function (item) {
      let res = <ExProps>item._aspect.getCustomVal("exprop");
      if (!res) {
        res = new ExProps(item, self.dbContext);
        item._aspect.setCustomVal("exprop", res);
        res.addOnClicked((s, a) => {
          // alert(a.item.Name);
        });
        res.addOnDblClicked((s, a) => {
          // alert(a.item.Name);
        });
      }

      return res;
    });

    this._rootView = this.createDataView();
  }
  private createDataView() {
    const self = this;
    let res = new RootDataView(
      {
        dataSource: self._dbSet,
        fn_filter: (item) => {
          //console.log(item.Level);
          return item.Level == 0;
        }
      });
    return res;
  }
  private _getFullPath(item: FOLDER_DB.FileSystemObject, path: string): string {
    const self = this;
    let part: string;
    if (utils.check.isNt(path))
      path = '';
    if (!path)
      part = '';
    else
      part = '\\' + path;
    let parent = <FOLDER_DB.FileSystemObject>self.dbContext.associations.getChildToParent().getParentItem(item);
    if (!parent) {
      return item.Name + part;
    }
    else {
      return self._getFullPath(parent, item.Name + part);
    }
  }
  getFullPath(item: FOLDER_DB.FileSystemObject) {
    return this._getFullPath(item, null);
  }
  loadRootFolder() {
    const self = this, query = self._dbSet.createReadRootQuery({ includeFiles: false, infoType: "BASE_ROOT" });
    query.isClearPrevData = true;
    let promise = query.load();
    promise.then(function (res) {
      self._onLoaded();
      //self._rootView.refresh();
    });
    return promise;
  }
  loadAll() {
    const self = this, query = self._dbSet.createReadAllQuery({ includeFiles: false, infoType: "BASE_ROOT" });
    query.isClearPrevData = true;
    let promise = query.load();
    return promise;
  }
  private _onLoaded() {
    try {
      const topLevel = this.rootView.items.map(item => {
        let vals = item._aspect.vals;
        try {
          utils.sys.setProp(vals, "exProp", item.ExtraProps);
        }
        catch (err) {
          console.log(err);
          throw err;
        }
        return <IFileSystemObject>vals;
      });

      this.items.next(topLevel);
      this.setCount(topLevel.length);
    }
    catch (ex) {
      throw ex;
    }
  }

  setCount(countVal) {
    this.count.next(countVal);
  }

  get dbContext() { return this._dbContext; }
  get dbSet() { return this._dbSet; }
  get rootView() { return this._rootView; }
}
