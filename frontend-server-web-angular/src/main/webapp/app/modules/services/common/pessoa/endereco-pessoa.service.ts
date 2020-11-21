import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { EnderecoDTO } from 'src/main/webapp/app/modules/shared/common/pessoa/endereco.dto';
import { DetailService } from 'src/main/webapp/app/modules/services/architecture/detail/detail.service';
import { PESSOA_SERVICE_V1 } from 'src/main/webapp/app/modules/services/architecture/config/api.config';

@Injectable({
    providedIn: 'root'
})
export class EnderecoPessoaService extends DetailService<EnderecoDTO, number, number> {

    constructor(protected HTTP: HttpClient) {
        super(HTTP, `${PESSOA_SERVICE_V1}/pessoa`, 'endereco');
    }
}
