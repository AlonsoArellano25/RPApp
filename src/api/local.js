import {basePath, apiVersion} from './config';

export function getLocalApi() {
  const url = `${basePath}/${apiVersion}/get-locals`;

  const params = {
    method: 'GET',
    Headers: {
      'Content-Type': 'application/json',
    },
  };

  return fetch(url, params)
    .then(resp => {
      return resp.json();
    })
    .then(res => {
      return res;
    })
    .catch(err => {
      return err;
    });
}
