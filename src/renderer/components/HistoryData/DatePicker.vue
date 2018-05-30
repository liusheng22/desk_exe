<template>
    <div>
        <div id="content">
            <Button @click="goBack">
                返回(index)
            </Button>
            <h3>请选择查询时间</h3>
            <p>
                <DatePicker type="datetime" format="yyyy-MM-dd HH:mm" :placeholder="nowDate" style="width: 200px"></DatePicker>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                nowDate : ''
            }
        },
        methods:{
            DayTime : function(timestamp){
                var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
                var Y = date.getFullYear() + '-';
                var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
                var D = date.getDate() + ' ';
                var h = date.getHours() + ':';
                var m = date.getMinutes() + ':';
                var s = date.getSeconds();
                return Y+M+D+ h+m;
            },
            goBack(){
                this.$router.go(-1);
            }
        },
        mounted:function(){
            this.nowDate =  this.DayTime(Date.parse(new Date())/1000)
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

