import { PageableDTO } from './pageable.dto';
import { SortDTO } from '../sort/sort.dto';

export class PageDTO<T> {
  content: Array<T>;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: PageableDTO;
  size: number;
  sort: SortDTO;
  totalElements: number;
  totalPages: number;

  constructor() {
    this.pageable = new PageableDTO();
  }
}
