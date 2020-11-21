import { Component, forwardRef, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { AbstractInputComponent } from '../abstract/abstract-input.component';

@Component({
    selector: 'app-input-date',
    template: `
    <div class="p-fluid p-grid p-formgrid">
        <div class="p-field p-col-12">
            <label [attr.for]="cid">{{ label + asterix }}</label>
            <p-calendar [inputId]="cid"
                    [disabled]="inputReadonly"
                    [required]="inputRequired"
                    (blur)="onBlur.next()"
                    (focus)="onFocus.next()"
                    [(ngModel)]="value"
                    [locale]="br"
                    dateFormat="dd/mm/yy"
                    showTime="true"
                    showSeconds="true"
                    hourFormat="24"
                    inputStyleClass="form-control">
            </p-calendar>
        </div>
    </div>
    `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputDateComponent),
            multi: true,
        },
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputDateComponent extends AbstractInputComponent implements OnInit {

    @Input()
    mask: string;

    br: any;
    
    get asterix(): string {
        return this.inputRequired ? ' *' : '';
    }

    ngOnInit(): void {
        this.br = {
            firstDayOfWeek: 0,
            dayNames: [ "Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado" ],
            dayNamesShort: [ "dom","seg","ter","qua","qui","sex","sáb" ],
            dayNamesMin: [ "D","S","T","Q","Q","S","S" ],
            monthNames: [ "Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro" ],
            monthNamesShort: [ "jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez" ],
            today: 'Hoje',
            clear: 'Limpar'
        };
    }
}
