import { createServer } from 'http';
import { readFileSync } from 'fs';
const root = process.cwd() + '/public';
const server = createServer((req, res) => {
    const { method, url = '/', headers } = req;
    console.log(method, url, headers)
    if (url === '/' || /.(js|html)$/.test(url)) {
        const fileName = url === '/' ? '/index.html' : url;
        const file = readFileSync(`${root}${fileName}`, {
            encoding: 'utf-8'
        })
        console.log(file)
        res.write(file);
    } else if (/\/30\d/.test(url)) {
        res.statusCode = +url.slice(1);
        res.setHeader('Location', '/res')
    } else if (url === '/res') {
        res.write('You get data from redirect.')
    }
    setTimeout(() => {
        res.end();
    }, 2000);
})

server.listen(3000)
