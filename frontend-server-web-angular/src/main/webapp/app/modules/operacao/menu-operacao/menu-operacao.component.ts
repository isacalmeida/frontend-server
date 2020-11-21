import { Component, OnInit, Input } from '@angular/core';

import { MenuDTO } from 'src/main/webapp/app/modules/shared/architecture/menu/menu.dto';

@Component({
    selector: 'app-menu-operacao',
    templateUrl: './menu-operacao.component.html',
    styleUrls: ['./menu-operacao.component.css']
})
export class MenuOperacaoComponent implements OnInit {

    @Input()
    menus: Array<MenuDTO>;

    constructor() { }

    ngOnInit(): void {
        this.preencherMenu();
    }

    preencherMenu() {
        this.menus = [
            new MenuDTO('Erro Conhecido', '/operacao/erro-conhecido', { descricao: 'Manutenção de Erro Conhecido', icone: 'fas fa-database' }),
            new MenuDTO('Evento', '/operacao/evento', { descricao: 'Manutenção de Evento', icone: 'fas fa-calendar-times' }),
            new MenuDTO('Incidente', '/operacao/incidente', { descricao: 'Manutenção de Incidente', icone: 'fas fa-bolt' }),
            new MenuDTO('Problema', '/operacao/problema', { descricao: 'Manutenção de Problema', icone: 'fas fa-exclamation-circle' }),
            new MenuDTO('Requisicao', '/operacao/requisicao', { descricao: 'Manutenção de Requisição', icone: 'fas fa-toolbox' })
        ];
    }
}
