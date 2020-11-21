export class MenuDTO {
    titulo: string;
    descricao: string;
    icone: string;
    url: string;

    constructor(titulo: string, url: string, options?: { descricao?: string, icone?: string }) {
        this.titulo = titulo;
        this.url = url;

        if (options !== undefined) {
            this.descricao = options.descricao;
            this.icone = options.icone;
        }
    }
}
