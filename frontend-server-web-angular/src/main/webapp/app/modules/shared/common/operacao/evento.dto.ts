import { PersistableDTO } from '../../architecture/common/persistable.dto';

import { StatusEventoDTO } from './status-evento.dto';

export class EventoDTO extends PersistableDTO {
    idEvento: number;
    descricao: string;
    statusEvento: StatusEventoDTO;
}
