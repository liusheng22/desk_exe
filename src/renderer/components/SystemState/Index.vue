<template>
    <div>
        <div id="content">
            <!-- <router-link to="router.go(-1)" >
                返回(index)
            </router-link> -->
            <Button @click="goBack">
                返回(index)
            </Button>
            
            <h3>系统状态</h3>
            <div>
                <div class="main_btn">
                    <router-link to="/xtzk" >
                        1.系统状况
                    </router-link>
                </div>
            </div>
            <div>
                <div class="main_btn">
                    <router-link to="/txzt" >
                        2.通信状态
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    methods: {
        goBack(){
            this.$router.go(-1);
        }
    },
    mounted:function(){
    }
}
</script>

<style scoped>
    #content{
        text-align: center;
    }
    #content>h3{
        text-align: center ;
        margin-top: 20px;
    }
    .main_btn{
        display: inline-block;
        width: 100px;
        border:1px solid #000 ;
        height: 30px;
        margin: 0 10px;
        background-color: #eee;
        text-align: center ;
        border-radius: 5px;
        vertical-align: middle ;
        line-height: 30px;
        margin-bottom: 20px;
    }
</style>
