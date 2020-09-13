import { Observable } from 'rxjs';

export interface CrudOperations<T, ID> {
  findOne(id: ID): Observable<T>;
  findAll(): Observable<T[]>;
  save(t: T): Observable<T>;
  update(id: ID, t: T): Observable<T>;
  delete(id: ID): Observable<any>;
}
