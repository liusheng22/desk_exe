<template>
    <div id="content">
        <Button @click="goBack">
            返回(index)
        </Button>
        <h3>请选择电表设备</h3>
        <div>
            <ul class="ul_list" v-for="(item,idx) of [1,2,3,,4,5]" >
                <li>
                    <router-link :to="{ path: '/info', query: { type: 'edit' }}" >
                        110kV645表{{idx+1}}
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
            }
        },
        methods:{
            goBack(){
                this.$router.go(-1);
            },
        },
        created: function () {
        },
        mounted:function(){
		}
    }
</script>

<style scoped>
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
        width: 640px;
        text-align: center;
        margin: 0 auto ;
    }
    #content>h3{
        text-align: center ;
        margin-top: 20px;
    }
    #content>p{
        text-align: left ;
        margin-top: 10px;
    }
    #content>p>button{
        margin-left: 210px;
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
    .ul_list>li>a{
        font-size: 16px;
        margin-right: 20px;
    }
</style>
