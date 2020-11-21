import { Component, OnInit } from '@angular/core';

import { MenuDTO } from 'src/main/webapp/app/modules/shared/architecture/menu/menu.dto';

@Component({
    selector: 'app-menu-configuracao',
    templateUrl: './menu-configuracao.component.html',
    styleUrls: ['./menu-configuracao.component.css']
})
export class MenuConfiguracaoComponent implements OnInit {

    menus: Array<MenuDTO>;

    constructor() { }

    ngOnInit(): void {
        this.preencherMenus();
    }

    preencherMenus() {
        this.menus = [
            new MenuDTO('Executar Migration', '/configuracao/executar-migration', { descricao: 'Executar Migration', icone: 'fas fa-cogs' })
        ];
    }
}
