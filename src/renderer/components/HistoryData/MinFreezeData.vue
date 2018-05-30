<template>
    <Col span="20">
        <h3>110kV表1分钟冻结数据</h3>
        <p>
                时间
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <router-link to="/date" >
                2011-06-11 10:00
            </router-link>
        </p>
        <div>
            <Table class="tab" :columns="columns1" :data="data1" width="500" @on-row-click="tabClick" ></Table>
        </div>
    </col>
</template>

<script>
    export default {
        data(){
            return {
                columns1: [
                    {
                        title: '电能量',
                        key: 'elec'
                    },
                    {
                        title: '正向有功',
                        key: 'main_p_add'
                    },
                    {
                        title: '反向有功',
                        key: 'main_p_minus'
                    },
                    {
                        title: '正向无功',
                        key: 'endMain_p_add'
                    },
                    {
                        title: '反向无功',
                        key: 'endMain_p_minus'
                    }
                ],
                data1: [
                    {
                        elec: 'John Brown',
                        main_p_add: 18,
                        main_p_minus: 18,
                        endMain_p_add: 18,
                        endMain_p_minus: 18,
                    },
                    {
                        elec: 'Jim Green',
                        main_p_add: 24,
                        main_p_minus: 24,
                        endMain_p_add: 24,
                        endMain_p_minus: 24,
                    },
                    {
                        elec: 'Joe Black',
                        main_p_add: 30,
                        main_p_minus: 30,
                        endMain_p_add: 30,
                        endMain_p_minus: 30,
                    },
                    {
                        elec: 'Jon Snow',
                        main_p_add: 26,
                        main_p_minus: 26,
                        endMain_p_add: 26,
                        endMain_p_minus: 26,
                    }
                ]
            }
        },
        methods:{
            tabClick(e,idx){
                console.log(e,idx)
            }
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
    .tab{
        margin: 0 auto ;
    }
</style>

