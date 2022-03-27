import { ChangeDetectorRef, Directive, Inject, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from "@angular/core";
import { NgControl } from "@angular/forms";
import { Binding, getBindingOptions, TBindingInfo } from "jriapp-lib";
import { BindTarget } from "projects/client-app/src/directives/bind-target";
import { IConverter } from "projects/client-app/src/logic/converter";
import { merge, Subject } from "rxjs";
import { takeUntil } from 'rxjs/operators';

export type TBindingMode = "OneTime" | "OneWay" | "TwoWay" | "BackWay";

@Directive({
  selector: "[bind]"
})
export class BindDirective implements OnDestroy, OnInit, OnChanges  {
  private ngControl: NgControl;
  private readonly target: BindTarget;
  private binding: Binding;
  protected readonly destroy$ = new Subject<void>();

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
    this.target = new BindTarget(this.ngControl);
    this.binding = null;
  }

  ngOnInit() {
    if (!this.ngControl?.valueChanges || !this.ngControl?.statusChanges) {
      return;
    }

    merge(this.ngControl.valueChanges, this.ngControl.statusChanges)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.raiseTargetValueChanged("value"));

    this.binding = this.bindDataSource();
  }

  ngOnDestroy() {
    if (this.binding) {
      this.binding.dispose();
      this.binding = null;
    }

    this.destroy$.next();
    this.destroy$.complete();
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

  private raiseTargetValueChanged(name: string) {
    this.target.objEvents.raiseProp(<any>name);
  }

  controlUpdate() {
    this.changeDetectorRef.markForCheck();
  }
}
