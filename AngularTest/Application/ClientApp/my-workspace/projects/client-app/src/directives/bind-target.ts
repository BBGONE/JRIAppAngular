import { NgControl } from "@angular/forms";
import { BaseObject } from "jriapp-lib";

export class BindTarget extends BaseObject {
  private readonly ngControl: NgControl;

  constructor(control: NgControl) {
    super();
    this.ngControl = control;
  }

  get value(): any {
    return this.ngControl.control.value;
  }

  set value(v: any) {
    if (this.value !== v) {
      this.ngControl.control.setValue(v);
    }
  }
}
