import http from 'http'
import fs from 'fs'

const sendFile = (path, res) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      res.writeHead(500)
      res.end()
      return
    }
    res.end(data.toString())
  })
}

const server = http.createServer((req, res) => {
  console.log('Ein neuer Request:', req.method, req.url)
  if (req.url === '/') {
    sendFile('./index.html', res)
  } else {
    const filePath = `.${req.url}`
    sendFile(filePath, res)
  }
})

server.listen(6969, () => console.log('Ich bin an: 6969'))
