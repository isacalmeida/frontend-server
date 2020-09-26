import { Component, forwardRef, ChangeDetectionStrategy, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AbstractInputComponent } from './abstract-input.component';

@Component({
  selector: 'app-input-text-with-label',
  template: `
  <div>
    <label [attr.for]="cid">{{ label + asterix }}</label>
    <input [id]="cid"
           [type]="type"
           [placeholder]="placeholder"
           [readonly]="inputReadonly"
           [required]="inputRequired"
           (blur)="onBlur.next()"
           (focus)="onFocus.next()"
           [(ngModel)]="value">
  </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextLabelComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputTextLabelComponent extends AbstractInputComponent {

  @Input()
  label = '';

  get asterix(): string {
    return this.inputRequired ? ' *' : '';
  }
}
