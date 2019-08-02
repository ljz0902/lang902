<template>
    <div>
        <h1>电影</h1>
    </div>
</template>
<script>
export default {
    created() {
        let obj = {
            title:"电影",
            navName:"movie"
        }
        this.$emit("changeActive",obj)
    },
}
</script>
<style scoped>

</style>
