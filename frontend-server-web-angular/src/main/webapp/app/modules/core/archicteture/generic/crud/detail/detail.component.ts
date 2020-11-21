import { Component, Input, OnInit } from '@angular/core';

import { CrudService } from 'src/main/webapp/app/modules/services/architecture/crud/crud.service';
import { DetailService } from 'src/main/webapp/app/modules/services/architecture/detail/detail.service';
import { FormDTO } from 'src/main/webapp/app/modules/shared/architecture/crud/form.dto';
import { SortColumnDTO } from 'src/main/webapp/app/modules/shared/architecture/sort/sortcolumn.dto';
import { ColumnDTO } from 'src/main/webapp/app/modules/shared/architecture/table/column.dto';
import { AcessoDTO } from 'src/main/webapp/app/modules/shared/common/acesso/acesso.dto';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

    @Input()
    service: DetailService<any, number, number>;

    @Input()
    columns: Array<ColumnDTO>;

    @Input()
    disableEdit = false;

    @Input()
    disableRemove = false;

    @Input()
    auditable = true;

    @Input()
    persistable = true;

    @Input()
    formConfig: Array<FormDTO>;

    @Input()
    acesso: AcessoDTO;

    pageOptions = [5, 10, 15, 20, 30];
    masterDetail = false;
    isListing: boolean;
    isFormulario: boolean;
    isDetail = true;
    model = {};
    idDetail: number;

    ngOnInit(): void {
        this.isListing = true;
        this.isFormulario = false;
    }

    setIdDetail(event: number) {
        this.idDetail = event;
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
