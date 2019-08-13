const Router = require('koa-router');
let router=new Router();
const cloud = require('tcb-admin-node');
const db=cloud.database({
    env:"lang-yv4or"
});
const testuser=db.collection('test_user');
// /student/list

router.get("/list", async (ctx, next) => {
    console.log(ctx.query)
    let res = null;
    res = await testuser.get().then((res)=>{
        return res
    })
        ctx.body = {
            code: 20000,
            data: res
        }
    
})