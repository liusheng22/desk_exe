<template>
    <div>
        <div id="content">
            <Button @click="goBack">
                返回(index)
            </Button>
            <h3>系统参数</h3>
            <ul class="ul_list">
                <li>
                    <router-link to="/inter" class="btn" >
                        <Button>
                            以太网设置
                        </Button>
                    </router-link>
                    <router-link to="/pwd" class="btn" >
                        <Button>
                            密码设置
                        </Button>
                    </router-link>
                </li>
                <li>
                    <router-link to="/clock" class="btn" >
                        <Button>
                            时钟设置
                        </Button>
                    </router-link>
                    <router-link to="/close" class="btn" >
                        <Button>
                            关闭系统
                        </Button>
                    </router-link>
                </li>
                <li>
                    <router-link to="/reload" class="btn" >
                        <Button>
                            重启系统
                        </Button>
                    </router-link>
                    <router-link to="/overload" class="btn" >
                        <Button>
                            重载系统
                        </Button>
                    </router-link>
                </li>
                <li>
                    <router-link to="/log" class="btn" >
                        <Button>
                            查看日志
                        </Button>
                    </router-link>
                    <router-link to="/elec" class="btn" >
                        <Button>
                            电表设置
                        </Button>
                    </router-link>
                </li>
                <li>
                    <router-link to="/station" class="btn" >
                        <Button>
                            主站设置
                        </Button>
                    </router-link>
                    <router-link to="/time" class="btn" >
                        <Button>
                            系统对时
                        </Button>
                    </router-link>
                </li>
                <li>
                    <router-link to="/reread" class="btn" >
                        <Button>
                            数据重读
                        </Button>
                    </router-link>
                    <router-link to="/version" class="btn" >
                        <Button>
                            版本信息
                        </Button>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        methods:{
            goBack(){
                this.$router.go(-1);
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
    .ul_list{
        list-style: none;
    }
    .ul_list>li{
        margin: 10px 0 ;
    }   
    .btn{
        width: 100px;
        height: 30px;
        margin: 0 20px ;
        display: inline-block;
    }
    .btn>button{
        width: 100%;
        height: 100%;
    }
</style>
