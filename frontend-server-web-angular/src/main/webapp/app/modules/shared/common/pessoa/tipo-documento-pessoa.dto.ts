import { AbstractDTO } from '../../architecture/common/abstract.dto';
import { TipoDocumentoDTO } from './tipo-documento.dto';

export class TipoDocumentoPessoaDTO extends AbstractDTO {
    idTipoDocumentoPessoa: number;
    tipoDocumento: TipoDocumentoDTO;
}
