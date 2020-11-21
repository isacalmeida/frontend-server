import { PersistableDTO } from '../../architecture/common/persistable.dto';
import { CidadeDTO } from './cidade.dto';

export class CepDTO extends PersistableDTO {
    idCep: number;
    cep: string;
    logradouro: string;
    bairro: string;
    ibge: string;
    cidade: CidadeDTO;
}
