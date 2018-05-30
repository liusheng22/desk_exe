<template>
    <div id="content">
        <Button @click="goBack">
            返回(index)
        </Button>
        <h3>参数电能表参数</h3>
        <div>
            <ul class="ul_list" >
                <li>
                    <div class="li_left">
                        <span class="span_left">
                            规约类型
                        </span>
                        <span>
                            <Input v-model="protocolType" type="text" style="width: 100px" v-show="isAdd"  ></Input>
                            <Input v-model="protocolType" type="text" style="width: 100px" disabled v-show="!isAdd"  ></Input>
                        </span>
                    </div>
                    <div class="li_left">
                        <span class="span_left">
                            设备名称
                        </span>
                        <span>
                            <Input v-model="protocolType" type="text" style="width: 100px" v-show="isAdd" ></Input>
                            <Input v-model="protocolType" type="text" style="width: 100px" disabled v-show="!isAdd" ></Input>
                        </span>
                    </div>
                </li>
                <li>
                    <div class="li_left">
                        <span class="span_left">
                            设备号
                        </span>
                        <span>
                            <Input v-model="protocolType" type="text" style="width: 100px" v-show="isAdd" ></Input>
                            <Input v-model="protocolType" type="text" style="width: 100px" disabled v-show="!isAdd" ></Input>
                        </span>
                    </div>
                    <div class="li_left">
                        <span class="span_left">
                            子规约
                        </span>
                        <span>
                            <Input v-model="protocolType" style="width: 100px" number ></Input>
                        </span>
                    </div>
                </li>
                <li>
                    <div class="li_left">
                        <span class="span_left">
                            高地址
                        </span>
                        <span>
                            <Input v-model="protocolType" type="text" style="width: 100px"  ></Input>
                        </span>
                    </div>
                    <div class="li_left">
                        <span class="span_left">
                            低地址
                        </span>
                        <span>
                            <Input v-model="protocolType" type="text" style="width: 100px"  ></Input>
                        </span>
                    </div>
                </li>
                <li>
                    <div class="li_left">
                        <span class="span_left">
                            波特率
                        </span>
                        <span>
                            <Input v-model="protocolType" style="width: 100px" number  ></Input>
                        </span>
                    </div>
                    <div class="li_left">
                        <span class="span_left">
                            数据位
                        </span>
                        <span>
                            <Input v-model="protocolType" style="width: 100px" number  ></Input>
                        </span>
                    </div>
                </li>
                <li>
                    <div class="li_left">
                        <span class="span_left">
                            停止位
                        </span>
                        <span>
                            <Input v-model="protocolType" style="width: 100px" number  ></Input>
                        </span>
                    </div>
                    <div class="li_left">
                        <span class="span_left">
                            校验方式
                        </span>
                        <span>
                            <Input v-model="protocolType" type="text" style="width: 100px"  ></Input>
                        </span>
                    </div>
                </li>
                <li>
                    <div class="li_left">
                        <span class="span_left">
                            是否读取当月费率
                        </span>
                        <span>
                            <Input v-model="protocolType" type="text" style="width: 100px"  ></Input>
                        </span>
                    </div>
                    <div class="li_left">
                        <span class="span_left">
                            是否读取上月费率
                        </span>
                        <span>
                            <Input v-model="protocolType" type="text" style="width: 100px"  ></Input>
                        </span>
                    </div>
                </li>
                <li>
                    <div class="li_left">
                        <span class="span_left">
                            是否读取当月需量
                        </span>
                        <span>
                            <Input v-model="protocolType" type="text" style="width: 100px"  ></Input>
                        </span>
                    </div>
                    <div class="li_left">
                        <span class="span_left">
                            是否读取上月需量
                        </span>
                        <span>
                            <Input v-model="protocolType" type="text" style="width: 100px"  ></Input>
                        </span>
                    </div>
                </li>
                <li>
                    <div class="li_left">
                        <span class="span_left">
                            分钟数据读表周期
                        </span>
                        <span>
                            <Input v-model="protocolType" style="width: 100px" number ></Input>
                        </span>
                    </div>
                    <div class="li_left">
                        <span class="span_left">
                            分钟数据保存周期
                        </span>
                        <span>
                            <Input v-model="protocolType" style="width: 100px" number ></Input>
                        </span>
                    </div>
                </li>
                <li>
                    <div class="li_left">
                        <span class="span_left">
                            遥测数据读表周期
                        </span>
                        <span>
                            <Input v-model="protocolType" style="width: 100px" number ></Input>
                        </span>
                    </div>
                    <div class="li_left">
                        <span class="span_left">
                            遥测数据保存周期
                        </span>
                        <span>
                            <Input v-model="protocolType" style="width: 100px" number ></Input>
                        </span>
                    </div>
                </li>
                <li>
                    <div class="li_left">
                        <span class="span_left">
                            日数据保存次数
                        </span>
                        <span>
                            <Input v-model="protocolType" style="width: 100px" number ></Input>
                        </span>
                    </div>
                    <div class="li_left">
                        <span class="span_left">
                            月数据保存次数
                        </span>
                        <span>
                            <Input v-model="protocolType" style="width: 100px" number ></Input>
                        </span>
                    </div>
                </li>
            </ul>
            <p>
                <Button size="small">
                    <router-link to="/pick">
                        选择数据
                    </router-link>
                </Button>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                isAdd : true ,
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
