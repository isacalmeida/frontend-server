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

    @Input()
    label = '';

    @Output()
    onBlur = new EventEmitter<void>();

    @Output()
    onFocus = new EventEmitter<void>();

    get inputReadonly(): boolean {
        return this.readonly || typeof this.readonly !== 'boolean';
    }

    get inputRequired(): boolean {
        return this.required || typeof this.required !== 'boolean';
    }
}
