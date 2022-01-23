/*
  Generated from: /RIAppDemoServiceEF/code/ts on 2021-11-07 at 10:37
  Don't make manual changes here, they will be lost when this interface will be regenerated!
*/

import * as RIAPP from "jriapp-lib";


//******BEGIN INTERFACE REGION******
export interface IAddressInfo2 {
  AddressId: number;
  AddressLine1: string;
  City: string;
  StateProvince: string;
  CountryRegion: string;
}

/*
  Generated from C# KeyVal model
*/
export interface IKeyVal {
  key: number;
  val: string;
}

export interface IDEMOCLS {
  prodCategory: IKeyVal[];
  prodDescription: IKeyVal[];
  prodModel: IKeyVal[];
}

export interface ITestLookUpProduct {
  ProductId: number;
  Name: string;
}

export enum TestEnum {
  None = 0,
  OK = 1,
  Error = 2,
  Loading = 3
}

/*
  A Class for testing of conversion C# types to typescript
*/
export interface IClientTestModel {
  Key: string;
  SomeProperty1: string;
  SomeProperty2: number[];
  SomeProperty3: string[];
  MoreComplexProperty: ITestLookUpProduct[];
  EnumProperty: TestEnum;
}

/*
  Generated from C# StrKeyVal model
*/
export interface IStrKeyVal {
  key: string;
  val: string;
}

export interface IRadioVal {
  key: string;
  value: string;
  comment: string;
}

/*
  Generated from C# HistoryItem model
*/
export interface IHistoryItem {
  radioValue: string;
  time: Date;
}

/*
  An enum for testing of conversion C# types to typescript
*/
export enum TestEnum2 {
  None = 0,
  One = 1,
  Two = 2,
  Three = 3
}
//******END INTERFACE REGION******

export interface ISvcMethods {
  GetClassifiers: () => RIAPP.IPromise<IDEMOCLS>;
  TestComplexInvoke: (args: {
    info: IAddressInfo2;
    keys: IKeyVal[];
  }) => RIAPP.IPromise<number[]>;
  TestInvoke: (args: {
    param1: number[];
    param2: string;
  }) => RIAPP.IPromise<string>;
}

//******BEGIN LISTS REGION******
export type TTestModelItemAspect = RIAPP.ListItemAspect<TestModelListItem, IClientTestModel>;

export interface TestModelListItem extends IClientTestModel, RIAPP.IListItem {
  readonly _aspect: TTestModelItemAspect;
}

class _TestModelListItem extends RIAPP.CollectionItem<TTestModelItemAspect> implements TestModelListItem {
  get Key(): string { return <string>this._aspect._getProp('Key'); }
  set Key(v: string) { this._aspect._setProp('Key', v); }
  get SomeProperty1(): string { return <string>this._aspect._getProp('SomeProperty1'); }
  set SomeProperty1(v: string) { this._aspect._setProp('SomeProperty1', v); }
  get SomeProperty2(): number[] { return <number[]>this._aspect._getProp('SomeProperty2'); }
  set SomeProperty2(v: number[]) { this._aspect._setProp('SomeProperty2', v); }
  get SomeProperty3(): string[] { return <string[]>this._aspect._getProp('SomeProperty3'); }
  set SomeProperty3(v: string[]) { this._aspect._setProp('SomeProperty3', v); }
  get MoreComplexProperty(): ITestLookUpProduct[] { return <ITestLookUpProduct[]>this._aspect._getProp('MoreComplexProperty'); }
  set MoreComplexProperty(v: ITestLookUpProduct[]) { this._aspect._setProp('MoreComplexProperty', v); }
  get EnumProperty(): TestEnum { return <TestEnum>this._aspect._getProp('EnumProperty'); }
  set EnumProperty(v: TestEnum) { this._aspect._setProp('EnumProperty', v); }

  toString() {
    return '_TestModelListItem';
  }
}

export class TestDictionary extends RIAPP.BaseDictionary<TestModelListItem, IClientTestModel> {
  constructor() {
    super('Key', [{ name: 'Key', dtype: 1 }, { name: 'SomeProperty1', dtype: 1 }, { name: 'SomeProperty2', dtype: 10 }, { name: 'SomeProperty3', dtype: 0 }, { name: 'MoreComplexProperty', dtype: 0 }, { name: 'EnumProperty', dtype: 0 }]);
  }
  // override
  itemFactory(aspect: TTestModelItemAspect): TestModelListItem {
    return new _TestModelListItem(aspect);
  }
  findItem(key: string): TestModelListItem {
    return this.findByPK(RIAPP.Utils.arr.fromList(arguments));
  }
  toString() {
    return 'TestDictionary';
  }
}

export class TestList extends RIAPP.BaseList<TestModelListItem, IClientTestModel> {
  constructor() {
    super([{ name: 'Key', dtype: 1 }, { name: 'SomeProperty1', dtype: 1 }, { name: 'SomeProperty2', dtype: 10 }, { name: 'SomeProperty3', dtype: 0 }, { name: 'MoreComplexProperty', dtype: 0 }, { name: 'EnumProperty', dtype: 0 }]);
  }
  // override
  itemFactory(aspect: TTestModelItemAspect): TestModelListItem {
    return new _TestModelListItem(aspect);
  }
  toString() {
    return 'TestList';
  }
}

export type TKeyValItemAspect = RIAPP.ListItemAspect<KeyValListItem, IKeyVal>;

export interface KeyValListItem extends IKeyVal, RIAPP.IListItem {
  readonly _aspect: TKeyValItemAspect;
}

class _KeyValListItem extends RIAPP.CollectionItem<TKeyValItemAspect> implements KeyValListItem {
  get key(): number { return <number>this._aspect._getProp('key'); }
  set key(v: number) { this._aspect._setProp('key', v); }
  get val(): string { return <string>this._aspect._getProp('val'); }
  set val(v: string) { this._aspect._setProp('val', v); }

  toString() {
    return '_KeyValListItem';
  }
}

export class KeyValDictionary extends RIAPP.BaseDictionary<KeyValListItem, IKeyVal> {
  constructor() {
    super('key', [{ name: 'key', dtype: 3 }, { name: 'val', dtype: 1 }]);
  }
  // override
  itemFactory(aspect: TKeyValItemAspect): KeyValListItem {
    return new _KeyValListItem(aspect);
  }
  findItem(key: number): KeyValListItem {
    return this.findByPK(RIAPP.Utils.arr.fromList(arguments));
  }
  toString() {
    return 'KeyValDictionary';
  }
}

export type TStrKeyValItemAspect = RIAPP.ListItemAspect<StrKeyValListItem, IStrKeyVal>;

export interface StrKeyValListItem extends IStrKeyVal, RIAPP.IListItem {
  readonly _aspect: TStrKeyValItemAspect;
}

class _StrKeyValListItem extends RIAPP.CollectionItem<TStrKeyValItemAspect> implements StrKeyValListItem {
  get key(): string { return <string>this._aspect._getProp('key'); }
  set key(v: string) { this._aspect._setProp('key', v); }
  get val(): string { return <string>this._aspect._getProp('val'); }
  set val(v: string) { this._aspect._setProp('val', v); }

  toString() {
    return '_StrKeyValListItem';
  }
}

export class StrKeyValDictionary extends RIAPP.BaseDictionary<StrKeyValListItem, IStrKeyVal> {
  constructor() {
    super('key', [{ name: 'key', dtype: 1 }, { name: 'val', dtype: 1 }]);
  }
  // override
  itemFactory(aspect: TStrKeyValItemAspect): StrKeyValListItem {
    return new _StrKeyValListItem(aspect);
  }
  findItem(key: string): StrKeyValListItem {
    return this.findByPK(RIAPP.Utils.arr.fromList(arguments));
  }
  toString() {
    return 'StrKeyValDictionary';
  }
}

export type TRadioValItemAspect = RIAPP.ListItemAspect<RadioValListItem, IRadioVal>;

export interface RadioValListItem extends IRadioVal, RIAPP.IListItem {
  readonly _aspect: TRadioValItemAspect;
}

class _RadioValListItem extends RIAPP.CollectionItem<TRadioValItemAspect> implements RadioValListItem {
  get key(): string { return <string>this._aspect._getProp('key'); }
  set key(v: string) { this._aspect._setProp('key', v); }
  get value(): string { return <string>this._aspect._getProp('value'); }
  set value(v: string) { this._aspect._setProp('value', v); }
  get comment(): string { return <string>this._aspect._getProp('comment'); }
  set comment(v: string) { this._aspect._setProp('comment', v); }

  toString() {
    return '_RadioValListItem';
  }
}

export class RadioValDictionary extends RIAPP.BaseDictionary<RadioValListItem, IRadioVal> {
  constructor() {
    super('key', [{ name: 'key', dtype: 1 }, { name: 'value', dtype: 1 }, { name: 'comment', dtype: 1 }]);
  }
  // override
  itemFactory(aspect: TRadioValItemAspect): RadioValListItem {
    return new _RadioValListItem(aspect);
  }
  findItem(key: string): RadioValListItem {
    return this.findByPK(RIAPP.Utils.arr.fromList(arguments));
  }
  toString() {
    return 'RadioValDictionary';
  }
}

export type THistoryItemItemAspect = RIAPP.ListItemAspect<HistoryItemListItem, IHistoryItem>;

export interface HistoryItemListItem extends IHistoryItem, RIAPP.IListItem {
  readonly _aspect: THistoryItemItemAspect;
}

class _HistoryItemListItem extends RIAPP.CollectionItem<THistoryItemItemAspect> implements HistoryItemListItem {
  get radioValue(): string { return <string>this._aspect._getProp('radioValue'); }
  set radioValue(v: string) { this._aspect._setProp('radioValue', v); }
  get time(): Date { return <Date>this._aspect._getProp('time'); }
  set time(v: Date) { this._aspect._setProp('time', v); }

  toString() {
    return '_HistoryItemListItem';
  }
}

export class HistoryList extends RIAPP.BaseList<HistoryItemListItem, IHistoryItem> {
  constructor() {
    super([{ name: 'radioValue', dtype: 1 }, { name: 'time', dtype: 6 }]);
  }
  // override
  itemFactory(aspect: THistoryItemItemAspect): HistoryItemListItem {
    return new _HistoryItemListItem(aspect);
  }
  toString() {
    return 'HistoryList';
  }
}
//******END LISTS REGION******

//******BEGIN COMPLEX TYPES REGION*****
export interface ICustomer_Contact1 {
  EmailAddress: string;
  Phone: string;
}

export class Customer_Contact1 extends RIAPP.ChildComplexProperty implements ICustomer_Contact1 {

  constructor(name: string, parent: RIAPP.BaseComplexProperty) {
    super(name, parent);

  }
  get EmailAddress(): string { return this.getValue('CustomerName.Contact.EmailAddress'); }
  set EmailAddress(v: string) { this.setValue('CustomerName.Contact.EmailAddress', v); }
  get Phone(): string { return this.getValue('CustomerName.Contact.Phone'); }
  set Phone(v: string) { this.setValue('CustomerName.Contact.Phone', v); }
  toString() {
    return 'Customer_Contact1';
  }
}

export interface ICustomer_CustomerName {
  readonly Contact: ICustomer_Contact1;
  FirstName: string;
  LastName: string;
  MiddleName: string;
  readonly Name: string;
}

export class Customer_CustomerName extends RIAPP.RootComplexProperty implements ICustomer_CustomerName {
  private _Contact: Customer_Contact1;

