import axios from 'axios';

export const getClient = (host, username, password) => {
  if (host == undefined) {
    throw new Error('host is undefined');
  }

  let authToken = undefined;

  if (username != undefined && password != undefined) {
    authToken = `Basic ${Buffer.from(`${username}:${password}`).toString(
      'base64'
    )}`;
  }

  return axios.create({
    baseURL: host,
    headers: {
      Authorization: authToken,
      'Content-Type': 'application/json',
    },
  });
};
