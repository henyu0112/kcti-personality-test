// The list of features the app is made of. To add one, create src/features/<name>/index.js
// and add it here - nothing else in the app needs to change.
//
// A feature is a plain object; every field is optional:
//   id        unique name
//   state     { key: initialValue }  its slice(s) of the shared store
//   persist   ['key', ...]           which of its state keys are saved to localStorage
//   routes    { '/path': (app) => Node | { redirect } }
//   slots     { '<name>': (app, ...args) => Node }  content for a named place (see core/slots.js)
//   nav       { path, label, order }                a tab under the header (label is a text key)
//   init(app) runs once at startup; use it to expose a service on app.services.<id>
import home from './home/index.js';
import quiz from './quiz/index.js';
import result from './result/index.js';
import language from './language/index.js';
import decor from './decor/index.js';
import gallery from './gallery/index.js';
import share from './share/index.js';
import settings from './settings/index.js';

export default [home, gallery, quiz, result, share, language, settings, decor];
