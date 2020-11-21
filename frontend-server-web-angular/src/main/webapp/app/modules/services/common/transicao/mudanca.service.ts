import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CrudService } from 'src/main/webapp/app/modules/services/architecture/crud/crud.service';
import { MudancaDTO } from 'src/main/webapp/app/modules/shared/common/transicao/mudanca.dto';
import { TRANSICAO_SERVICE_V1 } from 'src/main/webapp/app/modules/services/architecture/config/api.config';

@Injectable({
    providedIn: 'root'
})
export class MudancaService extends CrudService<MudancaDTO, number> {

    constructor(protected HTTP: HttpClient) {
        super(HTTP, `${TRANSICAO_SERVICE_V1}/mudanca`);
    }
}
