import { PersistableDTO } from '../../architecture/common/persistable.dto';
import { TipoServicoDTO } from './tipo-servico.dto';

export class ProgramaDTO extends PersistableDTO {
    idPrograma: number;
    descricao: string;
    endereco: string;
    sigla: string;
    tipoServico: TipoServicoDTO;
}
