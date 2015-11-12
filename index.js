const koa = require('koa');

const app = koa();

const port = 8008;

app.use(function *(){
  this.body = 'Hello Node !';
});

app.listen(port, function(){
  console.log('listening on port', port);
})
