import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CrudService } from 'src/main/webapp/app/modules/services/architecture/crud/crud.service';
import { StatusProblemaDTO } from '../../../shared/common/operacao/status-problema.dto';
import { OPERACAO_SERVICE_V1 } from 'src/main/webapp/app/modules/services/architecture/config/api.config';

@Injectable({
    providedIn: 'root'
})
export class StatusProblemaService extends CrudService<StatusProblemaDTO, number> {

    constructor(protected HTTP: HttpClient) {
        super(HTTP, `${OPERACAO_SERVICE_V1}/statusproblema`);
    }
}
