import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

import { PageDTO } from 'src/main/webapp/app/modules/shared/architecture/page/page.dto';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input()
  page: PageDTO<any>;

  @Output()
  nextPageEvent = new EventEmitter();

  @Output()
  previousPageEvent = new EventEmitter();

  @Output()
  pageSizeEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  nextPage(): void {
    this.nextPageEvent.emit(null);
  }

  previousPage(): void {
    this.previousPageEvent.emit(null);
  }

  updatePageSize(pageSize: number): void {
    this.pageSizeEvent.emit(pageSize);
  }
}
