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
                        规约类型
                    </span>
                    <span>
                        <Input v-model="protocolType" placeholder="请输入规约类型" style="width: 100px" number  ></Input>
                    </span>
                </li>
                <li>
                    <span class="span_left">
                        应用号
                    </span>
                    <span>
                        <Input v-model="protocolType" placeholder="请输入应用号" style="width: 100px" number  ></Input>
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
