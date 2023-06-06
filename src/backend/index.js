'use strict';

import 'dotenv/config';
import http from 'node:http';

import { PORT } from './config/config.js';
import { addRoute, runRouter } from './router/router.js';
import getParse from './controller/parser.js';


// addRoute('/', (req, res) => res.end('Ok'));
addRoute('/parse', getParse);
const server = http.createServer(runRouter);

server.listen(PORT, () => console.log(`Start on ${PORT}...`));