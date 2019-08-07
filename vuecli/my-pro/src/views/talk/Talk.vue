<template>
    <div>
        <div class="talk-text">
            <div class="talk-list" v-for="item in talkList" :key="item.answer">
                <div class="as">{{item.answer}}</div>
                <div class="qu">{{item.question}}</div>
            </div>
        </div>
        <div class="talk-form">
            <input type="text" v-model="tInfo">
            <button @click="sedMsg">send</button>
        </div>
    </div>
</template>
<script>
import md5 from "blueimp-md5"
export default {
    data() {
        return {
            tInfo:"",
            talkList:[]
        }
    },
    mounted() {
        // let params={
        //     app_id:"2111901624",
        //     time_stamp:this.getTimeStamp(),
        //     nonce_str:this.getNonceStr(),
        //     session:"10000",
        //     question:this.tInfo
        // }
        // console.log(Object.keys(params).sort())
        // let arr = []
        // for(let item in params){
        //     arr.push(item)
        // }
        // arr = arr.sort()
        // for(var i = 0;i<arr.length;i++){
        //     console.log(arr[i],params[arr[i]])
        // }
    },
    created() {
        let obj = {
            title:"聊天",
            navName:"talk"
        }
        this.$emit("changeActive",obj)
    },
    methods: {
        getTimeStamp(){
            // 获取秒级时间戳
            let timer = new Date();
            timer = Date.parse(timer);
            timer = timer.toString().substr(0,10)
            return timer;
        },
        getNonceStr(){
            let str = Math.random().toString(36);
            return str.substr(2)
        },
        getSign(params){
            //第一步对象的key值进行字典排序
            let arr = Object.keys(params).sort();
            //第二步 对排序后的对象进行url转码
            let str = ""
            for(let i = 0;i<arr.length;i++){
                str += arr[i]+"="+encodeURI(params[arr[i]])+"&"
            }
            //拼接appkey
            str+="app_key=ijS7lw3tX4KmI3Kf";
            //md5加密
            str = md5(str).toString().toUpperCase();

            return str
        },
        sedMsg(){
            let birdapi = "https://bird.ioliu.cn/v2?url=";
            let talkapi = "https://api.ai.qq.com/fcgi-bin/nlp/nlp_textchat";
            let params={
                app_id:"2111901624",
                time_stamp:this.getTimeStamp(),
                nonce_str:this.getNonceStr(),
                session:"10000",
                question:this.tInfo
            }
            params.sign = this.getSign(params);
            console.log(params);
            
            axios.get(birdapi+talkapi,{
                params
            }).then((res)=>{
                console.log(res);
                this.talkList.push({
                    answer:res.data.data.answer,
                    question:this.tInfo
                })
            })
        }
    },
}
</script>
<style scoped>
.talk-list{
    font-size: .4rem
}
 .talk-list .as{
     text-align: left;
     background-color: greenyellow;
 }
 .talk-list .qu{
     text-align: right;
     background-color: greenyellow;
 }
</style>
