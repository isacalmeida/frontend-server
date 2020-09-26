import { Component, OnInit, AfterViewInit } from '@angular/core';

import * as Prism from 'prismjs';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css']
})
export class AcessoComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    Prism.highlightAll();
  }
}
