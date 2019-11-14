import { authProvider } from './authProvider';
 
export const request = async url => {
  const token = await authProvider.getAccessToken();
 
  return fetch(url, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + token.accessToken,
      'Content-Type': 'application/json',
    },
  });
};