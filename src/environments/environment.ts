// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyDCAp0dETtTrfAimTyOVBwngkJJ5wu3ems',
        authDomain: 'gametrade-client.firebaseapp.com',
        databaseURL: 'https://gametrade-client.firebaseio.com',
        projectId: 'gametrade-client',
        storageBucket: 'gametrade-client.appspot.com',
        messagingSenderId: '817965168661'
    }
};
