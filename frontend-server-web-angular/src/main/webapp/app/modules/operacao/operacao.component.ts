import { Component, OnInit, AfterViewInit } from '@angular/core';

import * as Prism from 'prismjs';

@Component({
    selector: 'app-operacao',
    templateUrl: './operacao.component.html',
    styleUrls: ['./operacao.component.css']
})
export class OperacaoComponent implements OnInit, AfterViewInit {

    constructor() { }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        Prism.highlightAll();
    }
}
