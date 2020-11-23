import { Component, OnInit } from '@angular/core';

import { FormDTO } from 'src/main/webapp/app/modules/shared/architecture/crud/form.dto';
import { ColumnDTO } from 'src/main/webapp/app/modules/shared/architecture/table/column.dto';
import { ItemConfiguracaoService } from 'src/main/webapp/app/modules/services/common/transicao/item-configuracao.service';
import { SortColumnDTO } from 'src/main/webapp/app/modules/shared/architecture/sort/sortcolumn.dto';

import { COLUMNS } from 'src/main/webapp/app/modules/services/tables/columns.service';
import { FILTER_FIELDS } from 'src/main/webapp/app/modules/services/tables/filter-fields.service';
import { SORT_COLUMS } from 'src/main/webapp/app/modules/services/tables/sort-columns.service';
import { StatusItemConfiguracaoService } from '../../services/common/transicao/status-item-configuracao.service';
import { CategoriaItemConfiguracaoService } from '../../services/common/transicao/categoria-item-configuracao.service';
import { TipoItemConfiguracaoService } from '../../services/common/transicao/tipo-item-configuracao.service';
import { ItemConfiguracaoDTO } from '../../shared/common/transicao/item-configuracao.dto';
import { PessoaFisicaService } from '../../services/common/pessoa/pessoa-fisica.service';
import { PessoaJuridicaService } from '../../services/common/pessoa/pessoa-juridica.service';

@Component({
    selector: 'app-item-configuracao',
    templateUrl: './item-configuracao.component.html',
    styleUrls: ['./item-configuracao.component.css']
})
export class ItemConfiguracaoComponent implements OnInit {

    columns: Array<ColumnDTO>;
    sortColumns: Array<SortColumnDTO>;
    filterField: Array<string>;
    formConfig: Array<FormDTO>;

    model: ItemConfiguracaoDTO;

    constructor(
        public itemConfiguracaoService: ItemConfiguracaoService,
        public statusItemConfiguracaoService: StatusItemConfiguracaoService,
        public categoriaItemConfiguracaoService: CategoriaItemConfiguracaoService,
        public tipoItemConfiguracaoService: TipoItemConfiguracaoService,
        public pessoaFisicaService: PessoaFisicaService,
        public pessoaJuridicaService: PessoaJuridicaService) { }

    ngOnInit(): void {
        this.model = new ItemConfiguracaoDTO();
        this.preencherColumns();
        this.preencherSortColumns();
        this.preencherFiltros();
        this.preencherForm();
    }

    preencherForm() {
        this.formConfig = [
            new FormDTO("idItemConfiguracao", "Id", "hidden", 12),
            new FormDTO("protocoloPessoaFornecedor", "Id", "hidden", 12),
            new FormDTO("protocoloPessoaResponsavel", "Id", "hidden", 12),
            new FormDTO("descricao", "Descrição", "text", 6),
            new FormDTO("modelo", "Modelo", "text", 6),
            new FormDTO("numeroSerie", "Número de Série", "text", 6),
            new FormDTO("local", "Local", "text", 6),
            new FormDTO("itemConfiguracaoSuperior", "Item de Configuração Superior", "autocomplete", 6, { service: this.itemConfiguracaoService }),
            new FormDTO("statusItemConfiguracao", "Status", "autocomplete", 6, { service: this.statusItemConfiguracaoService }),
            new FormDTO("categoriaItemConfiguracao", "Categoria", "autocomplete", 6, { service: this.categoriaItemConfiguracaoService }),
            new FormDTO("tipoItemConfiguracao", "Tipo", "autocomplete", 6, { service: this.tipoItemConfiguracaoService }),
            new FormDTO("pessoaJuridica", "Fornecedor", "autocomplete", 6, { service: this.pessoaJuridicaService, descricaoName: "razaoSocial", 
                        onSelect: this.onSelectPessoaFornecedor }),
            new FormDTO("pessoaFisica", "Responsável", "autocomplete", 6, { service: this.pessoaFisicaService, descricaoName: "nomeCompleto", 
                        onSelect: this.onSelectPessoaResponsavel })
        ];
    }

    onSelectPessoaFornecedor = (pessoa: any) => {
        this.model.protocoloPessoaFornecedor = pessoa.id;
    }

    onSelectPessoaResponsavel = (pessoa: any) => {
        this.model.protocoloPessoaResponsavel = pessoa.id;
    }

    preencherColumns(): void {
        this.columns = COLUMNS['itemConfiguracao'];
    }

    preencherSortColumns(): void {
        this.sortColumns = SORT_COLUMS['itemConfiguracao'];
    }

    preencherFiltros(): void {
        this.filterField = FILTER_FIELDS['itemConfiguracao'];
    }
}
