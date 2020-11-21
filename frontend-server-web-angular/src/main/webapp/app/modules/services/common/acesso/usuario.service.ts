import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ACESSO_SERVICE_V1 } from 'src/main/webapp/app/modules/services/architecture/config/api.config';
import { CrudService } from 'src/main/webapp/app/modules/services/architecture/crud/crud.service';
import { UsuarioDTO } from 'src/main/webapp/app/modules/shared/common/acesso/usuario.dto';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService extends CrudService<UsuarioDTO, number> {

    constructor(protected HTTP: HttpClient) {
        super(HTTP, `${ACESSO_SERVICE_V1}/usuario`);
    }
}
