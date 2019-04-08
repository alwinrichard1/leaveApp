// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
    firebase : {
    apiKey: "AIzaSyD7vpQxSZX-1yy5ZaD_S-eu9wCecETxMGQ",
    authDomain: "eq-my-leaves.firebaseapp.com",
    databaseURL: "https://eq-my-leaves.firebaseio.com",
    projectId: "eq-my-leaves",
    storageBucket: "eq-my-leaves.appspot.com",
    messagingSenderId: "1095137725621"
    }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
