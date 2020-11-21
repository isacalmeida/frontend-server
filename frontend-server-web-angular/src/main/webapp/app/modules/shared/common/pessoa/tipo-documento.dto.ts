import { AbstractDTO } from '../../architecture/common/abstract.dto';
import { TipoPessoaDTO } from './tipo-pessoa.dto';

export class TipoDocumentoDTO extends AbstractDTO {
    idTipoDocumento: number;
    descricao: string;
    caracteres: number;
    tipoPessoa: TipoPessoaDTO;
}
