import { Component, OnInit } from '@angular/core';

import { FormDTO } from 'src/main/webapp/app/modules/shared/architecture/crud/form.dto';
import { ColumnDTO } from 'src/main/webapp/app/modules/shared/architecture/table/column.dto';
import { ProgramaService } from 'src/main/webapp/app/modules/services/common/acesso/programa.service';
import { SortColumnDTO } from 'src/main/webapp/app/modules/shared/architecture/sort/sortcolumn.dto';

import { COLUMNS } from 'src/main/webapp/app/modules/services/tables/columns.service';
import { FILTER_FIELDS } from 'src/main/webapp/app/modules/services/tables/filter-fields.service';
import { SORT_COLUMS } from 'src/main/webapp/app/modules/services/tables/sort-columns.service';
import { TipoServicoService } from '../../services/common/acesso/tipo-servico.service';

@Component({
    selector: 'app-programa',
    templateUrl: './programa.component.html',
    styleUrls: ['./programa.component.css']
})
export class ProgramaComponent implements OnInit {

    columns: Array<ColumnDTO>;
    sortColumns: Array<SortColumnDTO>;
    filterField: Array<string>;
    formConfig: Array<FormDTO>;

    constructor(
        public programaService: ProgramaService,
        public tipoServicoService: TipoServicoService) { }

    ngOnInit(): void {
        this.preencherColumns();
        this.preencherSortColumns();
        this.preencherFiltros();
        this.preencherForm();
    }

    preencherForm() {
        this.formConfig = [
            new FormDTO("idPrograma", "Id", "hidden", 12),
            new FormDTO("descricao", "Descrição", "text", 6),
            new FormDTO("sigla", "Sigla", "text", 6),
            new FormDTO("endereco", "Endereço", "text", 6),
            new FormDTO("tipoServico", "Tipo do Serviço", "autocomplete", 6, { service: this.tipoServicoService })
        ];
    }

    preencherColumns(): void {
        this.columns = COLUMNS['programa'];
    }

    preencherSortColumns(): void {
        this.sortColumns = SORT_COLUMS['programa'];
    }

    preencherFiltros(): void {
        this.filterField = FILTER_FIELDS['programa'];
    }
}
