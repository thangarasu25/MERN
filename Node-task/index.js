
const fs = require("fs");
const path = require("path");
const http = require("http");
const EventEmitter = require("events");
const filePath = path.join(__dirname,'json/db.json');
const evenHandler = new EventEmitter();
const server = http.createServer();

const dbWrite = fs.WriteStream('db.json', {
  flags: 'w'
});

const dbRead = fs.ReadStream('db.json', 'utf8');

server.on('request', (req, res) => {

  switch(`${req.method}:${req.url}`) {
    case 'GET:/articles':
      console.log('articles GET API')
      evenHandler.emit('GET:articles', req, res)
      break;
    case 'POST:/articles':
      console.log('articles POST API')
      evenHandler.emit('POST:articles', req, res)

    case 'DELETE:/articles':
        console.log('articles POST API')
        evenHandler.emit('DELETE:articles', req, res)   
      break;
    default:
      res.statusCode = 404;
      res.end('<h1>Page Not Found: 404</h1>')
  }
})



evenHandler.on('GET:articles', (req, res) => {

if (req.url === "/articles" && req.method === "GET") {
  fs.readFile("./json/db.json", "utf8", (err, jsonString) => {
          if (err) {
            console.log("Error reading file from disk:", err);
            return;
          }
          try {
            const customer = JSON.parse(jsonString);
            console.log("Customer address is:", customer); 
            res.write(JSON.stringify(customer))
            res.end()
          } catch (err) {
            console.log("Error parsing JSON string:", err);
          } 
        });
       
      } else {
        res.end()
      }
    })

    

evenHandler.on('POST:articles', (req, res) => {
  const dataFromJsonFile = fs.readFileSync(filePath, 'utf8')
  const fileData = JSON.parse(dataFromJsonFile);
  let reqData = {};
  req.on("data", (body) => {
    reqData = JSON.parse(body.toString())
  })
  req.on('end', () => {
    console.log(fileData.articles,'asdfsadfsdaf',Array.isArray(fileData?.articles));
    if (Array.isArray(fileData?.articles)) {
      fileData.articles.push(reqData);
      fs.writeFile(filePath, JSON.stringify(fileData), (err) => {
        if(err) {
          res.statusCode = 500;
          res.end();
        } else {
          res.write(JSON.stringify({ status: 'success', message: 'Article added successfully' }))
          res.end()
        }
      })
    }
  })

  res.end()
})
















server.listen({ port: 3000 }, () => {
  console.log('Server is running on port 3000');
  dbWrite.write(JSON.stringify({
    data: []
  }))
})
