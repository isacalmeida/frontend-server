import { PersistableDTO } from '../../architecture/common/persistable.dto';

export class ErroConhecidoDTO extends PersistableDTO {
    idErroConhecido: number;
    descricao: string;
    observacao: string;
}
