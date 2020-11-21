import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ACESSO_SERVICE_V1 } from '../architecture/config/api.config';
import { UsuarioDTO } from '../../shared/common/acesso/usuario.dto';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    private currentUserSubject: BehaviorSubject<UsuarioDTO>;
    public currentUser: Observable<UsuarioDTO>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<UsuarioDTO>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): UsuarioDTO {
        return this.currentUserSubject.value;
    }

    login(login: string, senha: string) {
        return this.http.post<any>(`${ACESSO_SERVICE_V1}/usuario/autenticacao`, { login, senha })
            .pipe(map(user => {
                user.authdata = window.btoa(login + ':' + senha);
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}