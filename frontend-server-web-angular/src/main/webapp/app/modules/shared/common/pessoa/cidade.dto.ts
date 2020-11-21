import { PersistableDTO } from '../../architecture/common/persistable.dto';
import { EstadoDTO } from './estado.dto';

export class CidadeDTO extends PersistableDTO {
    idCidade: number;
    descricao: string;
    estado: EstadoDTO;
}
