import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PessoaFisicaDTO } from '../../../shared/common/pessoa/pessoa-fisica.dto';
import { CrudService } from '../../architecture/crud/crud.service';
import { PESSOA_SERVICE_V1 } from '../../architecture/config/api.config';

@Injectable({
  providedIn: 'root'
})
export class PessoaFisicaService extends CrudService<PessoaFisicaDTO, number> {

  constructor(protected HTTP: HttpClient) {
    super(HTTP, `${PESSOA_SERVICE_V1}/pessoa/pessoafisica`);
  }
}
