import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { MenuDTO } from 'src/main/webapp/app/modules/shared/architecture/menu/menu.dto';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    @Input()
    menus: Array<MenuDTO>;

    constructor(protected router: Router) { }

    ngOnInit(): void {
    }

    doRoute(url: string): void {
        this.router.navigate([url]);
    }
}
