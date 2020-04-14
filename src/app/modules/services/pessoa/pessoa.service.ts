import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pessoa } from '../../shared/common/pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private pessoaUri = 'api/v1/pessoa'
  constructor() { }

  getPessoa(): Observable<Pessoa[]> {
    return of(PESSOA);
  }
}