  constructor(name: string, owner: RIAPP.EntityAspect<RIAPP.IEntityItem, any, DbContext>) {
    super(name, owner);
    this._Contact = null;

  }
  get Contact(): ICustomer_Contact1 { if (!this._Contact) { this._Contact = new Customer_Contact1('Contact', this); } return this._Contact; }
  get FirstName(): string { return this.getValue('CustomerName.FirstName'); }
  set FirstName(v: string) { this.setValue('CustomerName.FirstName', v); }
  get LastName(): string { return this.getValue('CustomerName.LastName'); }
  set LastName(v: string) { this.setValue('CustomerName.LastName', v); }
  get MiddleName(): string { return this.getValue('CustomerName.MiddleName'); }
  set MiddleName(v: string) { this.setValue('CustomerName.MiddleName', v); }
  get Name(): string { return this.getEntity()._getCalcFieldVal('CustomerName.Name'); }
  toString() {
    return 'Customer_CustomerName';
  }
}
//******END COMPLEX TYPES REGION******

export interface IAddress {
  readonly AddressId: number;
  AddressLine1: string;
  AddressLine2: string | null;
  City: string;
  CountryRegion: string;
  ModifiedDate: Date;
  PostalCode: string;
  Rowguid: string;
  StateProvince: string;
}

export type TAddressAspect = RIAPP.EntityAspect<Address, IAddress, DbContext>;

export interface Address extends IAddress, RIAPP.IEntityItem {
  readonly _aspect: TAddressAspect;
  readonly CustomerAddress: CustomerAddress[];
  readonly SalesOrderHeaderBillToAddress: SalesOrderHeader[];
  readonly SalesOrderHeaderShipToAddress: SalesOrderHeader[];
}

class AddressEntity extends RIAPP.CollectionItem<TAddressAspect> implements Address {
  constructor(aspect: TAddressAspect) {
    super(aspect);
  }
  toString() {
    return 'AddressEntity';
  }
  get AddressId(): number { return this._aspect._getFieldVal('AddressId'); }
  get AddressLine1(): string { return this._aspect._getFieldVal('AddressLine1'); }
  set AddressLine1(v: string) { this._aspect._setFieldVal('AddressLine1', v); }
  get AddressLine2(): string | null { return this._aspect._getFieldVal('AddressLine2'); }
  set AddressLine2(v: string | null) { this._aspect._setFieldVal('AddressLine2', v); }
  get City(): string { return this._aspect._getFieldVal('City'); }
  set City(v: string) { this._aspect._setFieldVal('City', v); }
  get CountryRegion(): string { return this._aspect._getFieldVal('CountryRegion'); }
  set CountryRegion(v: string) { this._aspect._setFieldVal('CountryRegion', v); }
  get ModifiedDate(): Date { return this._aspect._getFieldVal('ModifiedDate'); }
  set ModifiedDate(v: Date) { this._aspect._setFieldVal('ModifiedDate', v); }
  get PostalCode(): string { return this._aspect._getFieldVal('PostalCode'); }
  set PostalCode(v: string) { this._aspect._setFieldVal('PostalCode', v); }
  get Rowguid(): string { return this._aspect._getFieldVal('Rowguid'); }
  set Rowguid(v: string) { this._aspect._setFieldVal('Rowguid', v); }
  get StateProvince(): string { return this._aspect._getFieldVal('StateProvince'); }
  set StateProvince(v: string) { this._aspect._setFieldVal('StateProvince', v); }
  get CustomerAddress(): CustomerAddress[] { return this._aspect._getNavFieldVal('CustomerAddress'); }
  get SalesOrderHeaderBillToAddress(): SalesOrderHeader[] { return this._aspect._getNavFieldVal('SalesOrderHeaderBillToAddress'); }
  get SalesOrderHeaderShipToAddress(): SalesOrderHeader[] { return this._aspect._getNavFieldVal('SalesOrderHeaderShipToAddress'); }
}

export class AddressDb extends RIAPP.DbSet<Address, IAddress, DbContext>
{
  constructor(dbContext: DbContext) {
    var opts: RIAPP.IDbSetConstuctorOptions = {
      dbContext: dbContext,
      dbSetInfo: { "fieldInfos": [], "enablePaging": true, "pageSize": 100, "dbSetName": "Address" },
      childAssoc: ([]),
      parentAssoc: ([{ "name": "CustomerAddress_Address", "parentDbSetName": "Address", "childDbSetName": "CustomerAddress", "childToParentName": "Address", "parentToChildrenName": "CustomerAddress", "onDeleteAction": 0, "fieldRels": [{ "parentField": "AddressId", "childField": "AddressId" }] }, { "name": "SalesOrderHeaderBillToAddress_BillToAddress", "parentDbSetName": "Address", "childDbSetName": "SalesOrderHeader", "childToParentName": "BillToAddress", "parentToChildrenName": "SalesOrderHeaderBillToAddress", "onDeleteAction": 0, "fieldRels": [{ "parentField": "AddressId", "childField": "BillToAddressId" }] }, { "name": "SalesOrderHeaderShipToAddress_ShipToAddress", "parentDbSetName": "Address", "childDbSetName": "SalesOrderHeader", "childToParentName": "ShipToAddress", "parentToChildrenName": "SalesOrderHeaderShipToAddress", "onDeleteAction": 0, "fieldRels": [{ "parentField": "AddressId", "childField": "ShipToAddressId" }] }])
    };
    opts.dbSetInfo.fieldInfos = ([{ "fieldName": "AddressId", "isPrimaryKey": 1, "dataType": 3, "isNullable": false, "isReadOnly": true, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "AddressLine1", "isPrimaryKey": 0, "dataType": 1, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 60, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "AddressLine2", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 60, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "City", "isPrimaryKey": 0, "dataType": 1, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 30, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "CountryRegion", "isPrimaryKey": 0, "dataType": 1, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 50, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ModifiedDate", "isPrimaryKey": 0, "dataType": 6, "isNullable": false, "isReadOnly": false, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "PostalCode", "isPrimaryKey": 0, "dataType": 1, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 15, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Rowguid", "isPrimaryKey": 0, "dataType": 9, "isNullable": false, "isReadOnly": false, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "StateProvince", "isPrimaryKey": 0, "dataType": 1, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 50, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "CustomerAddress", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "", "nested": null }, { "fieldName": "SalesOrderHeaderBillToAddress", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "", "nested": null }, { "fieldName": "SalesOrderHeaderShipToAddress", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "", "nested": null }]);
    super(opts);
  }
  // override
  itemFactory(aspect: TAddressAspect): Address {
    return new AddressEntity(aspect);
  }
  findEntity(addressId: number): Address {
    return this.findByPK(RIAPP.Utils.arr.fromList(arguments));
  }
  toString(): string {
    return 'AddressDb';
  }
  createReadAddressByIdsQuery(args?: {
    addressIDs: number[];
  }): RIAPP.DataQuery<Address, IAddress> {
    var query = this.createQuery('ReadAddressByIds');
    query.params = args;
    return query;
  }
  createReadAddressQuery(): RIAPP.DataQuery<Address, IAddress> {
    return this.createQuery('ReadAddress');
  }

}

export interface IAddressInfo {
  readonly AddressId: number;
  readonly AddressLine1: string | null;
  readonly City: string | null;
  readonly StateProvince: string | null;
  readonly CountryRegion: string | null;
}

export type TAddressInfoAspect = RIAPP.EntityAspect<AddressInfo, IAddressInfo, DbContext>;

export interface AddressInfo extends IAddressInfo, RIAPP.IEntityItem {
  readonly _aspect: TAddressInfoAspect;
  readonly CustomerAddresses: CustomerAddress[];
}

class AddressInfoEntity extends RIAPP.CollectionItem<TAddressInfoAspect> implements AddressInfo {
  constructor(aspect: TAddressInfoAspect) {
    super(aspect);
  }
  toString() {
    return 'AddressInfoEntity';
  }
  get AddressId(): number { return this._aspect._getFieldVal('AddressId'); }
  get AddressLine1(): string | null { return this._aspect._getFieldVal('AddressLine1'); }
  get City(): string | null { return this._aspect._getFieldVal('City'); }
  get StateProvince(): string | null { return this._aspect._getFieldVal('StateProvince'); }
  get CountryRegion(): string | null { return this._aspect._getFieldVal('CountryRegion'); }
  get CustomerAddresses(): CustomerAddress[] { return this._aspect._getNavFieldVal('CustomerAddresses'); }
}

