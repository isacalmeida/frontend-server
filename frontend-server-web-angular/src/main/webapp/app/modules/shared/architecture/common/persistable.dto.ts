import { AuditableDTO } from './auditable.dto';

export abstract class PersistableDTO extends AuditableDTO {
    isAtivo: boolean;
    isCancelado: boolean;
    isExcluido: boolean;
}
