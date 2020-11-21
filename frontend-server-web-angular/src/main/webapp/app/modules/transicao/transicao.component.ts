import { Component, OnInit, AfterViewInit } from '@angular/core';

import * as Prism from 'prismjs';

@Component({
    selector: 'app-transicao',
    templateUrl: './transicao.component.html',
    styleUrls: ['./transicao.component.css']
})
export class TransicaoComponent implements OnInit, AfterViewInit {

    constructor() { }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        Prism.highlightAll();
    }
}
