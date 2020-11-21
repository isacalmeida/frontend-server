import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CrudService } from 'src/main/webapp/app/modules/services/architecture/crud/crud.service';
import { StatusItemConfiguracaoDTO } from '../../../shared/common/transicao/status-item-configuracao.dto';
import { TRANSICAO_SERVICE_V1 } from 'src/main/webapp/app/modules/services/architecture/config/api.config';

@Injectable({
    providedIn: 'root'
})
export class StatusItemConfiguracaoService extends CrudService<StatusItemConfiguracaoDTO, number> {

    constructor(protected HTTP: HttpClient) {
        super(HTTP, `${TRANSICAO_SERVICE_V1}/statusitemconfiguracao`);
    }
}
