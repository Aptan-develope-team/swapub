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
								<p class="editImg addImg">
                <label for="uploadImg" :style="{ backgroundImage:`url(${this.Result})`}">
                  <input type="file" id="uploadImg" placeholder="" @change="onFileChanged"></label>
                  <!-- <span><b class="btn_w btn_editimg"編輯></b><i class="delImg"></i></span> -->
								</p><span>上傳照片</span>              
							</dd>
						</dl>
						<dl class="stepPad">
							<dt>Step2&nbsp;&nbsp;說明一下你的願望</dt>
							<dd>
								<p class="itemTitle">
									<textarea name="" placeholder="你想許什麼願望 (必填)" required="required" onpropertychange="setHeight(this);" onmouseover="setHeight(this);" onpaste="setHeight(this);" oninput="setHeight(this);" v-model="data.Info.Name"></textarea>
																	</p>
								<p class="itemOption itemType"><b>類別&nbsp;(必填)</b><span></span><input type="text" name="" value="" placeholder="" required="required" ></p>								
								<p class="itemOption icoPad">
                    <span>
                      <i>
                        <img src="../../../static/images/icon_item_man.svg" alt="" @click="setCategory('524a426c430cb207947788fd')" >男士時尚</i>
                      <i>
                        <img src="../../../static/images/icon_item_lady.svg" alt="" @click="setCategory('524a427e430cb207947788fe')">女士時尚</i>
                      <i>
                        <img src="../../../static/images/icon_item_baby.svg" alt="" @click="setCategory('524a428d430cb207947788ff')">媽咪寶貝</i>
                      <i>
                        <img src="../../../static/images/icon_item_pet.svg" alt="" @click="setCategory('524a4298430cb20794778900')">寵物用品</i>
                      <i>
                        <img src="../../../static/images/icon_item_book.svg" alt="" @click="setCategory('524a491e430cb20c9c163a3c')">書籍</i>
                      <i>
                        <img src="../../../static/images/icon_item_game.svg" alt="" @click="setCategory('524a4929430cb20c9c163a3d')">遊戲</i>
                      <i>
                        <img src="../../../static/images/icon_item_media.svg" alt="" @click="setCategory('524a4931430cb20c9c163a42')">數位影音</i>
                      <i>
                        <img src="../../../static/images/icon_item_toy.svg" alt="" @click="setCategory('524a4941430cb20c9c163a43')">玩具公仔</i>
                      <i>
                        <img src="../../../static/images/icon_item_3c.svg" alt="" @click="setCategory('524a494f430cb20c9c163a44')">3C電子</i>
                      <i>
                        <img src="../../../static/images/icon_item_electric.svg" alt="" @click="setCategory('524a4957430cb20c9c163a45')">家電</i>
                      <i>
                        <img src="../../../static/images/icon_item_furniture.svg" alt="" @click="setCategory('524a495f430cb20c9c163a46')">傢俱</i>
                      <i>
                        <img src="../../../static/images/icon_item_garden.svg" alt="" @click="setCategory('524a4966430cb20c9c163a47')">居家園藝</i>
                      <i>
                        <img src="../../../static/images/icon_item_sport.svg" alt="" @click="setCategory('524a4970430cb20c9c163a48')">戶外活動</i>
                      <i>
                        <img src="../../../static/images/icon_item_fitness.svg" alt="" @click="setCategory('524a497b430cb20c9c163a49')">健身</i>
                      <i>
                        <img src="../../../static/images/icon_item_makeup.svg" alt="" @click="setCategory('524a4983430cb20c9c163a4a')">美妝保養</i>
                      <i>
                        <img src="../../../static/images/icon_item_food.svg" alt="" @click="setCategory('524a498b430cb20c9c163a4b')">美食</i>
                      <i>
                        <img src="../../../static/images/icon_item_stationery.svg" alt="" @click="setCategory('524a4994430cb20c9c163a4c')">文具用品</i>
                      <i>
                        <img src="../../../static/images/icon_item_art.svg" alt="" @click="setCategory('524a499d430cb20c9c163a4d')">藝術古董</i>
                      <i>
                        <img src="../../../static/images/icon_item_musical.svg" alt="" @click="setCategory('524a49a6430cb20c9c163a4e')">樂器</i>
                      <i>
                        <img src="../../../static/images/icon_item_crafts.svg" alt="" @click="setCategory('524a49c2430cb20c9c163a4f')">手工藝品</i>
                      <i>
                        <img src="../../../static/images/icon_item_traffic.svg" alt="" @click="setCategory('525cf3bb430cb210a8fc554c')">交通工具</i>
                      <i>
                        <img src="../../../static/images/icon_item_ticket.svg" alt="" @click="setCategory('525cf3c1430cb210a8fc555f')">票券</i>
                      <i>
                        <img src="../../../static/images/icon_item_service.svg" alt="" @click="setCategory('54ae3cb2bdf19b2008aa52c9')">個人服務</i>
                      <i>
                        <img src="../../../static/images/icon_item_gift.svg" alt="" @click="setCategory('')">免費索取</i>
                    </span>
								</p>
								<p class="itemData">
									<textarea name="" placeholder="描述願望 (必填)" required="required" onpropertychange="setHeight(this);" onmouseover="setHeight(this);" onpaste="setHeight(this);" oninput="setHeight(this);" v-model="data.Info.Description"></textarea>								</p>
								<p class="myPos">我的位置</p>
								<p class="itemOption">
                  <b>物品地點 (國家)</b>
                  <select name="" v-model="data.Info.Country">
                      <option :value="country" v-for="(country,key) in Country" @click="setCountry(key)">{{country}}</option>
                  </select>
                  </p>
                  <p class="itemOption">
                    <b>物品地點 (城市)</b>
                    <select name="" v-model="data.Info.City">
                      <option :value="city" v-for="(city,key) in City">{{city}}</option>
                    </select>
                  </p>
							</dd>
						</dl>
 						<dl class="btnPad">
							<dt>
								<input class="btn_w" type="button" name="" value="取消" onclick="history.back()"><input class="btn_w btn_submit" type="button" name="" value="送出" @click="upload()">
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
	<!-- <div id="popContainer" style="top:-100vh;">
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
				<input type="button" class="btn_o btn_sure" value="確定">
			</div>
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
	</div> -->
	<!-- Loader  -->
	<div class="loadPad"><div class="loader_g"><i></i><i></i><i></i><i></i></div></div>
