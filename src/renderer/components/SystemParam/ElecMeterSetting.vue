<template>
    <div id="content">
        <Button @click="goBack">
            返回(index)
        </Button>
        <h3>电能表设备列表</h3>
        <p>
            <Button>
                <router-link to="/addelec" >
                    添加
                </router-link>
            </Button>
        </p>
        <div>
            <ul class="ul_list" v-for="(item,idx) of [1,2,3,,4,5]" >
                <li>
                    <router-link :to="{ path: '/params', query: { type: 'edit' }}" >
                        110kV645表{{idx+1}}
                    </router-link>
                    <Button @click="isDel = true">
                        删除
                    </Button>
                    <Button >
                        <router-link :to="{ path: '/params', query: { type: 'edit' }}" >
                            修改
                        </router-link>
                    </Button>

                    <Modal
                        v-model="isDel"
                        @on-ok="ok"
                        @on-cancel="cancel"
                        width="200" >
                        <p>您确定要删除该电表吗?</p>
                    </Modal>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                isDel : false
            }
        },
        methods:{
            goBack(){
                this.$router.go(-1);
            },
            ok () {
                this.$Message.info('Clicked ok');
            },
            cancel () {
                this.$Message.info('Clicked cancel');
            }
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
