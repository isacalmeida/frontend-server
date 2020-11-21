import { Observable } from 'rxjs';
import { PageDTO } from '../page/page.dto';
import { PageableDTO } from '../page/pageable.dto';
import { SortColumnDTO } from '../sort/sortcolumn.dto';

export interface DetailOperations<T, IDP, ID> {
    findOne(idParent: IDP, id: ID): Observable<T>;
    findPaged(idParent: IDP, pageable: PageableDTO, sortColumn: SortColumnDTO): Observable<PageDTO<T>>;
    findAll(idParent: IDP): Promise<PageDTO<T>>;
    findAllObservable(idParent: IDP): Observable<PageDTO<T>>;
    findAllList(idParent: IDP): Observable<Array<T>>;
    save(idParent: IDP, t: T): Observable<T>;
    update(idParent: IDP, id: ID, t: T): Observable<T>;
    delete(idParent: IDP, id: ID): Observable<any>;
}