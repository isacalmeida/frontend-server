import { Injectable } from '@angular/core';
import { PageDTO } from '../../../shared/architecture/page/page.dto';
import { PageableDTO } from '../../../shared/architecture/page/pageable.dto';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  constructor() { }

  public getNextPage(page: PageDTO<any>): PageableDTO {
    if (!page.last) {
      page.pageable.pageNumber = page.pageable.pageNumber + 1;
    }
    return page.pageable;
  }

  public getPreviousPage(page: PageDTO<any>): PageableDTO {
    if (!page.first) {
      page.pageable.pageNumber = page.pageable.pageNumber - 1;
    }
    return page.pageable;
  }

  public getPageByPageNumber(page: PageDTO<any>, pageNumber: number): PageableDTO {
    page.pageable.pageNumber = pageNumber;
    return page.pageable;
  }

  public getPageInNewSize(page: PageDTO<any>, pageSize: number): PageableDTO {
    page.pageable.pageSize = pageSize;
    page.pageable.pageNumber = PageableDTO.FIRST_PAGE_NUMBER;
    return page.pageable;
  }
}
