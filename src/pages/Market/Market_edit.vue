<template>
<div>
<!-- <body class="item noSearchPage edit"> -->
	<!-- Header -->
	<app-header></app-header>
	<!-- Header END -->
	<div id="main">
		<div class="breadcrumb">
			<i>Swapub</i><i> &#62; 交換</i><i> &#62; 傢俱</i><i> &#62; 編輯物品</i><i></i>
		</div>
		<div class="content">
			<div class="conBlock">
				<h1>編輯物品</h1>
				<div class="editList">
					<form action="item_detail.html?j" method="get">
						<dl class="stepPad">
							<dt><span>Step1</span>上傳照片或影片</dt>
							<dd class="imgPad clear">
								<div class="editImg addImg"><label for="uploadImg"><input id="uploadImg" type="file" @change="onFileChanged"></label></div>
								<div class="imgMaskW"></div>
								<div class="imgMask CG_scorll_auto">
									<dl class="imgBlock">
										<dt class="editImg imgList" v-if="this.resData.PictureUrls"><img :src="this.resData.PictureUrls[0]" alt=""><span><b class="btn_w btn_editimg">編輯</b><i class="delImg"></i></span><i>1</i></dt>
										<dd class="editImg imgList"><img :src="imgUrl" alt=""><span><b class="btn_w btn_playVideo"></b><i class="delImg"></i></span><i>2</i></dd>
										<dd class="smallImg imgList">
											<div>
												<ul>
													<li class="editImg"><img src="../../../static/images/img_item_03.jpg" alt=""><span><b class="btn_w btn_editimg">編輯</b><i class="delImg" @click="removeImg()"></i></span><i>3</i></li>
													<li class="editImg"><img src="../../../static/images/img_item_03.jpg" alt=""><span><b class="btn_w btn_editimg">編輯</b><i class="delImg"></i></span><i>4</i></li>
													<li class="editImg"><img src="../../../static/images/img_item_03.jpg" alt=""><span><b class="btn_w btn_editimg">編輯</b><i class="delImg"></i></span><i>5</i></li>
													<li class="editImg"><img src="../../../static/images/img_item_03.jpg" alt=""><span><b class="btn_w btn_editimg">編輯</b><i class="delImg"></i></span><i>6</i></li>
												</ul>
											</div>
										</dd>
										<dd class="smallImg imgList">
											<div>
												<ul>
													<li class="editImg"><img src="../../../static/images/img_item_03.jpg" alt=""><span><b class="btn_w btn_editimg">編輯</b><i class="delImg"></i></span><i>7</i></li>
													<li class="editImg"><img src="../../../static/images/img_item_03.jpg" alt=""><span><b class="btn_w btn_editimg">編輯</b><i class="delImg"></i></span><i>8</i></li>
													<li class="editImg"><img src="../../../static/images/img_item_03.jpg" alt=""><span><b class="btn_w btn_editimg">編輯</b><i class="delImg"></i></span><i>9</i></li>
													<li class="editImg"><img src="../../../static/images/img_item_03.jpg" alt=""><span><b class="btn_w btn_editimg">編輯</b><i class="delImg"></i></span><i>10</i></li>
												</ul>
											</div>
										</dd>
									</dl>
								</div>
							</dd>
							<dd class="nprPad clear">
								<span class="ico_upload"></span>
								<span id="nprContainer"></span>
								<span class="btn_close"><i></i><i></i></span>
							</dd>
							<!-- <dd class="nprPad clear">
								<span class="ico_upload"></span>
								<span id="nprContainer"></span>
								<span class="btn_close"><i></i><i></i></span>
							</dd> -->
						</dl>
						<dl class="stepPad">
							<dt><span>Step2</span>說明一下這個物品</dt>
							<dd>
								<p class="itemTitle">
									<textarea name="" placeholder="物品名稱 (必填)" required="required" onpropertychange="setHeight(this);" onmouseover="setHeight(this);" 
									onpaste="setHeight(this);" oninput="setHeight(this);" v-model="Product.ProductName"></textarea></p>
								<p class="itemData">
									<textarea name="" placeholder="描述物品 (必填)" required="required" onpropertychange="setHeight(this);" onmouseover="setHeight(this);" 
									onpaste="setHeight(this);" oninput="setHeight(this);">{{Product.Description}}</textarea>
								</p>
								<p class="addTag noDot" v-if="Product.Tags"><input type="text" name="" value="" placeholder="加上標籤 (#Apple #Nike)" v-model="Product.Tags[0]"></p>
								<p class="itemOption itemType">
									<b>類別&nbsp;(必填)</b><span></span><input type="text" name="" value="" placeholder="" required="required" id="rqInput">
								</p>
								<p class="itemOption icoPad">
									 <span>
                      <i>
                        <img src="../../../static/images/icon_item_man.svg" alt="" @click="setCategory('524a426c430cb207947788fd')">男士時尚</i>
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
                        <img src="../../../static/images/icon_item_gift.svg" alt="" @click="setCategory('')">免費贈與</i>
                    </span>
								</p>
								<p class="itemOption"><b>物品地點 (國家)</b><select name="" v-model="Product.Location.Country"><option value="台灣">台灣</option></select></p>
								<p class="itemOption"><b>物品地點 (城市)</b><select name="" v-model="Product.Location.City"><option value="台北市">台北市</option></select></p>
							</dd>
						</dl>
						<dl class="stepPad expectPad">
							<dt><span>Step3</span>你想要交換的東西&nbsp;(至少選擇一項)</dt>
							<dd>
								<p class=""><input type="text" name="" value="" placeholder="我想換到的物品" required="required" v-model="Product.Wants.Data[0]"></p>
								<p class="noDot">物品價值範圍
									<span class="currency btn_g"><i>{{this.currency}}</i>
										<span class="curBlock"><b @click="setCurrencyPrice('AED')">AED</b><b @click="setCurrencyPrice('AUD')">AUD</b><b @click="setCurrencyPrice('CAD')">CAD</b><b @click="setCurrencyPrice('CNY')">CNY</b><b @click="setCurrencyPrice('EUR')">EUR</b><b @click="setCurrencyPrice('HKD')">HKD</b><b @click="setCurrencyPrice('JPY')">JPY</b><b @click="setCurrencyPrice('KRW')">KRW</b><b @click="setCurrencyPrice('TWD')">TWD</b><b @click="setCurrencyPrice('USD')">USD</b></span>
									</span>
									<span>
										<input type="number" name="" min="0" v-model="Product.SwapTarget.Price_Start.Value">-<input type="number" name="" min="0" v-model="Product.SwapTarget.Price_End.Value">
									</span>
								</p>
								<p><textarea name="" placeholder="我想換到的服務" onpropertychange="setHeight(this);" onmouseover="setHeight(this);" 
									onpaste="setHeight(this);" oninput="setHeight(this);" v-model="Product.Wants.Data[1]"></textarea></p>
								<p>我要賣
									<span class="currency btn_g"><i>{{this.currency}}</i>
										<span class="curBlock"><b @click="setCurrencyType('AED')">AED</b><b @click="setCurrencyType('AUD')">AUD</b><b @click="setCurrencyType('CAD')">CAD</b><b @click="setCurrencyType('CNY')">CNY</b><b @click="setCurrencyType('EUR')">EUR</b><b @click="setCurrencyType('HKD')">HKD</b><b @click="setCurrencyType('JPY')">JPY</b><b @click="setCurrencyType('KRW')">KRW</b><b @click="setCurrencyType('TWD')">TWD</b><b @click="setCurrencyType('USD')">USD</b></span>
									</span>
									<input type="number" name="" min="0">
								</p>
								<p class="noDot check editFree">
									<label><input type="checkbox" id="checkFree" name="" value="" v-model="Product.FreeToGive"></label>我願意免費贈送</p>
							</dd>
						</dl>
						<dl class="stepPad">
							<dt><span>Step4</span>交貨細節</dt>
							<dd>
								<p class="noDot check" ><label><input type="checkbox" name="" v-model="Product.Options[3]" :true-value="1" :false-value="0"></label>郵寄<br><input type="text" name="" value="" placeholder="交貨細節 例如：交貨便、郵寄、快遞、免運費" v-model="Product.Infos[0]"></p>
								<p class="noDot check" ><label><input type="checkbox" name="" v-model="Product.Options[2]" :true-value="1" :false-value="0"></label>面交<br><input type="text" name="" value="" placeholder="交貨細節 例如：台北車站捷運站2號出口、台北市承德路一段1號" v-model="Product.FaceToFaceInfos[0]"></p>
								<p class="noDot check" ><label><input type="checkbox" name="" v-model="Product.Options[1]" :true-value="1" :false-value="0"></label>願意與海外交換</p>
							</dd>
						</dl>
						<dl class="btnPad">
							<dt><input class="btn_w" type="button" name="" value="取消" onclick="history.back()"><input class="btn_w btn_submit" type="button" name="" value="送出" @click="change()"></dt>
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
		<div class="popContent popSys popEditImgPad">
			<div class="btn_closePop"></div>
			<p>請調整照片位置及大小</p>
			<div class="popImgPad"><i></i><img src="../../../static/images/img_item_01.jpg" alt=""></div>
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
	</div>
	<!-- Loader  -->
	<div class="loadPad"><div class="loader_g"><i></i><i></i><i></i><i></i></div></div>
