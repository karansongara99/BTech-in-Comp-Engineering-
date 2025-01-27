const express = require('express')
const app = express()

app.get('/home', (req, res) => {
  res.write(`
        <html>
            <body>
                <h1>Home Page</h1>
            </body>
        </html>`)
  res.send()
})

app.get('/about', (req, res) => {
  res.write(`
        <html>
            <body>
                <h1>About Page</h1>
            </body>
        </html>`)
  res.send()
})

app.get('/contact', (req, res) => {
  res.write(`
        <html>
            <body>
                <h1>Contact Page</h1>
            </body>
        </html>`)
  res.send()
})

app.get('/product', (req, res) => {
  res.write(`
            <html>
                <body>
                    <h1>Product Page</h1>
                </body>
            </html>`)
  res.send()
})

app.get('/lms', (req, res) => {
  res.write(`
                <html>
                    <body>
                        <h1>LMS Page</h1>
                    </body>
                </html>`)
  res.send()
})

app.listen(2300, () => {
  console.log('Server Starting 2300 Port.......................')
})
