'use strict';

import express from 'express';

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (request: express.Request, response: express.Response) => {
    response.send("Our TypeScript on Node server is running.");
});

app.listen(8080, () => {
  console.log(`Server is running on ${HOST}:${PORT}`);
});