// import { Location } from '@angular/common';
// import { CrudService } from 'src/app/modules/services/crud/crud.service';
// import { AbstractDTO } from 'src/app/modules/shared/architecture/abstract-dto';
// import { Router } from '@angular/router';

// export abstract class AbstractForm {
//   url: string;

//   constructor(public router: Router,
//               public location: Location,
//               public service: CrudService<AbstractDTO, number>) {

//     this.url = this.router.url;
//   }

//   goBack(): void {
//     this.location.back();
//   }

//   init(): void {
//     this.service.findAll().subscribe((result) => {
//       console.log(result);
//     });
//   }
// }

import { ControlValueAccessor } from '@angular/forms';
import { ChangeDetectorRef, Component, Injector, Input, Type } from '@angular/core';
import { uuid } from '../../../utils/generator';

@Component({ template: '' })
export class AbstractModelComponent<T = any> implements ControlValueAccessor {

  @Input()
  cid: string = uuid();

  @Input()
  disabled: boolean;

  @Input()
  set value(value: T) {
    this.VALUE = value;
    this.notifyValueChange();
  }

  get value(): T {
    return this.VALUE;
  }

  onChange: (value: T) => {};
  onTouched: () => {};

  protected VALUE: T;
  protected cdRef: ChangeDetectorRef;

  constructor(public injector: Injector) {
    this.cdRef = injector.get<ChangeDetectorRef>(ChangeDetectorRef as Type<ChangeDetectorRef>);
  }

  notifyValueChange(): void {
    if (this.onChange) {
      this.onChange(this.value);
    }
  }

  writeValue(value: T): void {
    this.VALUE = value;
    setTimeout(() => this.cdRef.detectChanges(), 0);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