export class AddressInfoDb extends RIAPP.DbSet<AddressInfo, IAddressInfo, DbContext>
{
  constructor(dbContext: DbContext) {
    var opts: RIAPP.IDbSetConstuctorOptions = {
      dbContext: dbContext,
      dbSetInfo: { "fieldInfos": [], "enablePaging": false, "pageSize": 100, "dbSetName": "AddressInfo" },
      childAssoc: ([]),
      parentAssoc: ([{ "name": "CustAddr_AddressInfo", "parentDbSetName": "AddressInfo", "childDbSetName": "CustomerAddress", "childToParentName": "AddressInfo", "parentToChildrenName": "CustomerAddresses", "onDeleteAction": 0, "fieldRels": [{ "parentField": "AddressId", "childField": "AddressId" }] }])
    };
    opts.dbSetInfo.fieldInfos = ([{ "fieldName": "AddressId", "isPrimaryKey": 1, "dataType": 3, "isNullable": false, "isReadOnly": true, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": 4, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "AddressLine1", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": true, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 200, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "City", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": true, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 30, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "StateProvince", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": true, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 50, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "CountryRegion", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": true, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 50, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "CustomerAddresses", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "", "nested": null }]);
    super(opts);
  }
  // override
  itemFactory(aspect: TAddressInfoAspect): AddressInfo {
    return new AddressInfoEntity(aspect);
  }
  findEntity(addressId: number): AddressInfo {
    return this.findByPK(RIAPP.Utils.arr.fromList(arguments));
  }
  toString(): string {
    return 'AddressInfoDb';
  }
  createReadAddressInfoQuery(): RIAPP.DataQuery<AddressInfo, IAddressInfo> {
    return this.createQuery('ReadAddressInfo');
  }

}

export interface ICustomer {
  readonly CustomerName: ICustomer_CustomerName;
  readonly CustomerId: number;
  CompanyName: string | null;
  readonly ModifiedDate: Date;
  NameStyle: boolean;
  PasswordHash: string;
  PasswordSalt: string;
  readonly Rowguid: string;
  SalesPerson: string | null;
  Suffix: string | null;
  Title: string | null;
  AddressCount: number | null;
}

export type TCustomerAspect = RIAPP.EntityAspect<Customer, ICustomer, DbContext>;

export interface Customer extends ICustomer, RIAPP.IEntityItem {
  readonly _aspect: TCustomerAspect;
  readonly CustomerAddress: CustomerAddress[];
  readonly SalesOrderHeader: SalesOrderHeader[];
}

class CustomerEntity extends RIAPP.CollectionItem<TCustomerAspect> implements Customer {
  private _CustomerName: Customer_CustomerName;
  constructor(aspect: TCustomerAspect) {
    super(aspect);
    this._CustomerName = null;
  }
  toString() {
    return 'CustomerEntity';
  }
  get CustomerName(): ICustomer_CustomerName { if (!this._CustomerName) { this._CustomerName = new Customer_CustomerName('CustomerName', this._aspect); } return this._CustomerName; }
  get CustomerId(): number { return this._aspect._getFieldVal('CustomerId'); }
  get CompanyName(): string | null { return this._aspect._getFieldVal('CompanyName'); }
  set CompanyName(v: string | null) { this._aspect._setFieldVal('CompanyName', v); }
  get ModifiedDate(): Date { return this._aspect._getFieldVal('ModifiedDate'); }
  get NameStyle(): boolean { return this._aspect._getFieldVal('NameStyle'); }
  set NameStyle(v: boolean) { this._aspect._setFieldVal('NameStyle', v); }
  get PasswordHash(): string { return this._aspect._getFieldVal('PasswordHash'); }
  set PasswordHash(v: string) { this._aspect._setFieldVal('PasswordHash', v); }
  get PasswordSalt(): string { return this._aspect._getFieldVal('PasswordSalt'); }
  set PasswordSalt(v: string) { this._aspect._setFieldVal('PasswordSalt', v); }
  get Rowguid(): string { return this._aspect._getFieldVal('Rowguid'); }
  get SalesPerson(): string | null { return this._aspect._getFieldVal('SalesPerson'); }
  set SalesPerson(v: string | null) { this._aspect._setFieldVal('SalesPerson', v); }
  get Suffix(): string | null { return this._aspect._getFieldVal('Suffix'); }
  set Suffix(v: string | null) { this._aspect._setFieldVal('Suffix', v); }
  get Title(): string | null { return this._aspect._getFieldVal('Title'); }
  set Title(v: string | null) { this._aspect._setFieldVal('Title', v); }
  get AddressCount(): number | null { return this._aspect._getFieldVal('AddressCount'); }
  set AddressCount(v: number | null) { this._aspect._setFieldVal('AddressCount', v); }
  get CustomerAddress(): CustomerAddress[] { return this._aspect._getNavFieldVal('CustomerAddress'); }
  get SalesOrderHeader(): SalesOrderHeader[] { return this._aspect._getNavFieldVal('SalesOrderHeader'); }
}

export class CustomerDb extends RIAPP.DbSet<Customer, ICustomer, DbContext>
{
  constructor(dbContext: DbContext) {
    var opts: RIAPP.IDbSetConstuctorOptions = {
      dbContext: dbContext,
      dbSetInfo: { "fieldInfos": [], "enablePaging": true, "pageSize": 100, "dbSetName": "Customer" },
      childAssoc: ([]),
      parentAssoc: ([{ "name": "CustomerAddress_Customer", "parentDbSetName": "Customer", "childDbSetName": "CustomerAddress", "childToParentName": "Customer", "parentToChildrenName": "CustomerAddress", "onDeleteAction": 0, "fieldRels": [{ "parentField": "CustomerId", "childField": "CustomerId" }] }, { "name": "SalesOrderHeader_Customer", "parentDbSetName": "Customer", "childDbSetName": "SalesOrderHeader", "childToParentName": "Customer", "parentToChildrenName": "SalesOrderHeader", "onDeleteAction": 0, "fieldRels": [{ "parentField": "CustomerId", "childField": "CustomerId" }] }])
    };
    opts.dbSetInfo.fieldInfos = ([{ "fieldName": "CustomerName", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 5, "dependentOn": "", "nested": [{ "fieldName": "Contact", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 5, "dependentOn": "", "nested": [{ "fieldName": "EmailAddress", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 50, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Phone", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 25, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }] }, { "fieldName": "FirstName", "isPrimaryKey": 0, "dataType": 1, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 50, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "LastName", "isPrimaryKey": 0, "dataType": 1, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 50, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "MiddleName", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 50, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Name", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 2, "dependentOn": "CustomerName.FirstName,CustomerName.MiddleName,CustomerName.LastName", "nested": null }] }, { "fieldName": "CustomerId", "isPrimaryKey": 1, "dataType": 3, "isNullable": false, "isReadOnly": true, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "CompanyName", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 128, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ModifiedDate", "isPrimaryKey": 0, "dataType": 6, "isNullable": false, "isReadOnly": true, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "NameStyle", "isPrimaryKey": 0, "dataType": 2, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "PasswordHash", "isPrimaryKey": 0, "dataType": 1, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 128, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "PasswordSalt", "isPrimaryKey": 0, "dataType": 1, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 10, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Rowguid", "isPrimaryKey": 0, "dataType": 9, "isNullable": false, "isReadOnly": true, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "SalesPerson", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 256, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Suffix", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 10, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Title", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 8, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "AddressCount", "isPrimaryKey": 0, "dataType": 3, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 6, "dependentOn": "", "nested": null }, { "fieldName": "CustomerAddress", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "", "nested": null }, { "fieldName": "SalesOrderHeader", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "", "nested": null }]);
    super(opts);
  }
  // override
  itemFactory(aspect: TCustomerAspect): Customer {
    return new CustomerEntity(aspect);
  }
  findEntity(customerId: number): Customer {
    return this.findByPK(RIAPP.Utils.arr.fromList(arguments));
  }
  toString(): string {
    return 'CustomerDb';
  }
  createReadCustomerQuery(args?: {
    includeNav?: boolean;
  }): RIAPP.DataQuery<Customer, ICustomer> {
    var query = this.createQuery('ReadCustomer');
    query.params = args;
    return query;
  }
  defineCustomerName_NameField(getFunc: (item: Customer) => string | null) { this._defineCalculatedField('CustomerName.Name', getFunc); }
}

export interface ICustomerAddress {
  CustomerId: number;
  AddressId: number;
  AddressType: string;
  ModifiedDate: Date;
  Rowguid: string;
}

export type TCustomerAddressAspect = RIAPP.EntityAspect<CustomerAddress, ICustomerAddress, DbContext>;

export interface CustomerAddress extends ICustomerAddress, RIAPP.IEntityItem {
  readonly _aspect: TCustomerAddressAspect;
  Address: Address;
  AddressInfo: AddressInfo;
  Customer: Customer;
}

class CustomerAddressEntity extends RIAPP.CollectionItem<TCustomerAddressAspect> implements CustomerAddress {
  constructor(aspect: TCustomerAddressAspect) {
    super(aspect);
  }
  toString() {
    return 'CustomerAddressEntity';
  }
  get CustomerId(): number { return this._aspect._getFieldVal('CustomerId'); }
  set CustomerId(v: number) { this._aspect._setFieldVal('CustomerId', v); }
  get AddressId(): number { return this._aspect._getFieldVal('AddressId'); }
  set AddressId(v: number) { this._aspect._setFieldVal('AddressId', v); }
  get AddressType(): string { return this._aspect._getFieldVal('AddressType'); }
  set AddressType(v: string) { this._aspect._setFieldVal('AddressType', v); }
  get ModifiedDate(): Date { return this._aspect._getFieldVal('ModifiedDate'); }
  set ModifiedDate(v: Date) { this._aspect._setFieldVal('ModifiedDate', v); }
  get Rowguid(): string { return this._aspect._getFieldVal('Rowguid'); }
  set Rowguid(v: string) { this._aspect._setFieldVal('Rowguid', v); }
  get Address(): Address { return this._aspect._getNavFieldVal('Address'); }
  set Address(v: Address) { this._aspect._setNavFieldVal('Address', v); }
  get AddressInfo(): AddressInfo { return this._aspect._getNavFieldVal('AddressInfo'); }
  set AddressInfo(v: AddressInfo) { this._aspect._setNavFieldVal('AddressInfo', v); }
  get Customer(): Customer { return this._aspect._getNavFieldVal('Customer'); }
  set Customer(v: Customer) { this._aspect._setNavFieldVal('Customer', v); }
}

export class CustomerAddressDb extends RIAPP.DbSet<CustomerAddress, ICustomerAddress, DbContext>
{
  constructor(dbContext: DbContext) {
    var opts: RIAPP.IDbSetConstuctorOptions = {
      dbContext: dbContext,
      dbSetInfo: { "fieldInfos": [], "enablePaging": false, "pageSize": 100, "dbSetName": "CustomerAddress" },
      childAssoc: ([{ "name": "CustAddr_AddressInfo", "parentDbSetName": "AddressInfo", "childDbSetName": "CustomerAddress", "childToParentName": "AddressInfo", "parentToChildrenName": "CustomerAddresses", "onDeleteAction": 0, "fieldRels": [{ "parentField": "AddressId", "childField": "AddressId" }] }, { "name": "CustomerAddress_Address", "parentDbSetName": "Address", "childDbSetName": "CustomerAddress", "childToParentName": "Address", "parentToChildrenName": "CustomerAddress", "onDeleteAction": 0, "fieldRels": [{ "parentField": "AddressId", "childField": "AddressId" }] }, { "name": "CustomerAddress_Customer", "parentDbSetName": "Customer", "childDbSetName": "CustomerAddress", "childToParentName": "Customer", "parentToChildrenName": "CustomerAddress", "onDeleteAction": 0, "fieldRels": [{ "parentField": "CustomerId", "childField": "CustomerId" }] }]),
      parentAssoc: ([])
    };
    opts.dbSetInfo.fieldInfos = ([{ "fieldName": "CustomerId", "isPrimaryKey": 1, "dataType": 3, "isNullable": false, "isReadOnly": true, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": true, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "AddressId", "isPrimaryKey": 2, "dataType": 3, "isNullable": false, "isReadOnly": true, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": true, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "AddressType", "isPrimaryKey": 0, "dataType": 1, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 50, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ModifiedDate", "isPrimaryKey": 0, "dataType": 6, "isNullable": false, "isReadOnly": false, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Rowguid", "isPrimaryKey": 0, "dataType": 9, "isNullable": false, "isReadOnly": false, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Address", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "AddressId", "nested": null }, { "fieldName": "AddressInfo", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "AddressId", "nested": null }, { "fieldName": "Customer", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "CustomerId", "nested": null }]);
    super(opts);
  }
  // override
  itemFactory(aspect: TCustomerAddressAspect): CustomerAddress {
    return new CustomerAddressEntity(aspect);
  }
  findEntity(customerId: number, addressId: number): CustomerAddress {
    return this.findByPK(RIAPP.Utils.arr.fromList(arguments));
  }
  toString(): string {
    return 'CustomerAddressDb';
  }
  createReadAddressForCustomersQuery(args?: {
    custIDs: number[];
  }): RIAPP.DataQuery<CustomerAddress, ICustomerAddress> {
    var query = this.createQuery('ReadAddressForCustomers');
    query.params = args;
    return query;
  }
  createReadCustomerAddressQuery(): RIAPP.DataQuery<CustomerAddress, ICustomerAddress> {
    return this.createQuery('ReadCustomerAddress');
  }

}

export interface ICustomerJSON {
  readonly CustomerId: number;
  Data: string;
  readonly Rowguid: string;
}

export type TCustomerJSONAspect = RIAPP.EntityAspect<CustomerJSON, ICustomerJSON, DbContext>;

export interface CustomerJSON extends ICustomerJSON, RIAPP.IEntityItem {
  readonly _aspect: TCustomerJSONAspect;
  readonly Customer: any | null;
}

class CustomerJSONEntity extends RIAPP.CollectionItem<TCustomerJSONAspect> implements CustomerJSON {
  constructor(aspect: TCustomerJSONAspect) {
    super(aspect);
  }
  toString() {
    return 'CustomerJSONEntity';
  }
  get CustomerId(): number { return this._aspect._getFieldVal('CustomerId'); }
  get Data(): string { return this._aspect._getFieldVal('Data'); }
  set Data(v: string) { this._aspect._setFieldVal('Data', v); }
  get Rowguid(): string { return this._aspect._getFieldVal('Rowguid'); }
  get Customer(): any | null { return this._aspect._getCalcFieldVal('Customer'); }
}

export class CustomerJSONDb extends RIAPP.DbSet<CustomerJSON, ICustomerJSON, DbContext>
{
  constructor(dbContext: DbContext) {
    var opts: RIAPP.IDbSetConstuctorOptions = {
      dbContext: dbContext,
      dbSetInfo: { "fieldInfos": [], "enablePaging": true, "pageSize": 100, "dbSetName": "CustomerJSON" },
      childAssoc: ([]),
      parentAssoc: ([])
    };
    opts.dbSetInfo.fieldInfos = ([{ "fieldName": "CustomerId", "isPrimaryKey": 1, "dataType": 3, "isNullable": false, "isReadOnly": true, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": 4, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Data", "isPrimaryKey": 0, "dataType": 1, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": false, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Rowguid", "isPrimaryKey": 0, "dataType": 9, "isNullable": false, "isReadOnly": true, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": 16, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 4, "dependentOn": "", "nested": null }, { "fieldName": "Customer", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 2, "dependentOn": "Data", "nested": null }]);
    super(opts);
  }
  // override
  itemFactory(aspect: TCustomerJSONAspect): CustomerJSON {
    return new CustomerJSONEntity(aspect);
  }
  findEntity(customerId: number): CustomerJSON {
    return this.findByPK(RIAPP.Utils.arr.fromList(arguments));
  }
  toString(): string {
    return 'CustomerJSONDb';
  }
  createReadCustomerJSONQuery(): RIAPP.DataQuery<CustomerJSON, ICustomerJSON> {
    return this.createQuery('ReadCustomerJSON');
  }
  defineCustomerField(getFunc: (item: CustomerJSON) => any | null) { this._defineCalculatedField('Customer', getFunc); }
}

export interface ILookUpProduct {
  ProductId: number;
  Name: string;
}

export type TLookUpProductAspect = RIAPP.EntityAspect<LookUpProduct, ILookUpProduct, DbContext>;

export interface LookUpProduct extends ILookUpProduct, RIAPP.IEntityItem {
  readonly _aspect: TLookUpProductAspect;
}

class LookUpProductEntity extends RIAPP.CollectionItem<TLookUpProductAspect> implements LookUpProduct {
  constructor(aspect: TLookUpProductAspect) {
    super(aspect);
  }
  toString() {
    return 'LookUpProductEntity';
  }
  get ProductId(): number { return this._aspect._getFieldVal('ProductId'); }
  set ProductId(v: number) { this._aspect._setFieldVal('ProductId', v); }
  get Name(): string { return this._aspect._getFieldVal('Name'); }
  set Name(v: string) { this._aspect._setFieldVal('Name', v); }
}

export class LookUpProductDb extends RIAPP.DbSet<LookUpProduct, ILookUpProduct, DbContext>
{
  constructor(dbContext: DbContext) {
    var opts: RIAPP.IDbSetConstuctorOptions = {
      dbContext: dbContext,
      dbSetInfo: { "fieldInfos": [], "enablePaging": true, "pageSize": 25, "dbSetName": "LookUpProduct" },
      childAssoc: ([]),
      parentAssoc: ([])
    };
    opts.dbSetInfo.fieldInfos = ([{ "fieldName": "ProductId", "isPrimaryKey": 1, "dataType": 3, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Name", "isPrimaryKey": 0, "dataType": 1, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }]);
    super(opts);
  }
  // override
  itemFactory(aspect: TLookUpProductAspect): LookUpProduct {
    return new LookUpProductEntity(aspect);
  }
  findEntity(productId: number): LookUpProduct {
    return this.findByPK(RIAPP.Utils.arr.fromList(arguments));
  }
  toString(): string {
    return 'LookUpProductDb';
  }
  createReadProductLookUpQuery(): RIAPP.DataQuery<LookUpProduct, ILookUpProduct> {
    return this.createQuery('ReadProductLookUp');
  }

}

export interface IProduct {
  readonly ProductId: number;
  Color: string | null;
  DiscontinuedDate: Date | null;
  ListPrice: number;
  readonly ModifiedDate: Date;
  Name: string;
  ProductCategoryId: number | null;
  ProductModelId: number | null;
  ProductNumber: string;
  readonly Rowguid: string;
  SellEndDate: Date | null;
  SellStartDate: Date;
  Size: string | null;
  StandardCost: number;
  readonly ThumbnailPhotoFileName: string | null;
  Weight: number | null;
}

export type TProductAspect = RIAPP.EntityAspect<Product, IProduct, DbContext>;

export interface Product extends IProduct, RIAPP.IEntityItem {
  readonly _aspect: TProductAspect;
  readonly IsActive: boolean | null;
  ProductCategory: ProductCategory;
  ProductModel: ProductModel;
  readonly SalesOrderDetail: SalesOrderDetail[];
}

class ProductEntity extends RIAPP.CollectionItem<TProductAspect> implements Product {
  constructor(aspect: TProductAspect) {
    super(aspect);
  }
  toString() {
    return 'ProductEntity';
  }
  get ProductId(): number { return this._aspect._getFieldVal('ProductId'); }
  get Color(): string | null { return this._aspect._getFieldVal('Color'); }
  set Color(v: string | null) { this._aspect._setFieldVal('Color', v); }
  get DiscontinuedDate(): Date | null { return this._aspect._getFieldVal('DiscontinuedDate'); }
  set DiscontinuedDate(v: Date | null) { this._aspect._setFieldVal('DiscontinuedDate', v); }
  get ListPrice(): number { return this._aspect._getFieldVal('ListPrice'); }
  set ListPrice(v: number) { this._aspect._setFieldVal('ListPrice', v); }
  get ModifiedDate(): Date { return this._aspect._getFieldVal('ModifiedDate'); }
  get Name(): string { return this._aspect._getFieldVal('Name'); }
  set Name(v: string) { this._aspect._setFieldVal('Name', v); }
  get ProductCategoryId(): number | null { return this._aspect._getFieldVal('ProductCategoryId'); }
  set ProductCategoryId(v: number | null) { this._aspect._setFieldVal('ProductCategoryId', v); }
  get ProductModelId(): number | null { return this._aspect._getFieldVal('ProductModelId'); }
  set ProductModelId(v: number | null) { this._aspect._setFieldVal('ProductModelId', v); }
  get ProductNumber(): string { return this._aspect._getFieldVal('ProductNumber'); }
  set ProductNumber(v: string) { this._aspect._setFieldVal('ProductNumber', v); }
  get Rowguid(): string { return this._aspect._getFieldVal('Rowguid'); }
  get SellEndDate(): Date | null { return this._aspect._getFieldVal('SellEndDate'); }
  set SellEndDate(v: Date | null) { this._aspect._setFieldVal('SellEndDate', v); }
  get SellStartDate(): Date { return this._aspect._getFieldVal('SellStartDate'); }
  set SellStartDate(v: Date) { this._aspect._setFieldVal('SellStartDate', v); }
  get Size(): string | null { return this._aspect._getFieldVal('Size'); }
  set Size(v: string | null) { this._aspect._setFieldVal('Size', v); }
  get StandardCost(): number { return this._aspect._getFieldVal('StandardCost'); }
  set StandardCost(v: number) { this._aspect._setFieldVal('StandardCost', v); }
  get ThumbnailPhotoFileName(): string | null { return this._aspect._getFieldVal('ThumbnailPhotoFileName'); }
  get Weight(): number | null { return this._aspect._getFieldVal('Weight'); }
  set Weight(v: number | null) { this._aspect._setFieldVal('Weight', v); }
  get IsActive(): boolean | null { return this._aspect._getCalcFieldVal('IsActive'); }
  get ProductCategory(): ProductCategory { return this._aspect._getNavFieldVal('ProductCategory'); }
  set ProductCategory(v: ProductCategory) { this._aspect._setNavFieldVal('ProductCategory', v); }
  get ProductModel(): ProductModel { return this._aspect._getNavFieldVal('ProductModel'); }
  set ProductModel(v: ProductModel) { this._aspect._setNavFieldVal('ProductModel', v); }
  get SalesOrderDetail(): SalesOrderDetail[] { return this._aspect._getNavFieldVal('SalesOrderDetail'); }
}

export class ProductDb extends RIAPP.DbSet<Product, IProduct, DbContext>
{
  constructor(dbContext: DbContext) {
    var opts: RIAPP.IDbSetConstuctorOptions = {
      dbContext: dbContext,
      dbSetInfo: { "fieldInfos": [], "enablePaging": true, "pageSize": 100, "dbSetName": "Product" },
      childAssoc: ([{ "name": "Product_ProductCategory", "parentDbSetName": "ProductCategory", "childDbSetName": "Product", "childToParentName": "ProductCategory", "parentToChildrenName": "Product", "onDeleteAction": 0, "fieldRels": [{ "parentField": "ProductCategoryId", "childField": "ProductCategoryId" }] }, { "name": "Product_ProductModel", "parentDbSetName": "ProductModel", "childDbSetName": "Product", "childToParentName": "ProductModel", "parentToChildrenName": "Product", "onDeleteAction": 0, "fieldRels": [{ "parentField": "ProductModelId", "childField": "ProductModelId" }] }]),
      parentAssoc: ([{ "name": "SalesOrderDetail_Product", "parentDbSetName": "Product", "childDbSetName": "SalesOrderDetail", "childToParentName": "Product", "parentToChildrenName": "SalesOrderDetail", "onDeleteAction": 0, "fieldRels": [{ "parentField": "ProductId", "childField": "ProductId" }] }])
    };
    opts.dbSetInfo.fieldInfos = ([{ "fieldName": "ProductId", "isPrimaryKey": 1, "dataType": 3, "isNullable": false, "isReadOnly": true, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Color", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 15, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "DiscontinuedDate", "isPrimaryKey": 0, "dataType": 7, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ListPrice", "isPrimaryKey": 0, "dataType": 4, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "0,5000", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ModifiedDate", "isPrimaryKey": 0, "dataType": 6, "isNullable": false, "isReadOnly": true, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Name", "isPrimaryKey": 0, "dataType": 1, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 50, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ProductCategoryId", "isPrimaryKey": 0, "dataType": 3, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ProductModelId", "isPrimaryKey": 0, "dataType": 3, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ProductNumber", "isPrimaryKey": 0, "dataType": 1, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 25, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Rowguid", "isPrimaryKey": 0, "dataType": 9, "isNullable": false, "isReadOnly": true, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 4, "dependentOn": "", "nested": null }, { "fieldName": "SellEndDate", "isPrimaryKey": 0, "dataType": 7, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "SellStartDate", "isPrimaryKey": 0, "dataType": 7, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "2000-01-01,2025-01-01", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Size", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 5, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "StandardCost", "isPrimaryKey": 0, "dataType": 4, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ThumbnailPhotoFileName", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": true, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 50, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Weight", "isPrimaryKey": 0, "dataType": 4, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "IsActive", "isPrimaryKey": 0, "dataType": 2, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 2, "dependentOn": "SellEndDate", "nested": null }, { "fieldName": "ProductCategory", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "ProductCategoryId", "nested": null }, { "fieldName": "ProductModel", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "ProductModelId", "nested": null }, { "fieldName": "SalesOrderDetail", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "", "nested": null }]);
    super(opts);
  }
  // override
  itemFactory(aspect: TProductAspect): Product {
    return new ProductEntity(aspect);
  }
  findEntity(productId: number): Product {
    return this.findByPK(RIAPP.Utils.arr.fromList(arguments));
  }
  toString(): string {
    return 'ProductDb';
  }
  createReadProductByIdsQuery(args?: {
    productIDs: number[];
  }): RIAPP.DataQuery<Product, IProduct> {
    var query = this.createQuery('ReadProductByIds');
    query.params = args;
    return query;
  }
  createReadProductQuery(args?: {
    param1: number[];
    param2: string;
  }): RIAPP.DataQuery<Product, IProduct> {
    var query = this.createQuery('ReadProduct');
    query.params = args;
    return query;
  }
  defineIsActiveField(getFunc: (item: Product) => boolean | null) { this._defineCalculatedField('IsActive', getFunc); }
}

export interface IProductCategory {
  readonly ProductCategoryId: number;
  ModifiedDate: Date;
  Name: string;
  ParentProductCategoryId: number | null;
  Rowguid: string;
}

export type TProductCategoryAspect = RIAPP.EntityAspect<ProductCategory, IProductCategory, DbContext>;

export interface ProductCategory extends IProductCategory, RIAPP.IEntityItem {
  readonly _aspect: TProductCategoryAspect;
  readonly Product: Product[];
  ParentProductCategory: ProductCategory;
  readonly InverseParentProductCategory: ProductCategory[];
}

class ProductCategoryEntity extends RIAPP.CollectionItem<TProductCategoryAspect> implements ProductCategory {
  constructor(aspect: TProductCategoryAspect) {
    super(aspect);
  }
  toString() {
    return 'ProductCategoryEntity';
  }
  get ProductCategoryId(): number { return this._aspect._getFieldVal('ProductCategoryId'); }
  get ModifiedDate(): Date { return this._aspect._getFieldVal('ModifiedDate'); }
  set ModifiedDate(v: Date) { this._aspect._setFieldVal('ModifiedDate', v); }
  get Name(): string { return this._aspect._getFieldVal('Name'); }
  set Name(v: string) { this._aspect._setFieldVal('Name', v); }
  get ParentProductCategoryId(): number | null { return this._aspect._getFieldVal('ParentProductCategoryId'); }
  set ParentProductCategoryId(v: number | null) { this._aspect._setFieldVal('ParentProductCategoryId', v); }
  get Rowguid(): string { return this._aspect._getFieldVal('Rowguid'); }
  set Rowguid(v: string) { this._aspect._setFieldVal('Rowguid', v); }
  get Product(): Product[] { return this._aspect._getNavFieldVal('Product'); }
  get ParentProductCategory(): ProductCategory { return this._aspect._getNavFieldVal('ParentProductCategory'); }
  set ParentProductCategory(v: ProductCategory) { this._aspect._setNavFieldVal('ParentProductCategory', v); }
  get InverseParentProductCategory(): ProductCategory[] { return this._aspect._getNavFieldVal('InverseParentProductCategory'); }
}

export class ProductCategoryDb extends RIAPP.DbSet<ProductCategory, IProductCategory, DbContext>
{
  constructor(dbContext: DbContext) {
    var opts: RIAPP.IDbSetConstuctorOptions = {
      dbContext: dbContext,
      dbSetInfo: { "fieldInfos": [], "enablePaging": false, "pageSize": 100, "dbSetName": "ProductCategory" },
      childAssoc: ([{ "name": "InverseParentProductCategory_ParentProductCategory", "parentDbSetName": "ProductCategory", "childDbSetName": "ProductCategory", "childToParentName": "ParentProductCategory", "parentToChildrenName": "InverseParentProductCategory", "onDeleteAction": 0, "fieldRels": [{ "parentField": "ProductCategoryId", "childField": "ParentProductCategoryId" }] }]),
      parentAssoc: ([{ "name": "InverseParentProductCategory_ParentProductCategory", "parentDbSetName": "ProductCategory", "childDbSetName": "ProductCategory", "childToParentName": "ParentProductCategory", "parentToChildrenName": "InverseParentProductCategory", "onDeleteAction": 0, "fieldRels": [{ "parentField": "ProductCategoryId", "childField": "ParentProductCategoryId" }] }, { "name": "Product_ProductCategory", "parentDbSetName": "ProductCategory", "childDbSetName": "Product", "childToParentName": "ProductCategory", "parentToChildrenName": "Product", "onDeleteAction": 0, "fieldRels": [{ "parentField": "ProductCategoryId", "childField": "ProductCategoryId" }] }])
    };
    opts.dbSetInfo.fieldInfos = ([{ "fieldName": "ProductCategoryId", "isPrimaryKey": 1, "dataType": 3, "isNullable": false, "isReadOnly": true, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ModifiedDate", "isPrimaryKey": 0, "dataType": 6, "isNullable": false, "isReadOnly": false, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Name", "isPrimaryKey": 0, "dataType": 1, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 50, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ParentProductCategoryId", "isPrimaryKey": 0, "dataType": 3, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Rowguid", "isPrimaryKey": 0, "dataType": 9, "isNullable": false, "isReadOnly": false, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Product", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "", "nested": null }, { "fieldName": "ParentProductCategory", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "ParentProductCategoryId", "nested": null }, { "fieldName": "InverseParentProductCategory", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "", "nested": null }]);
    super(opts);
  }
  // override
  itemFactory(aspect: TProductCategoryAspect): ProductCategory {
    return new ProductCategoryEntity(aspect);
  }
  findEntity(productCategoryId: number): ProductCategory {
    return this.findByPK(RIAPP.Utils.arr.fromList(arguments));
  }
  toString(): string {
    return 'ProductCategoryDb';
  }
  createReadProductCategoryQuery(): RIAPP.DataQuery<ProductCategory, IProductCategory> {
    return this.createQuery('ReadProductCategory');
  }

}

export interface IProductDescription {
  readonly ProductDescriptionId: number;
  Description: string;
  ModifiedDate: Date;
  Rowguid: string;
}

export type TProductDescriptionAspect = RIAPP.EntityAspect<ProductDescription, IProductDescription, DbContext>;

export interface ProductDescription extends IProductDescription, RIAPP.IEntityItem {
  readonly _aspect: TProductDescriptionAspect;
  readonly ProductModelProductDescription: ProductModelProductDescription[];
}

class ProductDescriptionEntity extends RIAPP.CollectionItem<TProductDescriptionAspect> implements ProductDescription {
  constructor(aspect: TProductDescriptionAspect) {
    super(aspect);
  }
  toString() {
    return 'ProductDescriptionEntity';
  }
  get ProductDescriptionId(): number { return this._aspect._getFieldVal('ProductDescriptionId'); }
  get Description(): string { return this._aspect._getFieldVal('Description'); }
  set Description(v: string) { this._aspect._setFieldVal('Description', v); }
  get ModifiedDate(): Date { return this._aspect._getFieldVal('ModifiedDate'); }
  set ModifiedDate(v: Date) { this._aspect._setFieldVal('ModifiedDate', v); }
  get Rowguid(): string { return this._aspect._getFieldVal('Rowguid'); }
  set Rowguid(v: string) { this._aspect._setFieldVal('Rowguid', v); }
  get ProductModelProductDescription(): ProductModelProductDescription[] { return this._aspect._getNavFieldVal('ProductModelProductDescription'); }
}

export class ProductDescriptionDb extends RIAPP.DbSet<ProductDescription, IProductDescription, DbContext>
{
  constructor(dbContext: DbContext) {
    var opts: RIAPP.IDbSetConstuctorOptions = {
      dbContext: dbContext,
      dbSetInfo: { "fieldInfos": [], "enablePaging": false, "pageSize": 100, "dbSetName": "ProductDescription" },
      childAssoc: ([]),
      parentAssoc: ([{ "name": "ProductModelProductDescription_ProductDescription", "parentDbSetName": "ProductDescription", "childDbSetName": "ProductModelProductDescription", "childToParentName": "ProductDescription", "parentToChildrenName": "ProductModelProductDescription", "onDeleteAction": 0, "fieldRels": [{ "parentField": "ProductDescriptionId", "childField": "ProductDescriptionId" }] }])
    };
    opts.dbSetInfo.fieldInfos = ([{ "fieldName": "ProductDescriptionId", "isPrimaryKey": 1, "dataType": 3, "isNullable": false, "isReadOnly": true, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Description", "isPrimaryKey": 0, "dataType": 1, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 400, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ModifiedDate", "isPrimaryKey": 0, "dataType": 6, "isNullable": false, "isReadOnly": false, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Rowguid", "isPrimaryKey": 0, "dataType": 9, "isNullable": false, "isReadOnly": false, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ProductModelProductDescription", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "", "nested": null }]);
    super(opts);
  }
  // override
  itemFactory(aspect: TProductDescriptionAspect): ProductDescription {
    return new ProductDescriptionEntity(aspect);
  }
  findEntity(productDescriptionId: number): ProductDescription {
    return this.findByPK(RIAPP.Utils.arr.fromList(arguments));
  }
  toString(): string {
    return 'ProductDescriptionDb';
  }
}

export interface IProductModel {
  readonly ProductModelId: number;
  CatalogDescription: string | null;
  ModifiedDate: Date;
  Name: string;
  Rowguid: string;
}

export type TProductModelAspect = RIAPP.EntityAspect<ProductModel, IProductModel, DbContext>;

export interface ProductModel extends IProductModel, RIAPP.IEntityItem {
  readonly _aspect: TProductModelAspect;
  readonly Product: Product[];
  readonly ProductModelProductDescription: ProductModelProductDescription[];
}

class ProductModelEntity extends RIAPP.CollectionItem<TProductModelAspect> implements ProductModel {
  constructor(aspect: TProductModelAspect) {
    super(aspect);
  }
  toString() {
    return 'ProductModelEntity';
  }
  get ProductModelId(): number { return this._aspect._getFieldVal('ProductModelId'); }
  get CatalogDescription(): string | null { return this._aspect._getFieldVal('CatalogDescription'); }
  set CatalogDescription(v: string | null) { this._aspect._setFieldVal('CatalogDescription', v); }
  get ModifiedDate(): Date { return this._aspect._getFieldVal('ModifiedDate'); }
  set ModifiedDate(v: Date) { this._aspect._setFieldVal('ModifiedDate', v); }
  get Name(): string { return this._aspect._getFieldVal('Name'); }
  set Name(v: string) { this._aspect._setFieldVal('Name', v); }
  get Rowguid(): string { return this._aspect._getFieldVal('Rowguid'); }
  set Rowguid(v: string) { this._aspect._setFieldVal('Rowguid', v); }
  get Product(): Product[] { return this._aspect._getNavFieldVal('Product'); }
  get ProductModelProductDescription(): ProductModelProductDescription[] { return this._aspect._getNavFieldVal('ProductModelProductDescription'); }
}

export class ProductModelDb extends RIAPP.DbSet<ProductModel, IProductModel, DbContext>
{
  constructor(dbContext: DbContext) {
    var opts: RIAPP.IDbSetConstuctorOptions = {
      dbContext: dbContext,
      dbSetInfo: { "fieldInfos": [], "enablePaging": false, "pageSize": 100, "dbSetName": "ProductModel" },
      childAssoc: ([]),
      parentAssoc: ([{ "name": "Product_ProductModel", "parentDbSetName": "ProductModel", "childDbSetName": "Product", "childToParentName": "ProductModel", "parentToChildrenName": "Product", "onDeleteAction": 0, "fieldRels": [{ "parentField": "ProductModelId", "childField": "ProductModelId" }] }, { "name": "ProductModelProductDescription_ProductModel", "parentDbSetName": "ProductModel", "childDbSetName": "ProductModelProductDescription", "childToParentName": "ProductModel", "parentToChildrenName": "ProductModelProductDescription", "onDeleteAction": 0, "fieldRels": [{ "parentField": "ProductModelId", "childField": "ProductModelId" }] }])
    };
    opts.dbSetInfo.fieldInfos = ([{ "fieldName": "ProductModelId", "isPrimaryKey": 1, "dataType": 3, "isNullable": false, "isReadOnly": true, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "CatalogDescription", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ModifiedDate", "isPrimaryKey": 0, "dataType": 6, "isNullable": false, "isReadOnly": false, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Name", "isPrimaryKey": 0, "dataType": 1, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 50, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Rowguid", "isPrimaryKey": 0, "dataType": 9, "isNullable": false, "isReadOnly": false, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Product", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "", "nested": null }, { "fieldName": "ProductModelProductDescription", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "", "nested": null }]);
    super(opts);
  }
  // override
  itemFactory(aspect: TProductModelAspect): ProductModel {
    return new ProductModelEntity(aspect);
  }
  findEntity(productModelId: number): ProductModel {
    return this.findByPK(RIAPP.Utils.arr.fromList(arguments));
  }
  toString(): string {
    return 'ProductModelDb';
  }
  createReadProductModelQuery(): RIAPP.DataQuery<ProductModel, IProductModel> {
    return this.createQuery('ReadProductModel');
  }

}

export interface IProductModelProductDescription {
  ProductModelId: number;
  ProductDescriptionId: number;
  Culture: string;
  ModifiedDate: Date;
  Rowguid: string;
}

export type TProductModelProductDescriptionAspect = RIAPP.EntityAspect<ProductModelProductDescription, IProductModelProductDescription, DbContext>;

export interface ProductModelProductDescription extends IProductModelProductDescription, RIAPP.IEntityItem {
  readonly _aspect: TProductModelProductDescriptionAspect;
  ProductDescription: ProductDescription;
  ProductModel: ProductModel;
}

class ProductModelProductDescriptionEntity extends RIAPP.CollectionItem<TProductModelProductDescriptionAspect> implements ProductModelProductDescription {
  constructor(aspect: TProductModelProductDescriptionAspect) {
    super(aspect);
  }
  toString() {
    return 'ProductModelProductDescriptionEntity';
  }
  get ProductModelId(): number { return this._aspect._getFieldVal('ProductModelId'); }
  set ProductModelId(v: number) { this._aspect._setFieldVal('ProductModelId', v); }
  get ProductDescriptionId(): number { return this._aspect._getFieldVal('ProductDescriptionId'); }
  set ProductDescriptionId(v: number) { this._aspect._setFieldVal('ProductDescriptionId', v); }
  get Culture(): string { return this._aspect._getFieldVal('Culture'); }
  set Culture(v: string) { this._aspect._setFieldVal('Culture', v); }
  get ModifiedDate(): Date { return this._aspect._getFieldVal('ModifiedDate'); }
  set ModifiedDate(v: Date) { this._aspect._setFieldVal('ModifiedDate', v); }
  get Rowguid(): string { return this._aspect._getFieldVal('Rowguid'); }
  set Rowguid(v: string) { this._aspect._setFieldVal('Rowguid', v); }
  get ProductDescription(): ProductDescription { return this._aspect._getNavFieldVal('ProductDescription'); }
  set ProductDescription(v: ProductDescription) { this._aspect._setNavFieldVal('ProductDescription', v); }
  get ProductModel(): ProductModel { return this._aspect._getNavFieldVal('ProductModel'); }
  set ProductModel(v: ProductModel) { this._aspect._setNavFieldVal('ProductModel', v); }
}

export class ProductModelProductDescriptionDb extends RIAPP.DbSet<ProductModelProductDescription, IProductModelProductDescription, DbContext>
{
  constructor(dbContext: DbContext) {
    var opts: RIAPP.IDbSetConstuctorOptions = {
      dbContext: dbContext,
      dbSetInfo: { "fieldInfos": [], "enablePaging": false, "pageSize": 100, "dbSetName": "ProductModelProductDescription" },
      childAssoc: ([{ "name": "ProductModelProductDescription_ProductDescription", "parentDbSetName": "ProductDescription", "childDbSetName": "ProductModelProductDescription", "childToParentName": "ProductDescription", "parentToChildrenName": "ProductModelProductDescription", "onDeleteAction": 0, "fieldRels": [{ "parentField": "ProductDescriptionId", "childField": "ProductDescriptionId" }] }, { "name": "ProductModelProductDescription_ProductModel", "parentDbSetName": "ProductModel", "childDbSetName": "ProductModelProductDescription", "childToParentName": "ProductModel", "parentToChildrenName": "ProductModelProductDescription", "onDeleteAction": 0, "fieldRels": [{ "parentField": "ProductModelId", "childField": "ProductModelId" }] }]),
      parentAssoc: ([])
    };
    opts.dbSetInfo.fieldInfos = ([{ "fieldName": "ProductModelId", "isPrimaryKey": 1, "dataType": 3, "isNullable": false, "isReadOnly": true, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": true, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ProductDescriptionId", "isPrimaryKey": 2, "dataType": 3, "isNullable": false, "isReadOnly": true, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": true, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Culture", "isPrimaryKey": 3, "dataType": 1, "isNullable": false, "isReadOnly": true, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 6, "dateConversion": 0, "allowClientDefault": true, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ModifiedDate", "isPrimaryKey": 0, "dataType": 6, "isNullable": false, "isReadOnly": false, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Rowguid", "isPrimaryKey": 0, "dataType": 9, "isNullable": false, "isReadOnly": false, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ProductDescription", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "ProductDescriptionId", "nested": null }, { "fieldName": "ProductModel", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "ProductModelId", "nested": null }]);
    super(opts);
  }
  // override
  itemFactory(aspect: TProductModelProductDescriptionAspect): ProductModelProductDescription {
    return new ProductModelProductDescriptionEntity(aspect);
  }
  findEntity(productModelId: number, productDescriptionId: number, culture: string): ProductModelProductDescription {
    return this.findByPK(RIAPP.Utils.arr.fromList(arguments));
  }
  toString(): string {
    return 'ProductModelProductDescriptionDb';
  }
}

export interface ISalesInfo {
  SalesPerson: string;
}

export type TSalesInfoAspect = RIAPP.EntityAspect<SalesInfo, ISalesInfo, DbContext>;

export interface SalesInfo extends ISalesInfo, RIAPP.IEntityItem {
  readonly _aspect: TSalesInfoAspect;
}

class SalesInfoEntity extends RIAPP.CollectionItem<TSalesInfoAspect> implements SalesInfo {
  constructor(aspect: TSalesInfoAspect) {
    super(aspect);
  }
  toString() {
    return 'SalesInfoEntity';
  }
  get SalesPerson(): string { return this._aspect._getFieldVal('SalesPerson'); }
  set SalesPerson(v: string) { this._aspect._setFieldVal('SalesPerson', v); }
}

export class SalesInfoDb extends RIAPP.DbSet<SalesInfo, ISalesInfo, DbContext>
{
  constructor(dbContext: DbContext) {
    var opts: RIAPP.IDbSetConstuctorOptions = {
      dbContext: dbContext,
      dbSetInfo: { "fieldInfos": [], "enablePaging": true, "pageSize": 25, "dbSetName": "SalesInfo" },
      childAssoc: ([]),
      parentAssoc: ([])
    };
    opts.dbSetInfo.fieldInfos = ([{ "fieldName": "SalesPerson", "isPrimaryKey": 1, "dataType": 1, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }]);
    super(opts);
  }
  // override
  itemFactory(aspect: TSalesInfoAspect): SalesInfo {
    return new SalesInfoEntity(aspect);
  }
  findEntity(salesPerson: string): SalesInfo {
    return this.findByPK(RIAPP.Utils.arr.fromList(arguments));
  }
  toString(): string {
    return 'SalesInfoDb';
  }
  createReadSalesInfoQuery(): RIAPP.DataQuery<SalesInfo, ISalesInfo> {
    return this.createQuery('ReadSalesInfo');
  }

}

export interface ISalesOrderDetail {
  SalesOrderId: number;
  readonly SalesOrderDetailId: number;
  LineTotal: number;
  ModifiedDate: Date;
  OrderQty: number;
  ProductId: number;
  Rowguid: string;
  UnitPrice: number;
  UnitPriceDiscount: number;
}

export type TSalesOrderDetailAspect = RIAPP.EntityAspect<SalesOrderDetail, ISalesOrderDetail, DbContext>;

export interface SalesOrderDetail extends ISalesOrderDetail, RIAPP.IEntityItem {
  readonly _aspect: TSalesOrderDetailAspect;
  Product: Product;
  SalesOrder: SalesOrderHeader;
}

class SalesOrderDetailEntity extends RIAPP.CollectionItem<TSalesOrderDetailAspect> implements SalesOrderDetail {
  constructor(aspect: TSalesOrderDetailAspect) {
    super(aspect);
  }
  toString() {
    return 'SalesOrderDetailEntity';
  }
  get SalesOrderId(): number { return this._aspect._getFieldVal('SalesOrderId'); }
  set SalesOrderId(v: number) { this._aspect._setFieldVal('SalesOrderId', v); }
  get SalesOrderDetailId(): number { return this._aspect._getFieldVal('SalesOrderDetailId'); }
  get LineTotal(): number { return this._aspect._getFieldVal('LineTotal'); }
  set LineTotal(v: number) { this._aspect._setFieldVal('LineTotal', v); }
  get ModifiedDate(): Date { return this._aspect._getFieldVal('ModifiedDate'); }
  set ModifiedDate(v: Date) { this._aspect._setFieldVal('ModifiedDate', v); }
  get OrderQty(): number { return this._aspect._getFieldVal('OrderQty'); }
  set OrderQty(v: number) { this._aspect._setFieldVal('OrderQty', v); }
  get ProductId(): number { return this._aspect._getFieldVal('ProductId'); }
  set ProductId(v: number) { this._aspect._setFieldVal('ProductId', v); }
  get Rowguid(): string { return this._aspect._getFieldVal('Rowguid'); }
  set Rowguid(v: string) { this._aspect._setFieldVal('Rowguid', v); }
  get UnitPrice(): number { return this._aspect._getFieldVal('UnitPrice'); }
  set UnitPrice(v: number) { this._aspect._setFieldVal('UnitPrice', v); }
  get UnitPriceDiscount(): number { return this._aspect._getFieldVal('UnitPriceDiscount'); }
  set UnitPriceDiscount(v: number) { this._aspect._setFieldVal('UnitPriceDiscount', v); }
  get Product(): Product { return this._aspect._getNavFieldVal('Product'); }
  set Product(v: Product) { this._aspect._setNavFieldVal('Product', v); }
  get SalesOrder(): SalesOrderHeader { return this._aspect._getNavFieldVal('SalesOrder'); }
  set SalesOrder(v: SalesOrderHeader) { this._aspect._setNavFieldVal('SalesOrder', v); }
}

export class SalesOrderDetailDb extends RIAPP.DbSet<SalesOrderDetail, ISalesOrderDetail, DbContext>
{
  constructor(dbContext: DbContext) {
    var opts: RIAPP.IDbSetConstuctorOptions = {
      dbContext: dbContext,
      dbSetInfo: { "fieldInfos": [], "enablePaging": false, "pageSize": 100, "dbSetName": "SalesOrderDetail" },
      childAssoc: ([{ "name": "SalesOrderDetail_Product", "parentDbSetName": "Product", "childDbSetName": "SalesOrderDetail", "childToParentName": "Product", "parentToChildrenName": "SalesOrderDetail", "onDeleteAction": 0, "fieldRels": [{ "parentField": "ProductId", "childField": "ProductId" }] }, { "name": "SalesOrderDetail_SalesOrder", "parentDbSetName": "SalesOrderHeader", "childDbSetName": "SalesOrderDetail", "childToParentName": "SalesOrder", "parentToChildrenName": "SalesOrderDetail", "onDeleteAction": 0, "fieldRels": [{ "parentField": "SalesOrderId", "childField": "SalesOrderId" }] }]),
      parentAssoc: ([])
    };
    opts.dbSetInfo.fieldInfos = ([{ "fieldName": "SalesOrderId", "isPrimaryKey": 1, "dataType": 3, "isNullable": false, "isReadOnly": true, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": true, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "SalesOrderDetailId", "isPrimaryKey": 2, "dataType": 3, "isNullable": false, "isReadOnly": true, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "LineTotal", "isPrimaryKey": 0, "dataType": 4, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 6, "dependentOn": "", "nested": null }, { "fieldName": "ModifiedDate", "isPrimaryKey": 0, "dataType": 6, "isNullable": false, "isReadOnly": false, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "OrderQty", "isPrimaryKey": 0, "dataType": 3, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ProductId", "isPrimaryKey": 0, "dataType": 3, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Rowguid", "isPrimaryKey": 0, "dataType": 9, "isNullable": false, "isReadOnly": false, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "UnitPrice", "isPrimaryKey": 0, "dataType": 4, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "UnitPriceDiscount", "isPrimaryKey": 0, "dataType": 4, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Product", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "ProductId", "nested": null }, { "fieldName": "SalesOrder", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "SalesOrderId", "nested": null }]);
    super(opts);
  }
  // override
  itemFactory(aspect: TSalesOrderDetailAspect): SalesOrderDetail {
    return new SalesOrderDetailEntity(aspect);
  }
  findEntity(salesOrderId: number, salesOrderDetailId: number): SalesOrderDetail {
    return this.findByPK(RIAPP.Utils.arr.fromList(arguments));
  }
  toString(): string {
    return 'SalesOrderDetailDb';
  }
  createReadSalesOrderDetailQuery(): RIAPP.DataQuery<SalesOrderDetail, ISalesOrderDetail> {
    return this.createQuery('ReadSalesOrderDetail');
  }

}

export interface ISalesOrderHeader {
  readonly SalesOrderId: number;
  AccountNumber: string | null;
  BillToAddressId: number | null;
  Comment: string | null;
  CreditCardApprovalCode: string | null;
  CustomerId: number;
  DueDate: Date;
  Freight: number;
  ModifiedDate: Date;
  OnlineOrderFlag: boolean;
  OrderDate: Date;
  PurchaseOrderNumber: string | null;
  RevisionNumber: number;
  Rowguid: string;
  SalesOrderNumber: string;
  ShipDate: Date | null;
  ShipMethod: string;
  ShipToAddressId: number | null;
  Status: number;
  SubTotal: number;
  TaxAmt: number;
  TotalDue: number;
}

export type TSalesOrderHeaderAspect = RIAPP.EntityAspect<SalesOrderHeader, ISalesOrderHeader, DbContext>;

export interface SalesOrderHeader extends ISalesOrderHeader, RIAPP.IEntityItem {
  readonly _aspect: TSalesOrderHeaderAspect;
  readonly SalesOrderDetail: SalesOrderDetail[];
  BillToAddress: Address;
  Customer: Customer;
  ShipToAddress: Address;
}

class SalesOrderHeaderEntity extends RIAPP.CollectionItem<TSalesOrderHeaderAspect> implements SalesOrderHeader {
  constructor(aspect: TSalesOrderHeaderAspect) {
    super(aspect);
  }
  toString() {
    return 'SalesOrderHeaderEntity';
  }
  get SalesOrderId(): number { return this._aspect._getFieldVal('SalesOrderId'); }
  get AccountNumber(): string | null { return this._aspect._getFieldVal('AccountNumber'); }
  set AccountNumber(v: string | null) { this._aspect._setFieldVal('AccountNumber', v); }
  get BillToAddressId(): number | null { return this._aspect._getFieldVal('BillToAddressId'); }
  set BillToAddressId(v: number | null) { this._aspect._setFieldVal('BillToAddressId', v); }
  get Comment(): string | null { return this._aspect._getFieldVal('Comment'); }
  set Comment(v: string | null) { this._aspect._setFieldVal('Comment', v); }
  get CreditCardApprovalCode(): string | null { return this._aspect._getFieldVal('CreditCardApprovalCode'); }
  set CreditCardApprovalCode(v: string | null) { this._aspect._setFieldVal('CreditCardApprovalCode', v); }
  get CustomerId(): number { return this._aspect._getFieldVal('CustomerId'); }
  set CustomerId(v: number) { this._aspect._setFieldVal('CustomerId', v); }
  get DueDate(): Date { return this._aspect._getFieldVal('DueDate'); }
  set DueDate(v: Date) { this._aspect._setFieldVal('DueDate', v); }
  get Freight(): number { return this._aspect._getFieldVal('Freight'); }
  set Freight(v: number) { this._aspect._setFieldVal('Freight', v); }
  get ModifiedDate(): Date { return this._aspect._getFieldVal('ModifiedDate'); }
  set ModifiedDate(v: Date) { this._aspect._setFieldVal('ModifiedDate', v); }
  get OnlineOrderFlag(): boolean { return this._aspect._getFieldVal('OnlineOrderFlag'); }
  set OnlineOrderFlag(v: boolean) { this._aspect._setFieldVal('OnlineOrderFlag', v); }
  get OrderDate(): Date { return this._aspect._getFieldVal('OrderDate'); }
  set OrderDate(v: Date) { this._aspect._setFieldVal('OrderDate', v); }
  get PurchaseOrderNumber(): string | null { return this._aspect._getFieldVal('PurchaseOrderNumber'); }
  set PurchaseOrderNumber(v: string | null) { this._aspect._setFieldVal('PurchaseOrderNumber', v); }
  get RevisionNumber(): number { return this._aspect._getFieldVal('RevisionNumber'); }
  set RevisionNumber(v: number) { this._aspect._setFieldVal('RevisionNumber', v); }
  get Rowguid(): string { return this._aspect._getFieldVal('Rowguid'); }
  set Rowguid(v: string) { this._aspect._setFieldVal('Rowguid', v); }
  get SalesOrderNumber(): string { return this._aspect._getFieldVal('SalesOrderNumber'); }
  set SalesOrderNumber(v: string) { this._aspect._setFieldVal('SalesOrderNumber', v); }
  get ShipDate(): Date | null { return this._aspect._getFieldVal('ShipDate'); }
  set ShipDate(v: Date | null) { this._aspect._setFieldVal('ShipDate', v); }
  get ShipMethod(): string { return this._aspect._getFieldVal('ShipMethod'); }
  set ShipMethod(v: string) { this._aspect._setFieldVal('ShipMethod', v); }
  get ShipToAddressId(): number | null { return this._aspect._getFieldVal('ShipToAddressId'); }
  set ShipToAddressId(v: number | null) { this._aspect._setFieldVal('ShipToAddressId', v); }
  get Status(): number { return this._aspect._getFieldVal('Status'); }
  set Status(v: number) { this._aspect._setFieldVal('Status', v); }
  get SubTotal(): number { return this._aspect._getFieldVal('SubTotal'); }
  set SubTotal(v: number) { this._aspect._setFieldVal('SubTotal', v); }
  get TaxAmt(): number { return this._aspect._getFieldVal('TaxAmt'); }
  set TaxAmt(v: number) { this._aspect._setFieldVal('TaxAmt', v); }
  get TotalDue(): number { return this._aspect._getFieldVal('TotalDue'); }
  set TotalDue(v: number) { this._aspect._setFieldVal('TotalDue', v); }
  get SalesOrderDetail(): SalesOrderDetail[] { return this._aspect._getNavFieldVal('SalesOrderDetail'); }
  get BillToAddress(): Address { return this._aspect._getNavFieldVal('BillToAddress'); }
  set BillToAddress(v: Address) { this._aspect._setNavFieldVal('BillToAddress', v); }
  get Customer(): Customer { return this._aspect._getNavFieldVal('Customer'); }
  set Customer(v: Customer) { this._aspect._setNavFieldVal('Customer', v); }
  get ShipToAddress(): Address { return this._aspect._getNavFieldVal('ShipToAddress'); }
  set ShipToAddress(v: Address) { this._aspect._setNavFieldVal('ShipToAddress', v); }
}

export class SalesOrderHeaderDb extends RIAPP.DbSet<SalesOrderHeader, ISalesOrderHeader, DbContext>
{
  constructor(dbContext: DbContext) {
    var opts: RIAPP.IDbSetConstuctorOptions = {
      dbContext: dbContext,
      dbSetInfo: { "fieldInfos": [], "enablePaging": false, "pageSize": 100, "dbSetName": "SalesOrderHeader" },
      childAssoc: ([{ "name": "SalesOrderHeader_Customer", "parentDbSetName": "Customer", "childDbSetName": "SalesOrderHeader", "childToParentName": "Customer", "parentToChildrenName": "SalesOrderHeader", "onDeleteAction": 0, "fieldRels": [{ "parentField": "CustomerId", "childField": "CustomerId" }] }, { "name": "SalesOrderHeaderBillToAddress_BillToAddress", "parentDbSetName": "Address", "childDbSetName": "SalesOrderHeader", "childToParentName": "BillToAddress", "parentToChildrenName": "SalesOrderHeaderBillToAddress", "onDeleteAction": 0, "fieldRels": [{ "parentField": "AddressId", "childField": "BillToAddressId" }] }, { "name": "SalesOrderHeaderShipToAddress_ShipToAddress", "parentDbSetName": "Address", "childDbSetName": "SalesOrderHeader", "childToParentName": "ShipToAddress", "parentToChildrenName": "SalesOrderHeaderShipToAddress", "onDeleteAction": 0, "fieldRels": [{ "parentField": "AddressId", "childField": "ShipToAddressId" }] }]),
      parentAssoc: ([{ "name": "SalesOrderDetail_SalesOrder", "parentDbSetName": "SalesOrderHeader", "childDbSetName": "SalesOrderDetail", "childToParentName": "SalesOrder", "parentToChildrenName": "SalesOrderDetail", "onDeleteAction": 0, "fieldRels": [{ "parentField": "SalesOrderId", "childField": "SalesOrderId" }] }])
    };
    opts.dbSetInfo.fieldInfos = ([{ "fieldName": "SalesOrderId", "isPrimaryKey": 1, "dataType": 3, "isNullable": false, "isReadOnly": true, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "AccountNumber", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 15, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "BillToAddressId", "isPrimaryKey": 0, "dataType": 3, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Comment", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "CreditCardApprovalCode", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 15, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "CustomerId", "isPrimaryKey": 0, "dataType": 3, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "DueDate", "isPrimaryKey": 0, "dataType": 7, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Freight", "isPrimaryKey": 0, "dataType": 4, "isNullable": false, "isReadOnly": false, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ModifiedDate", "isPrimaryKey": 0, "dataType": 6, "isNullable": false, "isReadOnly": false, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 4, "dependentOn": "", "nested": null }, { "fieldName": "OnlineOrderFlag", "isPrimaryKey": 0, "dataType": 2, "isNullable": false, "isReadOnly": false, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "OrderDate", "isPrimaryKey": 0, "dataType": 7, "isNullable": false, "isReadOnly": false, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "PurchaseOrderNumber", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 25, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "RevisionNumber", "isPrimaryKey": 0, "dataType": 3, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Rowguid", "isPrimaryKey": 0, "dataType": 9, "isNullable": false, "isReadOnly": false, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "SalesOrderNumber", "isPrimaryKey": 0, "dataType": 1, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 25, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 6, "dependentOn": "", "nested": null }, { "fieldName": "ShipDate", "isPrimaryKey": 0, "dataType": 7, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ShipMethod", "isPrimaryKey": 0, "dataType": 1, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 50, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ShipToAddressId", "isPrimaryKey": 0, "dataType": 3, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Status", "isPrimaryKey": 0, "dataType": 3, "isNullable": false, "isReadOnly": false, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "SubTotal", "isPrimaryKey": 0, "dataType": 4, "isNullable": false, "isReadOnly": false, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "TaxAmt", "isPrimaryKey": 0, "dataType": 4, "isNullable": false, "isReadOnly": false, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "TotalDue", "isPrimaryKey": 0, "dataType": 4, "isNullable": false, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 6, "dependentOn": "", "nested": null }, { "fieldName": "SalesOrderDetail", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "", "nested": null }, { "fieldName": "BillToAddress", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "BillToAddressId", "nested": null }, { "fieldName": "Customer", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "CustomerId", "nested": null }, { "fieldName": "ShipToAddress", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "ShipToAddressId", "nested": null }]);
    super(opts);
  }
  // override
  itemFactory(aspect: TSalesOrderHeaderAspect): SalesOrderHeader {
    return new SalesOrderHeaderEntity(aspect);
  }
  findEntity(salesOrderId: number): SalesOrderHeader {
    return this.findByPK(RIAPP.Utils.arr.fromList(arguments));
  }
  toString(): string {
    return 'SalesOrderHeaderDb';
  }
  createReadSalesOrderHeaderQuery(): RIAPP.DataQuery<SalesOrderHeader, ISalesOrderHeader> {
    return this.createQuery('ReadSalesOrderHeader');
  }

}

export interface IAssocs {
  getCustAddr_AddressInfo: () => RIAPP.Association;
  getCustomerAddress_Address: () => RIAPP.Association;
  getCustomerAddress_Customer: () => RIAPP.Association;
  getInverseParentProductCategory_ParentProductCategory: () => RIAPP.Association;
  getProduct_ProductCategory: () => RIAPP.Association;
  getProduct_ProductModel: () => RIAPP.Association;
  getProductModelProductDescription_ProductDescription: () => RIAPP.Association;
  getProductModelProductDescription_ProductModel: () => RIAPP.Association;
  getSalesOrderDetail_Product: () => RIAPP.Association;
  getSalesOrderDetail_SalesOrder: () => RIAPP.Association;
  getSalesOrderHeader_Customer: () => RIAPP.Association;
  getSalesOrderHeaderBillToAddress_BillToAddress: () => RIAPP.Association;
  getSalesOrderHeaderShipToAddress_ShipToAddress: () => RIAPP.Association;
}


export class DbSets extends RIAPP.DbSets {
  constructor(dbContext: DbContext) {
    super(dbContext);
    this._createDbSet("Address", AddressDb);
    this._createDbSet("AddressInfo", AddressInfoDb);
    this._createDbSet("Customer", CustomerDb);
    this._createDbSet("CustomerAddress", CustomerAddressDb);
    this._createDbSet("CustomerJSON", CustomerJSONDb);
    this._createDbSet("LookUpProduct", LookUpProductDb);
    this._createDbSet("Product", ProductDb);
    this._createDbSet("ProductCategory", ProductCategoryDb);
    this._createDbSet("ProductDescription", ProductDescriptionDb);
    this._createDbSet("ProductModel", ProductModelDb);
    this._createDbSet("ProductModelProductDescription", ProductModelProductDescriptionDb);
    this._createDbSet("SalesInfo", SalesInfoDb);
    this._createDbSet("SalesOrderDetail", SalesOrderDetailDb);
    this._createDbSet("SalesOrderHeader", SalesOrderHeaderDb);
  }
  get Address() { return <AddressDb>this.getDbSet("Address"); }
  get AddressInfo() { return <AddressInfoDb>this.getDbSet("AddressInfo"); }
  get Customer() { return <CustomerDb>this.getDbSet("Customer"); }
  get CustomerAddress() { return <CustomerAddressDb>this.getDbSet("CustomerAddress"); }
  get CustomerJSON() { return <CustomerJSONDb>this.getDbSet("CustomerJSON"); }
  get LookUpProduct() { return <LookUpProductDb>this.getDbSet("LookUpProduct"); }
  get Product() { return <ProductDb>this.getDbSet("Product"); }
  get ProductCategory() { return <ProductCategoryDb>this.getDbSet("ProductCategory"); }
  get ProductDescription() { return <ProductDescriptionDb>this.getDbSet("ProductDescription"); }
  get ProductModel() { return <ProductModelDb>this.getDbSet("ProductModel"); }
  get ProductModelProductDescription() { return <ProductModelProductDescriptionDb>this.getDbSet("ProductModelProductDescription"); }
  get SalesInfo() { return <SalesInfoDb>this.getDbSet("SalesInfo"); }
  get SalesOrderDetail() { return <SalesOrderDetailDb>this.getDbSet("SalesOrderDetail"); }
  get SalesOrderHeader() { return <SalesOrderHeaderDb>this.getDbSet("SalesOrderHeader"); }
}

export class DbContext extends RIAPP.DbContext<DbSets, ISvcMethods, IAssocs>
{
  protected _createDbSets(): DbSets {
    return new DbSets(this);
  }
  protected _createAssociations(): RIAPP.IAssociationInfo[] {
    return [{ "name": "CustAddr_AddressInfo", "parentDbSetName": "AddressInfo", "childDbSetName": "CustomerAddress", "childToParentName": "AddressInfo", "parentToChildrenName": "CustomerAddresses", "onDeleteAction": 0, "fieldRels": [{ "parentField": "AddressId", "childField": "AddressId" }] }, { "name": "CustomerAddress_Address", "parentDbSetName": "Address", "childDbSetName": "CustomerAddress", "childToParentName": "Address", "parentToChildrenName": "CustomerAddress", "onDeleteAction": 0, "fieldRels": [{ "parentField": "AddressId", "childField": "AddressId" }] }, { "name": "CustomerAddress_Customer", "parentDbSetName": "Customer", "childDbSetName": "CustomerAddress", "childToParentName": "Customer", "parentToChildrenName": "CustomerAddress", "onDeleteAction": 0, "fieldRels": [{ "parentField": "CustomerId", "childField": "CustomerId" }] }, { "name": "InverseParentProductCategory_ParentProductCategory", "parentDbSetName": "ProductCategory", "childDbSetName": "ProductCategory", "childToParentName": "ParentProductCategory", "parentToChildrenName": "InverseParentProductCategory", "onDeleteAction": 0, "fieldRels": [{ "parentField": "ProductCategoryId", "childField": "ParentProductCategoryId" }] }, { "name": "Product_ProductCategory", "parentDbSetName": "ProductCategory", "childDbSetName": "Product", "childToParentName": "ProductCategory", "parentToChildrenName": "Product", "onDeleteAction": 0, "fieldRels": [{ "parentField": "ProductCategoryId", "childField": "ProductCategoryId" }] }, { "name": "Product_ProductModel", "parentDbSetName": "ProductModel", "childDbSetName": "Product", "childToParentName": "ProductModel", "parentToChildrenName": "Product", "onDeleteAction": 0, "fieldRels": [{ "parentField": "ProductModelId", "childField": "ProductModelId" }] }, { "name": "ProductModelProductDescription_ProductDescription", "parentDbSetName": "ProductDescription", "childDbSetName": "ProductModelProductDescription", "childToParentName": "ProductDescription", "parentToChildrenName": "ProductModelProductDescription", "onDeleteAction": 0, "fieldRels": [{ "parentField": "ProductDescriptionId", "childField": "ProductDescriptionId" }] }, { "name": "ProductModelProductDescription_ProductModel", "parentDbSetName": "ProductModel", "childDbSetName": "ProductModelProductDescription", "childToParentName": "ProductModel", "parentToChildrenName": "ProductModelProductDescription", "onDeleteAction": 0, "fieldRels": [{ "parentField": "ProductModelId", "childField": "ProductModelId" }] }, { "name": "SalesOrderDetail_Product", "parentDbSetName": "Product", "childDbSetName": "SalesOrderDetail", "childToParentName": "Product", "parentToChildrenName": "SalesOrderDetail", "onDeleteAction": 0, "fieldRels": [{ "parentField": "ProductId", "childField": "ProductId" }] }, { "name": "SalesOrderDetail_SalesOrder", "parentDbSetName": "SalesOrderHeader", "childDbSetName": "SalesOrderDetail", "childToParentName": "SalesOrder", "parentToChildrenName": "SalesOrderDetail", "onDeleteAction": 0, "fieldRels": [{ "parentField": "SalesOrderId", "childField": "SalesOrderId" }] }, { "name": "SalesOrderHeader_Customer", "parentDbSetName": "Customer", "childDbSetName": "SalesOrderHeader", "childToParentName": "Customer", "parentToChildrenName": "SalesOrderHeader", "onDeleteAction": 0, "fieldRels": [{ "parentField": "CustomerId", "childField": "CustomerId" }] }, { "name": "SalesOrderHeaderBillToAddress_BillToAddress", "parentDbSetName": "Address", "childDbSetName": "SalesOrderHeader", "childToParentName": "BillToAddress", "parentToChildrenName": "SalesOrderHeaderBillToAddress", "onDeleteAction": 0, "fieldRels": [{ "parentField": "AddressId", "childField": "BillToAddressId" }] }, { "name": "SalesOrderHeaderShipToAddress_ShipToAddress", "parentDbSetName": "Address", "childDbSetName": "SalesOrderHeader", "childToParentName": "ShipToAddress", "parentToChildrenName": "SalesOrderHeaderShipToAddress", "onDeleteAction": 0, "fieldRels": [{ "parentField": "AddressId", "childField": "ShipToAddressId" }] }];
  }
  protected _createMethods(): RIAPP.IQueryInfo[] {
    return [{ "methodName": "ReadAddress", "parameters": [], "methodResult": true, "isQuery": true }, { "methodName": "ReadAddressByIds", "parameters": [{ "name": "addressIDs", "dataType": 3, "isArray": true, "isNullable": false, "dateConversion": 0, "ordinal": 0 }], "methodResult": true, "isQuery": true }, { "methodName": "ReadAddressForCustomers", "parameters": [{ "name": "custIDs", "dataType": 3, "isArray": true, "isNullable": false, "dateConversion": 0, "ordinal": 0 }], "methodResult": true, "isQuery": true }, { "methodName": "ReadAddressInfo", "parameters": [], "methodResult": true, "isQuery": true }, { "methodName": "ReadCustomer", "parameters": [{ "name": "includeNav", "dataType": 2, "isArray": false, "isNullable": true, "dateConversion": 0, "ordinal": 0 }], "methodResult": true, "isQuery": true }, { "methodName": "ReadCustomerAddress", "parameters": [], "methodResult": true, "isQuery": true }, { "methodName": "ReadCustomerJSON", "parameters": [], "methodResult": true, "isQuery": true }, { "methodName": "ReadProduct", "parameters": [{ "name": "param1", "dataType": 3, "isArray": true, "isNullable": false, "dateConversion": 0, "ordinal": 0 }, { "name": "param2", "dataType": 1, "isArray": false, "isNullable": false, "dateConversion": 0, "ordinal": 1 }], "methodResult": true, "isQuery": true }, { "methodName": "ReadProductByIds", "parameters": [{ "name": "productIDs", "dataType": 3, "isArray": true, "isNullable": false, "dateConversion": 0, "ordinal": 0 }], "methodResult": true, "isQuery": true }, { "methodName": "ReadProductCategory", "parameters": [], "methodResult": true, "isQuery": true }, { "methodName": "ReadProductLookUp", "parameters": [], "methodResult": true, "isQuery": true }, { "methodName": "ReadProductModel", "parameters": [], "methodResult": true, "isQuery": true }, { "methodName": "ReadSalesInfo", "parameters": [], "methodResult": true, "isQuery": true }, { "methodName": "ReadSalesOrderDetail", "parameters": [], "methodResult": true, "isQuery": true }, { "methodName": "ReadSalesOrderHeader", "parameters": [], "methodResult": true, "isQuery": true }, { "methodName": "GetClassifiers", "parameters": [], "methodResult": true, "isQuery": false }, { "methodName": "TestComplexInvoke", "parameters": [{ "name": "info", "dataType": 0, "isArray": false, "isNullable": false, "dateConversion": 0, "ordinal": 0 }, { "name": "keys", "dataType": 0, "isArray": true, "isNullable": false, "dateConversion": 0, "ordinal": 1 }], "methodResult": true, "isQuery": false }, { "methodName": "TestInvoke", "parameters": [{ "name": "param1", "dataType": 10, "isArray": false, "isNullable": false, "dateConversion": 0, "ordinal": 0 }, { "name": "param2", "dataType": 1, "isArray": false, "isNullable": false, "dateConversion": 0, "ordinal": 1 }], "methodResult": true, "isQuery": false }];
  }
}
