<template>
	<Col span="20">
		<div class="content_right">
			<div class="content_title">标题</div>
			<!-- 主体内容 -->
			<div class="content_main">
				<div class="tools_top">
					<Row>
						<Col span="8">
							<label for="comment_content">评论内容:</label>
							<Input type="text" id="comment_content" size="small" v-model="comment_content" ></Input>
						</Col>
						<Col span="7">
							<span for="running_status">运行状态:</span>
							<Select v-model="running_status" size="small" style="width:80px" id="running_status">
								<Option v-for="item in statusList" :value="item.value" :key="item.value">{{ item.label }}</Option>
							</Select>
						</Col>
						<Col span="3">
							<div class="tools_search">
								查询
								<Icon type="search"></Icon>
							</div>
						</Col>
						<Col span="6">
							<span class="tools_icon">
								<Icon type="ios-plus-outline"></Icon>
							</span>
							<span class="tools_icon">
								<Icon type="ios-play"></Icon>
							</span>
							<span class="tools_icon">
								<Icon type="ios-pause"></Icon>
							</span>
						</Col>
					</Row>
				</div>
				<div class="tab_content">
					<Table class="tab" :columns="columns" :data="tabData" ellipsis stripe border height="360" @on-row-click="tabClick"></Table>
				</div>
			</div>
		</div>
	</Col>
</template>

<script>

export default {
	data(){
		return{
			tree_ul : 1,
			tree_li : 0,
			menu_btn_show : true ,
			addInfo : true ,
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
					li_list : ['系统运行状态','串口通信状态']
				},
				{
					btn : '历史数据',
					li_list : ['分钟冻结数据','遥测数据','日冻结数据','月冻结数据','事件数据','实时数据']
				},
				{
					btn : '系统设置',
					li_list : ['密码修改','时钟设置','重载系统','重启系统','关闭系统','系统日志']
				},
				{
					btn : '设备管理',
					li_list : ['规约管理']
				},
			],
			statusList : [
				{
					value: '运行',
					label: '运行'
				},
				{
					value: '不运行',
					label: '不运行'
				},
			],
			running_status : '运行',
			comment_content : '',
			columns: [
                    {
                        title: '评论内容',
                        key: 'idx',
                        align: 'center',
                        width:200,
						fixed: 'left',
						ellipsis : true 
                    },
                    {
                        title: '评论URL',
                        key: 'url',
                        align: 'center',
						width:150,
						ellipsis : true 
                    },
                    {
                        title: '发帖者',
                        key: 'author',
                        width:100,
						align: 'center',
						ellipsis : true 
                    },
                    {
                        title: '运行状态',
                        key: 'status',
                        width:100,
						align: 'center',
						render: (h, params) => {
                            return h('div', [
                                h('Icon', {
                                    props: {
										color : 'red',
                                        type: 'ios-loop-strong'
                                    }
                                }),
                                h('strong', params.row.status)
                            ]);
                        }
                    },
                    {
                        title: '行动次数',
                        key: 'time',
                        width:100,
                        align: 'center',
                    },
                    {
                        title: '置顶开始时间',
                        key: 'begin_time',
                        width:150,
                        align: 'center',
                    },
                    {
                        title: '置顶结束时间',
                        key: 'end_time',
                        width:150,
                        align: 'center'
                    }
                ],
			tabData: [
				{
					idx: '习近平在广东干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛',
					url: 'https://www.google.com',
					author: '作者名字名字名字名字',
					status: '',
					time: 12452132,
					begin_time: '2014-05-22 12:30:51',
					end_time: '2014-05-22 12:30:51',
				},
				{
					idx: '习近平在广东干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛',
					url: 'https://www.google.com',
					author: '作者名字名字名字名字',
					status: '',
					time: 12452132,
					begin_time: '2014-05-22 12:30:51',
					end_time: '2014-05-22 12:30:51',
				},
				{
					idx: '习近平在广东干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛',
					url: 'https://www.google.com',
					author: '作者名字名字名字名字',
					status: '',
					time: 12452132,
					begin_time: '2014-05-22 12:30:51',
					end_time: '2014-05-22 12:30:51',
				},
				{
					idx: '习近平在广东干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛',
					url: 'https://www.google.com',
					author: '作者名字名字名字名字',
					status: '',
					time: 12452132,
					begin_time: '2014-05-22 12:30:51',
					end_time: '2014-05-22 12:30:51',
				},
				{
					idx: '习近平在广东干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛',
					url: 'https://www.google.com',
					author: '作者名字名字名字名字',
					status: '',
					time: 12452132,
					begin_time: '2014-05-22 12:30:51',
					end_time: '2014-05-22 12:30:51',
				},
				{
					idx: '习近平在广东干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛',
					url: 'https://www.google.com',
					author: '作者名字名字名字名字',
					status: '',
					time: 12452132,
					begin_time: '2014-05-22 12:30:51',
					end_time: '2014-05-22 12:30:51',
				},
				{
					idx: '习近平在广东干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛',
					url: 'https://www.google.com',
					author: '作者名字名字名字名字',
					status: '',
					time: 12452132,
					begin_time: '2014-05-22 12:30:51',
					end_time: '2014-05-22 12:30:51',
				},
				{
					idx: '习近平在广东干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛干嘛',
					url: 'https://www.google.com',
					author: '作者名字名字名字名字',
					status: '',
					time: 12452132,
					begin_time: '2014-05-22 12:30:51',
					end_time: '2014-05-22 12:30:51',
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
				if(this.angle_btn_active[idx-1]){
					this.spliceArr(this.angle_btn_bottom,idx-1,1,!this.angle_btn_bottom[idx-1])
				}else{
					this.spliceArr(this.angle_btn_bottom,idx-1,1,!this.angle_btn_bottom[idx-1])
				}
			}else{
				this.tree_ul = idx ;
				this.tree_li = 0 ;
				this.angle_btn_bottom = [false ,false ,false ,false] ;
				this.angle_btn_active = [false ,false ,false ,false] ;
				this.spliceArr(this.angle_btn_bottom,idx-1,1,true)
				this.spliceArr(this.angle_btn_active,idx-1,1,true)
			}
		},
		li_click(idx){
			this.tree_li = idx ;
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
		text-align: center ;
		background-color: #3D6B8C;
		color: #fff;
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
		padding-left: 10px;
	}
	.tools_search{
		display: inline-block;
		width: 60px;
		height: 22px;
		line-height: 22px;
		background-color: #2A8BBC;
		color: #fff;
		font-size: 12px;
		text-align: center ;
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
