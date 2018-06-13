<template>
<div>
<!-- <body class="item noSearchPage menuPage mItem info"> -->
	<!-- Header -->
  <app-header></app-header>
	<!-- Header END -->
	<div id="main">
		<div class="breadcrumb">
			<i>Swapub</i><i> &#62; Jing Yun Lee</i><i></i><i></i><i></i>
		</div>
		<div class="content">
            <h1>編輯個人資料</h1>
            <div class="innerCoverBlock">
                <span class="coverImg"></span>
                <label for="editCover" class="btn_w btn_edit">點擊編輯圖片<input type="file" id="editCover"></label>
                <div>
                    <ul class="userInfo">
                        <li class="userPic">
                            <label for="editUImg" class="editUserImg"><img src="../../../static/images/ws_user_img_4.png" alt=""><input type="file" id="editUImg"></label>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="conBlock">
                <form action="menu_u_myitem.html">
                    <div>
                        <dl class="formdataPad clear">
                            <dt><p><span>姓</span><input type="text" name="" id="" value="Lee"></p></dt>
                            <dd><p><span>名</span><input type="text" name="" id="" value="Jing Yun"></p></dd>
                            <dd><p><span>城市</span><input type="text" name="" id=""></p></dd>
                            <dd><p><span>州/省</span><input type="text" name="" id=""></p></dd>
                            <dd><p><span>國家</span><input type="text" name="" id=""></p></dd>
                            <dd></dd>
                            <dd><p class="checked"><span>電話</span><input type="text" name="" id="" value="987654321"></p></dd>
                            <dd><p class="checked"><span>電子信箱</span><input type="email" name="" id="" value="free@gmail.com"></p></dd>
                        </dl>
                    </div>
                    <div class="checkPad">
                        <input type="button" class="btn_w btn_cancel" value="取消" onclick="javascript:location.href='menu_u_myitem.html'">
                        <input type="submit" class="btn_o btn_sure" value="送出">
                    </div>
                </form>
            </div>
		</div>
	   <div class="btn_openPop"></div>
	</div><!-- main END -->

	<!-- Footer -->
	<app-footer></app-footer>
	<div class="backTop CGt"></div>
	<!-- Light Box -->
	<div id="popContainer" style="top:-100vh;">
        <div class="popContent popSys popImg">
            <div class="btn_closePop"></div>
            <p>請調整照片位置及大小</p>
            <div class="popImgPad"><span class="popImgMask"><i></i><img src="../../../static/images/ws_user_img_4.png" alt=""></span></div>
            <div class="popRangeBar">
                <i>-</i><input type="range" min="0" max="100" step="1" value="50"><i>+</i>
            </div>
        </div>
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
      element.classList.add("noSearchPage", "menuPage", "mItem", "info");

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


      $(document).ready(function () {

        $('.userPic').on('change', '#editUImg', function () {
          $('#popContainer').removeClass();
          $('#popContainer').stop().animate({
            top: 0
          }, 300);
          $('#popContainer').addClass('popEditUImg');
        });


      })


    }, 0)
  }
}


</script>