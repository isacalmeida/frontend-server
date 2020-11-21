import { PersistableDTO } from '../../architecture/common/persistable.dto';
import { AcessoDTO } from './acesso.dto';

export class PerfilDTO extends PersistableDTO {
    idPerfil: number;
    descricao: string;
    acessos: Array<AcessoDTO>;
}
