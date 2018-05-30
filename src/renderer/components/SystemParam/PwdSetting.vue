<template>
    <Col span="20">
        <h3>修改密码</h3>
        <div class="picker">
            <ul class="ul_list after">
                <li class="after">
                    <Row>
                        <span class="left">密码类型 </span>
                        <Col span="12" style="padding-right:10px">
                            <Select v-model="pwdType" filterable size="default" :placeholder="cityList[0]['label']" >
                                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                        </Col>
                    </Row>
                </li>
                <li class="after">
                    <span class="left">
                        原密码 
                    </span>
                    <Input v-model="oriPwd" placeholder="原密码" class="left" clearable style="width: 200px"></Input>
                </li>
                <li class="after">
                    <span class="left">
                        新密码
                    </span>
                    <Input v-model="newPwd" placeholder="新密码" class="left" clearable style="width: 200px"></Input>
                </li>
                <li class="after">
                    <span class="left">
                        确认密码 
                    </span>
                    <Input v-model="comfirmPwd" placeholder="确认密码" class="left" clearable style="width: 200px"></Input>
                </li>
            </ul>
        </div>
    </Col>
</template>

<script>
    export default {
        data () {
            return {
                cityList: [
                    {
                        value: 'sys',
                        label: '系统设置密码'
                    },
                    {
                        value: 'data',
                        label: '数据重抄密码'
                    }
                ],
                pwdType : '' ,
                oriPwd : '',
                newPwd : '',
                comfirmPwd : '',
            }
        },
        methods:{
        },
        created: function () {
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
    }
    .ul_list>li span{
        width: 80px;
        margin-right: 10px;
        font-size: 12px;
    }
    .picker{
        margin: 0 auto ;
        width: 500px;
    }

    .ivu-row{
        text-align: center ;
        margin : 0 auto ;
    }
    .ivu-col-span-12{
        width: 200px;
        padding-right: 0px !important;
    }
</style>
