import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CrudOperations } from '../../shared/architecture/crud-operations.interface';

export abstract class CrudService<T, ID> implements CrudOperations<T, ID> {

  constructor(
    protected HTTP: HttpClient,
    protected BASE: string
  ) {}

  findOne(id: ID): Observable<T> {
    return this.HTTP.get<T>(this.BASE + '/' + id);
  }

  findAll(): Observable<T[]> {
    return this.HTTP.get<T[]>(this.BASE);
  }

  save(t: T): Observable<T> {
    return this.HTTP.post<T>(this.BASE, t);
  }

  update(id: ID, t: T): Observable<T> {
    return this.HTTP.put<T>(this.BASE + '/' + id, t, {});
  }

  delete(id: ID): Observable<any> {
    return this.HTTP.delete(this.BASE + '/' + id);
  }
}
