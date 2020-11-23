import { Component, OnInit } from '@angular/core';

import { FormDTO } from 'src/main/webapp/app/modules/shared/architecture/crud/form.dto';
import { ColumnDTO } from 'src/main/webapp/app/modules/shared/architecture/table/column.dto';
import { ErroConhecidoService } from 'src/main/webapp/app/modules/services/common/operacao/erro-conhecido.service';
import { SortColumnDTO } from 'src/main/webapp/app/modules/shared/architecture/sort/sortcolumn.dto';

import { COLUMNS } from 'src/main/webapp/app/modules/services/tables/columns.service';
import { FILTER_FIELDS } from 'src/main/webapp/app/modules/services/tables/filter-fields.service';
import { SORT_COLUMS } from 'src/main/webapp/app/modules/services/tables/sort-columns.service';
import { ErroConhecidoDTO } from '../../shared/common/operacao/erro-conhecido.dto';

@Component({
    selector: 'app-erro-conhecido',
    templateUrl: './erro-conhecido.component.html',
    styleUrls: ['./erro-conhecido.component.css']
})
export class ErroConhecidoComponent implements OnInit {

    columns: Array<ColumnDTO>;
    sortColumns: Array<SortColumnDTO>;
    filterField: Array<string>;
    formConfig: Array<FormDTO>;

    model: ErroConhecidoDTO;

    constructor(
        public erroConhecidoService: ErroConhecidoService) { }

    ngOnInit(): void {
        this.preencherColumns();
        this.preencherSortColumns();
        this.preencherFiltros();
        this.preencherForm();
    }

    preencherForm() {
        this.formConfig = [
            new FormDTO("idErroConhecido", "Id", "hidden", 12),
            new FormDTO("descricao", "Descrição", "text", 12),
            new FormDTO("observacao", "Observação", "text", 12)
        ];
    }

    preencherColumns(): void {
        this.columns = COLUMNS['erroConhecido'];
    }

    preencherSortColumns(): void {
        this.sortColumns = SORT_COLUMS['erroConhecido'];
    }

    preencherFiltros(): void {
        this.filterField = FILTER_FIELDS['erroConhecido'];
    }
}
