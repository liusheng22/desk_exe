<template>
    <div>
        <div id="content">
            <Button @click="goBack">
                返回(index)
            </Button>
            <h3>主站规约</h3>
        
            <div>
                <ul class="ul_list" v-for="(item,idx) of [1,2,3,4,5,6]" >
                    <li>
                        <Button >
                            <router-link :to="{ path: '/amend', query: { type: 'edit' }}" >
                                国调主调
                            </router-link>
                        </Button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data (){
            return {
            }
        },
        methods : {
            goBack(){
                this.$router.go(-1);
            },
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
    .ul_list>li>a{
        font-size: 16px;
        margin-right: 20px;
    }
</style>