</div>

</template>


<script>
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import api from '../../api/Api.js'
import city from '../../language/zh-TW/city.js'
import country from '../../language/zh-TW/country.js'
import cityen from '../../language/en/city.json'
import countryen from '../../language/en/country.json'
import region from '../../language/region.js'

export default {
  components: {
    "app-header": Header,
    "app-footer": Footer
	},
	data(){
    return {
    data:{
        Info:{ 
          Name:"", 
          Description:"", 
          CategoryIDs:[],
          Language:"", 
          Country:"台灣", 
          AdministrativeArea:"", 
          City:"台北市",
        },
        File:{}
    },      
      Result:"",
      wishID:"",
		}
	},
  created(){
     if(localStorage.getItem("currency")!="" && localStorage.getItem("currency")!= undefined){
      this.Product.Wants.MoneyInfo.Type = localStorage.getItem("currency")
      this.Product.SwapTarget.Price_Start.Type = localStorage.getItem("currency")
      this.Product.SwapTarget.Price_End.Type = localStorage.getItem("currency")
      this.currency = localStorage.getItem("currency")
    }
    if(localStorage.getItem('language')=='en'){
      this.Country = countryen
      this.City = cityen
      this.data.Info.Country = "Taiwan"
      this.data.Info.City = "Taipei"

		}
  },
  methods:{
    async upload(){
        if(this.data.Info.Name == ""){
          alert("請輸入願望名稱")
        }
        else if(this.data.Info.CategoryIDs[0] == ""){
          alert("請選擇類別")
        }
        else if(this.data.Info.Description == ""){
          alert("請輸入願望描述")
        }
        else{
        var bodyFormData = new FormData();
        bodyFormData.append('Info', JSON.stringify(this.data.Info));
        bodyFormData.append('File',this.data.File)
        this.wishID = await api.postWish("AddWish",bodyFormData,localStorage.getItem('login_token'),"")  
        //await api.postJSON('Upload',this.PicInfo,localStorage.getItem('login_token'),"&productID=" + this.wishID)    
        }  
    },
    setCategory(id){
      this.data.Info.CategoryIDs[0] = id
      console.log(this.data.Info.CategoryIDs[0])
		},
		onFileChanged (event) {
      const file = event.target.files[0];
      console.log(file)
      this.data.File = file
      const reader = new FileReader();
      reader.onload = e => { 
        this.Result = e.target.result
      }   
      reader.readAsDataURL(file);   
		},
		removeImg(){
      this.Result = ""
    },
    clearCategory(){
      this.Product.CategoryIDs[0] = ""
    }
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