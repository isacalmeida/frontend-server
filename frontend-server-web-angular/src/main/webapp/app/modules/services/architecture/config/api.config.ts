const CONFIG_AWS = {
  url: 'http://ec2-34-206-175-192.compute-1.amazonaws.com',
  port: '8770'
};
const BASE_URL_AWS = `${CONFIG_AWS.url}:${CONFIG_AWS.port}`;

const CONFIG_LOCALHOST = {
  url: 'http://localhost',
  port: '8770'
};
const BASE_URL_LOCALHOST = `${CONFIG_LOCALHOST.url}:${CONFIG_LOCALHOST.port}`;

const BASE_URL = BASE_URL_LOCALHOST;
const ACESSO_SERVICE_URL = `${BASE_URL}/acesso-service`;
const OPERACAO_SERVICE_URL = `${BASE_URL}/operacao-service`;
const PESSOA_SERVICE_URL = `${BASE_URL}/pessoa-service`;
const TRANSICAO_SERVICE_URL = `${BASE_URL}/transicao-service`;

export const ACESSO_SERVICE_V1 = `${ACESSO_SERVICE_URL}/api/v1`;
export const OPERACAO_SERVICE_V1 = `${OPERACAO_SERVICE_URL}/api/v1`;
export const PESSOA_SERVICE_V1 = `${PESSOA_SERVICE_URL}/api/v1`;
export const TRANSICAO_SERVICE_V1 = `${TRANSICAO_SERVICE_URL}/api/v1`;
