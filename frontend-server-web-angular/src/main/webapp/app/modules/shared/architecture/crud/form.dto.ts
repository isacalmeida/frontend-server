import { EventEmitter } from '@angular/core';
import { CrudService } from 'src/main/webapp/app/modules/services/architecture/crud/crud.service';
import { SortColumnDTO } from '../sort/sortcolumn.dto';
import { ColumnDTO } from '../table/column.dto';

export class FormDTO {
    attribute: string;
    label: string;
    type: string;
    size: number;
    show: boolean;
    mask: string;
    unmask: boolean;
    newRow: boolean;
    defaultValue: any;
    service: CrudService<any, number>;
    codigoName: string;
    descricaoName: string;
    tituloSeletor: string;
    descricaoExtraName: string;
    sortColumns: Array<SortColumnDTO>;
    columns: Array<ColumnDTO>;
    filterField: Array<string>;
    doComplete: any;
    onSelect: any;

    constructor(attribute: string, label: string, type: string, size: number,
                options?: { show?: boolean, mask?: string, unmask?: boolean, newRow?: boolean, defaultValue?: any, service?: CrudService<any, number>,
                            codigoName?: string, descricaoName?: string, descricaoExtraName?: string, tituloSeletor?: string 
                            sortColumns?: Array<SortColumnDTO>, colums?: Array<ColumnDTO>, filterField?: Array<string>,
                            doComplete?: any, onSelect?: any }) {

        this.attribute = attribute;
        this.label = label;
        this.type = type;
        this.size = size;

        if(options !== undefined) {
            this.show = options.show;
            this.mask = options.mask;
            this.unmask = options.unmask;
            this.newRow = options.newRow;
            this.columns = options.colums;
            this.service = options.service;
            this.codigoName = options.codigoName;
            this.sortColumns =  options.sortColumns;
            this.filterField = options.filterField;
            this.defaultValue = options.defaultValue;
            this.tituloSeletor = options.tituloSeletor;
            this.descricaoName = options.descricaoName;
            this.descricaoExtraName = options.descricaoExtraName;
            this.doComplete = options.doComplete;
            this.onSelect = options.onSelect;
        }
    }
}
