<template>
    <div>
        <div id="content">
            <Button @click="goBack">
                返回(index)
            </Button>
            <h3>请选择设备</h3>
            <ul class="ul_list">
                <li>ERTU自身</li>
                <li>
                    <router-link to="/type" >
                        110kv645表自身
                    </router-link>
                </li>
                <li>
                    <router-link to="/type" >
                        110kv645表自身
                    </router-link>
                </li>
                <li>
                    <router-link to="/type" >
                        110kv645表自身
                    </router-link>
                </li>
                <li>
                    <router-link to="/type" >
                        110kv645表自身
                    </router-link>
                </li>
                <li>
                    <router-link to="/type" >
                        110kv645表自身
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
        margin: 0 auto ;
        width: 300px;
    }
    .ul_list>li{
        margin: 10px 0 ;
    }
    .ul_list>li:hover{
        background-color: #b7d0fd;
    }
</style>

