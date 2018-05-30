<template>
    <div id="content">
        <Button @click="goBack">
            返回(index)
        </Button>
        <h3>添加电表设备</h3>
        <div>
            <ul class="ul_list" >
                <li>
                    <span class="span_left">
                        通讯规约:
                    </span>
                    <span class="span_left">
                        645
                    </span>
                </li>
                <li>
                    <span class="span_left">
                        设备名:
                    </span>
                    <span class="span_left">
                        测试电表1
                    </span>
                </li>
                <li>
                    <span class="span_left">
                        所属电压等级:
                    </span>
                    <span class="span_left">
                        10kV
                    </span>
                </li>
                <li>
                    <span class="span_left">
                        通信接口:
                    </span>
                    <span class="span_left">
                        串口
                    </span>
                </li>
                <li>
                    <span class="span_left">
                        通信地址:
                    </span>
                    <span class="span_left">
                        3121312134351321
                    </span>
                </li>
                <li>
                    <span class="span_left">
                        通信状态:
                    </span>
                    <span class="span_left">
                        OFF
                    </span>
                </li>
            </ul>
        </div>
        <h3>选择需要添加的主站规约</h3>
        <div>
            <RadioGroup v-model="mainStation" vertical>
                <Radio label="playstation">
                    <Icon type="playstation"></Icon>
                    <span>国调主调</span>
                </Radio>
                <Radio label="playstation">
                    <Icon type="playstation"></Icon>
                    <span>湖北</span>
                </Radio>
                <Radio label="playstation">
                    <Icon type="playstation"></Icon>
                    <span>华中</span>
                </Radio>
            </RadioGroup>
        </div>
        <p>
            <Button>
                <router-link :to="{ path: '/params', query: { type: 'add' }}" >
                    确认
                </router-link>
            </Button>
        </p>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                protocolType : '',
                appNumber : '',
                mainStation : '',
            }
        },
        methods:{
            goBack(){
                this.$router.go(-1);
            }
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
    .span_left{
        display: inline-block;
        width: 100px;
        margin-right: 20px;
    }
    .ivu-radio-group-vertical .ivu-radio-wrapper {
        text-align: left;
    }
    .ivu-radio{
        width: 30px;
    }
</style>
