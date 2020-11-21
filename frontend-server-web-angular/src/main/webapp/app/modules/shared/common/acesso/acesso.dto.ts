import { PersistableDTO } from '../../architecture/common/persistable.dto';
import { ProgramaDTO } from './programa.dto';

export class AcessoDTO extends PersistableDTO {
    idAcesso: number;
    ler: boolean;
    criar: boolean;
    alterar: boolean;
    remover: boolean;
    programa: ProgramaDTO;
}
