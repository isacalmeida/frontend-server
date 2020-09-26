import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractModelComponent } from './abstract-model.component';

@Component({ template: '' })
export class AbstractInputComponent extends AbstractModelComponent<string> {

  @Input()
  readonly = false;

  @Input()
  required = false;

  @Input()
  placeholder = '';

  @Input()
  type = 'text';

  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onBlur = new EventEmitter<void>();

  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onFocus = new EventEmitter<void>();

  get inputReadonly(): boolean {
    return this.readonly || typeof this.readonly !== 'boolean';
  }

  get inputRequired(): boolean {
    return this.required || typeof this.required !== 'boolean';
  }
}
