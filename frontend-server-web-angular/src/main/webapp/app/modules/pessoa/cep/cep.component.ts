import { Component, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { CepService } from 'src/main/webapp/app/modules/services/common/pessoa/cep.service';
import { CidadeService } from '../../services/common/pessoa/cidade.service';
import { ColumnDTO } from 'src/main/webapp/app/modules/shared/architecture/table/column.dto';
import { FormDTO } from 'src/main/webapp/app/modules/shared/architecture/crud/form.dto';
import { SortColumnDTO } from 'src/main/webapp/app/modules/shared/architecture/sort/sortcolumn.dto';

import { COLUMNS } from 'src/main/webapp/app/modules/services/tables/columns.service';
import { FILTER_FIELDS } from 'src/main/webapp/app/modules/services/tables/filter-fields.service';
import { SORT_COLUMS } from 'src/main/webapp/app/modules/services/tables/sort-columns.service';

@Component({
    selector: 'app-cep',
    templateUrl: './cep.component.html',
    styleUrls: ['./cep.component.css']
})
export class CepComponent implements OnInit {

    columns: Array<ColumnDTO>;
    sortColumns: Array<SortColumnDTO>;
    filterField: Array<string>;
    formConfig: Array<FormDTO>;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        public cepService: CepService,
        public cidadeService: CidadeService) { }

    ngOnInit(): void {
        this.preencherColumns();
        this.preencherSortColumns();
        this.preencherFiltros();
        this.preencherForm();
    }

    preencherForm() {
        this.formConfig = [
            new FormDTO("idCep", "Id", "hidden", 12),
            new FormDTO("cep", "Cep", "mask", 6, { mask: "99999-999", doComplete: this.doCompleteCep }),
            new FormDTO("cidade", "Cidade", "autocomplete", 6, { service: this.cidadeService }),
            new FormDTO("logradouro", "Logradouro", "text", 12),
            new FormDTO("bairro", "Bairro", "text", 6),
            new FormDTO("ibge", "Cód. IBGE", "text", 6)
        ];
    }

    doCompleteCep = (cep: string) => {
        this.cepService.findOneViacep(cep).subscribe(item => {
            if(item !== undefined) {
                this.router.routeReuseStrategy.shouldReuseRoute = () => false;
                this.router.onSameUrlNavigation = 'reload';
                this.router.navigate(['../', item.id], { relativeTo: this.activatedRoute });
            }
        });
    };

    preencherColumns(): void {
        this.columns = COLUMNS['cep'];
    }

    preencherSortColumns(): void {
        this.sortColumns = SORT_COLUMS['cep'];
    }

    preencherFiltros(): void {
        this.filterField = FILTER_FIELDS['cep'];
    }
}
