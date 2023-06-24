import parser from "../service/parser.js";
import fs from 'fs';

export default (request, response) => {
  try {
    let body = '';
    request.on('data', chunk => {
      body += chunk;
    });

    request.on('end', async () => {
      try {
        const data = await parser(JSON.parse(body));
        response.writeHead(200);
        response.end(JSON.stringify({ data }));
        await fs.promises.writeFile('data.txt', data);
      } catch (err) {
        response.writeHead(400);
        response.end(JSON.stringify({ err: err.message }));
        console.log(err);
      }
    });
  } catch (err) {
    response.writeHead(500);
    response.end(JSON.stringify({ err: 'Server eror' }));
    console.log(err);
  }
}