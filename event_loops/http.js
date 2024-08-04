const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
       res.end('This is a Home Page'); 
    }else if(req.url === '/about'){
        res.end('This is a About Page');
    }
    else{
        res.end(`
            <h1>Oops !</h1>
            <p>Please Page is down back home page</p>
            <a href="/">Back Home</a>
            `);
    }
});


server.listen(3001,()=>{
    console.log('http://127.0.0.1:3001');
});



