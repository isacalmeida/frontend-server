import { PessoaDTO } from './pessoa.dto';

export class PessoaJuridicaDTO extends PessoaDTO {
    razaoSocial: string;
    nomeFantasia: string;
    dataFundacao: Date;
}
