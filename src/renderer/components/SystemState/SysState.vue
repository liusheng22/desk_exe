<template>
    <div>
        <div id="content">
            <router-link to="router.go()" >
               <Button @click="goBack">
                    返回(index)
                </Button>
            </router-link>
            <h3>系统状况</h3>
            <div class="progress_bar">
                <div>
                    <div class="cpu_use">
                        <span>CPU使用率 </span>
                        <Progress :percent="25" :stroke-width="16" status="active" class="cpu_progress ui_progress"></Progress>
                    </div>
                    <div class="RAM_use">
                        <span>内存使用率 </span>
                        <Progress :percent="50" :stroke-width="16" status="active" class="RAM_progress ui_progress"></Progress>
                    </div>
                    <div class="disk_use">
                        <span>磁盘使用率 </span>
                        <Progress :percent="99" :stroke-width="16" status="active" class="disk_progress ui_progress"></Progress>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { Progress } from 'iview';

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

<style>
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
    .ui_progress{
        width: 20%;
    }
    .ivu-progress-text{
        position: absolute !important;
        left: 50% !important;
        margin-left: 0px !important;
    }
</style>

