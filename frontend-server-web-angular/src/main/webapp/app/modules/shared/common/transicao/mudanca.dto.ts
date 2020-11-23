import { PersistableDTO } from '../../architecture/common/persistable.dto';

import { ImpactoDTO } from './impacto.dto';
import { MudancaItemConfiguracaoDTO } from './mudanca-item-configuracao.dto';
import { PrioridadeDTO } from './prioridade.dto';
import { StatusMudancaDTO } from './status-mudanca.dto';

export class MudancaDTO extends PersistableDTO {
    idMudanca: number;
    descricao: string;
    statusMudanca: StatusMudancaDTO;
    dataProposta: Date;
    prioridade: PrioridadeDTO;
    impacto: ImpactoDTO;
    isAutorizado: boolean;
    dataAutorizacao: Date;
    protocoloPessoa: number;
    protocoloProblema: number;
    atividades: string;
    planoRetorno: string;
}
