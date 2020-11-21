import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CrudService } from 'src/main/webapp/app/modules/services/architecture/crud/crud.service';
import { SortColumnDTO } from 'src/main/webapp/app/modules/shared/architecture/sort/sortcolumn.dto';
import { ColumnDTO } from 'src/main/webapp/app/modules/shared/architecture/table/column.dto';
import { FormDTO } from 'src/main/webapp/app/modules/shared/architecture/crud/form.dto';
import { Title } from '@angular/platform-browser';
import { RoutingService } from '../../../../services/architecture/routing/routing.service';
import { AuthenticationService } from '../../../../services/security/authentication.service';
import { UsuarioDTO } from '../../../../shared/common/acesso/usuario.dto';
import { AcessoDTO } from '../../../../shared/common/acesso/acesso.dto';

@Component({
    selector: 'app-crud',
    templateUrl: './crud.component.html',
    styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

    @Input()
    service: CrudService<any, number>;

    @Input()
    sortColumns: Array<SortColumnDTO>;

    @Input()
    columns: Array<ColumnDTO>;

    @Input()
    filterField: Array<string>;

    @Input()
    disableEdit = false;

    @Input()
    disableRemove = false;

    @Input()
    pageOptions = [10, 25, 50, 100, 200];

    @Input()
    auditable = true;

    @Input()
    persistable = true;

    @Input()
    formConfig: Array<FormDTO>;

    @Input()
    masterDetail = false;

    @Input()
    detailFormConfig: Array<any>;

    @Input()
    model: any;

    isListing: boolean;
    isFormulario: boolean;
    isSelectable = false;
    url: string;
    titleTag: string;
    currentUser: UsuarioDTO;
    acesso: AcessoDTO;

    constructor(
        private router: Router,
        private routingService: RoutingService,
        private activatedRoute: ActivatedRoute,
        private authenticationService: AuthenticationService) {

        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    ngOnInit(): void {
        this.preencherTitleTag();
        this.preencherPermissoes();

        let id = this.activatedRoute.snapshot.paramMap.get('id');
        if (id === null) {
            this.isListing = true;
            this.isFormulario = false;
            return;
        }
        else {
            if (id === "novo") {
                this.isListing = false;
                this.isFormulario = true;
                return;
            }
            else {
                this.isListing = false;
                this.isFormulario = true;
            }
        }
    }

    preencherPermissoes() {
        this.currentUser.perfil.acessos.forEach(acesso => {
            if(acesso.programa.sigla === this.titleTag) {
                this.acesso = acesso;
            }
        });
    }

    preencherTitleTag() {
        this.routingService.onChange.subscribe((value: any) => {
            if (value && value[value.length - 1] && value[value.length - 1].data) {
                const data = value[value.length - 1].data;

                this.titleTag = data.titleTag;
            }
        });
    }

    setListing(event: boolean) {
        this.isListing = event;
        if (event === false) {
            this.isFormulario = true;
        }
    }

    setFormulario(event: boolean) {
        this.isFormulario = event;
        if (event === false) {
            this.isListing = true;
        }
    }
}
