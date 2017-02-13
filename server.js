var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var artical1 = {
    title : 'artical',
    heading :'art',
    content :`<div>
            <p>
                balta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blata
            </p>
            <p>
                balta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blata
            </p>
            <p>
                balta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blatabalta blata
            </p>
        </div>
        </div>
        `
        
    
    
};
function createtemplate (data){
var title = data.title;
var date = data.date;
var heading = data.heading;
var content = data.content;
var htmltemplate=`
    <html>
    <head>
    <title>${title}</title>
 <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">home</a>
        </div>
        <hr/>
        <h3>${heading}</h3>
        <div>date</div>
      <div>
      ${content}
        </div>
    </body>
</html>
`;
return htmltemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/artical1.html',function(req,res) {
    res.send(createtemplate(artical1));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/artical2',function(req,res) {
    res.send('articaltwo is in use');
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/artical3',function(req,res) {
    res.send('articalthree is in use');
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
