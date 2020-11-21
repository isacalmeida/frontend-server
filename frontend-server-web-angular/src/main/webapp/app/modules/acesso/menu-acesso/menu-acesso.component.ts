import { Component, OnInit, Input } from '@angular/core';

import { MenuDTO } from 'src/main/webapp/app/modules/shared/architecture/menu/menu.dto';

@Component({
    selector: 'app-menu-acesso',
    templateUrl: './menu-acesso.component.html',
    styleUrls: ['./menu-acesso.component.css']
})
export class MenuAcessoComponent implements OnInit {

    @Input()
    menus: Array<MenuDTO>;

    constructor() { }

    ngOnInit(): void {
        this.preencherMenu();
    }

    preencherMenu() {
        this.menus = [
            new MenuDTO('Perfil', '/acesso/perfil', { descricao: 'Manutenção de Perfil', icone: 'fas fa-users-cog' }),
            new MenuDTO('Usuário', '/acesso/usuario', { descricao: 'Manutenção de Usuário', icone: 'fas fa-users' }),
            new MenuDTO('Programa', '/acesso/programa', { descricao: 'Manutenção de Programa', icone: 'fas fa-sliders-h' }),
        ];
    }
}
