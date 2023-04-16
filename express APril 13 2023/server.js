const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');
const routers = require('./routers/routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use('/use',routers.userRoutes);

app.get('/', (req, res) => {
    res.send('<h1>Hello World! This is home page</h1>');
})

app.get('/message/:id', (req, res) => {
    console.log(req.params.id, 'asd')
    const dataPath = './data/post.json';
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            throw err;
        }
        let fil = JSON.parse(data).message;

        let datas = fil.filter(function (fil) {
            return fil.id == req.params.id;
        });

        let mesdata = {
            "title": datas[0].title,
            "content": datas[0].content,
            "author": datas[0].author,
            "datetime": datas[0].datetime,
            "id": datas[0].id,
        }

        res.send(mesdata);
    });
});


app.get('/message/:id/comments', (req, res) => {
    const dataPath = './data/post.json';
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            throw err;
        }
        let fil = JSON.parse(data).message;

        let datas = fil.filter(function (fil) {
            return fil.id == req.params.id;
        })
        let commentdata = {
            "comments": datas[0].comments,
        }
        res.send(commentdata);
    });
});


app.post('/message/:id/comments', (req, res) => {
    const dataPath = './data/post.json';
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            throw err;
        }
        let fil = JSON.parse(data).message;

        let datas = fil?.filter(function (fil) {
            return fil.id == req.params.id;
        });
        if (datas[0]?.comments.length > 0) {

            let msage = { status: 200, message: "update successfully" }
            res.send(msage);
        }
        else {
            let arry = datas[0].comments
            if (Array.isArray(arry)) {
                let reqdata = req.body
                arry.push(reqdata);
                const datesocre = './data/comment.json';
                fs.writeFile(datesocre, JSON.stringify(datas[0].comments), (err) => {
                    if (err) {
                        res.statusCode = 500;
                        res.end();
                    } else {

        
                        res.send(JSON.stringify({ status: 'success', message: 'comment added successfully' }));

                        res.write()
                        res.end()
                    }
                })
            
            }
        }
    });

});



app.delete('/message/:id/comment/:id', (req, res) => {
    const dataPath = './data/post.json';
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            throw err;
        }
        let fil = JSON.parse(data).message;

        let datas = fil.filter(function (fil) {
            return fil.id == req.params.id;
        })
        res.send(JSON.stringify({ status: 'success', message: 'comment deleted successfully' }));
    
    });
});



const server = app.listen(3001, () => {
    console.log('listening on port %s...', server.address().port);
});