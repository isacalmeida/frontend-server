import { Component, forwardRef, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { AbstractInputComponent } from '../abstract/abstract-input.component';

@Component({
    selector: 'app-input-mask',
    template: `
    <div>
        <label [attr.for]="cid">{{ label + asterix }}</label>
        <p-inputMask [inputId]="cid"
                [type]="type"
                [mask]="mask"
                [unmask]="getUnmask()"
                [readonly]="inputReadonly"
                [required]="inputRequired"
                (blur)="onBlur.next()"
                (focus)="onFocus.next()"
                (onComplete)="onComplete()"
                [(ngModel)]="value"
                styleClass="form-control">
        </p-inputMask>
    </div>
    `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputMaskComponent),
            multi: true,
        },
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputMaskComponent extends AbstractInputComponent {

    @Input()
    mask: string;

    @Input()
    unmask: boolean;

    @Output()
    doComplete = new EventEmitter<any>();

    onComplete() {
        this.doComplete.emit(this.value);
    }

    getUnmask(): boolean {
        if(this.unmask !== undefined) {
            return this.unmask;
        }
        return true;
    }

    get asterix(): string {
        return this.inputRequired ? ' *' : '';
    }
}
