import { Component, OnInit } from '@angular/core';
import { Utils } from "jriapp-lib";
import { Observable } from 'rxjs';
import * as FOLDER_DB from "../db/folderDB";
import { AdwService } from '../services/adw.service';
import { FolderService, IFileSystemObject } from '../services/folder.service';

//import { NotificationsService } from '../services/notifications.service';
const utils = Utils;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Test Application';
  
  items$: Observable<IFileSystemObject[]>;
  count$: Observable<number>;

  constructor(
    private folderService: FolderService,
    private adwService: AdwService,
    // private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    /*
    this.adwService.changeDetectionEmitter.subscribe(() => {
      this.cdRef.detectChanges();
    });
    */
    this.items$ = this.folderService.items$;
    this.count$ = this.folderService.count$;
    this.folderService.loadRootFolder();
    this.adwService.load();
  }
  strToDate(str: string) {
    if (utils.check.isNt(str)) {
      return null;
    }
    return utils.dates.strToDate(str, 'YYYY-MM-DD');
  }
  onItemClicked(item: FOLDER_DB.IFileSystemObject) {
    (item as any).exProp.click();
    // alert("Clicked: " + item.Key);
    event.preventDefault();
  }
  get currentProduct() {
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
  /*
  notificationsCount$: Observable<number>;
  constructor(private notificationsService: NotificationsService) { }
  

  ngOnInit(): void {
    this.notificationsCount$ = this.notificationsService.count$;
  }
  */
}
