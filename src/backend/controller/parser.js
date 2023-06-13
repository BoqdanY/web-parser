import parser from "../service/parser.js";
import fs from 'fs';

export default async (request, response) => {
  try {
    const data = await parser(request.headers['parseurl']);
    response.writeHead(200);
    console.log('this');
    response.end(JSON.stringify({ data }));
    await fs.promises.writeFile('data.txt', data);
  } catch (err) {
    response.writeHead(400);
    response.end(JSON.stringify({ err: 'Invalid url' }));
    console.log(err);
  }
}