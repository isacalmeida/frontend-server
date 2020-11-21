import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ACESSO_SERVICE_V1 } from 'src/main/webapp/app/modules/services/architecture/config/api.config';
import { DetailService } from 'src/main/webapp/app/modules/services/architecture/detail/detail.service';
import { AcessoDTO } from 'src/main/webapp/app/modules/shared/common/acesso/acesso.dto';

@Injectable({
    providedIn: 'root'
})
export class AcessoPerfilService extends DetailService<AcessoDTO, number, number> {

    constructor(protected HTTP: HttpClient) {
        super(HTTP, `${ACESSO_SERVICE_V1}/perfil`, 'acesso');
    }
}
