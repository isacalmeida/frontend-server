import { PersistableDTO } from '../../architecture/common/persistable.dto';

import { ErroConhecidoDTO } from './erro-conhecido.dto';
import { IncidenteDTO } from './incidente.dto';
import { StatusProblemaDTO } from './status-problema.dto';

export class ProblemaDTO extends PersistableDTO {
    idProblema: number;
    descricao: string;
    statusProblema: StatusProblemaDTO;
    incidente: IncidenteDTO;
    erroConhecido: ErroConhecidoDTO;
    protocoloMudanca: number;
}
