const 
  express = require('express'),
  bodyParser = require('body-parser'),
  path = require('path'),
  ejsLayouts = require('express-ejs-layouts'),
  HomeRouter = require('./app_server/Routers/HomeRouter'),
  app = express(),
  PORT = process.env.PORT || 8070;

app
  .set('view engine', 'ejs')
  .set('views', path.join(__dirname, './app_server/Views'))
  .use('/static', express.static(path.join(__dirname, 'public')))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))
  .use(ejsLayouts)
  .use("/", HomeRouter)
  .listen(PORT, (err) => {
      if (err) {
        return console.log('something bad happened', err);
      }

      console.log(`server is listening on ${PORT}`);
  });