import { Component, OnInit } from '@angular/core';

import { CepService } from '../../services/common/pessoa/cep.service';
import { ColumnDTO } from 'src/main/webapp/app/modules/shared/architecture/table/column.dto';
import { COLUMNS } from 'src/main/webapp/app/modules/services/tables/columns.service';
import { ContatoPessoaService } from '../../services/common/pessoa/contato-pessoa.service';
import { EnderecoPessoaService } from '../../services/common/pessoa/endereco-pessoa.service';
import { FILTER_FIELDS } from 'src/main/webapp/app/modules/services/tables/filter-fields.service';
import { FormDTO } from 'src/main/webapp/app/modules/shared/architecture/crud/form.dto';
import { PessoaJuridicaService } from 'src/main/webapp/app/modules/services/common/pessoa/pessoa-juridica.service';
import { SORT_COLUMS } from 'src/main/webapp/app/modules/services/tables/sort-columns.service';
import { SortColumnDTO } from 'src/main/webapp/app/modules/shared/architecture/sort/sortcolumn.dto';
import { TipoContatoService } from '../../services/common/pessoa/tipo-contato.service';
import { TipoDocumentoPessoaService } from 'src/main/webapp/app/modules/services/common/pessoa/tipo-documento-pessoa.service';
import { TipoDocumentoService } from 'src/main/webapp/app/modules/services/common/pessoa/tipo-documento.service';
import { TipoEnderecoService } from '../../services/common/pessoa/tipo-endereco.service';

@Component({
    selector: 'app-pessoa-juridica',
    templateUrl: './pessoa-juridica.component.html',
    styleUrls: ['./pessoa-juridica.component.css']
})
export class PessoaJuridicaComponent implements OnInit {

    columns: Array<ColumnDTO>;
    sortColumns: Array<SortColumnDTO>;
    filterField: Array<string>;
    formConfig: Array<FormDTO>;
    detailFormConfig = new Array<any>();

    constructor(
        public cepService: CepService,
        public tipoContatoService: TipoContatoService,
        public pessoaJuridicaService: PessoaJuridicaService,
        public tipoEnderecoService: TipoEnderecoService,
        public tipoDocumentoService: TipoDocumentoService,
        public contatoPessoaService: ContatoPessoaService,
        public enderecoPessoaService: EnderecoPessoaService,
        public tipoDocumentoPessoaService: TipoDocumentoPessoaService) { }

    ngOnInit(): void {
        this.preencherColumns();
        this.preencherSortColumns();
        this.preencherFiltros();
        this.preencherForm();
    }

    preencherForm() {
        this.formConfig = [
            new FormDTO("idPessoa", "Id", "hidden", 12),
            new FormDTO("razaoSocial", "Razão Social", "text", 4),
            new FormDTO("nomeFantasia", "Nome Fantasia", "text", 4),
            new FormDTO("dataFundacao", "Data de Fundação", "datetime", 4),
            new FormDTO("isCliente", "Cliente", "switch", 2, { defaultValue: false }),
            new FormDTO("isFornecedor", "Fornecedor", "switch", 2, { defaultValue: false }),
            new FormDTO("isFuncionario", "Funcionário", "switch", 2, { defaultValue: false })
        ];

        var documentoFormConfig = {
            tabHeader: "Documentos",
            service: this.tipoDocumentoPessoaService,
            columns: COLUMNS['tipoDocumentoPessoa'],
            formConfig: [
                new FormDTO("idTipoDocumentoPessoa", "Id", "hidden", 12),
                new FormDTO("tipoDocumento", "Tipo do Documento", "autocomplete", 6, { service: this.tipoDocumentoService }),
                new FormDTO("valor", "Valor", "text", 6)
            ]
        };
        this.detailFormConfig.push(documentoFormConfig);

        var enderecoFormConfig = {
            tabHeader: "Endereços",
            service: this.enderecoPessoaService,
            columns: COLUMNS['enderecoPessoa'],
            formConfig: [ 
                new FormDTO("idEndereco", "Id", "hidden", 12),
                new FormDTO("cep", "Cep", "autocomplete", 6, { service: this.cepService, descricaoName: 'cep' }),
                new FormDTO("tipoEndereco", "Tipo do Endereço", "autocomplete", 6, { service: this.tipoEnderecoService }),
                new FormDTO("numero", "Número", "text", 4),
                new FormDTO("complemento", "Complemento", "text", 8),
                new FormDTO("observacao", "Observação", "text", 12)
            ]
        };
        this.detailFormConfig.push(enderecoFormConfig);

        var contatoFormConfig = {
            tabHeader: "Contatos",
            service: this.contatoPessoaService,
            columns: COLUMNS['contatoPessoa'],
            formConfig: [
                new FormDTO("idContato", "Id", "hidden", 12),
                new FormDTO("tipoContato", "Tipo do Contato", "autocomplete", 6, { service: this.tipoContatoService }),
                new FormDTO("valor", "Valor", "text", 6)
            ]
        };
        this.detailFormConfig.push(contatoFormConfig);
    }

    preencherColumns(): void {
        this.columns = COLUMNS['pessoaJuridica'];
    }

    preencherSortColumns(): void {
        this.sortColumns = SORT_COLUMS['pessoaJuridica'];
    }

    preencherFiltros(): void {
        this.filterField = FILTER_FIELDS['pessoaJuridica'];
    }
}
