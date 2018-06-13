<template>
<div>
  <!-- <body class="item noSearchPage menuPage mWhisper"> -->
	<!-- Header -->
  <app-header></app-header>

	<!-- Header END -->
	<div id="main">
		<div class="breadcrumb">
			<i>Swapub</i><i> &#62; 側邊欄</i><i> &#62; 悄悄話</i><i></i><i></i>
		</div>
		<div class="content">
            <h1>悄悄話(<span>30</span>)</h1>
			<div class="conBlock">
                <ul>
                    <li class="whisperList clear">
                        <div class="userInfo">
                            <span class="userPic checked action"><a href="menu_u_myitem_other.html?j"><img src="../../../static/images/ws_user_img_3.png" alt=""></a></span>
                            <div class="msgBlock">
                                <p class="userName"><i>我(</i>Victor Wang<i>)</i></p>
                                <p>請問哪裡面交您方便呢？</p><i class="date">2017/10/27 20：15</i>
                                <a href="item_detail_whisper.html?c"></a>
                            </div>
                        </div>
                        <div class="itemInfo">
                            <div>
                                <span class="itemImg"><a href="item_detail_whisper.html?c"><img src="../../../static/images/img_item_08.jpg" alt=""></a></span>
                                <span class="iQua">39</span>
                            </div>
                            <p>手做造型彩色隔熱杯套</p>
                        </div>
                    </li>
                    <li class="whisperList clear me">
                        <div class="userInfo">
                            <span class="userPic checked"><a href="menu_u_myitem.html?j"><img src="../../../static/images/ws_user_img_4.png" alt=""></a></span>
                            <div class="msgBlock">
                                <p class="userName"><i>我(</i>Jing Yun Lee<i>)</i></p>
                                <p>請問哪裡面交您方便呢？</p><i class="date">2017/10/27 20：15</i>
                                <a href="item_detail_whisper.html?c"></a>
                            </div>
                        </div>
                        <div class="itemInfo">
                            <div>
                                <span class="itemImg"><a href="item_detail_whisper.html?c"><img src="../../../static/images/mk_it_img_21.jpg" alt=""></a></span>
                                <span class="iQua">2</span>
                            </div>
                            <p>正韓淺紫上衣</p>
                        </div>
                    </li>
                    <li class="whisperList clear me">
                        <div class="userInfo">
                            <span class="userPic checked"><a href="menu_u_myitem.html?j"><img src="../../../static/images/ws_user_img_4.png" alt=""></a></span>
                            <div class="msgBlock">
                                <p class="userName"><i>我(</i>Jing Yun Lee<i>)</i></p>
                                <p>請問哪裡面交您方便呢？</p><i class="date">2017/10/27 20：15</i>
                                <a href="item_detail_whisper.html?c"></a>
                            </div>
                        </div>
                        <div class="itemInfo">
                            <div>
                                <span class="itemImg"><a href="item_detail_whisper.html?c"><img src="../../../static/images/mk_it_img_1.jpg" alt=""></a></span>
                                <span class="iQua">39</span>
                            </div>
                            <p>Paper Garden LED迷你植物壁掛</p>
                        </div>
                    </li>
                    <li class="whisperList clear">
                        <div class="userInfo">
                            <span class="userPic checked action"><a href="menu_u_myitem_other.html?j"><img src="../../../static/images/ws_user_img_3.png" alt=""></a></span>
                            <div class="msgBlock">
                                <p class="userName"><i>我(</i>Victor Wang<i>)</i></p>
                                <p>請問哪裡面交您方便呢？</p><i class="date">2017/10/27 20：15</i>
                                <a href="item_detail_whisper.html?c"></a>
                            </div>
                        </div>
                        <div class="itemInfo">
                            <div>
                                <span class="itemImg"><a href="item_detail_whisper.html?c"><img src="../../../static/images/img_item_03.jpg" alt=""></a></span>
                                <span class="iQua">10</span>
                            </div>
                            <p>VR數位眼鏡</p>
                        </div>
                    </li>
                    <li class="whisperList clear">
                        <div class="userInfo">
                            <span class="userPic checked action"><a href="menu_u_myitem_other.html?j"><img src="../../../static/images/ws_user_img_3.png" alt=""></a></span>
                            <div class="msgBlock">
                                <p class="userName"><i>我(</i>Victor Wang<i>)</i></p>
                                <p>請問哪裡面交您方便呢？</p><i class="date">2017/10/27 20：15</i>
                                <a href="item_detail_whisper.html?c"></a>
                            </div>
                        </div>
                        <div class="itemInfo">
                            <div>
                                <span class="itemImg"><a href="item_detail_whisper.html?c"><img src="../../../static/images/mk_it_img_20.jpg" alt=""></a></span>
                                <span class="iQua">2</span>
                            </div>
                            <p>手做造型彩色隔熱杯套</p>
                        </div>
                    </li>
                </ul>
			</div>
		</div>
	   <div class="btn_openPop"></div>
	</div><!-- main END -->

	<!-- Footer -->
	<app-footer></app-footer>
	<div class="backTop CGt"></div>
	<!-- Light Box -->
	<div id="popContainer" style="top:-100vh;">
		<!-- <div class="popContent">
            <div class="btn_closePop"></div>
            <h3>這次的交換你覺得如何？</h3>
            <div></div>
            <div class="popCheckPad">
                <input type="button" class="btn_w btn_cancel" value="取消"/>
                <input type="button" class="btn_o btn_sure" value="確定" onclick=")"/>
            </div>
        </div> -->
	</div>
	<!-- Loader  -->
	<div class="loadPad"><div class="loader_g"><i></i><i></i><i></i><i></i></div></div>

</div>
</template>

 <script>
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer

  },
  mounted() {
    setTimeout(() => {
      var element = document.getElementById("body_class");
      element.removeAttribute("class");
      element.classList.add("item", "noSearchPage", "menuPage", "mWhisper");

      $('.loadPad').animate({
        opacity: 0
      }, 1000, function () {
        $('.loadPad').css({
          'display': 'none'
        });
      });
      $(window).on('load', function () {
        if ($(window).width() > 1024) {
          var s = skrollr.init();
        }

        // $('#header').find('.market').addClass('action');
      })
      $('.backTop').click(function () {
        $('html,body').animate({
          scrollTop: $('#main').offset().top
        }, 800, 'easeOutCirc');
      });

    }, 0)
  }
}


</script>