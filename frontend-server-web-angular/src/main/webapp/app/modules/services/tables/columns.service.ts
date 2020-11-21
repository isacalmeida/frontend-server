import { ColumnDTO } from '../../shared/architecture/table/column.dto';

export const COLUMNS = {
    estado: [
        new ColumnDTO('Descrição', ['descricao'], 40),
        new ColumnDTO('Sigla', ['sigla'], 20)
    ],
    cidade: [
        new ColumnDTO('Descrição', ['descricao'], 30),
        new ColumnDTO('Estado', ['descricao', 'sigla'], 30, { objects: ['estado'], separator: '-' })
    ],
    cep: [
        new ColumnDTO('Cep', ['cep'], 20),
        new ColumnDTO('Cidade', ['descricao'], 20, {objects: ['cidade']}),
        new ColumnDTO('Estado', ['descricao', 'sigla'], 20, { objects: ['cidade', 'estado'], separator: '-' })
    ],
    pessoaFisica: [
        new ColumnDTO('Nome Completo', ['nomeCompleto'], 40),
        new ColumnDTO('Data de Nascimento', ['dataNascimento'], 20)
    ],
    pessoaJuridica: [
        new ColumnDTO('Razão Social', ['razaoSocial'], 40),
        new ColumnDTO('Data de Fundação', ['dataFundacao'], 20)
    ],
    generoPessoa: [
        new ColumnDTO('Descrição', ['descricao'], 60)
    ],
    tipoDocumento: [
        new ColumnDTO('Descrição', ['descricao'], 30),
        new ColumnDTO('Tipo de Pessoa', ['descricao'], 30, { objects: ['tipoPessoa'] })
    ],
    tipoDocumentoPessoa: [
        new ColumnDTO('Tipo do Documento', ['descricao'], 30, { objects: ['tipoDocumento'] }),
        new ColumnDTO('Valor', ['valor'], 30)
    ],
    enderecoPessoa: [
        new ColumnDTO('Logradouro', ['logradouro'], 30, { objects: ['cep'] }),
        new ColumnDTO('Número', ['numero'], 20),
        new ColumnDTO('Bairro', ['bairro'], 20, { objects: ['cep'] })
    ],
    tipoEndereco: [
        new ColumnDTO('Descrição', ['descricao'], 60)
    ],
    contatoPessoa: [
        new ColumnDTO('Tipo do Contato', ['descricao'], 30, { objects: ['tipoContato'] }),
        new ColumnDTO('Valor', ['valor'], 30)
    ],
    tipoContato: [
        new ColumnDTO('Descrição', ['descricao'], 60)
    ],
    programa: [
        new ColumnDTO('Descrição', ['descricao'], 20),
        new ColumnDTO('Sigla', ['sigla'], 20),
        new ColumnDTO('Endereço', ['endereco'], 20),
        new ColumnDTO('Tipo do Serviço', ['descricao'], 20, { objects: ['tipoServico'] })
    ],
    usuario: [
        new ColumnDTO('Login', ['login'], 30),
        new ColumnDTO('Perfil', ['descricao'], 30, { objects: ['perfil'] })
    ],
    tipoServico: [
        new ColumnDTO('Descrição', ['descricao'], 60)
    ],
    perfil: [
        new ColumnDTO('Descrição', ['descricao'], 60)
    ],
    acessoPerfil: [
        new ColumnDTO('Programa', ['descricao'], 20, { objects: ['programa'] }),
        new ColumnDTO('Ler', ['ler'], 10),
        new ColumnDTO('Criar', ['criar'], 10),
        new ColumnDTO('Alterar', ['alterar'], 10),
        new ColumnDTO('Remover', ['remover'], 10)
    ],
    impacto: [
        new ColumnDTO('Descrição', ['descricao'], 60)
    ],
    prioridade: [
        new ColumnDTO('Descrição', ['descricao'], 60)
    ],
    erroConhecido: [
        new ColumnDTO('Descrição', ['descricao'], 60)
    ],
    evento: [
        new ColumnDTO('Descrição', ['descricao'], 30),
        new ColumnDTO('Status', ['descricao'], 30, { objects: ['statusEvento'] })
    ],
    incidente: [
        new ColumnDTO('Descrição', ['descricao'], 30),
        new ColumnDTO('Status', ['descricao'], 30, { objects: ['statusIncidente'] })
    ],
    problema: [
        new ColumnDTO('Descrição', ['descricao'], 30),
        new ColumnDTO('Status', ['descricao'], 30, { objects: ['statusProblema'] })
    ],
    requisicao: [
        new ColumnDTO('Descrição', ['descricao'], 30),
        new ColumnDTO('Status', ['descricao'], 30, { objects: ['statusRequisicao'] })
    ],
    statusEvento: [
        new ColumnDTO('Descrição', ['descricao'], 60)
    ],
    statusIncidente: [
        new ColumnDTO('Descrição', ['descricao'], 60)
    ],
    statusProblema: [
        new ColumnDTO('Descrição', ['descricao'], 60)
    ],
    statusRequisicao: [
        new ColumnDTO('Descrição', ['descricao'], 60)
    ],
    categoriaItemConfiguracao: [
        new ColumnDTO('Descrição', ['descricao'], 60)
    ],
    itemConfiguracao: [
        new ColumnDTO('Descrição', ['descricao'], 20),
        new ColumnDTO('Status', ['descricao'], 20, { objects: ['statusItemConfiguracao'] }),
        new ColumnDTO('Categoria', ['descricao'], 20, { objects: ['categoriaItemConfiguracao'] })
    ],
    mudancaItemConfiguracao: [
        new ColumnDTO('Descrição', ['descricao'], 60, { objects: ['itemConfiguracao'] })
    ],
    mudanca: [
        new ColumnDTO('Descrição', ['descricao'], 30),
        new ColumnDTO('Status', ['descricao'], 30, { objects: ['statusMudanca'] })
    ],
    statusItemConfiguracao: [
        new ColumnDTO('Descrição', ['descricao'], 60)
    ],
    statusMudanca: [
        new ColumnDTO('Descrição', ['descricao'], 60)
    ],
    tipoItemConfiguracao: [
        new ColumnDTO('Descrição', ['descricao'], 60)
    ],
    itemConfiguracaoSuperior: [
        new ColumnDTO('Descrição', ['descricao'], 20),
        new ColumnDTO('Status', ['descricao'], 20, { objects: ['statusItemConfiguracao'] }),
        new ColumnDTO('Categoria', ['descricao'], 20, { objects: ['categoriaItemConfiguracao'] })
    ]
}
