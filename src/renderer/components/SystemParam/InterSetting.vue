<template>
    <div id="content">
        <Button @click="goBack">
            返回(index)
        </Button>
        <h3>以太网设置</h3>
        <div class="picker">
            <ul class="ul_list after">
                <li class="after">
                    <Row>
                        <span class="left">IP类型 </span>
                        <Col span="12" style="padding-right:10px">
                            <Select v-model="ipType" filterable size="default" placeholder="请选择" >
                                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                        </Col>
                    </Row>
                </li>
                <li class="after">
                    <span class="left">
                        IP地址 
                    </span>
                    <Input v-model="ipAdd" placeholder="IP地址" class="left" clearable style="width: 200px"></Input>
                </li>
                <li class="after">
                    <span class="left">
                        子网掩码
                    </span>
                    <Input v-model="newMask" placeholder="子网掩码" class="left" clearable style="width: 200px"></Input>
                </li>
                <li class="after">
                    <span class="left">
                        网关地址 
                    </span>
                    <Input v-model="gateway" placeholder="网关地址" class="left" clearable style="width: 200px"></Input>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                cityList: [
                    {
                        value: 'eth0',
                        label: 'eth0'
                    },
                    {
                        value: 'eth1',
                        label: 'eth1'
                    },
                    {
                        value: 'eth2',
                        label: 'eth2'
                    },
                    {
                        value: 'eth3',
                        label: 'eth3'
                    },
                    {
                        value: 'eth4',
                        label: 'eth4'
                    },
                    {
                        value: 'eth5',
                        label: 'eth5'
                    }
                ],
                ipType : '',
                ipAdd : '',
                newMask : '',
                gateway : '',
            }
        },
        methods:{
            goBack(){
                this.$router.go(-1);
            }
        },
        created: function () {
            let conn = new RTCPeerConnection({
                iceServers: []
            }) 
            let noop = function(){}
            conn.onicecandidate = ice=>{
                if (ice.candidate){
                    //使用正则获取ip
                    let ip_regex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/
                    let ip_addr = ip_regex.exec(ice.candidate.candidate)[1];
                    this.ipAdd = ip_addr
                    conn.onicecandidate = noop
                }
            }
            //随便创建一个叫狗的通道(channel)
            conn.createDataChannel('dog')
            //创建一个SDP协议请求
            conn.createOffer(conn.setLocalDescription.bind(conn),noop)
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
