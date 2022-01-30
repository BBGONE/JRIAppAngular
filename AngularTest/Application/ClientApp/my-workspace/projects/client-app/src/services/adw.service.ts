import { Injectable, Optional, SkipSelf, EventEmitter } from '@angular/core';
import { formatDate } from '@angular/common';
import { DbContext, Product } from "../db/adwDB";
import { IPromise, IStatefulPromise, SORT_ORDER, IQueryResult, Utils, FIELD_TYPE, DATA_TYPE } from 'jriapp-lib';
import { dateConverter, dateTimeConverter, decimalConverter } from "../logic/converter";
import { FormControl, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';

const utils = Utils, momentDateTimeFormat = "YYYY-MM-DDThh:mm";

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
  form$: Observable<FormGroup>;
  private form: BehaviorSubject<FormGroup> = new BehaviorSubject<FormGroup>(null);

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
      try {
        const form = self.toFormGroup();
        self.form.next(form);
      }
      catch (err) {
        console.error(err);
      }
    });

    this.form$ = this.form as Observable<FormGroup>;

    this.dbSet.objEvents.onProp('currentItem', function (_s, data) {
      const form = self.form.value;
      if (!!form) {
        self.setFormValues(form, self.currentItem);
      }
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
  private toFormGroup() {
    const group: {
      [key: string]: AbstractControl;
    } = {};

    const fieldInfos = this.dbSet.getFieldInfos().filter(f => f.fieldType === FIELD_TYPE.None);
    fieldInfos.forEach(fieldInfo => {
      group[fieldInfo.fieldName] = new FormControl();
    });

    const form = new FormGroup(group);

    form.valueChanges.subscribe((v: any) => {
      const item = this.currentItem;
      if (!item) {
        return;
      }
      fieldInfos.forEach(fieldInfo => {
        if (!(fieldInfo.isReadOnly)) {
          const val = v[fieldInfo.fieldName];
          let val2 = val;
          
          if (fieldInfo.dataType === DATA_TYPE.Date && !utils.check.isNt(val)) {
            val2 = dateTimeConverter.convertToSource(val, momentDateTimeFormat);
          }
          else if (fieldInfo.dataType === DATA_TYPE.Decimal && !utils.check.isNt(val)) {
            val2 = decimalConverter.convertToSource(val, '');
          }
          item[fieldInfo.fieldName] = val2;
        }
      });
    });

    return form;
  }
  private setFormValues(form: FormGroup, item: Product) {
    const fieldInfos = this.dbSet.getFieldInfos().filter(f => f.fieldType === FIELD_TYPE.None);
    fieldInfos.forEach(fieldInfo => {
      const control = form.get(fieldInfo.fieldName);
      if (!!item) {
        const val = item[fieldInfo.fieldName];
        let val2 = val;

        if (fieldInfo.dataType === DATA_TYPE.Date && !utils.check.isNt(val)) {
          val2 = dateTimeConverter.convertToTarget(val, momentDateTimeFormat);  //formatDate(val, 'yyyy-MM-ddThh:mm', 'en');
        }
        else if (fieldInfo.dataType === DATA_TYPE.Decimal && !utils.check.isNt(val)) {
          val2 = decimalConverter.convertToTarget(val, '');
        }
        // console.log(`${fieldInfo.fieldName}:`, val2);

        control.reset(val2, { emitEvent: false });
      }
      else {
        control.reset(null, { emitEvent: false });
      }
    });
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
