import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
    //  headers: new HttpHeaders({
    //    'Content-Type': 'application/json',
    //    'Access-Control-Allow-Origin': '*',
    //    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    //    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
    //    'Access-Control-Allow-Credentials': 'true'
    //  })
};

@Injectable({
    providedIn: 'root'
})
export class ExecutarMigrationService {

    URI = "sistemautils/configurar/enum/service";

    constructor(
        protected HTTP: HttpClient) { }

    executar(baseUrl: string, enumService: string): Observable<any> {
        return this.HTTP.get<any>(baseUrl + '/' + this.URI + '/' + enumService, httpOptions);
    }
}
