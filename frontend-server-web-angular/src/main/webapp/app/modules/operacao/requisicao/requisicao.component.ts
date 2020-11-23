import { Component, OnInit } from '@angular/core';

import { FormDTO } from 'src/main/webapp/app/modules/shared/architecture/crud/form.dto';
import { ColumnDTO } from 'src/main/webapp/app/modules/shared/architecture/table/column.dto';
import { RequisicaoService } from 'src/main/webapp/app/modules/services/common/operacao/requisicao.service';
import { SortColumnDTO } from 'src/main/webapp/app/modules/shared/architecture/sort/sortcolumn.dto';

import { COLUMNS } from 'src/main/webapp/app/modules/services/tables/columns.service';
import { FILTER_FIELDS } from 'src/main/webapp/app/modules/services/tables/filter-fields.service';
import { SORT_COLUMS } from 'src/main/webapp/app/modules/services/tables/sort-columns.service';
import { StatusRequisicaoService } from '../../services/common/operacao/status-requisicao.service';
import { RequisicaoDTO } from '../../shared/common/operacao/requisicao.dto';
import { MudancaService } from '../../services/common/transicao/mudanca.service';

@Component({
    selector: 'app-requisicao',
    templateUrl: './requisicao.component.html',
    styleUrls: ['./requisicao.component.css']
})
export class RequisicaoComponent implements OnInit {

    columns: Array<ColumnDTO>;
    sortColumns: Array<SortColumnDTO>;
    filterField: Array<string>;
    formConfig: Array<FormDTO>;

    model: RequisicaoDTO;

    constructor(
        public requisicaoService: RequisicaoService,
        public mudancaService: MudancaService,
        public statusRequisicaoService: StatusRequisicaoService) { }

    ngOnInit(): void {
        this.model = new RequisicaoDTO();
        this.preencherColumns();
        this.preencherSortColumns();
        this.preencherFiltros();
        this.preencherForm();
    }

    preencherForm() {
        this.formConfig = [
            new FormDTO("idRequisicao", "Id", "hidden", 12),
            new FormDTO("protocoloMudanca", "Protocolo Mudança", "hidden", 12),
            new FormDTO("descricao", "Descrição", "text", 12),
            new FormDTO("statusRequisicao", "Status", "autocomplete", 6, { service: this.statusRequisicaoService }),
            new FormDTO("mudanca", "Mudança", "autocomplete", 6, { service: this.mudancaService, onSelect: this.onSelectMudanca })
        ];
    }

    onSelectMudanca = (mudanca: any) => {
        this.model.protocoloMudanca = mudanca.id;
    }

    preencherColumns(): void {
        this.columns = COLUMNS['requisicao'];
    }

    preencherSortColumns(): void {
        this.sortColumns = SORT_COLUMS['requisicao'];
    }

    preencherFiltros(): void {
        this.filterField = FILTER_FIELDS['requisicao'];
    }
}
