<template>
    <Col span="4">
        <div class="content_left">
            <div class="menu_box">
                <template v-for="(item,idx) of menu_list">
                    <div class="menu_btn" :class="{btn_active : angle_btn_active[idx] , angle_active : angle_btn_active[idx] , btn_show : angle_btn_bottom[idx]}" @click="menuBtn(idx)" >{{item.btn}}</div>
                    <ul class="tree_ul" v-show="angle_btn_bottom[idx]" :style="angle_btn_bottom[idx]?height_show:height_hide" >
                        <li v-for="(v,i) of item.li_list" :class="i==tree_li?'active':''" @click="li_click(i,v.path,v.name)" >{{v.name}}</li>
                    </ul>
                </template>
            </div>
        </div>
    </Col>
</template>

<script>

export default {
	data(){
		return{
			tree_ul : 0,
			tree_li : 0,
			angle_btn_active : [true , false ,false ,false] ,	//管理btn的选中的位置
			angle_btn_bottom : [true , false ,false ,false] ,	//管理btn的箭头下/左状态
			height_hide : {
				height : '0px',
				transform:'.5s all',
			},
			height_show : {
				height : 'auto',
				transform:'.5s all',
				overflow: 'hidden'
			},
			menu_list : [
				{
					btn : '系统状态',
					li_list : [
                        {
                            name : '系统运行状态' ,
                            path : '/xtzk'
                        },
                        {
                            name : '串口通信状态' ,
                            path : '/txzt'
                        }
                    ]
				},
				{
					btn : '历史数据',
					li_list : [
                        {
                            name : '分钟冻结数据' ,
                            path : '/freeze'
                        },
                        {
                            name : '遥测数据' ,
                            path : '/tele'
                        },
                        {
                            name : '日冻结数据' ,
                            path : '/day'
                        },
                        {
                            name : '月冻结数据' ,
                            path : '/month'
                        },
                        {
                            name : '事件数据' ,
                            path : '/event'
                        },
                        {
                            name : '实时数据' ,
                            path : '/real'
                        }
                    ]
				},
				{
					btn : '系统设置',
					li_list : [
                        {
                            name : '密码修改' ,
                            path : '/pwd'
                        },
                        {
                            name : '时钟设置' ,
                            path : '/clock'
                        },
                        {
                            name : '重载系统' ,
                            path : '/overload'
                        },
                        {
                            name : '重启系统' ,
                            path : '/reload'
                        },
                        {
                            name : '关闭系统' ,
                            path : '/close'
                        },
                        {
                            name : '系统日志' ,
                            path : '/log'
                        }
                    ]
				},
				{
					btn : '设备管理',
					li_list : [
                        {
                            name : '规约管理' ,
                            path : '/protocol' 
                        },
                        {
                            name : '线路管理' ,
                            path : '/line' 
                        },
                        {
                            name : '电表管理' ,
                            path : '/ammeter' 
                        },
                        {
                            name : '主站管理' ,
                            path : '/master' 
                        },
                    ]
				},
			]
		}
	},
  	methods: {
		spliceArr(arr,idx,len,obj){
			arr.splice(idx,len,obj)
		},
		menuBtn(idx){
			if(this.tree_ul == idx){
				if(this.angle_btn_active[idx]){
					this.spliceArr(this.angle_btn_bottom,idx,1,!this.angle_btn_bottom[idx])
				}else{
					this.spliceArr(this.angle_btn_bottom,idx,1,!this.angle_btn_bottom[idx])
				}
			}else{
				this.tree_ul = idx ;
                this.tree_li = 0 ;
                this.$router.push({ path: this.menu_list[idx].li_list[0].path});
				this.angle_btn_bottom = [false ,false ,false ,false] ;
				this.angle_btn_active = [false ,false ,false ,false] ;
				this.spliceArr(this.angle_btn_bottom,idx,1,true)
				this.spliceArr(this.angle_btn_active,idx,1,true)
			}
		},
		li_click(idx,path,title){
            this.tree_li = idx ;
            this.$router.push({ path: path , query : {title : title}});
		},
		tabClick(e,idx){
			console.log(e,idx)
		}
	}
}
</script>

