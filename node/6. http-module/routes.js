const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === '/json') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Hello, JSON!' }));
  } else if (req.url === '/not-found') {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found');
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello, HTML!</h1>');
  }
});
const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});