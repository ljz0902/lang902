<template>
    <div v-if="bookInfo.title">
        {{bookInfo.title}}
    <div>
        <img :src="bookInfo.img" alt="" srcset="">
    </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            bookInfo:{}
        }
    },
    created() {
        console.log(this.$route.params.id);
        this.getData(this.$route.params.id)
    },
    methods: {
        getData(id){
            let birdapi = "https://bird.ioliu.cn/v2?url=";
            let bookUrl = "https://m.douban.com/rexxar/api/v2/market/book/"+id;
            axios.get(birdapi+bookUrl).then((res)=>{
                console.log(res)
            })
        }
    },
}
</script>
<style scoped>

</style>

