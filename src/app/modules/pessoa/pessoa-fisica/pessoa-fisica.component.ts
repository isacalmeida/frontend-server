import { Component, OnInit } from '@angular/core';

import { PessoaFisicaService } from 'src/app/modules/services/common/pessoa/pessoa-fisica.service';
import { TipoDocumentoService } from 'src/app/modules/services/common/pessoa/tipo-documento.service';
import { ColumnDTO } from 'src/app/modules/shared/architecture/table/column.dto';
import { SortColumnDTO } from 'src/app/modules/shared/architecture/sort/sortcolumn.dto';

@Component({
  selector: 'app-pessoa-fisica',
  templateUrl: './pessoa-fisica.component.html',
  styleUrls: ['./pessoa-fisica.component.css']
})
export class PessoaFisicaComponent implements OnInit {
  columns: Array<ColumnDTO>;
  sortColumns: Array<SortColumnDTO>;
  filterField: Array<string>;
  pageOptions = [1, 2, 5, 10, 20];

  constructor(
    public pessoaFisicaService: PessoaFisicaService,
    public tipoDocumentoService: TipoDocumentoService) { }

  ngOnInit(): void {
    this.preencherColumns();
    this.preencherSortColumns();
    this.preencherFiltros();
  }

  preencherColumns(): void {
    this.columns = [
      new ColumnDTO('Codigo', null, ['idTipoDocumento'], null, 10),
      new ColumnDTO('Descricao', null, ['descricao'], null, 20),
      new ColumnDTO('Caracteres', null, ['caracteres'], null, 20),
      new ColumnDTO('Tipo de Pessoa', ['tipoPessoa'], ['descricao'], null, 20)
    ];
  }

  preencherSortColumns(): void {
    this.sortColumns = [
      new SortColumnDTO('idTipoDocumento', 'Codigo', 'asc')
    ];
  }

  preencherFiltros(): void {
    this.filterField = ['idTipoDocumento', 'descricao', 'tipoPessoa.descricao'];
  }
}
