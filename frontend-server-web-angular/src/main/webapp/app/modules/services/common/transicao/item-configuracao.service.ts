import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CrudService } from 'src/main/webapp/app/modules/services/architecture/crud/crud.service';
import { ItemConfiguracaoDTO } from 'src/main/webapp/app/modules/shared/common/transicao/item-configuracao.dto';
import { TRANSICAO_SERVICE_V1 } from 'src/main/webapp/app/modules/services/architecture/config/api.config';

@Injectable({
    providedIn: 'root'
})
export class ItemConfiguracaoService extends CrudService<ItemConfiguracaoDTO, number> {

    constructor(protected HTTP: HttpClient) {
        super(HTTP, `${TRANSICAO_SERVICE_V1}/itemconfiguracao`);
    }
}
