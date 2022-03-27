import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Utils } from "jriapp-lib";
import { Product } from 'projects/client-app/src/db/adwDB';
import { Observable } from 'rxjs';
import * as FOLDER_DB from "../db/folderDB";
import { dateConverter, dateTimeConverter, decimalConverter } from "../logic/converter";
import { AdwService } from '../services/adw.service';
import { FolderService, IFileSystemObject } from '../services/folder.service';

const utils = Utils;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Test Application';
  readonly decimalConverter = decimalConverter;
  readonly dateTimeConverter = dateTimeConverter;
  readonly dateConverter = dateConverter;


  items$: Observable<IFileSystemObject[]>;
  count$: Observable<number>;

  constructor(
    private folderService: FolderService,
    private adwService: AdwService,
    readonly fb: FormBuilder
    // private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      Name: [null, []],
      ListPrice: [null, []],
      SellStartDate: [null, []],
    });

    this.items$ = this.folderService.items$;
    this.count$ = this.folderService.count$;
    this.folderService.loadRootFolder();
    this.adwService.load();


  }

  // currently not used
  /*
  strToDate(str: string) {
    if (utils.check.isNt(str)) {
      return null;
    }
    return utils.dates.strToDate(str, 'YYYY-MM-DD');
  }
  */

  onItemClicked(item: FOLDER_DB.IFileSystemObject) {
    (item as any).exProp.click();
    // alert("Clicked: " + item.Key);
    event.preventDefault();
  }

  get currentProduct(): Product {
    return this.adwService.currentItem;
  }
  get isHasChanges() {
    return this.adwService.isHasChanges;
  }
  onPreviousProduct() {
    this.adwService.dbSet.movePrev();
  }
  onNextProduct() {
    this.adwService.dbSet.moveNext();
  }
  onSubmit() {
    this.adwService.dbSet.endEdit();
    return this.adwService.submit();
  }

  //#region Forms

  public productForm: FormGroup;

  //#endregion

}
