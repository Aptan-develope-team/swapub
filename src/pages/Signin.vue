<template>
<div>
	<div id="main">
		<div class="bgBlock signBgBlock">
			<a><p>還沒有帳戶嗎？</p><h2>立即註冊</h2></a>
			<a class="action"><p>我已經有帳戶了！</p><h2>馬上登入</h2></a>
		</div>
		<div class="bgBlock pwBgBlock">
			<a><p>輸入電子信箱，我們立即幫您處理</p><h2>重設密碼</h2></a>
			<a><h2>回到登入</h2></a>
		</div>
		<div class="content">
			<div class="conBlock signinPad action">
				<a href="index.html" class="swapubLogo"></a>
				<form method="get" accept-charset="utf-8">
					<a href="#" class="btn_fb"><img src="../../static/images/icon_fb1.png" alt="">Facebook</a>
					<a href="#" class="btn_tw"><img src="../../static/images/icon_twitter1.png" alt="">Twitter</a>
					<p><i></i>電子信箱<input type="email" name="" value="" placeholder="" v-model="UserInfo.Email"></p>
					<p><i></i>密碼<input type="password" v-model="UserInfo.Password"></p>
					<span class="forgotPW">哎呀！我忘記密碼？</span>
					<input type="submit" name="" value="登入" class="btn_o" @click="login()">
				</form>
			</div>
			<span class="expBlock">
				<router-link to="/exp_rule">服務條款</router-link>
				<router-link to='/exp_rule' class="action">隱私權政策</router-link>
			</span>
			<div class="conBlock registerPad">
				<a href="index.html" class="swapubLogo"></a>
				<form method="get" accept-charset="utf-8">
					<p><i></i>輸入你的名字<input type="text" name="" value="" placeholder="" v-model="signupInfo.LastName"></p>
					<p><i></i>輸入你的姓<input type="text" v-model="signupInfo.FirstName"></p>
					<p><i></i>電子信箱<input type="email" name="" value="" placeholder="" v-model="signupInfo.Email"></p>
					<p><i></i>密碼(至少6位英數)<input type="password" v-model="signupInfo.Password"></p>
					<span>按下註冊後表示我同意<br>
						<router-link to="/exp_rule">服務條款</router-link>及<router-link to='/exp_rule'>隱私權政策</router-link>
					</span>
					<input type="submit" name="" value="註冊" class="btn_g" @click="signup()">
				</form>
			</div>
			<div class="conBlock setpwPad">
				<a href="index.html" class="swapubLogo"></a>
				<form action="index.html" method="get" accept-charset="utf-8">
					<p><i></i>電子信箱<input type="email" name="" value="" placeholder=""></p>
					<span>我們將透過電子郵件，重新發送新密碼給您。</span>
					<input type="submit" name="" value="確認" class="btn_r">
				</form>
			</div>
		</div>
	</div><!-- main END -->

	<!-- Loader  -->
	<div class="loadPad"><div class="loader_g"><i></i><i></i><i></i><i></i></div></div>    
</div>
</template>

<script>
import api from '../api/Api.js'

