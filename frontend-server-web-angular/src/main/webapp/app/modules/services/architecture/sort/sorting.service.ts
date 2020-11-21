import { Injectable } from '@angular/core';

import { SortColumnDTO } from 'src/main/webapp/app/modules/shared/architecture/sort/sortcolumn.dto';

@Injectable({
    providedIn: 'root'
})
export class SortingService {

    constructor() { }

    public getSortableColumn(sortableColumns: SortColumnDTO[]): SortColumnDTO {
        return sortableColumns.find(
            column => column.direction != null
        );
    }

    public clearPreviousSorting(chosenColumn: SortColumnDTO, sortableColumns: SortColumnDTO[]) {
        sortableColumns.filter(
            column => column !== chosenColumn
        ).forEach(
            column => column.direction = null
        );
    }
}
