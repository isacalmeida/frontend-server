import { Component, OnInit } from '@angular/core';

import { ColumnDTO } from 'src/main/webapp/app/modules/shared/architecture/table/column.dto';
import { COLUMNS } from 'src/main/webapp/app/modules/services/tables/columns.service';
import { FILTER_FIELDS } from 'src/main/webapp/app/modules/services/tables/filter-fields.service';
import { FormDTO } from 'src/main/webapp/app/modules/shared/architecture/crud/form.dto';
import { PessoaFisicaService } from 'src/main/webapp/app/modules/services/common/pessoa/pessoa-fisica.service';
import { SORT_COLUMS } from 'src/main/webapp/app/modules/services/tables/sort-columns.service';
import { SortColumnDTO } from 'src/main/webapp/app/modules/shared/architecture/sort/sortcolumn.dto';
import { StatusMudancaService } from '../../services/common/transicao/status-mudanca.service';
import { PrioridadeService } from '../../services/common/transicao/prioridade.service';
import { ImpactoService } from '../../services/common/transicao/impacto.service';
import { ProblemaService } from '../../services/common/operacao/problema.service';
import { ItemConfiguracaoService } from '../../services/common/transicao/item-configuracao.service';
import { MudancaItemConfiguracaoService } from '../../services/common/transicao/mudanca-item-configuracao.service';
import { MudancaService } from '../../services/common/transicao/mudanca.service';
import { MudancaDTO } from '../../shared/common/transicao/mudanca.dto';

@Component({
    selector: 'app-mudanca',
    templateUrl: './mudanca.component.html',
    styleUrls: ['./mudanca.component.css']
})
export class MudancaComponent implements OnInit {

    columns: Array<ColumnDTO>;
    sortColumns: Array<SortColumnDTO>;
    filterField: Array<string>;
    formConfig: Array<FormDTO>;
    detailFormConfig = new Array<any>();

    model: MudancaDTO;

    constructor(
        public mudancaService: MudancaService,
        public impactoService: ImpactoService,
        public problemaService: ProblemaService,
        public prioridadeService: PrioridadeService,
        public pessoaFisicaService: PessoaFisicaService,
        public statusMudancaService: StatusMudancaService,
        public itemConfiguracaoService: ItemConfiguracaoService,
        public mudancaItemConfiguracaoService: MudancaItemConfiguracaoService) { }

    ngOnInit(): void {
        this.preencherColumns();
        this.preencherSortColumns();
        this.preencherFiltros();
        this.preencherForm();
    }

    preencherForm() {
        this.formConfig = [
            new FormDTO("idMudanca", "Id", "hidden", 12),
            new FormDTO("descricao", "Descrição", "text", 8),
            new FormDTO("statusMudanca", "Status", "autocomplete", 4, { service: this.statusMudancaService }),
            new FormDTO("dataProposta", "Data Proposta", "datetime", 4),
            new FormDTO("prioridade", "Prioridade", "autocomplete", 4, { service: this.prioridadeService }),
            new FormDTO("impacto", "Impacto", "autocomplete", 4, { service: this.impactoService }),
            new FormDTO("pessoaFisica", "Responsável", "autocomplete", 6, { service: this.pessoaFisicaService, descricaoName: "nomeCompleto", 
                    onSelect: this.onSelectPessoaResponsavel }),
            new FormDTO("problema", "Problema", "autocomplete", 6, { service: this.problemaService }),
            new FormDTO("atividades", "Atividades", "text", 12),
            new FormDTO("planoRetorno", "Plano de Retorno", "text", 12),
            new FormDTO("isAutorizado", "Autorizado", "switch", 2, { defaultValue: false }),
            new FormDTO("dataAutorizacao", "Data de Autorização", "datetime", 4)
        ];

        var itemConfiguracaoFormConfig = {
            tabHeader: "Itens de Configuração",
            service: this.mudancaItemConfiguracaoService,
            columns: COLUMNS['mudancaItemConfiguracao'],
            formConfig: [
                new FormDTO("idMudancaItemConfiguracao", "Id", "hidden", 12),
                new FormDTO("itemConfiguracao", "Item de Configuração", "autocomplete", 12, { service: this.itemConfiguracaoService })
            ]
        };
        this.detailFormConfig.push(itemConfiguracaoFormConfig);
    }

    onSelectPessoaResponsavel = (pessoa: any) => {
        this.model.protocoloPessoa = pessoa.id;
    }

    preencherColumns(): void {
        this.columns = COLUMNS['mudanca'];
    }

    preencherSortColumns(): void {
        this.sortColumns = SORT_COLUMS['mudanca'];
    }

    preencherFiltros(): void {
        this.filterField = FILTER_FIELDS['mudanca'];
    }
}
