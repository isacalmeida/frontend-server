export class MenuDTO {
  titulo: string;
  descricao: string;
  icone: string;
  url: string;

  constructor(titulo: string, descricao: string, icone: string, url: string) {
    this.titulo = titulo;
    this.descricao = descricao;
    this.icone = icone;
    this.url = url;
  }
}
