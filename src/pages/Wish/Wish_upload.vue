<template>
<!-- <body class="wish noSearchPage edit upload"> -->
    <div>
	<!-- Header -->
	<app-header></app-header>
	<!-- Header END -->
	<div id="main">
		<div class="breadcrumb">
			<i>Swapub</i><i> &#62; 交換</i><i> &#62; 許個願望</i><i></i><i></i>
		</div>
		<div class="content">
			<div class="conBlock">
				<h1>許個願望</h1>
				<div class="editList">
					<form action="wish_edit.html" method="get" accept-charset="utf-8">
						<dl class="stepPad">
							<dt>Step1</dt>
							<dd>
								<p class="editImg addImg"><label for="uploadImg"><input type="file" id="uploadImg" placeholder=""></label>
								</p><span>上傳照片</span>
							</dd>
						</dl>
						<dl class="stepPad">
							<dt>Step2&nbsp;&nbsp;說明一下你的願望</dt>
							<dd>
								<p class="itemTitle">
									<textarea name="" placeholder="你想許什麼願望 (必填)" required="required" onpropertychange="setHeight(this);" onmouseover="setHeight(this);" onpaste="setHeight(this);" oninput="setHeight(this);" class="reqObj"></textarea>								</p>
								<p class="itemOption itemType"><b>類別&nbsp;(必填)</b><span></span><input type="text" name="" value="" placeholder="" required="required" class="reqObj"></p>								<p class="itemOption icoPad">
									<span>
										<i><img src="../../../static/images/icon_item_man.png" alt="">男士時尚</i>
										<i><img src="../../../static/images/icon_item_lady.png" alt="">女士時尚</i>
										<i><img src="../../../static/images/icon_item_baby.png" alt="">媽咪寶貝</i>
										<i><img src="../../../static/images/icon_item_pet.png" alt="">寵物用品</i>
										<i><img src="../../../static/images/icon_item_book.png" alt="">書籍</i>
										<i><img src="../../../static/images/icon_item_game.png" alt="">遊戲</i>
										<i><img src="../../../static/images/icon_item_media.png" alt="">數位影音</i>
										<i><img src="../../../static/images/icon_item_toy.png" alt="">玩具公仔</i>
										<i><img src="../../../static/images/icon_item_3c.png" alt="">3C電子</i>
										<i><img src="../../../static/images/icon_item_electric.png" alt="">家電</i>
										<i><img src="../../../static/images/icon_item_furniture.png" alt="">傢俱</i>
										<i><img src="../../../static/images/icon_item_garden.png" alt="">居家園藝</i>
										<i><img src="../../../static/images/icon_item_sport.png" alt="">戶外活動</i>
										<i><img src="../../../static/images/icon_item_fitness.png" alt="">健身</i>
										<i><img src="../../../static/images/icon_item_makeup.png" alt="">美妝保養</i>
										<i><img src="../../../static/images/icon_item_food.png" alt="">美食</i>
										<i><img src="../../../static/images/icon_item_stationery.png" alt="">文具用品</i>
										<i><img src="../../../static/images/icon_item_art.png" alt="">藝術古董</i>
										<i><img src="../../../static/images/icon_item_musical.png" alt="">樂器</i>
										<i><img src="../../../static/images/icon_item_crafts.png" alt="">手工藝品</i>
										<i><img src="../../../static/images/icon_item_traffic.png" alt="">交通工具</i>
										<i><img src="../../../static/images/icon_item_ticket.png" alt="">票券</i>
										<i><img src="../../../static/images/icon_item_service.png" alt="">個人服務</i>
										<i><img src="../../../static/images/icon_item_gift.png" alt="">免費贈與</i>
									</span>
								</p>
								<p class="itemData">
									<textarea name="" placeholder="描述願望 (必填)" required="required" onpropertychange="setHeight(this);" onmouseover="setHeight(this);" onpaste="setHeight(this);" oninput="setHeight(this);" class="reqObj"></textarea>								</p>
								<p class="myPos">我的位置</p>
								<p class="itemOption"><b>物品地點 (國家)</b><select name=""><option value=""></option></select></p>
								<p class="itemOption"><b>物品地點 (城市)</b><select name=""><option value=""></option></select></p>
							</dd>
						</dl>
 						<dl class="btnPad">
							<dt>
								<input class="btn_w" type="button" name="" value="取消" onclick="history.back()"><input class="btn_w btn_submit" type="button" name="" value="送出" onclick="checkRq()">
							</dt>
						</dl>
					</form>
				</div>
			</div>
		</div>
	   <div class="btn_openPop"></div>
	</div><!-- main END -->

	<!-- Footer -->
	<app-footer></app-footer>
	<div class="backTop CGt"></div>
	<!-- Light Box -->
	<div id="popContainer" style="top:-100vh;">
		<div class="popContent popEditImgPad">
			<div class="btn_closePop"></div>
			<p>請調整照片位置及大小</p>
			<div class="popImgPad"><i></i><img src="../../../static/images/img_item_01.jpg" alt=""></div>
			<div class="popRangeBar">
				<i>-</i><input type="range" min="0" max="100" step="1" value="50"><i>+</i>
			</div>
		</div>
		<div class="popContent popErrPad img popSys">
			<h3>系統訊息</h3>
			<p>上傳失敗，請注意！照片大小不可超過2MB</p>
			<div class="popCheckPad">
				<span class="btn_o btn_sure">確定</span>
			</div>
		</div>
		<div class="popContent popErrPad vid popSys">
			<h3>系統訊息</h3>
			<p>上傳失敗，請注意！影片大小不可超過2MB</p>
			<div class="popCheckPad">
				<span class="btn_o btn_sure">確定</span>
			</div>
		</div>
		<div class="popContent popErrPad con popSys">
			<h3>系統訊息</h3>
			<p>資訊內容有誤，請再次檢查後，再送出物品</p>
			<div class="popCheckPad">
				<span class="btn_o btn_sure">確定</span>
			</div>
		</div>
	</div>
	<!-- Loader  -->
	<div class="loadPad"><div class="loader_g"><i></i><i></i><i></i><i></i></div></div>
