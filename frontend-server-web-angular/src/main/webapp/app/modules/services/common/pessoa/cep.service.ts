import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CepDTO } from 'src/main/webapp/app/modules/shared/common/pessoa/cep.dto';
import { CrudService } from 'src/main/webapp/app/modules/services/architecture/crud/crud.service';
import { PESSOA_SERVICE_V1 } from 'src/main/webapp/app/modules/services/architecture/config/api.config';

@Injectable({
    providedIn: 'root'
})
export class CepService extends CrudService<CepDTO, number> {

    constructor(protected HTTP: HttpClient) {
        super(HTTP, `${PESSOA_SERVICE_V1}/cep`);
    }

    findOneViacep(cep: string): Observable<CepDTO> {
        return this.HTTP.get<CepDTO>(this.BASE + '/find/' + cep + "/viacep");
    }
}
