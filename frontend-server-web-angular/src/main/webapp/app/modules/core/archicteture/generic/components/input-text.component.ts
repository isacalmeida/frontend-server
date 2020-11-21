import { Component, forwardRef, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { AbstractInputComponent } from '../abstract/abstract-input.component';

@Component({
    selector: 'app-input-text',
    template: `
    <div>
        <label [attr.for]="cid">{{ label + asterix }}</label>
        <input [id]="cid"
                [type]="type"
                [readonly]="inputReadonly"
                [required]="inputRequired"
                (blur)="onBlur.next()"
                (focus)="onFocus.next()"
                [(ngModel)]="value"
                class="form-control"
                pInputText>
    </div>
    `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputTextComponent),
            multi: true,
        },
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputTextComponent extends AbstractInputComponent {

    get asterix(): string {
        return this.inputRequired ? ' *' : '';
    }
}
