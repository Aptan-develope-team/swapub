<template>
<div>
<!-- <body class="wish noSearchPage edit"> -->
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
					<form action="wish_detail.html" method="get" accept-charset="utf-8">
						<dl class="stepPad action">
							<dt>Step1</dt>
							<dd>
								<p class="editImg" :style="{ backgroundImage:`url(${this.productImg})`}"><span><b class="btn_w btn_editimg">編輯</b><i class="delImg"></i></span></p>
								<!-- 點 .delImg 刪除照片後可再上傳新照片 -->
								<!-- wish_upload.html ========================================================================
									<p class="editImg addImg" style="height: 370px;"><label for="uploadImg"><input type="file" id="uploadImg" placeholder=""></label></p><span>上傳照片</span>
								===============================================================-->
							</dd>
						</dl>
						<dl class="stepPad">
							<dt>Step2&nbsp;&nbsp;說明一下你的願望</dt>
							<dd>
								<p class="itemTitle">
									<textarea name="" placeholder="你想許什麼願望 (必填)" required="required" onpropertychange="setHeight(this);" onmouseover="setHeight(this);" onpaste="setHeight(this);" oninput="setHeight(this);">{{this.resData.Name}}</textarea>								</p>
								<p class="itemOption itemType action">
									<b>類別&nbsp;(必填)</b><span></span><input type="text" name="" value="女士時尚" placeholder="" required="required"></p>
								<p class="itemOption icoPad">
									<span>
										<i><img src="../../../static/images/icon_item_man.svg" alt="">男士時尚</i>
										<i><img src="../../../static/images/icon_item_lady.svg" alt="">女士時尚</i>
										<i><img src="../../../static/images/icon_item_baby.svg" alt="">媽咪寶貝</i>
										<i><img src="../../../static/images/icon_item_pet.svg" alt="">寵物用品</i>
										<i><img src="../../../static/images/icon_item_book.svg" alt="">書籍</i>
										<i><img src="../../../static/images/icon_item_game.svg" alt="">遊戲</i>
										<i><img src="../../../static/images/icon_item_media.svg" alt="">數位影音</i>
										<i><img src="../../../static/images/icon_item_toy.svg" alt="">玩具公仔</i>
										<i><img src="../../../static/images/icon_item_3c.svg" alt="">3C電子</i>
										<i><img src="../../../static/images/icon_item_electric.svg" alt="">家電</i>
										<i><img src="../../../static/images/icon_item_furniture.svg" alt="">傢俱</i>
										<i><img src="../../../static/images/icon_item_garden.svg" alt="">居家園藝</i>
										<i><img src="../../../static/images/icon_item_sport.svg" alt="">戶外活動</i>
										<i><img src="../../../static/images/icon_item_fitness.svg" alt="">健身</i>
										<i><img src="../../../static/images/icon_item_makeup.svg" alt="">美妝保養</i>
										<i><img src="../../../static/images/icon_item_food.svg" alt="">美食</i>
										<i><img src="../../../static/images/icon_item_stationery.svg" alt="">文具用品</i>
										<i><img src="../../../static/images/icon_item_art.svg" alt="">藝術古董</i>
										<i><img src="../../../static/images/icon_item_musical.svg" alt="">樂器</i>
										<i><img src="../../../static/images/icon_item_crafts.svg" alt="">手工藝品</i>
										<i><img src="../../../static/images/icon_item_traffic.svg" alt="">交通工具</i>
										<i><img src="../../../static/images/icon_item_ticket.svg" alt="">票券</i>
										<i><img src="../../../static/images/icon_item_service.svg" alt="">個人服務</i>
										<i><img src="../../../static/images/icon_item_gift.svg" alt="">免費贈與</i>
									</span>
								</p>
								<p class="itemData">
									<textarea name="" placeholder="描述願望 (必填)" required="required" onpropertychange="setHeight(this);" onmouseover="setHeight(this);" onpaste="setHeight(this);" oninput="setHeight(this);">{{this.resData.Description}}</textarea>
								</p>
								<p class="myPos">我的位置</p>
								<!-- <p class="itemOption myPos"><select name=""><option value="">物品地點&nbsp;(國家)&nbsp;&nbsp;台灣<img src="images/" alt=""></option></select></p>
								<p class="itemOption myPos"><select name=""><option value="">物品地點&nbsp;(城市)&nbsp;&nbsp;台北市</option></select></p> -->
								<p class="itemOption"><b>物品地點 (國家)</b><select name=""><option value="">{{this.resData.Country}}</option></select></p>
								<p class="itemOption"><b>物品地點 (城市)</b><select name=""><option value="">{{this.resData.Categories}}</option></select></p>
							</dd>
						</dl>
 						<dl class="btnPad">
							<dt><input class="btn_w" type="button" name="" value="取消" onclick="backWD()"><input class="btn_w btn_submit" type="button" name="" value="送出" onclick="checkRq()"></dt>						</dl>
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
		<div class="popContent popSys popEditImgPad">
			<div class="btn_closePop"></div>
			<p>請調整照片位置及大小</p>
			<div class="popImgPad"><i><img :src="(this.productImg)"  alt=""/></i></div>
			<div class="popRangeBar">
				<i>-</i><input type="range" min="0" max="100" step="1" value="50"><i>+</i>
			</div>
		</div>
		<div class="popContent popSys popDelPad">
			<h3>提醒</h3>
			<form action="">
				<p>你確定要刪除嗎？</p>
				<div class="popCheckPad">
					<input type="button" class="btn_gr btn_cancel" value="取消">
					<input type="submit" class="btn_o btn_sure" value="確定">
				</div>
			</form>
		</div>
		<div class="popContent popErrPad vid popSys">
			<h3>系統訊息</h3>
			<p>上傳失敗，請注意！影片大小不可超過2MB</p>
			<div class="popCheckPad">
      <input type="button" class="btn_o btn_sure" value="確定">		
    	</div>
		</div>
		<div class="popContent popErrPad con popSys">
			<h3>系統訊息</h3>
			<p>資訊內容有誤，請再次檢查後，再送出物品</p>
			<div class="popCheckPad">
      <input type="button" class="btn_o btn_sure" value="確定">		
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
import api from '../../api/Api.js'
export default {
  components: {
    "app-header": Header,
    "app-footer": Footer
  },
props: ["id"],
	data() {
    return {
		  resData:{},
    	user:{},
			location:{},
			productImg:[],
      imgUrl:""
    }
  },
created(){
   this.getProductInfo();
  },
  methods:{
	  async getProductInfo(){
				this.getToken();  
        this.resData = await api.get('GetWishInfo',localStorage.getItem('api_token'),'&wishID='+ this.id)
				this.user = this.resData.UserInfo
				this.location = this.resData.City  +","+ this.resData.Country 
				this.imgUrl = api.CdnUrl + "/Uploads/User/" + this.user.ID  + "/Avatar.jpg"
        this.productImg = this.resData.PictureUrl
				console.log(this.resData)
		},

	  async getToken(){
		   await api.getToken()
    },
	},
  mounted() {
    setTimeout(() => {

      var element = document.getElementById("body_class");
      element.removeAttribute("class");
      element.classList.add("wish", "noSearchPage", "edit");

      $(".loadPad").animate({
        opacity: 0
      }, 1000, function () {
        $(".loadPad").css({
          display: "none"
        });
      });
      $(window).on('load', function () {
        if ($(window).width() > 1024) {
          var s = skrollr.init();
        }

        $('#header').find('.market').addClass('action');

      })

      // Yep, that's it!
      //$('#scene').parallax();

      $(document).ready(function () {
        $('.btn_editimg').click(function () {
          $('#popContainer').removeClass();
          $('#popContainer').stop().animate({
            top: 0
          }, 300);
          $('#popContainer').addClass('popEditImg');
        });
        $('.delImg').click(function(){
				$('#popContainer').removeClass();
				$('#popContainer').stop().animate({top : 0}, 300);
				$('#popContainer').addClass('popDel');
		   	});
        var imgSize = function () {
          $('#popContainer').removeClass();
          $('#popContainer').stop().animate({
            top: 0
          }, 300);
          $('#popContainer').addClass('popImgSize');
        }
        // imgSize();
        $('popImgSize').find('.btn_sure').removeClass('popImgSize');

        var videoSize = function () {
          $('#popContainer').removeClass();
          $('#popContainer').stop().animate({
            top: 0
          }, 300);
          $('#popContainer').addClass('popVideoSize');
        }
        // videoSize();
        $('popVideoSize').find('.btn_sure').removeClass('popVideoSize');

        var conErr = function () {
          $('#popContainer').removeClass();
          $('#popContainer').stop().animate({
            top: 0
          }, 300);
          $('#popContainer').addClass('popConErr');
        }
        var $btn_submit = $('.btnPad').find('.btn_submit');
        $btn_submit.click(function () {
          conErr();
        });
        $('popConErr').find('.btn_sure').removeClass('popConErr');

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
        $('.btn_closePop').click(function () {
          $('#popContainer').stop().animate({
            top: -100 + 'vh'
          }, 500, function () {
            // $('#popContainer').fadeOut();
            $('#popContainer').removeClass();
          });
          if ($('body').hasClass('mDeal')) {
            $('.post').find('.btn_submit').css({
              'display': 'none'
            }).siblings().fadeIn();
            $('.post').find('.inquireDeta.userData').css({
              'display': 'none'
            }).siblings('.inquireDeta').fadeIn();
          }
        });
        $('.btn_sure').click(function () {
          $('#popContainer').stop().animate({
            top: -100 + 'vh'
          }, 500);
        });
			})
			function backWD(){
			window.location.href="wish_detail.html";
		}
    }, 0)
  }
}


</script>