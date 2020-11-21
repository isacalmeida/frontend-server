import { Component, OnInit } from '@angular/core';

import { EstadoService } from 'src/main/webapp/app/modules/services/common/pessoa/estado.service';
import { ColumnDTO } from 'src/main/webapp/app/modules/shared/architecture/table/column.dto';
import { SortColumnDTO } from 'src/main/webapp/app/modules/shared/architecture/sort/sortcolumn.dto';
import { FormDTO } from 'src/main/webapp/app/modules/shared/architecture/crud/form.dto';

import { COLUMNS } from 'src/main/webapp/app/modules/services/tables/columns.service';
import { FILTER_FIELDS } from 'src/main/webapp/app/modules/services/tables/filter-fields.service';
import { SORT_COLUMS } from 'src/main/webapp/app/modules/services/tables/sort-columns.service';

@Component({
    selector: 'app-estado',
    templateUrl: './estado.component.html',
    styleUrls: ['./estado.component.css']
})
export class EstadoComponent implements OnInit {

    columns: Array<ColumnDTO>;
    sortColumns: Array<SortColumnDTO>;
    filterField: Array<string>;
    formConfig: Array<FormDTO>;

    constructor(
        public estadoService: EstadoService) { }

    ngOnInit(): void {
        this.preencherColumns();
        this.preencherSortColumns();
        this.preencherFiltros();
        this.preencherForm();
    }

    preencherForm() {
        this.formConfig = [
            new FormDTO("idEstado", "Id", "hidden", 12),
            new FormDTO("descricao", "Descrição", "text", 6),
            new FormDTO("sigla", "Sigla", "text", 6)
        ];
    }

    preencherColumns(): void {
        this.columns = COLUMNS['estado'];
    }

    preencherSortColumns(): void {
        this.sortColumns = SORT_COLUMS['estado'];
    }

    preencherFiltros(): void {
        this.filterField = FILTER_FIELDS['estado'];
    }
}
