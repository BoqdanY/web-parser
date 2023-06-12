import parser from "../service/parser.js";

export default async (request, response) => {
  try {
    const data = await parser(request.headers['parseurl']);
    response.writeHead(200);
    console.log('this');
    response.end(JSON.stringify({ data }));
  } catch (err) {
    response.writeHead(400);
    response.end(JSON.stringify({ err: 'Invalid url' }));
    console.log(err);
  }
}