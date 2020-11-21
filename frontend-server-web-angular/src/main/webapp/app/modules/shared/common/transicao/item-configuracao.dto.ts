import { PersistableDTO } from '../../architecture/common/persistable.dto';

import { CategoriaItemConfiguracaoDTO } from './categoria-item-configuracao.dto';
import { StatusItemConfiguracaoDTO } from './status-item-configuracao.dto';
import { TipoItemConfiguracaoDTO } from './tipo-item-configuracao.dto';

export class ItemConfiguracaoDTO extends PersistableDTO {
    idItemConfiguracao: number;
    descricao: string;
    itemConfiguracaoSuperior: ItemConfiguracaoDTO;
    statusItemConfiguracao: StatusItemConfiguracaoDTO;
    modelo: string;
    numeroSerie: string;
    local: string;
    observacao: string;
    categoriaItemConfiguracao: CategoriaItemConfiguracaoDTO;
    tipoItemConfiguracao: TipoItemConfiguracaoDTO;
    protocoloPessoaResponsavel: number;
    protocoloPessoaFornecedor: number;
}
