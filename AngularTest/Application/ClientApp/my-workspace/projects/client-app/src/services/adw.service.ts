import { Injectable, Optional, SkipSelf } from '@angular/core';
import { IPromise, IQueryResult, IStatefulPromise, SORT_ORDER, Utils } from 'jriapp-lib';
import { DbContext, Product } from "../db/adwDB";
const utils = Utils;

export interface IOptions {
  service_url: string;
}

@Injectable({
  providedIn: 'root',
})
export class AdwService {
  private _dbContext: DbContext;
  private _uniqueID: string;
  
  constructor(
    @Optional() @SkipSelf() existingService: AdwService
  ) {
    if (existingService) {
      throw Error(
        'The service has already been provided in the app. Avoid providing it again in child modules'
      );
    }
    const self = this, options: IOptions = { service_url: "/RIAppDemoServiceEF" };
    self._uniqueID = utils.core.getNewID();
    self._dbContext = new DbContext();
    self._dbContext.initialize({
      serviceUrl: options.service_url
    }).then(() => {
      console.log("adw.service - dbContext initiaized");
    });

    this.dbSet.addOnEndEdit(function (_s, args) {
      // NOOP
    }, self.uniqueID);

    this.dbSet.addOnFill(function (_s, args) {
     // NOOP
    }, self.uniqueID);

    this.dbContext.objEvents.onProp('isHasChanges', function (_s, data) {
     // NOOP
    }, self.uniqueID);

    this.dbContext.addOnError(function (s, args) {
      console.error(args.error);
    }, self.uniqueID);
  }
  load(): IStatefulPromise<IQueryResult<Product>> {
    const self = this, query = self.dbSet.createReadProductQuery({ param1: [0], param2: "test" });
    query.isClearPrevData = true;
    query.orderBy('Name').thenBy('SellStartDate', SORT_ORDER.DESC);
    let promise = query.load();
    return promise;
  }
  submit(): IPromise<any> {
    const self = this;
    return self.dbContext.submitChanges();
  }

  get dbContext() { return this._dbContext; }
  get dbSet() { return this._dbContext.dbSets.Product; }
  get currentItem(): Product {
    return this.dbSet.currentItem;
  }
  get isHasChanges() {
    return this.dbContext.isHasChanges;
  }
  get uniqueID() {
    return this._uniqueID;
  }
}
