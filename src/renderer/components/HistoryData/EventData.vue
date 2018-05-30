<template>
    <Col span="20">
        <h3>事件数据</h3>
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
                        title: '事件名称',
                        key: 'type',
                        align: 'center',
                        width:350
                    },
                    {
                        title: '发生时间',
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
                        type: 'ERTU与电能表通讯成功',
                        value: '2011-05-12 09:45:12',
                    },
                    {
                        key: 2,
                        type: 'ERTU与电能表通讯成功',
                        value: '2011-05-12 09:45:12',
                    },
                    {
                        key: 3,
                        type: 'ERTU与电能表通讯成功',
                        value: '2011-05-12 09:45:12',
                    },
                    {
                        key: 4,
                        type: 'ERTU与电能表通讯成功',
                        value: '2011-05-12 09:45:12',
                    },
                    {
                        key: 5,
                        type: 'ERTU与电能表通讯成功',
                        value: '2011-05-12 09:45:12',
                    },
                    {
                        key: 6,
                        type: 'ERTU与电能表通讯成功',
                        value: '2011-05-12 09:45:12',
                    },
                    {
                        key: 7,
                        type: 'ERTU与电能表通讯成功',
                        value: '2011-05-12 09:45:12',
                    },
                    {
                        key: 8,
                        type: 'ERTU与电能表通讯成功',
                        value: '2011-05-12 09:45:12',
                    },
                    {
                        key: 9,
                        type: 'ERTU与电能表通讯成功',
                        value: '2011-05-12 09:45:12',
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
