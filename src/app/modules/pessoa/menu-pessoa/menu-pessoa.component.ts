import { Component, OnInit } from '@angular/core';

import { MenuDTO } from 'src/app/modules/shared/architecture/menu/menu.dto';

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
      new MenuDTO('Pessoa Fisica', 'Manutencao de Pessoa Fisica', 'fa fa-user', '/pessoa/pessoa-fisica'),
      new MenuDTO('Pessoa Juridica', 'Manutencao de Pessoa Juridica', 'fa fa-building', '/pessoa/pessoa-juridica')
    ];
  }
}
