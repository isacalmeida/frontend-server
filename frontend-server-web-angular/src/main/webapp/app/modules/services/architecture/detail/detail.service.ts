import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DetailOperations } from 'src/main/webapp/app/modules/shared/architecture/detail/detail-operations.interface';
import { PageDTO } from 'src/main/webapp/app/modules/shared/architecture/page/page.dto';
import { PageableDTO } from '../../../shared/architecture/page/pageable.dto';
import { SortColumnDTO } from '../../../shared/architecture/sort/sortcolumn.dto';

const httpOptions = {
    //  headers: new HttpHeaders({
    //    'Content-Type': 'application/json',
    //    'Access-Control-Allow-Origin': '*',
    //    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    //    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
    //    'Access-Control-Allow-Credentials': 'true'
    //  })
};

export abstract class DetailService<T, IDP, ID> implements DetailOperations<T, IDP, ID> {

    result: T;
    pageResult: PageDTO<T>;

    constructor(
        protected HTTP: HttpClient,
        protected BASE: string,
        protected DETAIL: string) {

        this.result = undefined;
        this.pageResult = undefined;
    }

    findAllObservable(idParent: IDP): Observable<PageDTO<T>> {
        return this.HTTP.get<PageDTO<T>>(this.BASE + '/' + idParent + '/' + this.DETAIL, httpOptions);
    }

    findPaged(idParent: IDP, pageable: PageableDTO, sortColumn: SortColumnDTO): Observable<PageDTO<T>> {
        const url = this.BASE + '/' + idParent + '/' + this.DETAIL
            + '?page=' + pageable.pageNumber
            + '&size=' + pageable.pageSize
            + this.getSortParameters(sortColumn);
        return this.HTTP.get<PageDTO<T>>(url, httpOptions);
    }

    findOne(idParent: IDP, id: ID): Observable<T> {
        return this.HTTP.get<T>(this.BASE + '/' + idParent + '/' + this.DETAIL + '/' + id);
    }

    findAll(idParent: IDP): Promise<PageDTO<T>> {
        const promisse = new Promise<PageDTO<T>>((resolve, reject) => {
            this.HTTP.get<PageDTO<T>>(this.BASE + '/' + idParent + '/' + this.DETAIL, httpOptions).toPromise().then(
                res => {
                    this.pageResult = res;
                    resolve();
                },
                msg => {
                    reject(msg);
                }
            );
        });
        return promisse;
    }

    findAllList(idParent: IDP): Observable<Array<T>> {
        return this.HTTP.get<Array<T>>(this.BASE + '/' + idParent + '/' + this.DETAIL + '/all', httpOptions);
    }

    save(idParent: IDP, t: T): Observable<T> {
        return this.HTTP.post<T>(this.BASE + '/' + idParent + '/' + this.DETAIL, t, httpOptions);
    }

    update(idParent: IDP, id: ID, t: T): Observable<T> {
        return this.HTTP.put<T>(this.BASE + '/' + idParent + '/' + this.DETAIL + '/' + id, t, httpOptions);
    }

    delete(idParent: IDP, id: ID): Observable<any> {
        return this.HTTP.delete(this.BASE + '/' + idParent + '/' + this.DETAIL + '/' + id, httpOptions);
    }

    private getSortParameters(sortColumn: SortColumnDTO): string {
        if (sortColumn !== undefined) {
            return '&sort=' + sortColumn.name + ',' + sortColumn.direction;
        }
    }
}
