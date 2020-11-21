import { PersistableDTO } from '../../architecture/common/persistable.dto';

import { EventoDTO } from './evento.dto';
import { ImpactoDTO } from './impacto.dto';
import { PrioridadeDTO } from './prioridade.dto';
import { RequisicaoDTO } from './requisicao.dto';
import { StatusIncidenteDTO } from './status-incidente.dto';

export class IncidenteDTO extends PersistableDTO {
    idIncidente: number;
    descricao: string;
    statusIncidente: StatusIncidenteDTO;
    prioridade: PrioridadeDTO;
    impacto: ImpactoDTO;
    evento: EventoDTO;
    requisicao: RequisicaoDTO;
    resolucao: string;
    protocoloItemConfiguracao: number;
}
