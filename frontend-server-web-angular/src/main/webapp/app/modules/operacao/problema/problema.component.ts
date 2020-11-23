import { Component, OnInit } from '@angular/core';

import { FormDTO } from 'src/main/webapp/app/modules/shared/architecture/crud/form.dto';
import { ColumnDTO } from 'src/main/webapp/app/modules/shared/architecture/table/column.dto';
import { ProblemaService } from 'src/main/webapp/app/modules/services/common/operacao/problema.service';
import { SortColumnDTO } from 'src/main/webapp/app/modules/shared/architecture/sort/sortcolumn.dto';

import { COLUMNS } from 'src/main/webapp/app/modules/services/tables/columns.service';
import { FILTER_FIELDS } from 'src/main/webapp/app/modules/services/tables/filter-fields.service';
import { SORT_COLUMS } from 'src/main/webapp/app/modules/services/tables/sort-columns.service';
import { StatusProblemaService } from '../../services/common/operacao/status-problema.service';
import { ProblemaDTO } from '../../shared/common/operacao/problema.dto';
import { MudancaService } from '../../services/common/transicao/mudanca.service';
import { ErroConhecidoService } from '../../services/common/operacao/erro-conhecido.service';
import { IncidenteService } from '../../services/common/operacao/incidente.service';

@Component({
    selector: 'app-problema',
    templateUrl: './problema.component.html',
    styleUrls: ['./problema.component.css']
})
export class ProblemaComponent implements OnInit {

    columns: Array<ColumnDTO>;
    sortColumns: Array<SortColumnDTO>;
    filterField: Array<string>;
    formConfig: Array<FormDTO>;

    model: ProblemaDTO;

    constructor(
        public problemaService: ProblemaService,
        public mudancaService: MudancaService,
        public incidenteService: IncidenteService,
        public erroConhecidoService: ErroConhecidoService,
        public statusProblemaService: StatusProblemaService) { }

    ngOnInit(): void {
        this.model = new ProblemaDTO();
        this.preencherColumns();
        this.preencherSortColumns();
        this.preencherFiltros();
        this.preencherForm();
    }

    preencherForm() {
        this.formConfig = [
            new FormDTO("idProblema", "Id", "hidden", 12),
            new FormDTO("protocoloMudanca", "Protocolo Mudança", "hidden", 12),
            new FormDTO("descricao", "Descrição", "text", 12),
            new FormDTO("statusProblema", "Status", "autocomplete", 6, { service: this.statusProblemaService }),
            new FormDTO("mudanca", "Mudança", "autocomplete", 6, { service: this.mudancaService, onSelect: this.onSelectMudanca }),
            new FormDTO("incidente", "Incidente", "autocomplete", 6, { service: this.incidenteService }),
            new FormDTO("erroConhecido", "Erro Conhecido", "autocomplete", 6, { service: this.erroConhecidoService }),
            new FormDTO("resolucao", "Resolução", "text", 12)
        ];
    }

    onSelectMudanca = (mudanca: any) => {
        this.model.protocoloMudanca = mudanca.id;
    }

    preencherColumns(): void {
        this.columns = COLUMNS['problema'];
    }

    preencherSortColumns(): void {
        this.sortColumns = SORT_COLUMS['problema'];
    }

    preencherFiltros(): void {
        this.filterField = FILTER_FIELDS['problema'];
    }
}
