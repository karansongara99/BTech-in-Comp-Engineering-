const http = require('http');

const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.statusCode = 200;

    if(req.url=='/')
    {
        res.write(`
            <html>
                <body>
                    <h1>Home Page</h1>
                </body>
            </html>`);
    }
    if(req.url=='/about')
        {
            res.write(`
                <html>
                    <body>
                        <h1>About Page</h1>
                    </body>
                </html>`);
        }
    if(req.url=='/lms')
        {
            res.write(`
                <html>
                    <body>
                        <h1>LMS Page</h1>
                    </body>
                </html>`);
        }
    if(req.url=='/profile')
        {
            res.write(`
                <html>
                    <body>
                        <h1>Profile Page</h1>
                    </body>
                </html>`);
        }
    if(req.url=='/contact')
        {
            res.write(`
                <html>
                    <body>
                        <h1>Contact Page</h1>
                    </body>
                </html>`);
        }
    res.end();
})

server.listen(2300,()=>{
    console.log("Server Starting 2300 Port.......................");
})