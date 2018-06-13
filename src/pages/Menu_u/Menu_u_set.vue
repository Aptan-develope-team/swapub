<template>
<div>
<!-- <body class="item noSearchPage menuPage mSet"> -->
	<!-- Header -->
	<app-header></app-header>
	<!-- Header END -->
	<div id="main">
		<div class="breadcrumb">
			<i>Swapub</i><i> &#62; 設定</i><i></i><i></i><i></i>
		</div>
		<div class="content">
            <h1>設定</h1>
            <form action="">
                <div class="conBlock">
                        <p><span>幣值</span><select name="" id=""><option value="">新台幣(NT$)</option></select></p>
                        <p><span>語言</span><select name="" id=""><option value="">繁體中文</option></select></p>
                        <h3>分享</h3>
                        <p class="setShareList">
                            <label for=""><input type="checkbox" name="" id="">Facebook (<span>Jing Yun Lee</span>)</label>
                            <label for=""><input type="checkbox" name="" id="">Twitter</label>
                        </p>
                </div>
                <div class="checkPad">
                    <input type="button" class="btn_w btn_cancel" value="取消">
                    <input type="submit" class="btn_o btn_sure" value="送出">
                </div>
            </form>
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
            <h3>資訊確認</h3>
            <div class="dealDetail">
                <p></p>
            </div>
            <div class="popCheckPad">
                <input type="button" class="btn_gr btn_cancel" value="取消">
                <input type="submit" class="btn_o btn_sure" value="確定" onclick="">
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
      element.classList.add("noSearchPage", "menuPage", "mSet");

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
    }, 0)
  }
}


</script>