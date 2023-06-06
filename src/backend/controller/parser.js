export default (request, response) => {
  console.log('hrere');
  console.log(request.headers['parseurl']);

  try {
    response.writeHead(200);
    response.end(JSON.stringify({ field: 'OK' }));
  } catch (err) {
    response.writeHead(500);
    response.end('error');
    console.log(err);
  }
}