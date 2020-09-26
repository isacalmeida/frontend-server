import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { CrudService } from 'src/app/modules/services/architecture/crud/crud.service';
import { SortColumnDTO } from 'src/app/modules/shared/architecture/sort/sortcolumn.dto';
import { ColumnDTO } from 'src/app/modules/shared/architecture/table/column.dto';

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

  isListing: boolean;
  isFormulario: boolean;

  constructor(
    private router: Router,
    private location: Location
  ) { }

  ngOnInit(): void {
    console.log(this.router);
    console.log(this.location);
    this.isListing = true;
    this.isFormulario = false;
  }

  setListing(event: EventEmitter) {
    console.log(event);
  }
}
