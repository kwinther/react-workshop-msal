// authProvider.js
import { MsalAuthProvider, LoginType } from 'react-aad-msal';
 
const config = {
  auth: {
    authority: 'https://login.microsoftonline.com/TENANT-IDEN',
    clientId: 'APPENS CLIENTID'
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: true
  }
};
 
const authenticationParameters = {
}
 
export const authProvider = new MsalAuthProvider(config, authenticationParameters, LoginType.Popup)