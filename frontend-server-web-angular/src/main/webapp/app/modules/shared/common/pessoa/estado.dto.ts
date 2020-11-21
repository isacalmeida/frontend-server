import { PersistableDTO } from '../../architecture/common/persistable.dto';

export class EstadoDTO extends PersistableDTO {
    idEstado: number;
    descricao: string;
    sigla: string;
}
