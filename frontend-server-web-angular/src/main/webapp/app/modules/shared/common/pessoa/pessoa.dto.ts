import { PersistableDTO } from '../../architecture/common/persistable.dto';
import { ContatoDTO } from './contato.dto';
import { EnderecoDTO } from './endereco.dto';
import { TipoDocumentoPessoaDTO } from './tipo-documento-pessoa.dto';

export class PessoaDTO extends PersistableDTO {
    idPessoa: number;
    isCliente: boolean;
    isFornecedor: boolean;
    isFuncionario: boolean;
}
