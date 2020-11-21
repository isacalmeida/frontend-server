import { PersistableDTO } from '../../architecture/common/persistable.dto';

import { StatusRequisicaoDTO } from './status-requisicao.dto';

export class RequisicaoDTO extends PersistableDTO {
    idRequisicao: number;
    descricao: string;
    statusRequisicao: StatusRequisicaoDTO;
    protocoloMudanca: number;
}
