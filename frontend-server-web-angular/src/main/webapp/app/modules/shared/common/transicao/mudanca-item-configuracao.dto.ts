import { PersistableDTO } from '../../architecture/common/persistable.dto';

import { ItemConfiguracaoDTO } from './item-configuracao.dto';

export class MudancaItemConfiguracaoDTO extends PersistableDTO {
    idMudancaItemConfiguracao: number;
    itemConfiguracao: ItemConfiguracaoDTO;
}
