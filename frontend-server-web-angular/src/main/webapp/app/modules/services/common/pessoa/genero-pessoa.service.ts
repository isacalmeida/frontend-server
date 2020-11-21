import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { GeneroPessoaDTO } from 'src/main/webapp/app/modules/shared/common/pessoa/genero-pessoa.dto';
import { CrudService } from 'src/main/webapp/app/modules/services/architecture/crud/crud.service';
import { PESSOA_SERVICE_V1 } from 'src/main/webapp/app/modules/services/architecture/config/api.config';

@Injectable({
    providedIn: 'root'
})
export class GeneroPessoaService extends CrudService<GeneroPessoaDTO, number> {

    constructor(protected HTTP: HttpClient) {
        super(HTTP, `${PESSOA_SERVICE_V1}/generopessoa`);
    }
}
