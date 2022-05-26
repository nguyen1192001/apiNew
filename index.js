const express = require('express')
const app = express()
const port = 4000
const db = require('./config')
const cors = require('cors')

const UserRouter = require('./Api/Users')
const ArticleRouter = require('./Api/Articles')
const CategoriesRouter = require('./Api/Categories')
const CommentsRouter = require('./Api/Comment')
const AriticleFromTERouter = require('./Api/ArticlesFromTextEditor')
const check = require('./Api/CheckNatureLanguage')

app.use(cors());
app.use (express.urlencoded())
db.connect()
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
     next();
});

app.get('/', function (req, res) {
  
  res.send("jfkdksfkdsa")
})



app.use('/user',UserRouter)
app.use('/article',ArticleRouter)
app.use('/category',CategoriesRouter)
app.use('/comments',CommentsRouter)
app.use('/aritclesfromTE',AriticleFromTERouter)

app.listen(process.env.PORT || 4000, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});