<template>
    <div>
        <div id="content">
            <Button @click="goBack">
                返回(index)
            </Button>
            <h3>请选择110kV645表数据类型</h3>
            <ul class="ul_list">
                <li>
                    <router-link to="/freeze" class="btn" >
                        <Button>
                            分钟冻结数据
                        </Button>
                    </router-link>
                </li>
                <li>
                    <router-link to="/tele" class="btn" >
                        <Button>
                            遥测数据
                        </Button>
                    </router-link>
                </li>
                <li>
                    <router-link to="/day" class="btn" >
                        <Button>
                            日数据
                        </Button>
                    </router-link>
                </li>
                <li>
                    <router-link to="/month" class="btn" >
                        <Button>
                            月数据
                        </Button>
                    </router-link>
                </li>
                <li>
                    <router-link to="/event" class="btn" >
                        <Button>
                            事件数据
                        </Button>
                    </router-link>
                </li>
                <li>
                    <router-link to="/real" class="btn" >
                        <Button>
                            实时数据
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
    .ul_list{
        list-style: none;
    }
    .ul_list>li{
        margin: 10px 0 ;
    }   
    .btn{
        width: 100px;
        height: 30px;
        display: inline-block;
    }
    .btn>button{
        width: 100%;
        height: 100%;
    }
</style>

