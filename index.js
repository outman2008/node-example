const koa = require('koa');

const app = koa();

app.use(function *(){
  this.body = 'Hello Node!';
});

app.listen(8000, function(){
  console.log('listen on', 8000);
})
