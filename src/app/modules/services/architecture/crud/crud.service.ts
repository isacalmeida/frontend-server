import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CrudOperations } from '../../../shared/architecture/crud/crud-operations.interface';
import { PageDTO } from '../../../shared/architecture/page/page.dto';
import { PageableDTO } from 'src/app/modules/shared/architecture/page/pageable.dto';
import { SortColumnDTO } from '../../../shared/architecture/sort/sortcolumn.dto';

const httpOptions = {
  // headers: new HttpHeaders({
  //   'Content-Type': 'application/json',
  //   'Access-Control-Allow-Origin': '*'
  // })
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
    return this.HTTP.get<T>(this.BASE + '/' + id);
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

  private getSortParameters(sortColumn: SortColumnDTO): string {
    if (sortColumn !== undefined) {
      return '&sort=' + sortColumn.name + ',' + sortColumn.direction;
    }
  }
}
