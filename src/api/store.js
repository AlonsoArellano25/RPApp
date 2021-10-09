import {basePath, apiVersion} from './config';

export function getStoresApi() {
  const url = `${basePath}/${apiVersion}/get-stores`;

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
