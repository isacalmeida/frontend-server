import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CrudService } from 'src/main/webapp/app/modules/services/architecture/crud/crud.service';
import { OPERACAO_SERVICE_V1 } from 'src/main/webapp/app/modules/services/architecture/config/api.config';
import { RequisicaoDTO } from 'src/main/webapp/app/modules/shared/common/operacao/requisicao.dto';

@Injectable({
    providedIn: 'root'
})
export class RequisicaoService extends CrudService<RequisicaoDTO, number> {

    constructor(protected HTTP: HttpClient) {
        super(HTTP, `${OPERACAO_SERVICE_V1}/requisicao`);
    }
}
