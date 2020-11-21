import { Component, OnInit } from '@angular/core';

import { ColumnDTO } from 'src/main/webapp/app/modules/shared/architecture/table/column.dto';
import { COLUMNS } from 'src/main/webapp/app/modules/services/tables/columns.service';
import { FILTER_FIELDS } from 'src/main/webapp/app/modules/services/tables/filter-fields.service';
import { FormDTO } from 'src/main/webapp/app/modules/shared/architecture/crud/form.dto';
import { PerfilService } from 'src/main/webapp/app/modules/services/common/acesso/perfil.service';
import { SORT_COLUMS } from 'src/main/webapp/app/modules/services/tables/sort-columns.service';
import { SortColumnDTO } from 'src/main/webapp/app/modules/shared/architecture/sort/sortcolumn.dto';
import { AcessoPerfilService } from '../../services/common/acesso/acesso-perfil.service';
import { ProgramaService } from '../../services/common/acesso/programa.service';

@Component({
    selector: 'app-perfil',
    templateUrl: './perfil.component.html',
    styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

    columns: Array<ColumnDTO>;
    sortColumns: Array<SortColumnDTO>;
    filterField: Array<string>;
    formConfig: Array<FormDTO>;
    detailFormConfig = new Array<any>();

    constructor(
        public perfilService: PerfilService,
        public programaService: ProgramaService,
        public acessoPerfilService: AcessoPerfilService) { }

    ngOnInit(): void {
        this.preencherColumns();
        this.preencherSortColumns();
        this.preencherFiltros();
        this.preencherForm();
    }

    preencherForm() {
        this.formConfig = [
            new FormDTO("idPerfil", "Id", "hidden", 12),
            new FormDTO("descricao", "Descrição", "text", 12)
        ];

        var acessoFormConfig = {
            tabHeader: "Acessos",
            service: this.acessoPerfilService,
            columns: COLUMNS['acessoPerfil'],
            formConfig: [
                new FormDTO("idAcesso", "Id", "hidden", 12),
                new FormDTO("programa", "Programa", "autocomplete", 4, { service: this.programaService }),
                new FormDTO("ler", "Ler", "switch", 2),
                new FormDTO("criar", "Criar", "switch", 2),
                new FormDTO("alterar", "Alterar", "switch", 2),
                new FormDTO("remover", "Remover", "switch", 2),
            ]
        };
        this.detailFormConfig.push(acessoFormConfig);
    }

    preencherColumns(): void {
        this.columns = COLUMNS['perfil'];
    }

    preencherSortColumns(): void {
        this.sortColumns = SORT_COLUMS['perfil'];
    }

    preencherFiltros(): void {
        this.filterField = FILTER_FIELDS['perfil'];
    }
}
