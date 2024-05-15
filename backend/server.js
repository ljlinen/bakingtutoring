const express = require('express')
const bodyparser = require('body-parser')
const routerApplication = require('./router/application')
const app = express();
const path = require('path')
const fs = require('fs')

app.use(bodyparser.json());
app.use('/application', routerApplication);
app.use(express.static(path.join(__dirname, '../frontend')));

const homepagepath = path.join(__dirname, '../frontend/index.html')
const homepage = fs.readFileSync(homepagepath, 'utf-8')


    app.get('/', (req, res) => {
        res.send(homepage)
    });

    app.listen(5000, (err) => {
        if (err) {
                console.log('error: ' + err)
        } else {
            console.log('theegiftedhands server running at port 5000')
            }
    })
