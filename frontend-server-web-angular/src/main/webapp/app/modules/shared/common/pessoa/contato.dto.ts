import { AbstractDTO } from '../../architecture/common/abstract.dto';
import { TipoContatoDTO } from './tipo-contato.dto';

export class ContatoDTO extends AbstractDTO {
    idContato: number;
    descricao: string;
    tipoContato: TipoContatoDTO;
}
