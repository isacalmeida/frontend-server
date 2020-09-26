export const CONFIG_AWS = {
  url: 'http://ec2-34-206-175-192.compute-1.amazonaws.com',
  port: '8770'
};

export const BASE_URL = `${CONFIG_AWS.url}:${CONFIG_AWS.port}`;

export const PESSOA_SERVICE_URL = `${BASE_URL}/pessoa-service`;

export const PESSOA_SERVICE_V1 = `${PESSOA_SERVICE_URL}/api/v1`;
