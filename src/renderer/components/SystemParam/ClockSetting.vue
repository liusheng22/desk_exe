<template>
    <Col span="20">
        <h3>时钟设置</h3>
        <div>
            <p>
                <span>
                    年份
                </span>
                 <DatePicker type="date" :placeholder="yearTime" style="width: 112px"></DatePicker>
            </p>
            <p>
                <span>
                    时间
                </span>
                <TimePicker confirm :steps="[1, 1, 1]" :placeholder="hfmTime" style="width: 112px"></TimePicker>
            </p>
        </div>
    </col>
</template>

<script>
    export default {
        data () {
            return {
                yearTime : '',
                hfmTime : '',
            }
        },
        methods:{
            DayTime : function(timestamp,type){
                var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
                var Y = date.getFullYear() + '-';
                var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
                var D = date.getDate() + ' ';
                var h = date.getHours() + ':';
                var m = date.getMinutes() + ':';
                var s = date.getSeconds();
                if(type == 'day'){
					return Y+M+D;
				}else{
					return h+m+s ;
				}
            },
            goBack(){
                this.$router.go(-1);
            }
        },
        created: function () {
            this.yearTime =  this.DayTime(Date.parse(new Date())/1000,'day')
			this.hfmTime =  this.DayTime(Date.parse(new Date())/1000,'hfm')
        },
        mounted:function(){
            this.yeraTime =  this.DayTime(Date.parse(new Date())/1000)
		}
    }
</script>

<style>
    .left{
        float:left;
        vertical-align: middle;
        display: inline-block;
        height: 32px;
        line-height: 32px;
    }
    .after::after{
        content:'';
        display: block;
        clear: both;
    }
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
