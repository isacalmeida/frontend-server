import { Component, ChangeDetectionStrategy, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { AbstractInputComponent } from '../abstract/abstract-input.component';

@Component({
    selector: 'app-input-switch',
    template: `
    <div>
        <label [attr.for]="cid">{{ label + asterix }}</label><br>
        <p-inputSwitch 
            [inputId]="cid"
            [readonly]="inputReadonly"
            [required]="inputRequired"
            (blur)="onBlur.next()"
            (focus)="onFocus.next()"
            [(ngModel)]="value">
        </p-inputSwitch>
    </div>
    `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputSwitchComponent),
            multi: true,
        },
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputSwitchComponent extends AbstractInputComponent {

    get asterix(): string {
        return this.inputRequired ? ' *' : '';
    }
}
