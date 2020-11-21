import { Component, OnInit } from '@angular/core';

import { CidadeService } from 'src/main/webapp/app/modules/services/common/pessoa/cidade.service';
import { ColumnDTO } from 'src/main/webapp/app/modules/shared/architecture/table/column.dto';
import { SortColumnDTO } from 'src/main/webapp/app/modules/shared/architecture/sort/sortcolumn.dto';
import { FormDTO } from 'src/main/webapp/app/modules/shared/architecture/crud/form.dto';
import { EstadoService } from 'src/main/webapp/app/modules/services/common/pessoa/estado.service';

import { COLUMNS } from 'src/main/webapp/app/modules/services/tables/columns.service';
import { FILTER_FIELDS } from 'src/main/webapp/app/modules/services/tables/filter-fields.service';
import { SORT_COLUMS } from 'src/main/webapp/app/modules/services/tables/sort-columns.service';

@Component({
    selector: 'app-cidade',
    templateUrl: './cidade.component.html',
    styleUrls: ['./cidade.component.css']
})
export class CidadeComponent implements OnInit {
    columns: Array<ColumnDTO>;
    sortColumns: Array<SortColumnDTO>;
    filterField: Array<string>;
    formConfig: Array<FormDTO>;

    constructor(
        public cidadeService: CidadeService,
        public estadoService: EstadoService) { }

    ngOnInit(): void {
        this.preencherColumns();
        this.preencherSortColumns();
        this.preencherFiltros();
        this.preencherForm();
    }

    preencherForm() {
        this.formConfig = [
            new FormDTO("idCidade", "Id", "hidden", 12),
            new FormDTO("descricao", "Descrição", "text", 6),
            new FormDTO("estado", "Estado", "autocomplete", 6, { service: this.estadoService, descricaoExtraName: "sigla" })
        ];
    }

    preencherColumns(): void {
        this.columns = COLUMNS['cidade'];
    }

    preencherSortColumns(): void {
        this.sortColumns = SORT_COLUMS['cidade'];
    }

    preencherFiltros(): void {
        this.filterField = FILTER_FIELDS['cidade'];
    }
}
