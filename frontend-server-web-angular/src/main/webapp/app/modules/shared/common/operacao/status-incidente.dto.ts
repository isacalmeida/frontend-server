import { AbstractDTO } from '../../architecture/common/abstract.dto';

export class StatusIncidenteDTO extends AbstractDTO {
    idStatusIncidente: number;
    descricao: string;
}
