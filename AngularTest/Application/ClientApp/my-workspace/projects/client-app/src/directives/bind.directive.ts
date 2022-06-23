import { ChangeDetectorRef, Directive, Inject, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from "@angular/core";
import { NgControl } from "@angular/forms";
import { BaseObject, Binding, getBindingOptions, TBindingInfo } from "jriapp-lib";
import { IConverter } from "projects/client-app/src/logic/converter";
import { Subscription } from "rxjs";


class BindTarget extends BaseObject {
  private readonly ngControl: NgControl;
  private readonly changeDetectorRef: ChangeDetectorRef;
  private readonly subscription: Subscription = new Subscription();

  constructor(control: NgControl,
    changeDetectorRef: ChangeDetectorRef) {
    super();
    this.ngControl = control;
    this.changeDetectorRef = changeDetectorRef;

    if (!this.ngControl?.valueChanges) {
      return;
    }

    this.subscription.add(this.ngControl.valueChanges.subscribe(() => this.objEvents.raiseProp("value")));
  }

  get value(): any {
    return this.ngControl.control.value;
  }

  set value(v: any) {
    if (this.value !== v) {
      this.ngControl.control.setValue(v);
      // probably not needed here, because NgControl handles this (but it does not hurt)
      this.changeDetectorRef.markForCheck();
    }
  }

  override dispose(): void {
    this.subscription.unsubscribe();
    super.dispose();
  }
}

export type TBindingMode = "OneTime" | "OneWay" | "TwoWay" | "BackWay";

@Directive({
  selector: "[bind]"
})
export class BindDirective implements OnDestroy, OnInit, OnChanges  {
  private ngControl: NgControl;
  private target: BindTarget | null = null;
  private binding: Binding | null = null;

  @Input('bind') dataSource: any;

  @Input('bindPath') path: string;

  @Input('bindMode') mode: TBindingMode = "OneWay";

  @Input('converter') converter: IConverter = null;

  @Input('converterParam') converterParam: any = null;

  constructor(
    @Inject(NgControl) control: NgControl,
    protected readonly changeDetectorRef: ChangeDetectorRef,
  ) {
    if (this.ngControl === null) {
      throw new Error(
        `NgControl not injected in ${this.constructor.name}!\n Use [(ngModel)] or [formControl] or formControlName for correct work.`,
      );
    }
    this.ngControl = control;
  }

  ngOnInit() {
    this.target = new BindTarget(this.ngControl, this.changeDetectorRef);
    this.binding = this.bindDataSource();
  }

  ngOnDestroy() {
    this.binding?.dispose();
    this.binding = null;

    this.target?.dispose();
    this.target = null;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["converterParam"] || changes["converter"]) {
      if (!!this.binding) {
        this.binding.dispose();
        this.binding = null;
      }
      this.binding = this.bindDataSource();
      return;
    }
    if (!this.binding) {
      return;
    }
    if (changes["dataSource"]) {
      this.binding.source = this.dataSource;
    }
  }

  public get controlName(): string | null {
    return this.ngControl?.name?.toString() ?? null;
  }

  private bindDataSource(): Binding {
    let bindInfo: TBindingInfo = {
      targetPath: "value",
      sourcePath: this.path ?? this.controlName,
      source: this.dataSource,
      target: this.target,
      mode: this.mode,
      converter: this.converter,
      param: this.converterParam,
      isBind: false
    };
    const bindOptions = getBindingOptions(bindInfo, this.target, this.dataSource);
    
    return new Binding(bindOptions);
  }
}
