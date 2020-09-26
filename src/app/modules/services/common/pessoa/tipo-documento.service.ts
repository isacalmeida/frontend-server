import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TipoDocumentoDTO } from '../../../shared/common/pessoa/tipo-documento.dto';
import { CrudService } from '../../architecture/crud/crud.service';
import { PESSOA_SERVICE_V1 } from '../../architecture/config/api.config';

@Injectable({
  providedIn: 'root'
})
export class TipoDocumentoService extends CrudService<TipoDocumentoDTO, number> {

  constructor(protected HTTP: HttpClient) {
    super(HTTP, `${PESSOA_SERVICE_V1}/tipodocumento`);
  }
}
