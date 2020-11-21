import { AbstractDTO } from '../../architecture/common/abstract.dto';

export class StatusEventoDTO extends AbstractDTO {
    idStatusEvento: number;
    descricao: string;
}
