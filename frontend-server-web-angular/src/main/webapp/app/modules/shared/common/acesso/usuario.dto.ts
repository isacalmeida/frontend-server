import { observable, Observable } from 'rxjs';
import { PersistableDTO } from '../../architecture/common/persistable.dto';
import { PessoaFisicaDTO } from '../pessoa/pessoa-fisica.dto';
import { PerfilDTO } from './perfil.dto';

export class UsuarioDTO extends Observable<UsuarioDTO> {
    idUsuario: number;
    login: string;
    senha: string;
    protocoloPessoa: number;
    perfil: PerfilDTO;
    authdata: string;
    pessoaFisica: PessoaFisicaDTO;
}
