import { Component, OnInit } from '@angular/core';

import { FormDTO } from 'src/main/webapp/app/modules/shared/architecture/crud/form.dto';
import { ColumnDTO } from 'src/main/webapp/app/modules/shared/architecture/table/column.dto';
import { EventoService } from 'src/main/webapp/app/modules/services/common/operacao/evento.service';
import { SortColumnDTO } from 'src/main/webapp/app/modules/shared/architecture/sort/sortcolumn.dto';

import { COLUMNS } from 'src/main/webapp/app/modules/services/tables/columns.service';
import { FILTER_FIELDS } from 'src/main/webapp/app/modules/services/tables/filter-fields.service';
import { SORT_COLUMS } from 'src/main/webapp/app/modules/services/tables/sort-columns.service';
import { StatusEventoService } from '../../services/common/operacao/status-evento.service';
import { EventoDTO } from '../../shared/common/operacao/evento.dto';
import { MudancaService } from '../../services/common/transicao/mudanca.service';

@Component({
    selector: 'app-evento',
    templateUrl: './evento.component.html',
    styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {

    columns: Array<ColumnDTO>;
    sortColumns: Array<SortColumnDTO>;
    filterField: Array<string>;
    formConfig: Array<FormDTO>;

    model: EventoDTO;

    constructor(
        public eventoService: EventoService,
        public mudancaService: MudancaService,
        public statusEventoService: StatusEventoService) { }

    ngOnInit(): void {
        this.model = new EventoDTO();
        this.preencherColumns();
        this.preencherSortColumns();
        this.preencherFiltros();
        this.preencherForm();
    }

    preencherForm() {
        this.formConfig = [
            new FormDTO("idEvento", "Id", "hidden", 12),
            new FormDTO("protocoloMudanca", "Protocolo Mudança", "hidden", 12),
            new FormDTO("descricao", "Descrição", "text", 12),
            new FormDTO("statusEvento", "Status", "autocomplete", 6, { service: this.statusEventoService }),
            new FormDTO("mudanca", "Mudança", "autocomplete", 6, { service: this.mudancaService, onSelect: this.onSelectMudanca })
        ];
    }

    onSelectMudanca = (mudanca: any) => {
        this.model.protocoloMudanca = mudanca.id;
    }

    preencherColumns(): void {
        this.columns = COLUMNS['evento'];
    }

    preencherSortColumns(): void {
        this.sortColumns = SORT_COLUMS['evento'];
    }

    preencherFiltros(): void {
        this.filterField = FILTER_FIELDS['evento'];
    }
}
