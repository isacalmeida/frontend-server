import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PessoaFisicaDTO } from '../../shared/common/pessoa/pessoa-fisica.dto';
import { CrudService } from '../crud/crud.service';

@Injectable({
  providedIn: 'root'
})
export class PessoaFisicaService extends CrudService<PessoaFisicaDTO, number> {

  constructor(protected HTTP: HttpClient) {
    super(HTTP, '/api/v1/pessoa/pessoafisica');
  }
}
