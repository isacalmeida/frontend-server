import { Component, AfterViewInit } from '@angular/core';

import * as Prism from 'prismjs';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})
export class IndexComponent implements AfterViewInit {

    constructor() { }

    ngAfterViewInit() {
        Prism.highlightAll();
    }
}
