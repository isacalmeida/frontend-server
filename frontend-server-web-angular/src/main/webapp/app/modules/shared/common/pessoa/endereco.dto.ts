import { AbstractDTO } from '../../architecture/common/abstract.dto';
import { CepDTO } from './cep.dto';
import { TipoEnderecoDTO } from './tipo-endereco.dto';

export class EnderecoDTO extends AbstractDTO {
    idEndereco: number;
    numero: string;
    complemento: string;
    observacao: string;
    cep: CepDTO;
    tipoEndereco: TipoEnderecoDTO;
}
