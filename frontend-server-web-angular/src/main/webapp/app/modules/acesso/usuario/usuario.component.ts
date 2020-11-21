import { Component, OnInit } from '@angular/core';

import { ColumnDTO } from 'src/main/webapp/app/modules/shared/architecture/table/column.dto';
import { FormDTO } from 'src/main/webapp/app/modules/shared/architecture/crud/form.dto';
import { SortColumnDTO } from 'src/main/webapp/app/modules/shared/architecture/sort/sortcolumn.dto';
import { UsuarioService } from 'src/main/webapp/app/modules/services/common/acesso/usuario.service';

import { COLUMNS } from 'src/main/webapp/app/modules/services/tables/columns.service';
import { FILTER_FIELDS } from 'src/main/webapp/app/modules/services/tables/filter-fields.service';
import { SORT_COLUMS } from 'src/main/webapp/app/modules/services/tables/sort-columns.service';
import { PessoaFisicaService } from '../../services/common/pessoa/pessoa-fisica.service';
import { PerfilService } from '../../services/common/acesso/perfil.service';
import { UsuarioDTO } from '../../shared/common/acesso/usuario.dto';

@Component({
    selector: 'app-usuario',
    templateUrl: './usuario.component.html',
    styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

    columns: Array<ColumnDTO>;
    sortColumns: Array<SortColumnDTO>;
    filterField: Array<string>;
    formConfig: Array<FormDTO>;

    model: UsuarioDTO;

    constructor(
        public perfilService: PerfilService,
        public pessoaFisicaService: PessoaFisicaService,
        public usuarioService: UsuarioService) { }

    ngOnInit(): void {
        this.model = new UsuarioDTO();
        this.preencherColumns();
        this.preencherSortColumns();
        this.preencherFiltros();
        this.preencherForm();
    }

    preencherForm() {
        this.formConfig = [
            new FormDTO("idUsuario", "Id", "hidden", 12),
            new FormDTO("protocoloPessoa", "Protocolo Pessoa", "hidden", 12),
            new FormDTO("login", "Login", "text", 6),
            new FormDTO("senha", "Senha", "text", 6),
            new FormDTO("pessoaFisica", "Pessoa", "autocomplete", 6, { service: this.pessoaFisicaService, descricaoName: "nomeCompleto", 
                        onSelect: this.onSelectPessoa }),
            new FormDTO("perfil", "Perfil", "autocomplete", 6, { service: this.perfilService })
        ];
    }

    onSelectPessoa = (pessoa: any) => {
        this.model.protocoloPessoa = pessoa.id;
    }

    preencherColumns(): void {
        this.columns = COLUMNS['usuario'];
    }

    preencherSortColumns(): void {
        this.sortColumns = SORT_COLUMS['usuario'];
    }

    preencherFiltros(): void {
        this.filterField = FILTER_FIELDS['usuario'];
    }
}
