<template>
<div id="footer">
	<div class="footerCont">
		<dl>
			<dt><a href="index.html" class="header_logo"> <img src="../../static/images/swapub_logo.png" alt=""></a></dt>
			<dd class="footerMenu CGc">
				<a href="#" class="social_icon social_tw">
					<i class="ico_tw"></i>Twitter
				</a>
				<a href="#" class="social_icon social_fb">
					<i class="ico_fb"></i>Facebook
				</a>
				<router-link to='/exp_about' class="about">關於Swapub</router-link>
				<router-link to='/exp_rule' class="rule">隱私權與使用條款</router-link>
				<router-link to='/exp_qa' class="rule">FAQ</router-link>
				<a href="mailto:swapub@test.tw" class="contact">聯絡我們</a>
			</dd>
			<dd class="nav"><i></i><i></i><i></i></dd>
		</dl>
    	<!-- Copyright © 2009 - 2016 Art Tangency Creation Co., Ltd All Rights Reserved. <a href="http://www.art-tangency.com/" target="_blank" title="網站開發設計">Powered</a> -->
    </div>
</div>
</template>
<script>
    export default {
	  updated(){
		  	setTimeout(() => {  
					var Gw = $(window), Gww = Gw.width(), Gwh = Gw.height(), Gd = $(document), Gdw = Gd.width(), Gdh = Gd.height();
						if (Gwh < Gdh){
							$('#footer').css({'position':'relative'});
						}else{
							$('#footer').css({'position':'fixed'});
						}
	  
	  },100)
	  },
      mounted() {
		    
	  }
	}
	



</script>