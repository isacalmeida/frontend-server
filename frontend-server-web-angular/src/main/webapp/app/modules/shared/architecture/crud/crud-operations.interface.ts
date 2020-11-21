import { Observable } from 'rxjs';

import { PageDTO } from '../page/page.dto';
import { PageableDTO } from '../page/pageable.dto';
import { SortColumnDTO } from '../sort/sortcolumn.dto';

export interface CrudOperations<T, ID> {
    findOne(id: ID): Observable<T>;
    findPaged(pageable: PageableDTO, sortColumn: SortColumnDTO): Observable<PageDTO<T>>;
    findAll(): Promise<PageDTO<T>>;
    findAllObservable(): Observable<PageDTO<T>>;
    findAllList(): Observable<Array<T>>;
    save(t: T): Observable<T>;
    update(id: ID, t: T): Observable<T>;
    delete(id: ID): Observable<any>;
}
