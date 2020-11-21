import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SidebarDTO } from 'src/main/webapp/app/modules/shared/architecture/sidebar/sidebar.dto';
import { AuthenticationService } from '../../services/security/authentication.service';
import { UsuarioDTO } from '../../shared/common/acesso/usuario.dto';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

    currentUser: UsuarioDTO;
    sidebars: Array<SidebarDTO>;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService) {

        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    ngOnInit(): void {
        this.sidebars = [
            new SidebarDTO('Dashboard', '/', 'fas fa-tachometer-alt'),
            new SidebarDTO('Acesso', 'acesso', 'fas fa-user-cog'),
            new SidebarDTO('Operação', 'operacao', 'fas fa-tools'),
            new SidebarDTO('Pessoa', 'pessoa', 'fas fa-user-friends'),
            new SidebarDTO('Transição', 'transicao', 'fas fa-exchange-alt'),
            new SidebarDTO('Configuração', 'configuracao', 'fas fa-cog')
        ];
    }
}
