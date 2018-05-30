<template>
	<div>
		<div id="content">
			<h3>登陆</h3>
			<div>
				<label for="user">用户名:</label>
				<input type="text" id="user" name="user" v-model="user">
			</div>
			<div>
				<label for="pwd">密&nbsp;&nbsp;&nbsp;&nbsp;码:</label>
				<input type="password" id="pwd" name="pwd" v-model="pwd">
			</div>
			<p>
				<!-- <Button @click="login" >登录</Button> -->
				<button @click="login" >登录</button>
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				user : '',
				pwd : '',
			}
		},
		methods: {
			login(){
				this.$http(`http://localhost:9090/user/login?userName=${this.user}&password=${this.pwd}`).then((res)=>{	// ds / shanxitmrd5000
					if(res.data.status == 'success'){
						this.$router.push({ path: '/main', query: { user: this.user , pwd : this.pwd }})
					}
				})
			}
		}
	};
</script>

<style scoped>
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
</style>
