import { Component, OnInit, Input } from '@angular/core';

import { MenuDTO } from 'src/main/webapp/app/modules/shared/architecture/menu/menu.dto';

@Component({
    selector: 'app-menu-transicao',
    templateUrl: './menu-transicao.component.html',
    styleUrls: ['./menu-transicao.component.css']
})
export class MenuTransicaoComponent implements OnInit {

    @Input()
    menus: Array<MenuDTO>;

    constructor() { }

    ngOnInit(): void {
        this.preencherMenu();
    }

    preencherMenu() {
        this.menus = [
            new MenuDTO('Item de Configuração', '/transicao/item-configuracao', { descricao: 'Manutenção de Item de Configuração', icone: 'fas fa-cogs' }),
            new MenuDTO('Mudança', '/transicao/mudanca', { descricao: 'Manutenção de Mudança', icone: 'fas fa-sync-alt' })
        ];
    }
}
