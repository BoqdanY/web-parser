const routes = [];

export const runRouter = (request, response) => {
  for (const route of routes) {
    if (request.url === route.url) {
      route.callback(request, response);
      return;
    }
  }
  response.writeHead(404);
  response.end('Not found.');
}

export const addRoute = (url, callback) => {
  routes.push({ url, callback });
}