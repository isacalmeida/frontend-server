import { SortDTO } from '../sort/sort.dto';

export class PageableDTO {
  static readonly DEFAULT_PAGE_SIZE = 10;
  static readonly FIRST_PAGE_NUMBER = 0;

  sort: SortDTO;
  pageSize: number;
  pageNumber: number;
  offset: number;
  unpaged: boolean;
  paged: boolean;

  constructor() {
    this.pageSize = PageableDTO.DEFAULT_PAGE_SIZE;
    this.pageNumber = PageableDTO.FIRST_PAGE_NUMBER;
  }
}
