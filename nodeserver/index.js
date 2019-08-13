const Koa = require('koa');
const app = new Koa();
const cors = require('koa2-cors');
const Router = require('koa-router');
const koaBody = require('koa-body')
const cloud = require('tcb-admin-node');

const router = new Router({
    prefix:"/fellow"
});

app.use(cors({
    // origin: ['http://localhost:9528'],
    origin: function(ctx) {
      return [ctx.request.header.origin];
    },
    maxAge: 5,
    credentials: true
}));

app.use(koaBody());

cloud.init({
    secretId: 'AKIDvZ2pSGCZ37BOzhc0fCp7VhYHEctWOJF4',
    secretKey: 'Bimp3SqhT5caboRTMC322bltPxKvcSIJ',
    env:"lang-yv4or"
    // env:'test-41b8dc'   
});

app.use(router.routes());

app.listen(3000);