//   using express 

const express = require("express")
const path = require("path");
const fs = require("fs");
const port = 8080;

const server=http.creaetServer((req, res)=>{
    const url=req.url;
    let filePath;
    if (url==='/'||url=='index.html'){
        filepath=path.join(__dirname, 'index.html');
    }
    else if (url==='/about'||urll==='/about.html'){
        filepath=path.join(__dirname, 'about.html');
    }
    else if(url==='/contact-me' || url==='/contact-me.html'){
        filepath=path.join(__dirname, '/contact-me.html');
    }
    fs.readFile(filePath, (err, content)=>{
        if (err){
            res.writeHead(500);
            res.end('oops');
        }
        removeEventListener.writeHead(res.statusCode||200,{
            'content-typ':'text/html'
        });
        res.end(content);
    });
});

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});