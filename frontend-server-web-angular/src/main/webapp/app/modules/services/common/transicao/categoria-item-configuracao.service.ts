import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CategoriaItemConfiguracaoDTO } from 'src/main/webapp/app/modules/shared/common/transicao/categoria-item-configuracao.dto';
import { CrudService } from 'src/main/webapp/app/modules/services/architecture/crud/crud.service';
import { TRANSICAO_SERVICE_V1 } from 'src/main/webapp/app/modules/services/architecture/config/api.config';

@Injectable({
    providedIn: 'root'
})
export class CategoriaItemConfiguracaoService extends CrudService<CategoriaItemConfiguracaoDTO, number> {

    constructor(protected HTTP: HttpClient) {
        super(HTTP, `${TRANSICAO_SERVICE_V1}/categoriaitemconfiguracao`);
    }
}
