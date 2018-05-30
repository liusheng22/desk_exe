<template>
    <div>
        <Table class="tab" :columns="columns" :data="tabData" stripe border height="400" @on-row-click="tabClick" ></Table>
    </div>
</template>

<script>
    export default {
        props:['columns' , 'tabData'],
        data(){
            return{
            }
        },
        methods:{
            tabClick(e,idx){
                console.log(e,idx)
            },
            tabClick:function(e,idx){
                this.$emit("listenDate",{even:e,idx:idx})
            }
        }
    }
</script>

<style scoped>
    .tab{
        margin: 0 auto ;
    }
</style>

