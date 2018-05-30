<template>
    <Col span="20">
        <h3>实时数据</h3>
        <tabdata :columns="columns" :tabData="tabData" @listenData="getTabEvent" />
    </col>
</template>

<script>
    import tabdata from './common/TabData'
    export default {
        data(){
            return{
                columns: [
                    {
                        title: ' ',
                        key: 'key',
                        align: 'center',
                        width:50,
                        fixed: 'left',
                    },
                    {
                        title: '类型',
                        key: 'type',
                        align: 'center',
                        width:350
                    },
                    {
                        title: '数值',
                        key: 'value',
                        width:150,
                        align: 'center',
                    },
                    {
                        title: '数值',
                        key: 'value',
                        width:150,
                        align: 'center',
                    }
                ],
                tabData: [
                    {
                        key: 1,
                        type: 'A相电压',
                        value: 'FF',
                    },
                    {
                        key: 2,
                        type: 'A相电压',
                        value: 'FF',
                    },
                    {
                        key: 3,
                        type: 'A相电压',
                        value: 'FF',
                    },
                    {
                        key: 4,
                        type: 'A相电压',
                        value: 'FF',
                    },
                    {
                        key: 5,
                        type: 'A相电压',
                        value: 'FF',
                    },
                    {
                        key: 6,
                        type: 'A相电压',
                        value: 'FF',
                    },
                    {
                        key: 7,
                        type: 'A相电压',
                        value: 'FF',
                    },
                    {
                        key: 8,
                        type: 'A相电压',
                        value: 'FF',
                    },
                    {
                        key: 9,
                        type: 'A相电压',
                        value: 'FF',
                    },
                ]
            }
        },
        components:{tabdata },
        methods:{
            getTabEvent(even,idx){
                console.log(even,idx)
            },
        }
    }
</script>

<style scoped>
    .inbl{
        display: inline-block;
    }
    #content{
        text-align: center;
    }
    #content>h3{
        text-align: center ;
        margin-top: 20px;
    }
    #content>p{
        text-align: center ;
        margin-top: 10px;
    }
</style>
