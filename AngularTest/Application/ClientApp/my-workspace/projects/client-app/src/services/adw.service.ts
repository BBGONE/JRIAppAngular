import { Injectable, Optional, SkipSelf, EventEmitter } from '@angular/core';
import { DbContext, Product } from "../db/adwDB";
import { IPromise, IStatefulPromise, SORT_ORDER, IQueryResult, Utils } from 'jriapp-lib';

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
  readonly changeDetectionEmitter: EventEmitter<void> = new EventEmitter<void>();

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
    });
  
    this.dbSet.objEvents.onProp('currentItem', function (_s, data) {
      self.changeDetectionEmitter.emit();
    }, self.uniqueID);
    this.dbSet.addOnEndEdit(function (_s, args) {
      self.changeDetectionEmitter.emit();
    }, self.uniqueID);
    this.dbSet.addOnFill(function (_s, args) {
      self.changeDetectionEmitter.emit();
    }, self.uniqueID);
    this.dbContext.objEvents.onProp('isHasChanges', function (_s, data) {
      self.changeDetectionEmitter.emit();
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
  get currentItem() {
    return this.dbSet.currentItem;
  }
  get isHasChanges() {
    return this.dbContext.isHasChanges;
  }
  get uniqueID() {
    return this._uniqueID;
  }
}