</div>

</template>

<script>
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'
import api from '../../api/Api.js'


export default {
  components: {
    'app-header': Header,
    'app-footer': Footer

  },
  	props: ["id"],
	data() {
    return {
      resData:{},
      copy:{},
      Product:{
          ProductName:"",
          Infos:[""],
          Options:[0,0,0,0],
          Description:"",
          Location:{
            Country:"",
            AdministrativeArea:"",
            City:""
          },
          Gps:[1.1,2.1],
          Wants:{
            DataSize:2,
            Data:[""],
            MoneyInfo:{
              Type:"TWD",
              Value:0
            }
          },
          SwapTarget:{
            Price_Start:{
              Type:"TWD",
              Value:""
            },
            Price_End:{
              Type:"TWD",
              Value:""
            }
          },
          CategoryIDs:[""],
          Tags:[""],
          FaceToFaceInfos:[""],
          FreeToGive:false,
          _id:""
      },
      imgUrl:"",
      PicInfo:{
        FileName:"",
        FileContent:""
      },
      Categories:{},
      currency:"TWD"
    }
  },
  updated(){
    /* item_edit 編輯物品 */
      var $stepPad = $('.stepPad'),
        $editImg = $stepPad.find('.editImg'),
        $addImg = $stepPad.find('.addImg'),
        $addImgW = $addImg.outerWidth(),
        $imgMask = $('.imgMask'),
        $imgMaskW = $imgMask.width(),
        $imgBlock = $imgMask.find('.imgBlock'),
        $imgList = $imgBlock.find('.imgList'),
        $imgListL = $imgList.length,
        $delImg = $('.delImg');
      //基本設定
      $addImg.css({
        'height': $addImgW
      });
      $imgList.css({
        'width': $addImgW,
        'height': $addImgW
      });
      var $imgListW = $imgList.outerWidth(true);
      $imgBlock.css({
        'width': $imgListW * $imgListL
      });
      var $imgBlockW = $imgBlock.width();
      if ($imgBlockW <= $imgMaskW) {
        $('.imgMaskW').css({
          'visibility': 'hidden'
        });
      } else {
        $('.imgMaskW').css({
          'visibility': 'visible'
        });
      }
      //編輯按鈕.垃圾桶
      $editImg.hover(function () {
        $(this).find('span').addClass('action');
      }, function () {
        $(this).find('span').removeClass('action');
      });
  },
  created(){
    this.getProductInfo();
    if(localStorage.getItem("currency")!="" && localStorage.getItem("currency")!= undefined){
      this.Product.Wants.MoneyInfo.Type = localStorage.getItem("currency")
      this.Product.SwapTarget.Price_Start.Type = localStorage.getItem("currency")
      this.Product.SwapTarget.Price_End.Type = localStorage.getItem("currency")
      this.currency = localStorage.getItem("currency")
    }
  },
  methods:{
	  async getProductInfo(){
				this.getToken();  
        this.resData = await api.get('Product/'+ this.id,localStorage.getItem('api_token'),'')
        //this.copy = Object.assign({}, this.resData);
        this.Product.CategoryIDs[0] = this.resData.Categories[0].Value
        this.Product.ProductName = this.resData.ProductName
        this.Product.Description = this.resData.Description
        this.Product.Tags = this.resData.Tags 
        this.Product.FaceToFaceInfos = this.resData.FaceToFaceInfos
        this.Product.FreeToGive = this.resData.FreeToGive
        this.Product._id = this.resData._id
        this.Product.SwapTarget = this.resData.SwapTarget
        this.Product.Wants = this.resData.Wants
        this.Product.Infos = this.resData.Infos
        this.Product.Options = this.resData.Options
        this.Product.Location = this.resData.Location
        console.log(this.resData)
        this.Categories = await api.get('Category/',localStorage.getItem('api_token'),'')
        for(var i = 0; i< this.Categories.length; i++){
            if(this.Product.CategoryIDs[0] == this.Categories[i].Value){
              var $icoPad = $('.icoPad'),
              $ico = $icoPad.find('i'),
              $itemType = $('.itemOption.itemType').find('input'),
              $itemTag = $('.itemOption.itemType').find('span'),
              icInd, icTXT;
              icTXT = $ico.eq(i).text();
              $('.itemOption.itemType').addClass('action');
              $itemType.eq(0).attr('value', icTXT);
              console.log($ico.eq(i))
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
            }
        }
        
		},
	  async getToken(){
		   await api.getToken()
    },
    async change(){
        console.log(this.resData)
        await api.put('Product',this.Product,localStorage.getItem('login_token'),'')
        await api.postJSON('Upload',this.PicInfo,localStorage.getItem('login_token'),"&productID=" + this.id)
    },
    setCategory(id){
      this.Product.CategoryIDs[0] = id
    },
    onFileChanged (event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      this.PicInfo.FileName = file.name
      reader.onload = e => { 
        this.imgUrl = e.target.result
        this.PicInfo.FileContent = e.target.result.split(',')[1]
      }         
      reader.readAsDataURL(file);   
      },
    setCurrencyPrice(currency){
      this.Product.SwapTarget.Price_Start.Type = currency
      this.Product.SwapTarget.Price_End.Type = currency

    },
    setCurrencyType(currency){
        this.MoneyInfo.Type = currency
    },
    removeImg(){
      this.imgUrl = ""
    },
    clearCategory(){
      this.Product.CategoryIDs[0] = ""
    }
  },
  mounted() {
    setTimeout(() => {
      var element = document.getElementById("body_class");
      element.removeAttribute("class");
      element.classList.add("item", "noSearchPage", "edit");
      $('.loadPad').animate({
        opacity: 0
      }, 1000, function () {
        $('.loadPad').css({
          'display': 'none'
        });
      });
      /* item_edit 編輯物品 */
      var $stepPad = $('.stepPad'),
        $editImg = $stepPad.find('.editImg'),
        $addImg = $stepPad.find('.addImg'),
        $addImgW = $addImg.outerWidth(),
        $imgMask = $('.imgMask'),
        $imgMaskW = $imgMask.width(),
        $imgBlock = $imgMask.find('.imgBlock'),
        $imgList = $imgBlock.find('.imgList'),
        $imgListL = $imgList.length,
        $delImg = $('.delImg');
      //基本設定
      $addImg.css({
        'height': $addImgW
      });
      $imgList.css({
        'width': $addImgW,
        'height': $addImgW
      });
      var $imgListW = $imgList.outerWidth(true);
      
      //編輯按鈕.垃圾桶
      $editImg.hover(function () {
        $(this).find('span').addClass('action');
      }, function () {
        $(this).find('span').removeClass('action');
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

        var $btnCUR = $('.currency'),
      $curBlock = $('.curBlock'),
      $curList = $curBlock.find('b')
    //點幣別按鈕
    $btnCUR.click(function(){btnCUR($(this));});
    $curList.click(function(){curList($(this));});
    function btnCUR(obj){
      if($('#checkFree').prop('checked') == false){
        obj.find('.curBlock').fadeToggle();
      }}
      function curList(tag, txt){
        var txt = tag.text(),
        $thisCUR = tag.parent().parent().find('i');
        $thisCUR.text(txt);
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
      var $imgMaskWh = $('.imgMaskW');
	if($imgListL > 3){
		$imgMaskWh.fadeIn();
	}else{
		$imgMaskWh.fadeOut();
	}

      $(window).on('load', function () {
        if ($(window).width() > 1024) {
          var s = skrollr.init();
        }

        $('#header').find('.market').addClass('action');

      })
      $('.backTop').click(function () {
        $('html,body').animate({
          scrollTop: $('#main').offset().top
        }, 800, 'easeOutCirc');
      });

         var $btnCUR = $('.currency'),
      $curBlock = $('.curBlock'),
      $curList = $curBlock.find('b')
    //點幣別按鈕
    $btnCUR.click(function(){btnCUR($(this));});
    $curList.click(function(){curList($(this));});
    function btnCUR(obj){
      if($('#checkFree').prop('checked') == false){
        obj.find('.curBlock').fadeToggle();
      }}
      function curList(tag, txt){
        var txt = tag.text(),
        $thisCUR = tag.parent().parent().find('i');
        $thisCUR.text(txt);
	   }


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

        $('.delImg').click(function () {
          $('#popContainer').removeClass();
          $('#popContainer').stop().animate({
            top: 0
          }, 300);
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

        //上傳影片進度條
        var $vdObj = $('.editVideo').find('img'),
          $vdObjL = $vdObj.length,
          $vdSrc = $vdObj.attr('src'), //檔案名稱暫時獲取img的src
          $vdName = $vdSrc,
          $vdSize = '7725Kb', //假數據
          $vdRate = '58%', //假數據
          $nprPad = $('.nprPad'),
          $nprPadL = $nprPad.length,
          $closeNPR = $('.nprPad').find('.btn_close');

        //nprogress.js自訂參數
        NProgress.configure({
          parent: '#nprContainer',
          template: '<div class="bar" role="bar"></div><div class="vdData"><span class="vdName">' + $vdName + '</span><span class="vdSize">' + $vdSize + '</span><span class="vdRate">' + $vdRate + '</span></div>'
        });
        //nprogress基本設定
        $nprPad.css({
          'display': 'none'
        });
        NProgress.start(); //啟動進度條
        $nprPad.fadeIn(); //容器出現
        //點X容器消失
        $closeNPR.click(function () {
          NProgress.done();
          NProgress.remove();
          $nprPad.fadeOut();
        });

      })
    }, 0)
  }

}



</script>