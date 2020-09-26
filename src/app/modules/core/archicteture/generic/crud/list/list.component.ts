import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { ConfirmationService, LazyLoadEvent } from 'primeng/api';
import { Message } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { Table } from 'primeng/table';

import { AbstractDTO } from 'src/app/modules/shared/architecture/common/abstract.dto';
import { ColumnDTO } from 'src/app/modules/shared/architecture/table/column.dto';
import { CrudService } from 'src/app/modules/services/architecture/crud/crud.service';
import { PaginationService } from 'src/app/modules/services/architecture/page/pagination.service';
import { PageDTO } from 'src/app/modules/shared/architecture/page/page.dto';
import { SortingService } from 'src/app/modules/services/architecture/sort/sorting.service';
import { SortColumnDTO } from 'src/app/modules/shared/architecture/sort/sortcolumn.dto';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

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

  @ViewChild('dataTable')
  table: Table;

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
    this.getData();
    this.primengConfig.ripple = true;
  }

  goBack(): void {
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

  getValueFromColumn(item: AbstractDTO, column: ColumnDTO): string {
    if (column.objects !== null) {
      return this.getValueFromColumnWithObjects(item, column.objects, column.attributes, column.separator);
    }
    return this.getValueFromColumnWithoutObjects(item, column.attributes, column.separator);
  }

  getValueFromColumnWithObjects(item: AbstractDTO, objects: Array<string>, attributes: Array<string>, separator: string): string {
    let value = '';
    let i = 0;
    while (i < objects.length) {
      value = value + this.getValueFromColumnWithoutObjects(item[objects[i]], attributes, separator);
      if (i + 1 < objects.length) {
        value = value + ' ' + separator + ' ';
      }
      i = i + 1;
    }
    return value;
  }

  getValueFromColumnWithoutObjects(item: AbstractDTO, attributes: Array<string>, separator: string): string {
    let value = '';
    let i = 0;
    while (i < attributes.length) {
      value = value + item[attributes[i]];
      if (i + 1 < attributes.length) {
        value = value + ' ' + separator + ' ';
      }
      i = i + 1;
    }
    return value;
  }

  public sort(sortColumn: SortColumnDTO): void {
    this.sortingService.clearPreviousSorting(sortColumn, this.sortColumns);
    this.getData();
  }

  loadRegisters(event: LazyLoadEvent): void {
    const oldPageSize = this.page.pageable.pageSize;
    const newPageSize =  event.rows;
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
