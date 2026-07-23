/**
 * 02-http-server-demo.js
 * Week 4 reference implementation
 * Covers: http module (no Express), EventEmitter, GET vs POST, status codes
 *
 * Run:   node 02-http-server-demo.js
 * Test:  curl http://localhost:3000/users
 *        curl -X POST http://localhost:3000/users -d '{"name":"Ana"}' -H "Content-Type: application/json"
 *        curl http://localhost:3000/does-not-exist
 */

const http = require('http');
const { EventEmitter } = require('events');

// ---- 1. Custom EventEmitter — logs every request separately from response logic ----
const requestLogger = new EventEmitter();
requestLogger.on('request', ({ method, url }) => {
  console.log(`[LOG] ${new Date().toISOString()} - ${method} ${url}`);
  console.log(`[LOG] ${new Date().toISOString()} - ${method} ${url}`);
});

// ---- 2. Fake in-memory "database" just for the demo ----
let users = [{ id: 1, name: 'Ana' }, { id: 2, name: 'Bo' }];

// ---- 3. Helper: send a JSON response with a given status code ----
function sendJSON(res, statusCode, data) {
  res.writeHead(statusCode, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
}

// ---- 4. Function: handle GET /users (200 OK) ----
function handleGetUsers(req, res) {
  sendJSON(res, 200, users);
}

// ---- 5. Function: handle POST /users (201 Created, or 400 if bad input) ----
function handlePostUsers(req, res) {
  let body = '';

  // Requests arrive as a stream — collect the chunks first
  req.on('data', chunk => (body += chunk));

  req.on('end', () => {
    try {
      const parsed = JSON.parse(body);

      if (!parsed.name) {
        return sendJSON(res, 400, { error: 'Field "name" is required' }); // client's fault
      }

      const newUser = { id: users.length + 1, name: parsed.name };
      users.push(newUser);

      sendJSON(res, 201, newUser); // 201 = successfully created
    } catch (err) {
      sendJSON(res, 400, { error: 'Invalid JSON body' });
    }
  });
}

// ---- 6. The server itself — routes by method + url ----
const server = http.createServer((req, res) => {
  requestLogger.emit('request', { method: req.method, url: req.url }); // fire the event

  if (req.url === '/users' && req.method === 'GET') {
    handleGetUsers(req, res);
  } else if (req.url === '/users' && req.method === 'POST') {
    handlePostUsers(req, res);
  } else {
sendJSON(res, 404, { 
    error: `Route ${req.method} ${req.url} not found`
});  }
});

server.listen(3000, () => {
  console.log('🚀 Server running at http://localhost:3000');
});
