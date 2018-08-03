<template>
<div>
<!-- <body class="item noSearchPage wishDetail"> -->
	<!-- Header -->
	<app-header></app-header>
	<!-- Header END -->
	<div id="main">
		<div class="breadcrumb">
			<i>Swapub</i><i> &#62; 交換</i><i> &#62; Rock stone</i><i> &#62; 許願商品細節</i><i></i>
		</div>
		<div class="content">
			<div class="conBlock infoBlock clear">
				<div class="infoPad">
					<dl>
						<dt>
							<ul class="wishTitle">
								<li>
                  <!-- <span>{{this.resData.Date}}</span> -->
								<h3>我想要...</h3>
								</li>
								<li>
                <h1>{{this.resData.Name}}</h1></li>
							</ul>
						</dt>
						<dd>
							<ul class="itemImg">
								<li><i><img :src="(this.productImg)"  alt=""/></i></li>
							</ul>
						</dd>
						<dd>
							<ul class="itemInfo">
                
								<li><p>{{this.resData.Description}}</p></li>
							</ul>
						</dd>
						<dd>
							<ul class="userInfo">
								<li class="userPic"><a href="menu_u_myitem.html?j"><i><img :src="this.imgUrl" alt=""></i></a></li>
								<li class="userDetail"><h3 class="userName"><i>{{this.user.Name}}</i></h3><span class="userAdd">{{this.location}}</span></li>
								<!-- <li class="timer"><span>{{this.resData.Date}}</span></li> -->
							</ul>
						</dd>
						<dd class="editPad">
							<ul>
								<li class="btn_msg action"><i>{{this.messageNum}}</i><p>留言</p></li>
								<li class="btn_share"><p>分享</p></li>
								<li class="btn_edit"><router-link :to="{name:'Wish_edit',params: { id: this.id}} "><p>編輯</p></router-link></li>
                
								<li class="btn_del"><p>刪除</p></li>
							</ul>
						</dd>
						<dd class="editPad otherUserMD">
							<ul>
								<li class="btn_msg action"><i>5</i><p>留言</p></li>
								<li class="btn_share"><p>分享</p></li>
								<li class="btn_report"><p>檢舉</p></li>
							</ul>
						</dd>
            <dd class="timer"><span>18小時前</span></dd>
					</dl>
				</div>
				<div class="infoPad">
					<div class="btnPad">
						<span class="action">留言<i>({{this.messageNum}})</i></span>
					</div>
					<div class="socialPad">
						<ul class="msgPad action">
							<li>
								<span class="userPic"><a href="menu_u_myitem.html?j"><img :src="this.userImg" alt=""></a></span>
								<p><input type="text" name="" value="" placeholder="我想說..." v-model="message"></p>
									<a class="btn_sentMsg btn_o" @click="sendMessage()"></a>
							</li>

                
           <li v-for="message in messageList">
                  
                    <span class="userPic"><a href="menu_u_myitem_other.html?j"><img :src="message.UserInfo.AvatarUrl" alt=""></a></span>
                    <span class="date">{{((message.Date).split('.')[0]).replace("T","     ")}}</span>
                    <p class="userName"><a href="menu_u_myitem_other.html?j">{{message.UserInfo.Name}}</a></p>
                    <p>{{message.Message}}</p>
                    
          </li> 
							<!-- <li>
								<span class="userPic"><a href="menu_u_myitem_other.html?j"><img src="../../../static/images/ws_user_img_3.png" alt=""></a></span>
								<p class="userName"><a href="menu_u_myitem_other.html?j">Victor Wang</a><span class="date">2017/10/27 19:55</span></p>
								<p>我有一支64G 但是金色 外觀有稍微用過痕跡，外盒與充電線都在，不介意再來談細節吧！</p>
							</li> -->
							<!-- <li>
								<span class="userPic"><a href="menu_u_myitem_other.html?j"><img src="../../../static/images/ws_user_img_3.png" alt=""></a></span>
								<p class="userName"><a href="menu_u_myitem_other.html?j">Victor Wang</a><span class="date">2017/10/27 19:55</span></p>
								<p>有需要的話請加我的line：victor123</p>
							</li> -->
							<!-- <li>
								<span class="userPic"><a href="menu_u_myitem.html?j"><img src="../../../static/images/ws_user_img_4.png" alt=""></a></span>
								<p class="userName"><a href="menu_u_myitem.html?j"><i>我 (</i>Jing Yun Lee<i>)</i></a><span class="date">2017/10/27 19:55</span></p>
								<p>有需求我可以留下聯絡方式給你</p>
							</li> -->
							<!-- <li>
								<span class="userPic"><a href="menu_u_myitem_other.html?j"><img src="../../../static/images/ws_user_img_2.png" alt=""></a></span>
								<p class="userName"><a href="menu_u_myitem_other.html?j">Rock stone</a><span class="date">2017/10/27 19:55</span></p>
								<p>有需要！ 怎麼換？</p>
							</li> -->
						</ul>
					</div>
				</div>
			</div>
			<div class="conBlock suggestBlock">
				<h4>類似的願望</h4>
				<div class="sgPad">
					<div class="sgCont">
						<div class="sgMask">
							<ul>
								<li><img src="../../../static/images/img_item_slider_01.jpg" alt="" width=""><span class="ovLine">風格牛皮筆記本</span></li>
								<li><img src="../../../static/images/img_item_slider_02.jpg" alt="" width=""><span class="ovLine">有機造型胸針</span></li>
								<li><img src="../../../static/images/img_item_slider_03.jpg" alt="" width=""><span class="ovLine">野豬瓦愣造型壁掛野豬瓦愣造型壁掛</span></li>
								<li><img src="../../../static/images/img_item_slider_04.jpg" alt="" width=""><span class="ovLine">設計師款錶</span></li>
								<li><img src="../../../static/images/img_item_slider_05.jpg" alt="" width=""><span class="ovLine">小暖男紳士造型毛帽</span></li>
								<li><img src="../../../static/images/img_item_slider_06.jpg" alt="" width=""><span class="ovLine">鉛筆潮黑襪</span></li>
								<li><img src="../../../static/images/img_item_slider_07.jpg" alt="" width=""><span class="ovLine">棉花乾燥捧花</span></li>
								<li><img src="../../../static/images/img_item_slider_05.jpg" alt="" width=""><span class="ovLine">小暖男紳士造型毛帽</span></li>
								<li><img src="../../../static/images/img_item_slider_06.jpg" alt="" width=""><span class="ovLine">鉛筆潮黑襪</span></li>
								<li><img src="../../../static/images/img_item_slider_07.jpg" alt="" width=""><span class="ovLine">棉花乾燥捧花</span></li>
								<li><img src="../../../static/images/img_item_slider_05.jpg" alt="" width=""><span class="ovLine">小暖男紳士造型毛帽</span></li>
								<li><img src="../../../static/images/img_item_slider_06.jpg" alt="" width=""><span class="ovLine">鉛筆潮黑襪</span></li>
								<li><img src="../../../static/images/img_item_slider_07.jpg" alt="" width=""><span class="ovLine">棉花乾燥捧花</span></li>
								<li><img src="../../../static/images/img_item_slider_05.jpg" alt="" width=""><span class="ovLine">小暖男紳士造型毛帽</span></li>
								<li><img src="../../../static/images/img_item_slider_06.jpg" alt="" width=""><span class="ovLine">鉛筆潮黑襪</span></li>
								<li><img src="../../../static/images/img_item_slider_07.jpg" alt="" width=""><span class="ovLine">棉花乾燥捧花</span></li>
							</ul>
						</div>
					</div>
					<div class="sgBtPad">
						<span class="icon-chevron-left sliderBt"></span>
						<span class="icon-chevron-right sliderBt"></span>
					</div>
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
		<div class="popContent popSys popDelPad">
			<h3>提醒</h3>
			<form>
				<p>你確定要刪除嗎？</p>
				<div class="popCheckPad">
					<input type="button" class="btn_gr btn_cancel" value="取消">
					<input type="submit" class="btn_o btn_sure" value="確定" @click="deleteItem()">
				</div>
			</form>
		</div>
		<div class="popContent popSharePad">
			<div class="btn_closePop"></div>
			<h3>分享</h3>
			<div class="shareList">
				<a href=""><i class="ico_mail"></i>E-mail</a>
				<a href=""><i class="ico_fb"></i>Facebook</a>
				<a href=""><i class="ico_tw"></i>Twitter</a>
				<a href=""><i class="ico_line"></i>Line</a>
				<a href=""><i class="ico_whats"></i>Whatsapp</a>
			</div>
			<div class="copyLink">
				<label><i class="ico_cohref"></i><input type="text" name="" value="https://www.swapub.com" placeholder=""></label>
			</div>
		</div>
	
		<div class="popContent popReportPad">
			<!-- <div class="btn_closePop"></div> -->
			<h3>我要檢舉的原因是？</h3>
			<div class="reportList">
				<p><label for="reListA"><input type="radio" name="reList" id="reListA">此商品為仿冒品，嚴重違反智慧財產權與當地法令</label></p>
				<p><label for="reListB"><input type="radio" name="reList" id="reListB">此商品違反風俗道德或是含有色情與暴力內容</label></p>
				<p><label for="reListC"><input type="radio" name="reList" id="reListC">此商品有濫發廣告訊息之嫌疑</label></p>
			</div>
			<div class="popCheckPad">
				<span class="btn_o btn_cancel">取消</span><span class="btn_o btn_sure">確定</span>
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
      imgUrl:"",		
      userImg:"",
      messageNum:"",
      messageList:{},
      message:""    
    }
  },
