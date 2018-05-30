<template>
    <div id="content">
        <Button @click="goBack">
            返回(index)
        </Button>
        <h3>请选择应用程序</h3>
        <tabdata :columns="columns" :tabData="tabData" @listenData="getTabEvent" />
    </div>
</template>

<script>
    import tabdata from '../HistoryData/common/TabData'
    export default {
        data () {
            return {
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
                        type: '月电量数据冻结值一冻结时间',
                        value: 18,
                    },
                    {
                        key: 2,
                        type: '月电量数据冻结值二冻结时间',
                        value: 24,
                    },
                    {
                        key: 3,
                        type: '月电量数据冻结值三冻结时间',
                        value: 30,
                    },
                    {
                        key: 4,
                        type: '月电量数据冻结值四冻结时间',
                        value: 26,
                    },
                    {
                        key: 5,
                        type: '月电量数据冻结值四冻结时间',
                        value: 26,
                    },
                    {
                        key: 6,
                        type: '月电量数据冻结值四冻结时间',
                        value: 26,
                    },
                    {
                        key: 7,
                        type: '月电量数据冻结值四冻结时间',
                        value: 26,
                    },
                    {
                        key: 8,
                        type: '月电量数据冻结值四冻结时间',
                        value: 26,
                    },
                    {
                        key: 9,
                        type: '月电量数据冻结值四冻结时间',
                        value: 26,
                    },
                ]
            }
        },
        components:{tabdata },
        methods:{
            getTabEvent(even,idx){
                console.log(even,idx)
            },
            goBack(){
                this.$router.go(-1);
            }
        },
        created: function () {
        },
        mounted:function(){
		}
    }
</script>

<style>
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