</div>

</template>


<script>
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
export default {
  components: {
    "app-header": Header,
    "app-footer": Footer
  },
  mounted() {
    setTimeout(() => {

      var element = document.getElementById("body_class");
      element.removeAttribute("class");
      element.classList.add("wish","noSearchPage","edit","upload");

      $(".loadPad").animate({ opacity: 0 }, 1000, function() {
        $(".loadPad").css({ display: "none" });
      });
 $(window).on('load', function() {
			if($(window).width() > 1024){
			  var s = skrollr.init();
			}

			$('#header').find('.market').addClass('action');

		})
			$('.btn_sure').click(function(){
		$('#popContainer').stop().animate({top : -100 + 'vh'}, 500);
	});
		 //物品類別選擇
      var $icoPad = $('.icoPad'),
        $ico = $icoPad.find('i'),
        $itemType = $('.itemOption.itemType').find('input'),
        $itemTag = $('.itemOption.itemType').find('span'),
        icInd, icTXT;
      $('.itemOption.itemType').append('<i class="clearVal">清除</i>');
      if ($('.itemOption.itemType').hasClass('action')) {
        var itL = $itemType.val().length;
        if (itL < 3) {
          $itemType.attr('size', itL + 1 + 'rem');
        } else {
          $itemType.attr('size', itL + 3 + 'rem');
        }
        var itW = $itemType.outerWidth();
        $itemTag.css({
          'margin-left': itW
        });
        $icoPad.fadeOut(100);
        //$icoPad.addClass('false');
      }
      //點icon
      $ico.click(function () {
        icInd = $(this).index();
        icTXT = $ico.eq(icInd).text();
        $('.itemOption.itemType').addClass('action');
        $itemType.eq(0).attr('value', icTXT);
        var itL = $itemType.val().length;
        if (itL < 3) {
          $itemType.attr('size', itL + 1 + 'rem');
        } else {
          $itemType.attr('size', itL + 3 + 'rem');
        }
        var itW = $itemType.outerWidth();
        $itemTag.css({
          'margin-left': itW
        });
        $icoPad.fadeOut(100);
        //$icoPad.addClass('false');
      });
      //點清空
      $('.clearVal').click(function () {
        $('.itemOption.itemType').removeClass('action');
        $itemType.eq(0).attr('value', '');
        $itemType.attr('size', 'auto');
        $itemTag.css({
          'margin-left': 'unset'
        });
        $icoPad.fadeIn();
        // $icoPad.removeClass('false');
        return
      });
		// Yep, that's it!
		//$('#scene').parallax();

		$(document).ready(function(){
			// $('.').click(function(){
			// 	$('#popContainer').removeClass();
			// 	$('#popContainer').stop().animate({top : 0}, 300);
			// 	$('#popContainer').addClass('');
			// });

			var imgSize = function(){
				$('#popContainer').removeClass();
				$('#popContainer').stop().animate({top : 0}, 300);
				$('#popContainer').addClass('popImgSize');
			}
			// imgSize();
			$('popImgSize').find('.btn_sure').removeClass('popImgSize');

			var videoSize = function(){
				$('#popContainer').removeClass();
				$('#popContainer').stop().animate({top : 0}, 300);
				$('#popContainer').addClass('popVideoSize');
			}
			// videoSize();
			$('popVideoSize').find('.btn_sure').removeClass('popVideoSize');

			var conErr = function(){
				$('#popContainer').removeClass();
				$('#popContainer').stop().animate({top : 0}, 300);
				$('#popContainer').addClass('popConErr');
			}
			var $btn_submit = $('.btnPad').find('.btn_submit');
			$btn_submit.click(function(){conErr();});
			$('popConErr').find('.btn_sure').removeClass('popConErr');

		})
	},0)
  }
}
</script>