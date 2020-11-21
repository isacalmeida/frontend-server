import { AbstractDTO } from './abstract.dto';

export abstract class AuditableDTO extends AbstractDTO {
    dataCriacao: Date;
    dataAlteracao: Date;
    usuarioCriacao: string;
    usuarioAlteracao: string;
}
