<template>
    <Col span="20">
        <h3>请选择应用程序</h3>
        <div>
            <ul class="ul_list">
                <li>
                    <router-link to="/manage" >
                        管理程序日志（应用程序号0）
                    </router-link>
                </li>
                <li>
                    <router-link to="/type" >
                        管理程序日志（应用程序号1）
                    </router-link>
                </li>
                <li>
                    <router-link to="/type" >
                        管理程序日志（应用程序号2）
                    </router-link>
                </li>
                <li>
                    <router-link to="/type" >
                        管理程序日志（应用程序号3）
                    </router-link>
                </li>
            </ul>
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
    .ul_list{
        list-style: none;
        margin: 0 auto ;
        width: 300px;
    }
    .ul_list>li{
        margin: 10px 0 ;
        cursor: pointer;
    }
    .ul_list>li:hover{
        background-color: #b7d0fd;
        color: #fff;
    }
</style>
