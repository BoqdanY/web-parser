import parser from "../service/parser.js";

export default (request, response) => {
  try {
    response.writeHead(200);
    parser(request.headers['parseurl']);
    response.end(JSON.stringify({ field: 'OK' }));
  } catch (err) {
    response.writeHead(500);
    response.end('error');
    console.log(err);
  }
}