export default {
	data() {
		return{
			UserInfo: {
				Email: "",
				Password: "",
				Type:'1',
				Version:'28'
			},
			signupInfo:{
				Email: "",
				Password: "",
				Type:'1',
				FirstName:"",
				LastName:""
			},
			token:"",
			resData:{}
		}
	},
 created(){
	 this.getToken();
 },
  methods:{
  
  async login(){
	    if(this.UserInfo.Email == ''){
			alert('請輸入Email')
		}
		else if(this.UserInfo.Password == ''){
			alert('請輸入密碼')
		}
		else{
		this.resData = await api.login('PeformLogon',this.UserInfo)
		//this.resData = await api.get('User','D6DStlpfWsJLNPNCOWMp8%2beSW%2bbPEh1c9El40E%2b2mNoy5l5RHAhAJ2MTQigid4Uujq1E6DA6%2fpqGkbLbBhKmPEUlYoyEvxHAS%2fS1%2fvxf65tIhWyeVHsxw%3d%3d','')
		// let copy = Object.assign({}, this.resData);
		// copy.About = "cool"
		// console.log(copy)
		// await api.put('User/1',copy,'9D6DStlpfWsJLNPNCOWMp8%2beSW%2bbPEh1c9El40E%2b2mNoy5l5RHAhAJ2MTQigid4Uujq1E6DA6%2fpqGkbLbBhKmPEUlYoyEvxHAS%2fS1%2fvxf65tIhWyeVHsxw%3d%3d')
		console.log(this.resData)
		if(this.resData.Token != '' && this.resData.Result == '0'){
			localStorage.setItem('login_token',this.resData.Token)
			this.token = localStorage.getItem('login_token')
			alert('登入成功')
			this.$router.push('/')
	   }
	   else{
		   alert('您輸入的資料有誤')
	   }
	   }		
	},
  async getToken(){
	   if(localStorage.getItem('login_token') == '' || localStorage.getItem('login_token') == null){
		   await api.getToken()
		   this.token = localStorage.getItem('api_token') 
	   }
	   else{
		   this.token = localStorage.getItem('login_token')
	   }
	   
   },
   async signup(){
	   	this.resData = await api.post('Register_V2',this.signupInfo)
		console.log(this.resData)
		
		if(this.resData.CheckToken != ''){
			localStorage.setItem('login_token',this.resData.CheckToken)
			this.token = localStorage.getItem('login_token')
			alert('註冊成功')
			this.$router.push('/')
		}
		else{
			if(this.resData.ResultInt == '-2'){
				alert('帳號已經註冊過')
			}
			alert('註冊失敗')
		}

   }
  },
  mounted(){

	setTimeout(() => {
    var Gw = $(window), Gww = Gw.width(), Gwh = Gw.height(), Gd = $(document), Gdw = Gd.width(), Gdh = Gd.height();
    
    $('.loadPad').animate({opacity:0},1000, function(){
		$('.loadPad').css({'display':'none'});
	});
	var element = document.getElementById("body_class");
	element.removeAttribute("class");
    element.classList.add("signin");

    var $con = $('body.signin').find('.content'),
		$conW, //$con寬度
		conH, //$con高度
		$conBlock = $con.find('.conBlock'),
		$cBlockW, //conBlock寬度
		$cBlockH, //conBlock高度
		nowCon = 0, //當前的conBlock(表單區塊)
		$bgBlock = $('.bgBlock'),
		$bgBlockA = $bgBlock.find('a'), //背景區塊
		$expBlock = $('.expBlock'), //conBlock下方連結
		$setpwBt = $('.signinPad').find('.forgotPW'), //忘記密碼
		$setpwBgA = $('.pwBgBlock').find('a');
	// 初始設定
	$bgBlock.eq(0).css({'display' : 'block'});
	$conBlock.eq(nowCon).css({'display' : 'block'}).siblings().css({'display' : 'none'});
	$expBlock.css({'display' : 'block'});
	// 設定當前conBlock尺寸
	var setH = function(){
		$cBlockW = $conBlock.eq(nowCon).outerWidth();
		$cBlockH = $conBlock.eq(nowCon).outerHeight();
		$con.innerWidth($cBlockW);
		$con.innerHeight($cBlockH);
		var conW = $con.outerWidth();
		conH = $con.outerHeight();
		$con.css({'top' : ( Gdh - conH ) / 2 , 'left' : ( Gdw - conW ) / 2});
	}
	setH();
	// 登入或註冊 點左右色塊
	$bgBlockA.click(function(){
		var ind = $(this).index();
		if( ind !== 1){
			nowCon = 1;
			$('.signBgBlock').addClass('goLeft'); //移動色塊
			$bgBlockA.eq(nowCon).removeClass('action').siblings().addClass('action'); //字改白色
			$conBlock.eq(nowCon).fadeIn().siblings('.conBlock').fadeOut(); //更換conBlock
			$expBlock.stop().fadeOut();
		}else{
			nowCon = 0;
			$('.signBgBlock').removeClass('goLeft');
			$bgBlockA.eq(nowCon).removeClass('action').siblings().addClass('action');
			$conBlock.eq(nowCon).fadeIn().siblings('.conBlock').fadeOut();;
			$expBlock.fadeIn(1000);
		}
		setH();
	});
	//點忘記密碼
	$setpwBt.click(function(){
		nowCon = 2;
		$bgBlock.eq(0).find('a').find('p').fadeOut();
		$bgBlock.eq(0).find('a').find('h2').fadeOut();
		$('.signBgBlock').addClass('goTop');
		setTimeout(function() {$('.signBgBlock').fadeOut();}, 500);
		setTimeout(function() {$('.pwBgBlock').fadeIn();}, 440);
		$setpwBgA.eq(1).removeClass('action').siblings().addClass('action');
		$conBlock.eq(nowCon).fadeIn().siblings().fadeOut();
		$expBlock.stop().fadeOut();
		setH();
	});
	$setpwBgA.eq(0).unbind('click');
	$setpwBgA.eq(0).css({'cursor':'auto'})
	//點忘記密碼頁的上下色塊
	$setpwBgA.eq(1).click(function(){
		nowCon = 0;
		$bgBlock.eq(nowCon).find('a').find('p').fadeIn();
		$bgBlock.eq(nowCon).find('a').find('h2').fadeIn();
		$('.signBgBlock').fadeIn(0, function(){
			$('.signBgBlock').removeClass('goTop');
			$('.pwBgBlock').fadeOut(500, function(){
				setTimeout(function(){
					$conBlock.eq(nowCon).fadeIn(500).siblings('.conBlock').fadeOut();
				}, 500);
			});
		});
	});



    },0)
    }
} 
</script>