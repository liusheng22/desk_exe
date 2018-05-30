<template>
    <div>
        <div id="content">
            <!-- <router-link to="router.go()" > -->
            <Button @click="goBack">
                返回(index)
            </Button>
            <!-- </router-link> -->
            <h3>通信状态</h3>
            <div class="tab">
                <div class="tab_box">
                    <Table :columns="columns1" :data="data1" width="400" @on-row-click="tabClick" ></Table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { Progress ,Table , Button } from 'iview';

export default {
    data () {
        return {
            columns1: [
                {
                    title: 'Name',
                    key: 'name'
                },
                {
                    title: 'Age',
                    key: 'age'
                },
                {
                    title: 'Address',
                    key: 'address'
                }
            ],
            data1: [
                {
                    name: 'John Brown',
                    age: 18,
                    address: 'New York No. 1 Lake Park',
                    date: '2016-10-03'
                },
                {
                    name: 'Jim Green',
                    age: 24,
                    address: 'London No. 1 Lake Park',
                    date: '2016-10-01'
                },
                {
                    name: 'Joe Black',
                    age: 30,
                    address: 'Sydney No. 1 Lake Park',
                    date: '2016-10-02'
                },
                {
                    name: 'Jon Snow',
                    age: 26,
                    address: 'Ottawa No. 2 Lake Park',
                    date: '2016-10-04'
                }
            ]
        }
    },
    methods: {
        tabClick(row,index){
            console.log(row,index)
        },
        goBack(){
            this.$router.go(-1);
        }
    },
    mounted:function(){
        
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
    .tab{
        text-align: center;
    }
    .tab_box{
        width: 400px;
        height: auto;
        margin: 0 auto ;
    }
</style>

