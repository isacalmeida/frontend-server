import { Component, OnInit } from '@angular/core';

import { MenuDTO } from 'src/main/webapp/app/modules/shared/architecture/menu/menu.dto';

@Component({
    selector: 'app-menu-pessoa',
    templateUrl: './menu-pessoa.component.html',
    styleUrls: ['./menu-pessoa.component.css']
})
export class MenuPessoaComponent implements OnInit {

    menus: Array<MenuDTO>;

    constructor() { }

    ngOnInit(): void {
        this.preencherMenus();
    }

    preencherMenus() {
        this.menus = [
            new MenuDTO('Pessoa Física', '/pessoa/pessoa-fisica', { descricao: 'Manutenção de Pessoa Física', icone: 'fas fa-user' }),
            new MenuDTO('Pessoa Jurídica', '/pessoa/pessoa-juridica', { descricao: 'Manutenção de Pessoa Jurídica', icone: 'fas fa-building' }),
            new MenuDTO('Estado', '/pessoa/estado', { descricao: 'Manutenção de Estado', icone: 'fas fa-landmark' }),
            new MenuDTO('Cidade', '/pessoa/cidade', { descricao: 'Manutenção de Cidade', icone: 'fas fa-city' }),
            new MenuDTO('Cep', '/pessoa/cep', { descricao: 'Manutenção de Cep', icone: 'fas fa-road' })
        ];
    }
}
