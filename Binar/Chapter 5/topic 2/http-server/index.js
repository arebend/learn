const http = require('http');
const fs = require('fs');
const urlParse = require('url-parse');

const createUser = user => {
  fs.writeFileSync("./user.json", JSON.stringify(user));
  return user;
}

const onRequest = (request, response) => {
  // console.log(request);
  const parseUrl = urlParse(request.url, true); // pake parameter 'true' agar query nya bisa di parse
  const pathName = parseUrl.pathname;
  response.writeHead(200, {
    'Content-Type': 'text/html'
  });
  let fileName = '';
  const httpMethod = request.method;

  if (httpMethod === "POST") {
    console.log("POST user Masuk Sini");
    // create user
    // name, age -> dari query param
    // simpen ke dalam file json -> fs
    // { name: xxx, age: yyy}
    if (pathName === "/users") {
      const name = parseUrl.query.name;
      const age = parseUrl.query.age;
       
       if(!name || !age) {
        response.writeHead(400, {'Content-Type': 'application/json'});
        response.end(JSON.stringify({
          reason: "Invalid Input",
        }));
       };

       const user = createUser({
        name: name,
        age: age,
       });
       console.log(user);
       response.writeHead(200, {'Content-Type': 'application/json'});
       response.end(JSON.stringify(user));
       return; 
    };
  };

  if (pathName === '/hello') {
    fileName = './whello.html';
  } else if (pathName === '/index') {
    fileName = './index.html';
  } else {
    response.writeHead(404);
    response.write('File Not Found');
    return;
    // menggunakan return agar tidak menjalankan line 23++ : fs.readFile 
  };


  fs.readFile('./index.html', null, (error, data) => {
    if (error) {
      response.writeHead(404);
      response.write('File Not Found');
    } else {
      response.write(data);
    }
    response.end();
  });
};

http.createServer(onRequest).listen(8080);