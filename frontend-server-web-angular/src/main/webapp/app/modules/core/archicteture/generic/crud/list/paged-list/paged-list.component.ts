import { Component, Input, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ConfirmationService, LazyLoadEvent } from 'primeng/api';
import { Message } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { Table } from 'primeng/table';

import { AbstractDTO } from 'src/main/webapp/app/modules/shared/architecture/common/abstract.dto';
import { ColumnDTO } from 'src/main/webapp/app/modules/shared/architecture/table/column.dto';
import { CrudService } from 'src/main/webapp/app/modules/services/architecture/crud/crud.service';
import { PaginationService } from 'src/main/webapp/app/modules/services/architecture/page/pagination.service';
import { PageDTO } from 'src/main/webapp/app/modules/shared/architecture/page/page.dto';
import { SortingService } from 'src/main/webapp/app/modules/services/architecture/sort/sorting.service';
import { SortColumnDTO } from 'src/main/webapp/app/modules/shared/architecture/sort/sortcolumn.dto';
import { AcessoDTO } from 'src/main/webapp/app/modules/shared/common/acesso/acesso.dto';

@Component({
    selector: 'app-paged-list',
    templateUrl: './paged-list.component.html',
    styleUrls: ['./paged-list.component.css']
})
export class PagedListComponent implements OnInit {

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
    disableCreate = false;
    @Input()
    pageOptions = [10, 25, 50, 100, 200];
    @Input()
    selectable = false;
    @Input()
    acesso: AcessoDTO;

    @Output()
    isListing = new EventEmitter<boolean>();

    @Output()
    selectedValue: EventEmitter<number> = new EventEmitter();
    @Output()
    unselectedValue: EventEmitter<number> = new EventEmitter();

    @ViewChild('dataTable')
    table: Table;

    itemSelected: any;
    containerPort: number;
    msgs: Message[] = [];
    page: PageDTO<any> = new PageDTO();
    loading = false;
    url: string;
    totalRecords: number;

    constructor(
        private router: Router,
        private location: Location,
        private paginationService: PaginationService,
        private sortingService: SortingService,
        private confirmationService: ConfirmationService,
        private primengConfig: PrimeNGConfig) {

        this.url = this.router.url;
    }

    ngOnInit(): void {
        this.popularPermissoes();
        this.popularContainerPort();
        this.primengConfig.ripple = true;
        this.isListing.emit(true);
    }

    popularPermissoes(): void {
        if(this.acesso === undefined) {
            return;
        }
        if(this.acesso.ler === false) {
            this.msgs = [{ severity: 'error', summary: 'Erro', detail: 'Você não possui permissão para acessar o programa!' }];
            return;
        }

        this.disableEdit = !this.acesso.alterar;
        this.disableRemove = !this.acesso.remover;
        this.disableCreate = !this.acesso.criar;
    }

    onRowSelect(event: any) {
        this.selectedValue.emit(event.data.id);
    }

    onRowUnselect(event: any) {
        this.unselectedValue.emit(event.data.id);
    }

    popularContainerPort(): void {
        this.service.getPort().subscribe(port => {
            this.containerPort = port;
        });
    }

    goForm(id: number): void {
        this.isListing.emit(false);
        if (id !== undefined) {
            this.router.navigate([this.url, id]);
        } else {
            this.router.navigate([this.url, 'novo']);
        }
    }

    goBack(): void {
        this.isListing.emit(false);
        this.location.back();
    }

    confirmDelete(dto: AbstractDTO) {
        this.confirmationService.confirm({
            message: 'Voce tem certeza que quer remover o registro: ' + dto.id,
            header: 'Confirmacao',
            icon: 'pi pi-exclamation-triangle',
            acceptLabel: 'Sim',
            acceptButtonStyleClass: 'p-button-success',
            accept: () => {
                this.service.delete(dto.id).subscribe(data => {
                    this.msgs = [{ severity: 'success', summary: 'Sucesso', detail: 'Registro removido!' }];
                    this.getData();
                }, data => {
                    this.msgs = [{ severity: 'error', summary: 'Erro', detail: 'Erro ao remover o registro!' }];
                });
            },
            rejectLabel: 'Nao',
            rejectButtonStyleClass: 'p-button-danger'
        });
    }

    getData(): void {
        this.loading = true;

        const column = this.sortingService.getSortableColumn(this.sortColumns);
        this.service.findPaged(this.page.pageable, column).subscribe(page => {

            this.page = page;
            this.totalRecords = page.totalElements;
            this.loading = false;
        }, dataError => {

            this.msgs = [{ severity: 'error', summary: dataError.statusText, detail: dataError.message }];
            this.loading = false;
        });
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

    public sort(sortColumn: SortColumnDTO): void {
        this.sortingService.clearPreviousSorting(sortColumn, this.sortColumns);
        this.getData();
    }

    loadRegisters(event: LazyLoadEvent): void {
        const oldPageSize = this.page.pageable.pageSize;
        const newPageSize = event.rows;
        if (oldPageSize !== newPageSize) {
            this.page.pageable = this.paginationService.getPageInNewSize(this.page, newPageSize);
        }

        const oldPage = this.page.pageable.pageNumber;
        const newPage = event.first / event.rows;
        if (oldPage !== newPage) {
            this.page.pageable = this.paginationService.getPageByPageNumber(this.page, newPage);
        }

        this.getData();
    }
}
