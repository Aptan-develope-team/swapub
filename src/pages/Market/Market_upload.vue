<template>
  <div>
    <!-- <body class="item noSearchPage edit upload"> -->
    <!-- Header -->
    <app-header></app-header>
    <!-- Header END -->
    <div id="main">
      <div class="breadcrumb">
        <i>Swapub</i>
        <i> &#62; 交換</i>
        <i> &#62; 物品上傳</i>
        <i></i>
        <i></i>
      </div>
      <div class="content">
        <div class="conBlock">
          <h1>物品上傳</h1>
          <div class="editList">
            <form action="" method="get" accept-charset="utf-8">
              <dl class="stepPad">
                <dt>
                  <span>Step1</span>上傳照片或影片</dt>
                <dd class="imgPad clear" id="imgPad">
                 	<div class="editImg addImg"></div>
                  <div class="imgMaskW"></div>
                  <div class="imgMask">
									<dl class="imgBlock CG_scorll">
                        <dt class="editImg imgList">
                        <img src="../../../static/images/img_item_01.jpg" alt="">
                        <span>
                          <b class="btn_w btn_editimg">編輯</b>
                          <i class="delImg"></i>
                        </span>
                        <i>1</i>
                      </dt>
                      <dd class="editImg imgList">
                        <img src="../../../static/images/img_item_03.jpg" alt="">
                        <span>
                          <b class="btn_w btn_editimg">編輯</b>
                          <i class="delImg"></i>
                        </span>
                        <i>2</i>
                      </dd>
                      <dd class="editImg imgList editVideo">
                        <img src="../../../static/images/img_item_03.jpg" alt="">
                        <span>
                          <b class="btn_w btn_playVideo"></b>
                          <i></i>
                        </span>
                        <i>3</i>
                      </dd>
                    
                    </dl>
                  </div>
                </dd>
                <dd class="nprPad clear">
                  <span class="ico_upload"></span>
                  <span id="nprContainer"></span>
                  <span class="btn_close">
                    <i></i>
                    <i></i>
                  </span>
                </dd>
              </dl>
              <dl class="stepPad">
                <dt>
                  <span>Step2</span>說明一下這個物品</dt>
                <dd>
                  <p class="itemTitle">
                    <textarea name="" placeholder="物品名稱 (必填)" required="required" onpropertychange="setHeight(this);" onmouseover="setHeight(this);"
									onpaste="setHeight(this);" oninput="setHeight(this);" v-model="Product.ProductName"></textarea>
                  </p>
                  <p class="itemData">
                    <textarea name="" placeholder="描述物品 (必填)" required="required" onpropertychange="setHeight(this);" onmouseover="setHeight(this);"
									onpaste="setHeight(this);" oninput="setHeight(this);" v-model="Product.Description"></textarea>
                  </p>
                  <p class="addTag noDot">
                    <input type="text" name="" value="" placeholder="加上標籤 (#Apple #Nike)" v-model="Product.Tags"> 
                  </p>
                	<p class="itemOption itemType"><b>類別&nbsp;(必填)</b><span></span><input type="text" name="" value="" placeholder="" required="required"></p>
                  <p class="itemOption icoPad">
                    <span>
                      <i>
                        <img src="../../../static/images/icon_item_man.png" alt="" @click="setCategory('ow')" >男士時尚</i>
                      <i>
                        <img src="../../../static/images/icon_item_lady.png" alt="">女士時尚</i>
                      <i>
                        <img src="../../../static/images/icon_item_baby.png" alt="">媽咪寶貝</i>
                      <i>
                        <img src="../../../static/images/icon_item_pet.png" alt="">寵物用品</i>
                      <i>
                        <img src="../../../static/images/icon_item_book.png" alt="">書籍</i>
                      <i>
                        <img src="../../../static/images/icon_item_game.png" alt="">遊戲</i>
                      <i>
                        <img src="../../../static/images/icon_item_media.png" alt="">數位影音</i>
                      <i>
                        <img src="../../../static/images/icon_item_toy.png" alt="">玩具公仔</i>
                      <i>
                        <img src="../../../static/images/icon_item_3c.png" alt="">3C電子</i>
                      <i>
                        <img src="../../../static/images/icon_item_electric.png" alt="">家電</i>
                      <i>
                        <img src="../../../static/images/icon_item_furniture.png" alt="">傢俱</i>
                      <i>
                        <img src="../../../static/images/icon_item_garden.png" alt="">居家園藝</i>
                      <i>
                        <img src="../../../static/images/icon_item_sport.png" alt="">戶外活動</i>
                      <i>
                        <img src="../../../static/images/icon_item_fitness.png" alt="">健身</i>
                      <i>
                        <img src="../../../static/images/icon_item_makeup.png" alt="">美妝保養</i>
                      <i>
                        <img src="../../../static/images/icon_item_food.png" alt="">美食</i>
                      <i>
                        <img src="../../../static/images/icon_item_stationery.png" alt="">文具用品</i>
                      <i>
                        <img src="../../../static/images/icon_item_art.png" alt="">藝術古董</i>
                      <i>
                        <img src="../../../static/images/icon_item_musical.png" alt="">樂器</i>
                      <i>
                        <img src="../../../static/images/icon_item_crafts.png" alt="">手工藝品</i>
                      <i>
                        <img src="../../../static/images/icon_item_traffic.png" alt="">交通工具</i>
                      <i>
                        <img src="../../../static/images/icon_item_ticket.png" alt="">票券</i>
                      <i>
                        <img src="../../../static/images/icon_item_service.png" alt="">個人服務</i>
                      <i>
                        <img src="../../../static/images/icon_item_gift.png" alt="">免費贈與</i>
                    </span>
                  </p>
                  <p class="itemOption">
                    <b>物品地點 (國家)</b>
                    <select name="" v-model="Product.Location.Country">
                      <option value=""></option>
                    </select>
                  </p>
                  <p class="itemOption">
                    <b>物品地點 (城市)</b>
                    <select name="" v-model="Product.Location.City">
                      <option value=""></option>
                    </select>
                  </p>
                </dd>
              </dl>
              <dl class="stepPad expectPad">
                <dt>
                  <span>Step3</span>你想要交換的東西&nbsp;(至少選擇一項)</dt>
                <dd>
                 <p><input type="text" name="" value="" placeholder="我想換到的物品" required="required" v-model="Product.Wants.Data"></p>
								<p class="noDot">物品價值範圍
									<span class="currency btn_g"><i>TWD</i>
										<span class="curBlock"><b>AED</b><b>AUD</b><b>CAD</b><b>CNY</b><b>EUR</b><b>HKD</b><b>JPY</b><b>KRW</b><b>TWD</b><b>USD</b></span>
									</span>
									<span><input type="number" name="" min="0" v-model="Product.SwapTarget.Price_Start.Value">-<input type="number" name="" min="0" v-model="Product.SwapTarget.Price_End.Value"></span>
								</p>
								<p><textarea name="" placeholder="我想換到的服務" onpropertychange="setHeight(this);" onmouseover="setHeight(this);" 
									onpaste="setHeight(this);" oninput="setHeight(this);" v-model="Product.Wants.Data"></textarea><!-- <input type="text" name="" value="" placeholder=""> --></p>
								<p>我要賣
									<span class="currency btn_g"><i>TWD</i>
										<span class="curBlock"><b>AED</b><b>AUD</b><b>CAD</b><b>CNY</b><b>EUR</b><b>HKD</b><b>JPY</b><b>KRW</b><b>TWD</b><b>USD</b></span>
									</span>
                  <p class="noDot check editFree">
                    <label>
                      <input type="checkbox" id="checkFree" value="true" v-model="Product.FreeToGive">
                    </label>我願意免費贈送</p>
                </dd>
              </dl>
              <dl class="stepPad">
                <dt>
                  <span>Step4</span>交貨細節</dt>
                <dd>
                  <p class="noDot check">
                    <label>
                      <input type="checkbox" name="" v-model="Product.Options[3]">
                    </label>郵寄
                    <br>
                    <input type="text" name="" value="" placeholder="交貨細節 例如：交貨便、郵寄、快遞、免運費">
                  </p>
                  <p class="noDot check">
                    <label>
                      <input type="checkbox" name="" v-model="Product.Options[2]">
                    </label>面交
                    <br>
                    <input type="text" name="" value="" placeholder="交貨細節 例如：台北車站捷運站2號出口、台北市承德路一段1號">
                  </p>
                  <p class="noDot check">
                    <label>
                      <input type="checkbox" name="" v-model="Product.Options[1]">
                    </label>願意與海外交換</p>
                </dd>
              </dl>
              <dl class="btnPad">
                <dt>
                  <input class="btn_w" type="button" name="" value="取消">
                  <input class="btn_w btn_submit" type="button" name="" value="送出" @click="upload()">
                </dt>
              </dl>
            </form>
          </div>
        </div>
      </div>
      <div class="btn_openPop"></div>
    </div>
    <!-- main END -->

    <!-- Footer -->
    <app-footer></app-footer>
    <div class="backTop CGt"></div>
    <!-- Light Box -->
	<div id="popContainer" class="popImgSize">
      <div class="popContent popSys popEditImgPad">
        <div class="btn_closePop"></div>
        <p>請調整照片位置及大小</p>
        <div class="popImgPad">
          <i></i>
          <img src="../../../static/images/img_item_01.jpg" alt="">
        </div>
        <div class="popRangeBar">
          <i>-</i>
          <input type="range" min="0" max="100" step="1" value="50">
          <i>+</i>
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
    <div class="loadPad">
      <div class="loader_g">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </div>
    </div>
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
  data(){
    return {
      Product:{
          ProductName:"yeasa",
          Infos:["woadsfw"],
          Options:[0,0,0,0],
          Description:"cooasdfl",
          Location:{
            Country:"台灣d",
            AdministrativeArea:"",
            City:"台北d"
          },
          Gps:[1.1,2.1],
          Wants:{
            DataSize:2,
            Data:["ok"],
            MoneyInfo:{
              Type:"TWD",
              Value:0
            }
          },
          SwapTarget:{
            Price_Start:{
              Type:"TWD",
              Value:0
            },
            Price_End:{
              Type:"TWD",
              Value:0
            }
          },
          CategoryIDs:["524a426c430cb207947788fk"],
          Tags:["#wowd"],
          FaceToFaceInfos:[""],
          FreeToGive:false
      },
    }
  },
  created(){
  },
  methods:{
    async upload(){
      console.log(this.Product.CategoryIDs)
      await api.postJSON("Product",this.Product,localStorage.getItem('login_token'),"")
    },
    setCategory(id){
      this.Product.CategoryIDs[0] = id
    }
  },
  mounted() {
    setTimeout(() => {
      var element = document.getElementById("body_class");
      element.removeAttribute("class");
      element.classList.add("item", "noSearchPage", "edit", "upload");
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