created(){
   this.getProductInfo(); 
   this.getMessageNum();
   this.getMessageList();
  },
  methods:{
	  async getProductInfo(){
				this.getToken();  
        this.resData = await api.get('GetWishInfo',localStorage.getItem('api_token'),'&wishID='+ this.id)
				this.user = this.resData.UserInfo
				this.location = this.resData.City  +","+ this.resData.Country 
				this.imgUrl = api.CdnUrl + "/Uploads/User/" + this.user.ID  + "/Avatar.jpg"
        this.productImg = this.resData.PictureUrl
        this.messageNum = this.resData.MessageCount
        	if(localStorage.getItem('login_token') != "" && localStorage.getItem('login_token') != null){
			  		this.User = await api.get('User',localStorage.getItem('login_token'),'')	
						this.userImg = api.CdnUrl + "/Uploads/User/" + this.User.ID  + "/Avatar.jpg"
						this.Item = await api.get('Product',localStorage.getItem('login_token'),"&ownerID=" + this.User.ID + "&filterDate=1" )
			    }
        console.log(this.resData)
        	if(this.user.ID == this.User.ID){
						this.isShow = true
						$('.editPad').addClass("action");
						$('.otherUserMD').removeClass("action");
						//$('.btnPad').css("display","none")					
			  }
			  else{
						this.isShow = false
						$('.otherUserMD').addClass("action");
						$('.btnPad').css("display","block")
				}
		},

	  async getToken(){
       await api.getToken()
    },

    async getMessageNum(){
			this.messageNum = await api.get('PublicMessage',localStorage.getItem('api_token'),'&productID=' + this.id)
		},
		async sendMessage(){
			 await api.postJSON('AddWishMessage',JSON.stringify(this.message),localStorage.getItem('api_token'),'&wishID=' + this.id)
			 this.getMessageNum()
			 this.getMessageList();
			 this.message=""
		},

		async getMessageList(){
        this.messageList = await api.get('GetWishMessageList',localStorage.getItem('api_token'),'&wishID=' + this.id + "&maxtime=1")
        console.log(this.messageList)    
    },
    async deleteItem(){
				api.delete('DeleteWish/',localStorage.getItem('login_token'),"&wishID=" + this.id)
				this.$router.push('/wish')
		},
	},

  mounted() {
    setTimeout(() => {
      var Gw = $(window),
        Gww = Gw.width(),
        Gwh = Gw.height(),
        Gd = $(document),
        Gdw = Gd.width(),
        Gdh = Gd.height();

      var element = document.getElementById("body_class");
      element.removeAttribute("class");
      element.classList.add("wish","item", "noSearchPage", "wishDetail");

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

        $('#header').find('.wish').addClass('action');

      })

      var $sugBlock = $('.suggestBlock'),
        conW = $('#main').find('.content').width(),
        conW = conW / 2;
      $sugBlock.css({
        'padding-left': (Gww / 2) - conW,
        'padding-right': (Gww / 2) - conW,
        'margin-left': -(Gww / 2) + conW
      });

      //留言.交換區塊 socialBlock
      var $btnPad = $('.socialBlock').find('.btnPad'),
        $scBtn = $btnPad.find('span'),
        $scPad = $('.socialPad'),
        $scUL = $scPad.find('.socialList'),
        $showMore = $scPad.find('.showMore'),
        $paction, pInd, pLen;
      $scBtn.click(function () {
        var scInd = $(this).index();
        $scBtn.eq(scInd).addClass('action').siblings().removeClass('action');
        $scUL.eq(scInd).addClass('action').siblings().removeClass('action');
        $showMore.find('p').removeClass('action');
        $showMore.find('p').eq(0).addClass('action');
        pLen = $('.socialList.action').find('li').length;
        if (pLen < 4) {
          $showMore.fadeOut();
        } else {
          $showMore.fadeIn();
        }
        hideP();
      });
      //點顯示更多.顯示較少
      var $scList, $scItem, $scLen;
      $showMore.click(function () {
        $scList = $scPad.find('.socialList.action'),
          $scItem = $scList.find('li'),
          $scLen = $scItem.length;
        $paction = $showMore.find('p.action'),
          pInd = $paction.index();
        $paction.removeClass('action').siblings().addClass('action');
        if (pInd !== 1) {
          $scItem.fadeIn();
        } else {
          hideP();
        }
      });
      //socialPad內3個以上的項目隱藏或顯示
      var hideP = function () {
        for (i = 0; i < $scLen; i++) {
          if (i > 2) {
            $scItem.eq(i).fadeOut();
          } else {
            $scItem.eq(i).fadeIn();
          }
        }
      }

      $('.btn_cancel').click(function () {
        $('#popContainer').stop().animate({
          top: -100 + 'vh'
        }, 500);
      });
      $('.backTop').click(function () {
        $('html,body').animate({
          scrollTop: $('#main').offset().top
        }, 800, 'easeOutCirc');
      });


      //交換區塊的開啟交換頁 socialBlock
      var $openSwap = $('.swapPad').find('.swapList');
      $openSwap.append('<a class="openDetail" href="swap_item_detail.html"></a>');


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
      var $sugBlock = $('.suggestBlock'),
        conW = $('#main').find('.content').width(),
        conW = conW / 2;
      $sugBlock.css({
        'padding-left': (Gww / 2) - conW,
        'padding-right': (Gww / 2) - conW,
        'margin-left': -(Gww / 2) + conW
      });
      var i = 0,
        $sgCont = $('.sgCont'),
        $sgContW = $sgCont.width(),
        $sgMaskW = $('.sgMask').width(),
        $sgUL = $sgCont.find('ul'),
        $sgLI = $sgCont.find('li'),
        $sgLeng = $sgLI.length,
        $sgW = $sgLI.outerWidth(true),
        $sgNow = 0, //現在的 sg 位置
        $sgBt = $('.sgBtPad'),
        $sgBtList = $sgBt.find('.sliderBt'),
        $conInd, ind;
      //基本設定
      $sgUL.css({
        'min-width': $sgLeng * $sgW
      });
      var $sgULW = $sgUL.width();
      $conInd = $sgULW / $sgMaskW; // 總頁數
      $sgBtList.eq(1).css({
        'left': $sgContW + 50 + 'px'
      });
      $sgBtList.eq(0).css({
        'opacity': 0.4
      });
      $sgBtList.click(function () {
        ind = $(this).index();
        if (ind !== 1 && $sgNow !== 0) {
          $sgNow--;
          $sgBtList.eq(1).css({
            'opacity': 1
          });
          $sgUL.stop().animate({
            "margin-left": -$sgMaskW * $sgNow
          }, 2000, 'easeOutCubic');
          if ($sgNow == 0) {
            $sgBtList.eq(0).css({
              'opacity': 0.4
            });
          }
        } else if (ind === 1 && $sgNow < $conInd - 1) {
          $sgNow++;
          $sgBtList.eq(0).css({
            'opacity': 1
          });
          $sgUL.stop().animate({
            "margin-left": -$sgMaskW * $sgNow
          }, 2000, 'easeOutCubic');
          if ($sgNow >= ($conInd - 1)) {
            $sgBtList.eq(1).css({
              'opacity': 0.4
            })
          }
        }
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

      // Yep, that's it!
      //$('#scene').parallax();

      $(document).ready(function () {
        $('.btn_share').click(function () {
          $('#popContainer').removeClass();
          $('#popContainer').stop().animate({
            top: 0
          }, 300);
          $('#popContainer').addClass('popShare');
        });
        $('.btn_del').click(function () {
          $('#popContainer').removeClass();
          $('#popContainer').stop().animate({
            top: 0
          }, 300);
          $('#popContainer').addClass('popDel');
        });
        $('.btn_report').click(function () {
          $('#popContainer').removeClass();
          $('#popContainer').stop().animate({
            top: 0
          }, 300);
          $('#popContainer').addClass('popReport');
        })
      })
    }, 0)
  }
}

</script>