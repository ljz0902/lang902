const Router = require('koa-router');
let router=new Router();
const cloud = require('tcb-admin-node');
const db=cloud.database({
    env:"release-a38306"
});
const testuser=db.collection('test_user');
// /student/list

router.get("/del", async (ctx, next) => {
    console.log(ctx.request.body)
    
    try{
        await testuser.where({
            _id:ctx.request.body.id
        }).remove()
    }catch(e){
        console.error(e)
    }

    ctx.body = {
            code: 20000,
            data: "删除成功"
        }
    
}),

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

module.exports = router;