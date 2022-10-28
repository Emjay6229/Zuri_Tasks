var http = require('http';
var fs = require('fs');
var path = require('path');

let port = 3000;

let homePath = path.join(__dirname, "./Homepage.html");
let aboutPath = path.join(__dirname, "./about_page.html");
let contactPath = path.join(__dirname, "./contact_page.html");

var server = http.createServer((req, res) => {
    let url = req.url;
    
    if(url === "/"){
        fs.readFile(homePath, (err, data)=>{
            if(err) throw err;
            res.writeHead(200, {"content-type":"text/html"})
            res.write(data);
            res.end();
        })
    } else if (url === "/about"){
        fs.readFile(aboutPath, (err, data)=>{
            if(err) throw err;
            res.writeHead(200, {"content-type":"text/html"})
            res.write(data);
            res.end();
        })
    } else if (url === "/contact") {
        fs.readFile(contactPath, (err, data)=>{
            if(err) throw err;
            res.writeHead(200, {"content-type":"text/html"})
            res.write(data);
            res.end();
        })
    } else {
        res.writeHead(404, {"content-type":"text/html"})
        res.write("<h1>Page Not Found!</h1>")
        res.end()
    }
})

server.listen(port, () => {
    console.log(`Server is listening at port ${port}...`)
}) 
