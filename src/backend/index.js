'use strict';

import 'dotenv/config';
import http from 'node:http';

import { PORT } from './config/config.js';
import { addRoute, runRouter } from './router/router.js';


addRoute('/', (req, res) => res.end('Ok'));
const server = http.createServer(runRouter);

server.listen(PORT, () => console.log(`Start on ${PORT}...`));