import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SortColumnDTO } from 'src/main/webapp/app/modules/shared/architecture/sort/sortcolumn.dto';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.css']
})
export class SortingComponent implements OnInit {

  @Input()
  sortableColumns: Array<SortColumnDTO>;

  @Output()
  sortEvent: EventEmitter<SortColumnDTO> = new EventEmitter<SortColumnDTO>();

  constructor() { }

  ngOnInit(): void {
  }

  sort(sortColumn: SortColumnDTO): void {
    sortColumn.toggleDirection();
    this.sortEvent.emit(sortColumn);
  }
}
