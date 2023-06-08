import parser from "../service/parser.js";

export default async (request, response) => {
  try {
    response.writeHead(200);
    const data = await parser(request.headers['parseurl']);
    response.end(JSON.stringify({ data }));
  } catch (err) {
    response.writeHead(500);
    response.end('error');
    console.log(err);
  }
}