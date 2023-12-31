"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = void 0;
const functions = require("firebase-functions");
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
exports.helloWorld = functions.https.onRequest((request, response) => {
    functions.logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase!");
});
exports.hello = functions.https.onCall((data, context) => {
    return {
        response: "hello " + data.message,
    };
});
//# sourceMappingURL=index.js.map