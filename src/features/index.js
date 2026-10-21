// The list of features the app is made of. To add one, create src/features/<name>/index.js
// and add it here - nothing else in the app needs to change.
//
// A feature is a plain object; every field is optional:
//   id        unique name
//   state     { key: initialValue }  its slice(s) of the shared store
//   persist   ['key', ...]           which of its state keys are saved to localStorage
//   routes    { '/path': (app) => Node | { redirect } }
//   slots     { header: (app) => Node }   small pieces shown in the shell
//   init(app) runs once at startup; use it to expose a service on app.services.<id>
import home from './home/index.js';
import quiz from './quiz/index.js';
import result from './result/index.js';
import language from './language/index.js';

export default [home, quiz, result, language];
