<template>
    <div id="content">
        <Button @click="goBack">
            返回(index)
        </Button>
        <h3>修改规约参数</h3>
        <div>
            <ul class="ul_list" >
                <li>
                    <div class="li_left">
                        <span class="span_left">
                            通讯方式
                        </span>
                        <span>
                            <Input v-model="protocolType" type="text" style="width: 100px" ></Input>
                        </span>
                    </div>
                    <div class="li_left">
                        <span class="span_left">
                            通讯规约
                        </span>
                        <span>
                            <Input v-model="protocolType" type="text" style="width: 100px" ></Input>
                        </span>
                    </div>
                </li>
                <li>
                    <div class="li_left">
                        <span class="span_left">
                            网路地址
                        </span>
                        <span>
                            <Input v-model="protocolType" type="text" style="width: 100px" ></Input>
                        </span>
                    </div>
                    <div class="li_left">
                        <span class="span_left">
                            网络端口
                        </span>
                        <span>
                            <Input v-model="protocolType" style="width: 100px" number ></Input>
                        </span>
                    </div>
                </li>
                <li>
                    <div class="li_left">
                        <span class="span_left">
                            网络等待时间
                        </span>
                        <span>
                            <Input v-model="protocolType" type="text" style="width: 100px"  ></Input>
                        </span>
                    </div>
                    <div class="li_left">
                        <span class="span_left">
                            Modem端口
                        </span>
                        <span>
                            <Input v-model="protocolType" type="text" style="width: 100px"  ></Input>
                        </span>
                    </div>
                </li>
                <li>
                    <div class="li_left">
                        <span class="span_left">
                            Modem波特率
                        </span>
                        <span>
                            <Input v-model="protocolType" style="width: 100px" number  ></Input>
                        </span>
                    </div>
                    <div class="li_left">
                        <span class="span_left">
                            Modem数据位
                        </span>
                        <span>
                            <Input v-model="protocolType" style="width: 100px" number  ></Input>
                        </span>
                    </div>
                </li>
                <li>
                    <div class="li_left">
                        <span class="span_left">
                            Modem停止位
                        </span>
                        <span>
                            <Input v-model="protocolType" style="width: 100px" number  ></Input>
                        </span>
                    </div>
                    <div class="li_left">
                        <span class="span_left">
                            Modem校验方式
                        </span>
                        <span>
                            <Input v-model="protocolType" type="text" style="width: 100px"  ></Input>
                        </span>
                    </div>
                </li>
                <li>
                    <div class="li_left">
                        <span class="span_left">
                            Modem等待时间
                        </span>
                        <span>
                            <Input v-model="protocolType" type="text" style="width: 100px"  ></Input>
                        </span>
                    </div>
                    <div class="li_left">
                        <span class="span_left">
                            串口端口
                        </span>
                        <span>
                            <Input v-model="protocolType" type="text" style="width: 100px"  ></Input>
                        </span>
                    </div>
                </li>
                <li>
                    <div class="li_left">
                        <span class="span_left">
                            串口波特率
                        </span>
                        <span>
                            <Input v-model="protocolType" type="text" style="width: 100px"  ></Input>
                        </span>
                    </div>
                    <div class="li_left">
                        <span class="span_left">
                            串口数据位
                        </span>
                        <span>
                            <Input v-model="protocolType" type="text" style="width: 100px"  ></Input>
                        </span>
                    </div>
                </li>
                <li>
                    <div class="li_left">
                        <span class="span_left">
                            串口停止位
                        </span>
                        <span>
                            <Input v-model="protocolType" style="width: 100px" number ></Input>
                        </span>
                    </div>
                    <div class="li_left">
                        <span class="span_left">
                            串口校验方式
                        </span>
                        <span>
                            <Input v-model="protocolType" style="width: 100px" number ></Input>
                        </span>
                    </div>
                </li>
                <li>
                    <div class="li_left">
                        <span class="span_left">
                            串口等待时间
                        </span>
                        <span>
                            <Input v-model="protocolType" style="width: 100px" number ></Input>
                        </span>
                    </div>
                    <div class="li_left">
                        <Button>
                            <router-link to="/pickelec" >
                                选择电表
                            </router-link>
                        </Button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                protocolType : '',
            }
        },
        methods:{
            goBack(){
                this.$router.go(-1);
            }
        },
        created: function () {
            console.log(this.$route.query.type)
            if(this.$route.query.type != 'add'){
                this.isAdd = false ;
            }
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
        width: 500px;
    }
    .ul_list>li{
        margin: 10px 0 ;
        cursor: pointer;
    }
    .ul_list>li>a{
        font-size: 16px;
        margin-right: 20px;
    }
    .li_left{
        display: inline-block;
        width: 240px;
    }
    .span_left{
        display: inline-block;
        width: 100px;
        margin-right: 20px;
    }
</style>
