import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CrudOperations } from 'src/main/webapp/app/modules/shared/architecture/crud/crud-operations.interface';
import { PageDTO } from 'src/main/webapp/app/modules/shared/architecture/page/page.dto';
import { PageableDTO } from 'src/main/webapp/app/modules/shared/architecture/page/pageable.dto';
import { SortColumnDTO } from 'src/main/webapp/app/modules/shared/architecture/sort/sortcolumn.dto';

const httpOptions = {
    //  headers: new HttpHeaders({
    //    'Content-Type': 'application/json',
    //    'Access-Control-Allow-Origin': '*',
    //    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    //    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
    //    'Access-Control-Allow-Credentials': 'true'
    //  })
};

export abstract class CrudService<T, ID> implements CrudOperations<T, ID> {

    result: T;
    pageResult: PageDTO<T>;

    constructor(
        protected HTTP: HttpClient,
        protected BASE: string) {

        this.result = undefined;
        this.pageResult = undefined;
    }

    findAllObservable(): Observable<PageDTO<T>> {
        return this.HTTP.get<PageDTO<T>>(this.BASE, httpOptions);
    }

    findPaged(pageable: PageableDTO, sortColumn: SortColumnDTO): Observable<PageDTO<T>> {
        const url = this.BASE
            + '?page=' + pageable.pageNumber
            + '&size=' + pageable.pageSize
            + this.getSortParameters(sortColumn);
        return this.HTTP.get<PageDTO<T>>(url, httpOptions);
    }

    findOne(id: ID): Observable<T> {
        return this.HTTP.get<T>(this.BASE + '/' + id, httpOptions);
    }

    findAllList(): Observable<T[]> {
        return this.HTTP.get<Array<T>>(this.BASE + '/all', httpOptions);
    }

    findAll() {
        const promisse = new Promise<PageDTO<T>>((resolve, reject) => {
            this.HTTP.get<PageDTO<T>>(this.BASE, httpOptions).toPromise().then(
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

    save(t: T): Observable<T> {
        return this.HTTP.post<T>(this.BASE, t, httpOptions);
    }

    update(id: ID, t: T): Observable<T> {
        return this.HTTP.put<T>(this.BASE + '/' + id, t, httpOptions);
    }

    delete(id: ID): Observable<any> {
        return this.HTTP.delete(this.BASE + '/' + id, httpOptions);
    }

    getPort(): Observable<number> {
        return this.HTTP.get<number>(this.BASE + '/environment/port', httpOptions);
    }

    private getSortParameters(sortColumn: SortColumnDTO): string {
        if (sortColumn !== undefined) {
            return '&sort=' + sortColumn.name + ',' + sortColumn.direction;
        }
    }
}
