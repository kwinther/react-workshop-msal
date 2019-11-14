// authProvider.js
import { MsalAuthProvider, LoginType } from 'react-aad-msal';
 
const config = {
  auth: {
    authority: 'https://login.microsoftonline.com/ce25ca93-004f-44f4-a6b5-eb22b45815aa',
    clientId: 'bcb02e90-8494-42dc-b492-cc1df4dd2371'
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: true
  }
};
 
const authenticationParameters = {
  scopes: [
    'User.Read'
  ]
}

export const authProvider = new MsalAuthProvider(config, authenticationParameters, LoginType.Popup)