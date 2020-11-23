import { Component, OnInit } from '@angular/core';

import { FormDTO } from 'src/main/webapp/app/modules/shared/architecture/crud/form.dto';
import { ColumnDTO } from 'src/main/webapp/app/modules/shared/architecture/table/column.dto';
import { IncidenteService } from 'src/main/webapp/app/modules/services/common/operacao/incidente.service';
import { SortColumnDTO } from 'src/main/webapp/app/modules/shared/architecture/sort/sortcolumn.dto';

import { COLUMNS } from 'src/main/webapp/app/modules/services/tables/columns.service';
import { FILTER_FIELDS } from 'src/main/webapp/app/modules/services/tables/filter-fields.service';
import { SORT_COLUMS } from 'src/main/webapp/app/modules/services/tables/sort-columns.service';
import { StatusIncidenteService } from '../../services/common/operacao/status-incidente.service';
import { IncidenteDTO } from '../../shared/common/operacao/incidente.dto';
import { ItemConfiguracaoService } from '../../services/common/transicao/item-configuracao.service';
import { ImpactoService } from '../../services/common/operacao/impacto.service';
import { PrioridadeService } from '../../services/common/operacao/prioridade.service';
import { EventoService } from '../../services/common/operacao/evento.service';
import { RequisicaoService } from '../../services/common/operacao/requisicao.service';

@Component({
    selector: 'app-incidente',
    templateUrl: './incidente.component.html',
    styleUrls: ['./incidente.component.css']
})
export class IncidenteComponent implements OnInit {

    columns: Array<ColumnDTO>;
    sortColumns: Array<SortColumnDTO>;
    filterField: Array<string>;
    formConfig: Array<FormDTO>;

    model: IncidenteDTO;

    constructor(
        public incidenteService: IncidenteService,
        public eventoService: EventoService,
        public impactoService: ImpactoService,
        public requisicaoService: RequisicaoService,
        public prioridadeService: PrioridadeService,
        public statusIncidenteService: StatusIncidenteService,
        public itemConfiguracaoService: ItemConfiguracaoService) { }

    ngOnInit(): void {
        this.model = new IncidenteDTO();
        this.preencherColumns();
        this.preencherSortColumns();
        this.preencherFiltros();
        this.preencherForm();
    }

    preencherForm() {
        this.formConfig = [
            new FormDTO("idIncidente", "Id", "hidden", 12),
            new FormDTO("protocoloItemIncidente", "Protocolo Item Incidente", "hidden", 12),
            new FormDTO("descricao", "Descrição", "text", 8),
            new FormDTO("statusIncidente", "Status", "autocomplete", 4, { service: this.statusIncidenteService }),
            new FormDTO("itemConfiguracao", "Item Configuração", "autocomplete", 4, { service: this.itemConfiguracaoService, onSelect: this.onSelectItemConfiguracao }),
            new FormDTO("prioridade", "Prioridade", "autocomplete", 4, { service: this.prioridadeService }),
            new FormDTO("impacto", "Impacto", "autocomplete", 4, { service: this.impactoService }),
            new FormDTO("evento", "Evento", "autocomplete", 6, { service: this.eventoService }),
            new FormDTO("requisicao", "Requisição", "autocomplete", 6, { service: this.requisicaoService }),
            new FormDTO("resolucao", "Resolução", "text", 12)
        ];
    }

    onSelectItemConfiguracao = (itemConfiguracao: any) => {
        this.model.protocoloItemConfiguracao = itemConfiguracao.id;
    }

    preencherColumns(): void {
        this.columns = COLUMNS['incidente'];
    }

    preencherSortColumns(): void {
        this.sortColumns = SORT_COLUMS['incidente'];
    }

    preencherFiltros(): void {
        this.filterField = FILTER_FIELDS['incidente'];
    }
}
