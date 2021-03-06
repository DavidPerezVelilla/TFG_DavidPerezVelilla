// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { initializeApp } from "firebase/app";

export const environment = {
  firebase: {
    projectId: 'tfg-davidperez-gestorbb',
    appId: '1:624178341443:web:010fffc5492c0d32bd96f6',
    databaseURL: 'https://tfg-davidperez-gestorbb-default-rtdb.europe-west1.firebasedatabase.app',
    storageBucket: 'tfg-davidperez-gestorbb.appspot.com',
    locationId: 'europe-west',
    apiKey: 'AIzaSyD008BDJMCEtf37U8tdqVuFCJDUVkJkPQM',
    authDomain: 'tfg-davidperez-gestorbb.firebaseapp.com',
    messagingSenderId: '624178341443',
  },
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyD008BDJMCEtf37U8tdqVuFCJDUVkJkPQM",
    authDomain: "tfg-davidperez-gestorbb.firebaseapp.com",
    databaseURL: "https://tfg-davidperez-gestorbb-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "tfg-davidperez-gestorbb",
    storageBucket: "tfg-davidperez-gestorbb.appspot.com",
    messagingSenderId: "624178341443",
    appId: "1:624178341443:web:010fffc5492c0d32bd96f6"
  }
};



/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
