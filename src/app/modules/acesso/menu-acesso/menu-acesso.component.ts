import { Component, OnInit, Input } from '@angular/core';
import { MenuDTO } from '../../shared/architecture/menu/menu.dto';

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

    ];
  }
}
