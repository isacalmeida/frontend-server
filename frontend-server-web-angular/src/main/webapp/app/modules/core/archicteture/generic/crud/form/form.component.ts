import { Component, OnInit, EventEmitter, Output, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

import { Message } from 'primeng/api';

import { CrudService } from 'src/main/webapp/app/modules/services/architecture/crud/crud.service';
import { DetailService } from 'src/main/webapp/app/modules/services/architecture/detail/detail.service';
import { FormDTO } from 'src/main/webapp/app/modules/shared/architecture/crud/form.dto';
import { RoutingState } from 'src/main/webapp/app/modules/services/architecture/routing/routing-state.service';
import { AuthenticationService } from 'src/main/webapp/app/modules/services/security/authentication.service';
import { UsuarioDTO } from 'src/main/webapp/app/modules/shared/common/acesso/usuario.dto';
import { AcessoDTO } from 'src/main/webapp/app/modules/shared/common/acesso/acesso.dto';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

    @Input()
    service: CrudService<any, number>;

    @Input()
    detailService: DetailService<any, number, number>;

    @Input()
    auditable: boolean;

    @Input()
    persistable: boolean;

    @Input()
    formConfig: Array<FormDTO>;

    @Output()
    isFormulario = new EventEmitter<boolean>();

    @Input()
    masterDetail: boolean;

    @Input()
    detailFormConfig: Array<any>;

    @Input()
    isDetail = false;

    @Input()
    idDetail: number;

    @Input()
    model: any;

    @Input()
    acesso: AcessoDTO;

    id: number;
    novo = false;
    erro = false;
    loading = false;
    msgs: Message[] = [];
    previousRoute: string;

    auditFields: Array<FormDTO>;
    persistFields: Array<FormDTO>;

    currentUser: UsuarioDTO;

    constructor(
        private router: Router,
        private location: Location,
        private routingState: RoutingState,
        private activatedRoute: ActivatedRoute,
        private authenticationService: AuthenticationService) {

        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    ngOnInit(): void {
        if(this.model === undefined) {
            this.model = {};
        }
        this.isFormulario.emit(true);
        this.doId();
        this.makePersistForm();
        this.makeAuditForm();
        this.makeDefaultValue();
        this.previousRoute = this.routingState.getPreviousUrl();
    }

    makePersistForm(): void {
        this.persistFields = [
            new FormDTO("isAtivo", "Ativo", "switch", 2, { defaultValue: true }),
            new FormDTO("isCancelado", "Cancelado", "switch", 2, { defaultValue: false }),
            new FormDTO("isExcluido", "Excluido", "switch", 2, { defaultValue: false })
        ];
    }

    makeAuditForm(): void {
        this.auditFields = [
            new FormDTO("dataCriacao", "Data Criação", "datetime", 3, { defaultValue: new Date() }),
            new FormDTO("usuarioCriacao", "Usuário Criação", "text", 3, { defaultValue: this.currentUser.login }),
            new FormDTO("dataAlteracao", "Data Alteração", "datetime", 3),
            new FormDTO("usuarioAlteracao", "Usuário Alteração", "text", 3)
        ];
    }

    makeDefaultValue() {
        if(this.novo !== true) {
            return;
        }

        this.persistFields.forEach(field => {
            if (field.type === "datetime" && field.defaultValue !== undefined) {
                this.model[field.attribute] = new Date(Date.parse(field.defaultValue))
            }
            else {
                this.model[field.attribute] = field.defaultValue;
            }
        });

        this.auditFields.forEach(field => {
            if (field.type === "datetime" && field.defaultValue !== undefined) {
                this.model[field.attribute] = new Date(Date.parse(field.defaultValue));
            }
            else {
                this.model[field.attribute] = field.defaultValue;
            }
        });

        this.formConfig.forEach(field => {
            if (field.type === "datetime" && field.defaultValue !== undefined) {
                this.model[field.attribute] = new Date(Date.parse(field.defaultValue))
            }
            else {
                this.model[field.attribute] = field.defaultValue;
            }
        });
    }

    doId(): void {
        if(this.isDetail === true && this.idDetail === undefined) {
            this.makeAuditForm();
            this.makePersistForm();
            return;
        }

        let id = this.activatedRoute.snapshot.paramMap.get('id');
        
        if(this.idDetail !== undefined) {
            this.loading = true;
            this.detailService.findOne(parseInt(id), this.idDetail).subscribe(item => {
                this.popularForm(item);
                this.loading = false;
            }, error => {
                this.msgs = [{ severity: 'error', summary: 'Erro', detail: 'Erro ao buscar o registro!' }];
                this.loading = false;
                this.erro = false;
            });
            return;
        }

        if (id === "novo") {
            this.novo = true;
        }
        else {
            this.id = parseInt(id);
            if (isNaN(this.id)) {
                this.goBack();
            }
            else {
                this.loading = true;
                this.service.findOne(this.id).subscribe(item => {
                    this.popularForm(item);
                    this.loading = false;
                }, error => {
                    this.msgs = [{ severity: 'error', summary: 'Erro', detail: 'Erro ao buscar o registro!' }];
                    this.loading = false;
                    this.erro = false;
                });
            }
        }
    }

    popularForm(item: any): void {
        if (this.auditable) {
            this.auditFields.forEach(field => {
                if (field.type === "datetime" && item[field.attribute] !== undefined) {
                    this.model[field.attribute] = new Date(Date.parse(item[field.attribute]))
                }
                else {
                    this.model[field.attribute] = item[field.attribute];
                }
            });
        }

        if (this.persistable) {
            this.persistFields.forEach(field => {
                if (field.type === "datetime" && item[field.attribute] !== undefined) {
                    this.model[field.attribute] = new Date(Date.parse(item[field.attribute]))
                }
                else {
                    this.model[field.attribute] = item[field.attribute];
                }
            });
        }

        this.formConfig.forEach(field => {
            if (field.type === "datetime" && item[field.attribute] !== undefined) {
                this.model[field.attribute] = new Date(Date.parse(item[field.attribute]))
            }
            else {
                this.model[field.attribute] = item[field.attribute];
            }
        });

        this.model['id'] = item['id'];
    }

    goBack(): void {
        this.isFormulario.emit(false);
        if(this.isDetail !== true) {
            this.location.back();
        }
    }

    salvar(): void {
        this.loading = true;
        let id = this.activatedRoute.snapshot.paramMap.get('id');
        if(this.isDetail === true) {
            if(this.idDetail === undefined) {
                this.detailService.save(parseInt(id), this.model).subscribe(success => {
                    this.msgs = [{ severity: 'success', summary: 'Sucesso', detail: 'Registro incluído!' }];
                    this.loading = false;
                    this.popularForm(success);
                    this.goToId(success.id);
                }, error => {
                    this.loading = false;
                    this.msgs = [{ severity: 'error', summary: error.status, detail: error.error.message }];
                });
            }
            else {
                this.model['usuarioAlteracao'] = this.currentUser.login;
                this.detailService.update(parseInt(id), this.model['id'], this.model).subscribe(success => {
                    this.msgs = [{ severity: 'success', summary: 'Sucesso', detail: 'Registro atualizado!' }];
                    this.loading = false;
                    this.popularForm(success);
                }, error => {
                    this.loading = false;
                    this.msgs = [{ severity: 'error', summary: error.status, detail: error.message }];
                });
            }
            return;
        }
        
        this.loading = true;
        if (this.novo === true) {
            this.service.save(this.model).subscribe(success => {
                this.msgs = [{ severity: 'success', summary: 'Sucesso', detail: 'Registro incluído!' }];
                this.loading = false;
                this.popularForm(success);
                this.goToId(success.id);
            }, error => {
                this.loading = false;
                this.msgs = [{ severity: 'error', summary: error.status, detail: error.error.message }];
            });
        }
        else {
            this.model['usuarioAlteracao'] = this.currentUser.login;
            this.service.update(this.model['id'], this.model).subscribe(success => {
                this.msgs = [{ severity: 'success', summary: 'Sucesso', detail: 'Registro atualizado!' }];
                this.loading = false;
                this.popularForm(success);
            }, error => {
                this.loading = false;
                this.msgs = [{ severity: 'error', summary: error.status, detail: error.message }];
            });
        }
    }

    goToId(id: number): void {
        if(this.novo === true) {
            this.router.navigate([this.previousRoute, id]);
            this.novo = false;
        }
    }
}
