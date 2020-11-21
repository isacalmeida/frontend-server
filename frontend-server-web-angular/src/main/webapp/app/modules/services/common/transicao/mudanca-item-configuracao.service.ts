import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DetailService } from 'src/main/webapp/app/modules/services/architecture/detail/detail.service';
import { MudancaItemConfiguracaoDTO } from 'src/main/webapp/app/modules/shared/common/transicao/mudanca-item-configuracao.dto';
import { TRANSICAO_SERVICE_V1 } from 'src/main/webapp/app/modules/services/architecture/config/api.config';

@Injectable({
    providedIn: 'root'
})
export class MudancaItemConfiguracaoService extends DetailService<MudancaItemConfiguracaoDTO, number, number> {

    constructor(protected HTTP: HttpClient) {
        super(HTTP, `${TRANSICAO_SERVICE_V1}/mudanca`, 'itemconfiguracao');
    }
}