<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	body {
		font-family: "Source Sans Pro", sans-serif;
	}
    .sidebar_left{
        width: 100%;
        text-align: center;
        margin: 0 auto;
        height: 427px;
    }
	.content_left{
		display: inline-block;
		width: 100%;
		height: 100%;
		background: radial-gradient(ellipse at top,#30343D 20%,#323E50 60% , #3A5274 100%);
	}
	.content_right{
		display: inline-block;
		background-color: #D6DBDF;
		width: 100%;
		height: 100%;
	}
	.content_title{
		width: 100%;
		height: 30px;
		line-height: 30px;
		background-color: #3D6B8C;
		color: #fff;
	}
	#content{
		width: 100%;
		text-align: center ;
		margin: 0 auto ;
		height: 427px;
	}
	.ivu-row{
		height: 100%;
		margin: 0 ;
		padding: 0;
	}
	.ivu-col{
		height: 100%;
		margin: 0 ;
		padding: 0;
	}
	.menu_box{
		margin-top: 15px;
		color: #C8CCD7;
	}
	.menu_btn{
		width: 100%;
		height: 50px;
		line-height: 50px;
		background-color: #373B47;
		border-top: 1px solid #333742 ;
		border-bottom: 1px solid #333742 ;
		text-align: center;
		position: relative;
		cursor: pointer;
		user-select:none;
	}
	.btn_active{
		background-color: #20232C !important;
	}
	.angle_active::after{
		content: '';
		display: inline-block;
		width: 0px;
		height: 0px;
		border: 8px solid transparent;
		border-right: 8px solid #fff;
		position: absolute;
		right: 0px;
		top: 50%;
		margin-top: -8px;
	}
	.btn_show::after{
		content: '';
		display: inline-block;
		width: 0px;
		height: 0px;
		border: 8px solid transparent;
		position: absolute;
		right: 0px;
		top: 50%;
		border-top: 8px solid #fff !important;
		margin-top: -4px !important;
	}
	.angle_active::before{
		content: '';
		display: inline-block;
		width: 0px;
		height: 100%;
		border-right:3px solid #81B1EB !important;
		position: absolute;
		left: 3px;
	}
	.angle::before{
		content: '';
		display: inline-block;
		width: 0px;
		height: 100%;
		border-right:3px solid #536A86;
		position: absolute;
		left: 3px;
	}
	.tools_top{
		height:30px;
		vertical-align: middle ;
		padding-top: 5px;
		background: #DBEFFA;
	}
	.tools_search{
		display: inline-block;
		width: 60px;
		height: 22px;
		line-height: 22px;
		background-color: #2A8BBC;
		color: #fff;
		font-size: 12px;
		cursor: pointer;
	}
	.tools_search>i{
		font-size: 12px;
	}
	.tools_icon{
		display: inline-block;
		width: 20px;
		height: 20px;
		margin: 0 3px;
		color: #64A7B2;
		line-height: 20px;
		font-size: 20px;
		cursor: pointer;
	}
	.ivu-input-wrapper{
		width: 60%;
	}
	.tree_ul{
		list-style-type: none;
		display: block;
		height: auto;
		transform: .5s all ;
	}
	.tree_ul>li{
		list-style-type: none;
		display: block ;
		text-align: left;
		padding-left: 20px;
		padding-top:5px; 
		padding-bottom:5px; 
		margin: 2px 0 ;
		margin-left: 6px;
		cursor: pointer;
		background-color: #3C4C66;
		overflow: hidden;
		border-radius: 3px;
	}
	.tree_ul>li.active{
		list-style-type: none;
		display: block ;
		text-align: left;
		padding-left: 20px;
		padding-top:5px; 
		padding-bottom:5px; 
		margin: 2px 0 ;
		margin-left: 6px;
		cursor: pointer;
		background-color: #40628E;
		overflow: hidden;
		border-radius: 3px;
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
