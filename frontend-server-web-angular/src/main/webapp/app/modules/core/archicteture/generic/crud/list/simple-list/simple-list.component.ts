import { Location } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, Message, PrimeNGConfig } from 'primeng/api';
import { Table } from 'primeng/table';
import { CrudService } from 'src/main/webapp/app/modules/services/architecture/crud/crud.service';
import { DetailService } from 'src/main/webapp/app/modules/services/architecture/detail/detail.service';
import { AbstractDTO } from 'src/main/webapp/app/modules/shared/architecture/common/abstract.dto';
import { ColumnDTO } from 'src/main/webapp/app/modules/shared/architecture/table/column.dto';
import { AcessoDTO } from 'src/main/webapp/app/modules/shared/common/acesso/acesso.dto';

@Component({
    selector: 'app-simple-list',
    templateUrl: './simple-list.component.html',
    styleUrls: ['./simple-list.component.css']
})
export class SimpleListComponent implements OnInit {

    @Input()
    service: CrudService<any, number>;

    @Input()
    detailService: DetailService<any, number, number>;

    @Input()
    columns: Array<ColumnDTO>;

    @Input()
    disableEdit = false;

    @Input()
    disableRemove = false;

    @Input()
    pageOptions = [10, 25, 50, 100, 200];

    @Input()
    isDetail = false;

    @Input()
    acesso: AcessoDTO;

    @Output()
    isListing = new EventEmitter<boolean>();

    @Output()
    idDetail = new EventEmitter<number>();

    @ViewChild('dataTable')
    table: Table;

    msgs: Message[] = [];
    loading = false;
    url: string;
    content: Array<any>;
    totalRecords = 0;

    constructor(
        private router: Router,
        private location: Location,
        private activatedRoute: ActivatedRoute,
        private confirmationService: ConfirmationService) {

        this.url = this.router.url;
    }

    ngOnInit(): void {
        this.getData();
    }

    getData(): void {
        this.loading = true;

        if(this.isDetail === true) {
            var idParent = this.activatedRoute.snapshot.paramMap.get('id');

            this.detailService.findAllList(parseInt(idParent)).subscribe(data => {
                this.content = data;
                this.totalRecords = data.length;
                this.loading = false;
            }, error => {
                this.loading = false;
            });
        }
        else {
            this.service.findAllList().subscribe(data => {
                this.content = data;
                this.totalRecords = data.length;
                this.loading = false;
            }, error => {
                this.loading = false;
            });
        }
    }

    goForm(id: number): void {
        this.isListing.emit(false);
        this.idDetail.emit(id);
    }

    getValueFromItem(item: AbstractDTO, column: string): string {
        return this.getValueFromColumnWithoutObjects(item, [column], '');
    }

    getValueFromColumn(item: AbstractDTO, column: ColumnDTO): string {
        if (column.objects !== undefined) {
            return this.getValueFromColumnWithObjects(item, column.objects, column.attributes, column.separator);
        }
        return this.getValueFromColumnWithoutObjects(item, column.attributes, column.separator);
    }

    getValueFromColumnWithObjects(item: AbstractDTO, objects: Array<string>, attributes: Array<string>, separator: string): string {
        objects.forEach(object => {
            item = item[object];
        });
        return this.getValueFromColumnWithoutObjects(item, attributes, separator);
    }

    getValueFromColumnWithoutObjects(item: AbstractDTO, attributes: Array<string>, separator: string): string {
        let value = "";
        let i = 0;
        while (i < attributes.length) {
            value = value + item[attributes[i]];
            if (i + 1 < attributes.length) {
                value = value + " " + separator + " ";
            }
            i = i + 1;
        }
        return value === "undefined" ? "" : value;
    }

    confirmDelete(dto: AbstractDTO) {
        this.confirmationService.confirm({
            message: 'Voce tem certeza que quer remover o registro: ' + dto.id,
            header: 'Confirmacao',
            icon: 'pi pi-exclamation-triangle',
            acceptLabel: 'Sim',
            acceptButtonStyleClass: 'p-button-success',
            accept: () => {
                this.loading = true;
                if(this.isDetail) {
                    var idParent = this.activatedRoute.snapshot.paramMap.get('id');
                    this.detailService.delete(parseInt(idParent), dto.id).subscribe(data => {
                        this.loading = false;
                        this.msgs = [{ severity: 'success', summary: 'Sucesso', detail: 'Registro removido!' }];
                        this.getData();
                    }, data => {
                        this.loading = false;
                        this.msgs = [{ severity: 'error', summary: 'Erro', detail: 'Erro ao remover o registro!' }];
                    });
                }
                else {
                    this.service.delete(dto.id).subscribe(data => {
                        this.loading = false;
                        this.msgs = [{ severity: 'success', summary: 'Sucesso', detail: 'Registro removido!' }];
                        this.getData();
                    }, data => {
                        this.loading = false;
                        this.msgs = [{ severity: 'error', summary: 'Erro', detail: 'Erro ao remover o registro!' }];
                    });
                }
            },
            rejectLabel: 'Nao',
            rejectButtonStyleClass: 'p-button-danger'
        });
    }
}
