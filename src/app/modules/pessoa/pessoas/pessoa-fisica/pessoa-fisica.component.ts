import { Component, OnInit } from '@angular/core';

import { PessoaFisicaService } from '../../../services/pessoa/pessoa-fisica.service';

@Component({
  selector: 'app-pessoa-fisica',
  templateUrl: './pessoa-fisica.component.html',
  styleUrls: ['./pessoa-fisica.component.css']
})
export class PessoaFisicaComponent implements OnInit {

  constructor(private pessoaFisicaService: PessoaFisicaService) { }

  ngOnInit(): void {
    console.log(this.pessoaFisicaService.findAll());
  }
}
