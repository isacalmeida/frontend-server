import { GeneroPessoaDTO } from './genero-pessoa.dto';
import { PessoaDTO } from './pessoa.dto';

export class PessoaFisicaDTO extends PessoaDTO {
    nomeCompleto: string;
    setor: string;
    cargo: string;
    dataNascimento: Date;
    dataAdmissao: Date;
    generoPessoa: GeneroPessoaDTO;
}
