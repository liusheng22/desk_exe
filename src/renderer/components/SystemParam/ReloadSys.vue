<template>
    <Col span="20">
        <h3>重启系统</h3>
        <div>
            <Button>确认</Button>
            <Button>取消</Button>
        </div>
    </col>
</template>

<script>
    export default {
        data () {
            return {
            }
        },
        methods:{
        },
        created: function () {
        },
        mounted:function(){
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
