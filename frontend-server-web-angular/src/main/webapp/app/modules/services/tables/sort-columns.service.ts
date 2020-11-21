import { SortColumnDTO } from '../../shared/architecture/sort/sortcolumn.dto';

export const SORT_COLUMS = {
    estado: [
        new SortColumnDTO('idEstado', '#', 'asc')
    ],
    cidade: [
        new SortColumnDTO('idCidade', '#', 'asc')
    ],
    cep: [
        new SortColumnDTO('idCep', '#', 'asc')
    ],
    pessoaFisica: [
        new SortColumnDTO('idPessoa', '#', 'asc')
    ],
    pessoaJuridica: [
        new SortColumnDTO('idPessoa', '#', 'asc')
    ],
    generoPessoa: [
        new SortColumnDTO('idGeneroPessoa', '#', 'asc')
    ],
    tipoDocumento: [
        new SortColumnDTO('idTipoDocumento', '#', 'asc')
    ],
    tipoDocumentoPessoa: [
        new SortColumnDTO('idTipoDocumentoPessoa', '#', 'asc')
    ],
    enderecoPessoa: [
        new SortColumnDTO('idEndereco', '#', 'asc')
    ],
    tipoEndereco: [
        new SortColumnDTO('idTipoEndereco', '#', 'asc')
    ],
    contatoPessoa: [
        new SortColumnDTO('idContato', '#', 'asc')
    ],
    tipoContato: [
        new SortColumnDTO('idTipoContato', '#', 'asc')
    ],
    programa: [
        new SortColumnDTO('idPrograma', '#', 'asc')
    ],
    usuario: [
        new SortColumnDTO('idUsuario', '#', 'asc')
    ],
    tipoServico: [
        new SortColumnDTO('idTipoServico', '#', 'asc')
    ],
    perfil: [
        new SortColumnDTO('idPerfil', '#', 'asc')
    ],
    perfilAcesso: [
        new SortColumnDTO('idAcesso', '#', 'asc')
    ],
    erroConhecido: [
        new SortColumnDTO('idErroConhecido', '#', 'asc')
    ],
    evento: [
        new SortColumnDTO('idEvento', '#', 'asc')
    ],
    incidente: [
        new SortColumnDTO('idIncidente', '#', 'asc')
    ],
    problema: [
        new SortColumnDTO('idProblema', '#', 'asc')
    ],
    requisicao: [
        new SortColumnDTO('idRequisicao', '#', 'asc')
    ],
    statusEvento: [
        new SortColumnDTO('idStatusEvento', '#', 'asc')
    ],
    statusIncidente: [
        new SortColumnDTO('idStatusIncidente', '#', 'asc')
    ],
    statusProblema: [
        new SortColumnDTO('idStatusProblema', '#', 'asc')
    ],
    statusRequisicao: [
        new SortColumnDTO('idStatusRequisicao', '#', 'asc')
    ],
    categoriaItemConfiguracao: [
        new SortColumnDTO('idCategoriaItemConfiguracao', '#', 'asc')
    ],
    itemConfiguracao: [
        new SortColumnDTO('idItemConfiguracao', '#', 'asc')
    ],
    mudancaItemConfiguracao: [
        new SortColumnDTO('idMudancaItemConfiguracao', '#', 'asc')
    ],
    mudanca: [
        new SortColumnDTO('idMudanca', '#', 'asc')
    ],
    statusItemConfiguracao: [
        new SortColumnDTO('idStatusItemConfiguracao', '#', 'asc')
    ],
    statusMudanca: [
        new SortColumnDTO('idStatusMudanca', '#', 'asc')
    ],
    tipoItemConfiguracao: [
        new SortColumnDTO('idTipoItemConfiguracao', '#', 'asc')
    ],
    itemConfiguracaoSuperior: [
        new SortColumnDTO('idItemConfiguracao', '#', 'asc')
    ],
    impacto: [
        new SortColumnDTO('idImpacto', '#', 'asc')
    ],
    prioridade: [
        new SortColumnDTO('idPrioridade', '#', 'asc')
    ]
};
