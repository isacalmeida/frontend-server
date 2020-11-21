import { Component, forwardRef, ChangeDetectionStrategy, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { AbstractInputComponent } from '../../abstract/abstract-input.component';
import { ColumnDTO } from 'src/main/webapp/app/modules/shared/architecture/table/column.dto';
import { CrudService } from 'src/main/webapp/app/modules/services/architecture/crud/crud.service';
import { SortColumnDTO } from 'src/main/webapp/app/modules/shared/architecture/sort/sortcolumn.dto';

import { COLUMNS } from 'src/main/webapp/app/modules/services/tables/columns.service';
import { FILTER_FIELDS } from 'src/main/webapp/app/modules/services/tables/filter-fields.service';
import { SORT_COLUMS } from 'src/main/webapp/app/modules/services/tables/sort-columns.service';

@Component({
    selector: 'app-input-autocomplete',
    templateUrl: './input-autocomplete.component.html',
    styleUrls: ['./input-autocomplete.component.css'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputAutocompleteComponent),
            multi: true,
        },
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputAutocompleteComponent extends AbstractInputComponent implements OnInit {

    @Input()
    service: CrudService<any, number>;

    @Input()
    codigoName: string;
    
    @Input()
    descricaoName: string;
    
    @Input()
    descricaoExtraName: string;
    
    @Input()
    tituloSeletor: string;

    @Input()
    sortColumns: Array<SortColumnDTO>;

    @Input()
    columns: Array<ColumnDTO>;

    @Input()
    filterField: Array<string>;

    @Output()
    registroSelecionado = new EventEmitter<any>();

    @Output() 
    onSelect = new EventEmitter<any>();

    isListing = true;
    isSelectable = true;
    displayModal = false;
    descricaoNameDefault = "descricao";

    ngOnInit(): void {
        this.preencherColumns();
        this.preencherSortColumns();
        this.preencherFiltros();

        this.preencherTituloSeletor();
    }

    preencherTituloSeletor() {
        if(this.tituloSeletor === undefined){
            this.tituloSeletor =  this.label;
        }
    }

    getDescricaoValue(): string {
        return this.getDescricao(this.value);
    }

    preencherColumns(): void {
        this.columns = COLUMNS[this.cid];
    }

    preencherSortColumns(): void {
        this.sortColumns = SORT_COLUMS[this.cid];
    }

    preencherFiltros(): void {
        this.filterField = FILTER_FIELDS[this.cid];
    }

    get asterix(): string {
        return this.inputRequired ? ' *' : '';
    }

    showModalDialog() {
        this.displayModal = true;
    }

    confirmarRegistro() {
        this.displayModal = false;
    }

    getDescricao(item: any): string {
        if(item === undefined) {
            return "";
        }

        var descricao = "";
        if(this.codigoName !== undefined) {
            descricao += item[this.codigoName] + " - ";
        }
        if(this.descricaoName !== undefined) {
            descricao += item[this.descricaoName];
        }
        else {
            descricao += item[this.descricaoNameDefault];
        }
        if(this.descricaoExtraName !== undefined) {
            descricao += " - " + item[this.descricaoExtraName];
        }
        return descricao;
    }

    setSelectedValue(idSelected: number) {
        this.service.findOne(idSelected).subscribe(item => {
            this.value = item;
            this.onSelect.emit(item);
        });
    }

    setUnselectedValue(idSelected: number) {
        this.value = undefined;
    }
}
