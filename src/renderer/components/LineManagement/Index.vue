<template>
  <div id="wrapper">
    <div id="content">
        <Button @click="goBack">
            返回(index)
        </Button>
        <h3>系统主菜单</h3>
        <div class="menu_btn">
            <div class="menu_btn_box">
                <div class="btn_col">
                    <div class="main_btn">
                        <router-link to="/protocol" >
                        1.规约管理
                        </router-link>
                    </div>
                </div>
                <div class="btn_col">
                    <div class="main_btn">
                        <router-link to="/line" >
                        2.线路管理
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
    export default {
        methods:{
            goBack(){
                this.$router.go(-1);
            }
        },
    }
</script>

<style scoped>
  #content{
    width: 100%;
    text-align: center ;
    margin: 0 auto ;
  }
  #content>h3{
    text-align: center ;
    margin-top: 20px;
  }
  .btn_col{
    margin-top: 15px;
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
  }
</style>
