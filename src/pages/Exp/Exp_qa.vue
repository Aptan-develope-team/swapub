<template>
<div>
<!-- <body class="expPage hasSideMenu noSearchPage"> -->
	<!-- Header -->
	<app-header></app-header>
	<!-- Header END -->
	<div id="main">
		<div class="breadcrumb">
			<i>Swapub</i><i> &#62; 關於Swapub</i><i></i><i></i><i></i>
		</div>
		<div class="content">
			<div class="titleMenu CGt">
				<ul>
					<li><router-link to='/exp_about' active-class="about action">關於Swapub</router-link></li>
					<li><router-link to='/exp_rule' active-class="rule action">隱私權與使用條款</router-link></li>
					<li><router-link to='/exp_qa' active-class="rule action">FAQ</router-link></li>
					<li><a href="#" class="social_icon social_tw"><i class="ico_tw"></i>Twitter</a></li>
					<li><a href="#" class="social_icon social_fb"><i class="ico_fb"></i>Facebook</a></li>
				</ul>
			</div>
			<div class="sideMenu CGt">
				<ul>
					<li class="action">新手上路</li>
					<li>關於帳號</li>
					<li>關於刊登</li>
					<li>關於交換</li>
					<li>關於評價</li>
					<li>關於檢舉</li>
					<li>其他問題</li>
				</ul>
			</div>
			<div class="conBlock action">
				<h3>Q: 關於Swapub</h3>
				<p>Swapub是一個以『交換』為概念設計的APP。從一根迴紋針換到一棟房子的構想出發、要給你不同於以往的交換體驗，感受用錢買不到的快樂！</p>
				<h3>Q: 使用Swapub交換需要手續費嗎?</h3>
				<p>「Swapub」是個完全免費的交易平台，用不到的東西就拿上來交換，創造無限可能的交換經驗！</p>
				<h3>Q: 如何邀請朋友一起使用Swapub?</h3>
				<p>請點選左上角選單，在您的大頭貼旁有一個加入圖示，您可以利用Facebook或Twitter邀請朋友一同加入Swapub交換行列！</p>
				<h3>Q: 如何搜尋物品或使用者？</h3>
				<p>若您要搜尋商品，請您先透過下列的教學方式進行操作： 1. 至市集右上方，點選「放大鏡（會出現提出訊息：你想搜尋什麼物品或找什麼人呢?）」 2. 輸入欲查詢的關鍵字並按下ENTER鍵→將自動搜尋物品或用戶。</p>
				<h3>Q: 為什麼我收不到Swapub的通知呢?</h3>
				<p>若您收不到提醒，請您先透過下列的設定方法排除： iOS手機：設定→通知→於應用程式選擇Swapub→設定需要的項目 Andriod手機：設定→音效與通知→應用程式通知選擇Swapub→設定需要的項目 如依舊無法排除問題，煩請來信至客服信箱： service@swapub.com回報喔。</p>
				<h3>Q: 如何停止收到物品追蹤通知呢?</h3>
				<p>請到該物品頁面按下愛心迴紋針，當愛心迴紋針轉灰，即可以取消商品追蹤與通知。</p>
				<h3>Q: 如何停止收到對換友的關注通知呢？</h3>
				<p>請點選該換友大頭貼至他的交換牆，按下「取消關注」，即可以取消對該換友的關注通知。</p>
				<h3>Q: 我已在某物品中留言，該怎麼取消收到其他人的留言通知呢？</h3>
				<p>請到通知牆對該商品向左滑開，按下垃圾桶圖示，出現系統訊息："您不要再接收此通知嗎？" 選擇「不再收到」。</p>
			</div>
			<div class="conBlock">
				<h3>Q: 如何註冊/申請帳號?</h3>
				<p>您可以透過以下方式註冊成為Swapub的會員: 1. 透過您的 Facebook 帳號登入。 2. 使用您的E-mail 作為帳號並設定一組密碼。 貼心小提醒：請您務必使用有效的E-mail以確保日後密碼需要查詢可以透過此信箱確認喲。</p>
				<h3>Q: 忘記登入密碼?</h3>
				<p>請您於帳號登入區點選「忘記密碼」並依照畫面步驟進行操作，系統將會送出一封 email 到您註冊的email 帳號方便您重設密碼。 貼心小提醒：請您務必使用有效的E-mail以確保日後密碼需要查詢可以透過信箱確認喲。</p>
				<h3>Q: 我可以在多台手機使用同一個帳號嗎?</h3>
				<p>同一個帳號可以在多個裝置上使用，但為了帳戶安全，提醒您每次更換裝置記得先登出Swapub喔。</p>
				<h3>Q: 無法用Facebook登入怎麼辦</h3>
				<p>若您要搜尋商品，請您先透過下列的教學方式進行操作： 1. 至市集右上方，點選「放大鏡（會出現提出訊息：你想搜尋什麼物品或找什麼人呢?）」 2. 輸入欲查詢的關鍵字並按下ENTER鍵→將自動搜尋物品或用戶。</p>
				<h3>Q: 帳號遭盜用了怎麼辦?</h3>
				<p>如果您認為帳號被他人所控制，我們可以協助您取回您的帳號： 當服務團隊一旦確認您的帳號確實遭盜用，我們會將您的帳號先行關閉並給予一組新密碼！ 當你在Swapub上發現已遭受帳號盜用時，請務必立即向Swapub後援服務團隊申報，讓我們可以馬上的做適當的處理。 如何回報盜用? 來信至service@swapub.com 在信中請務必包含以下內容： 1.您的全名 2.您的註冊Swapub 的email 帳號 3. 您的手機號碼 4.事件相關細節（請盡量提供相關資訊） 另外請特別留意，相關事件的報告，皆必須在事發60天內提出。</p>
			</div>
		</div>
	   <div class="btn_openPop"></div>
	</div><!-- main END -->

	<!-- Footer -->
  <app-footer></app-footer>
	<div class="backTop CGt"></div>
	<!-- Light Box -->
	<div id="popContainer" style="top:-100vh;">
		<div class="popContent">

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
      element.classList.add("expPage", "hasSideMenu", "noSearchPage");

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
      var $qaBtn = $('body.hasSideMenu').find('.sideMenu').find('li'),
        $qaBlock = $('body.hasSideMenu').find('.conBlock');
      $qaBtn.click(function () {
        var ind = $(this).index();
        $qaBtn.eq(ind).addClass('action').siblings($qaBtn).removeClass('action');
        $qaBlock.eq(ind).addClass('action').siblings($qaBlock).removeClass('action');
      });
      $('.backTop').click(function () {
        $('html,body').animate({
          scrollTop: $('#main').offset().top
        }, 800, 'easeOutCirc');
      });

    }, 0)
  }
}


</script>