<template>
<div>
<!-- <body class="item noSearchPage menuPage mSwap"> -->
	<!-- Header -->
	<app-header></app-header>
	<!-- Header END -->
	<div id="main">
		<div class="breadcrumb">
			<i>Swapub</i><i> &#62; 側邊欄</i><i> &#62; 討論中的交換</i><i></i><i></i>
		</div>
		<div class="content">
            <h1>討論中的交換</h1>
            <div class="mainBtPad">
                <a class="action">送出的交換(<i>{{this.Offer.length}}</i>)</a>
                <a class="">收到的交換(<i>{{this.GotOffer.length}}</i>)</a>
            </div>
			<div class="conBlock send">
                <ul>
                    <li class="mSwapList clear" v-for="offer in Offer">
                        <div class="dealPad">
                            <span class="date">{{((offer.UpdatedDate).split('.')[0]).replace("T","     ")}}</span>
                            <span class="icon_swap"></span>
                            <div class="swapPad">
                                <span class="userPic checked"><a href="menu_u_myitem.html?j"><img :src="imgUrl" alt=""></a></span>
            
                                <div class="itemCon_1 itemImg">
                                    <div class="cssTable">
                                        <dl>
                                            <div class="itemCon_2 cssTable">
                                                <ul v-if="offer.Offer.Items != '' && offer.Offer.Items != undefined ">
                                                    <li><p v-if="offer.Offer.Items.length == 1 || offer.Offer.Items.length == 2 || offer.Offer.Items.length == 3" :style="{ backgroundImage:`url(${offer.Offer.Items[0].PictureUrl})`}"></p></li>
                                                    <li v-if="offer.Offer.Items.length > 1"><!-- 如果只有一張圖，這個li 都不要 -->
                                                        <p v-if="offer.Offer.Items.length == 2 || offer.Offer.Items.length == 3" :style="{ backgroundImage:`url(${offer.Offer.Items[1].PictureUrl})`}"></p>
                                                        <p v-if="offer.Offer.Items.length == 3" :style="{ backgroundImage:`url(${offer.Offer.Items[2].PictureUrl})`}"></p><!-- 如果有第三張圖，要放在第二個LI 裡面 -->
                                                    </li>
                                                </ul>
                                            </div>
                                        </dl>
                                        <dl v-if="offer.Offer.OfferMoney != '' && offer.Offer.OfferMoney != undefined"><dt><b>+</b><i style="background-image:url(../../../static/images/icon_addmoney_w.png)"></i><span class="ovLine">{{offer.Offer.OfferMoney.Type}} {{offer.Offer.OfferMoney.Value}}</span></dt></dl><!-- 如果有項目，就要新增 dl > dt > 內容 -->
                                        <dl v-if="offer.Offer.OfferService != '' && offer.Offer.OfferService != undefined"><dt><b>+</b><i style="background-image:url(../../../static/images/icon_addserv_w.png)"></i><span class="ovLine">{{offer.Offer.OfferService}}</span></dt></dl>
                                    </div>
                                    <router-link :to="{name:'Swap_item_detail',params: { cool:'wow',wow:'cool'}}"></router-link>
                                </div>
                                <p v-if="offer.Offer.Items[0]">{{offer.Offer.Items[0].ProductName}}</p>
                            </div>
                            <div class="swapPad">
                                <span class="userPic checked" v-if="offer.TargetUser"><a href="menu_u_myitem_other.html?j"><img :src="otherImgUrl + offer.TargetUser.ID + '/Avatar.jpg'" alt=""></a></span>
                                <div class="itemCon_1 itemImg">
                                    <div class="cssTable">
                                        <dl>
                                            <div class="itemCon_2 cssTable">
                                                <ul>
                                                    <li><p :style="{ backgroundImage:`url(${offer.Product.PictureURL})`}"></p></li>
                                                   
                                                </ul>
                                            </div>
                                        </dl>
                                        <!--<dl><dt><i style="background-image:url(../../../static/images/icon_addmoney_w.png)"></i><span class="ovLine">TWD 2000</span></dt></dl> 如果有項目，就要新增 dl > dt > 內容 -->
                                    </div>
                                    <a href="swap_item_detail_other.html?j"></a>
                                </div>
                                <p v-if="offer.Product">{{offer.Product.ProductName}}</p>
                            </div>
                        </div>
                        <div class="dealBtPad">
                            <!-- <span class="date">{{((offer.UpdatedDate).split('.')[0]).replace("T","     ")}}</span> -->
                            <span class="btn_o btn_change" @click="openChange(offer.Offer,offer.MsgID)">更改交換</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="conBlock get">
                    <ul>
                        <li class="mSwapList clear" v-for="offer in GotOffer">
                            <div class="dealPad">
                                <span class="date">{{((offer.UpdatedDate).split('.')[0]).replace("T","     ")}}</span>
                                <span class="icon_swap"></span>
                                <div class="swapPad">
                                <span class="userPic checked" v-if="offer.TargetUser"><a href="menu_u_myitem_other.html?j"><img :src="otherImgUrl + offer.TargetUser.ID + '/Avatar.jpg'" alt=""></a></span>
                                    <!-- <div class="itemImg itemFinish">
                                        <a href="swap_item_detail_finish-other.html?j"><img src="images/img_item_09.jpg" alt=""></a>
                                    </div> -->
                                    <div class="itemCon_1 itemImg itemFinish">
                                        <div class="cssTable">
                                            <dl>
                                                <div class="itemCon_2 cssTable">
                                                    <ul v-if="offer.Offer.Items != '' && offer.Offer.Items != undefined ">
                                                    <li><p v-if="offer.Offer.Items.length == 1 || offer.Offer.Items.length == 2 || offer.Offer.Items.length == 3" :style="{ backgroundImage:`url(${offer.Offer.Items[0].PictureUrl})`}"></p></li>
                                                    <li v-if="offer.Offer.Items.length > 1"><!-- 如果只有一張圖，這個li 都不要 -->
                                                        <p v-if="offer.Offer.Items.length == 2 || offer.Offer.Items.length == 3" :style="{ backgroundImage:`url(${offer.Offer.Items[1].PictureUrl})`}"></p>
                                                        <p v-if="offer.Offer.Items.length == 3" :style="{ backgroundImage:`url(${offer.Offer.Items[2].PictureUrl})`}"></p><!-- 如果有第三張圖，要放在第二個LI 裡面 -->
                                                    </li>
                                                   </ul>
                                                </div>
                                            </dl>
                                           <dl v-if="offer.Offer.OfferMoney != '' && offer.Offer.OfferMoney != undefined"><dt><b>+</b><i style="background-image:url(../../../static/images/icon_addmoney_w.png)"></i><span class="ovLine">{{offer.Offer.OfferMoney.Type}} {{offer.Offer.OfferMoney.Value}}</span></dt></dl><!-- 如果有項目，就要新增 dl > dt > 內容 -->
                                           <dl v-if="offer.Offer.OfferService != '' && offer.Offer.OfferService != undefined"><dt><b>+</b><i style="background-image:url(../../../static/images/icon_addtask_w.png)"></i><span class="ovLine">{{offer.Offer.OfferService}}</span></dt></dl>
                                    </div>
                                        <a href="swap_item_detail_finish-other.html?j"></a>
                                    </div>
                                      <p v-if="offer.Offer.Items[0]">{{offer.Offer.Items[0].ProductName}}</p>
                                </div>
                                <div class="swapPad">
                                    <span class="userPic checked"><a href="menu_u_myitem.html?j"><img :src="imgUrl" alt=""></a></span>
                                    <!-- <div class="itemImg">
                                        <a href="swap_item_detail_user.html?j"><img src="images/ws_it_img_2.jpg" alt=""></a>
                                    </div> -->
                                    <div class="itemCon_1 itemImg">
                                        <div class="cssTable">
                                            <dl>
                                                <div class="itemCon_2 cssTable">
                                                    <ul>
                                                         <li><p :style="{ backgroundImage:`url(${offer.Product.PictureURL})`}"></p></li>
                                                    </ul>
                                                </div>
                                            </dl>
                                            <!-- <dl><dt><i style="background-image:url(../../../static/images/icon_addmoney_w.png)"></i><span class="ovLine">TWD 2000</span></dt></dl>如果有項目，就要新增 dl > dt > 內容 -->
                                        </div>
                                        <a href="swap_item_detail_user.html?j"></a>
                                    </div>
                                    <p v-if="offer.Product">{{offer.Product.ProductName}}</p>
                                </div>
                            </div>
                            <div class="dealBtPad">
                                <!-- <span class="date">{{((offer.UpdatedDate).split('.')[0]).replace("T","     ")}}</span> -->
                                <span class="btn_g btn_deal"><i></i>成交</span>
                            </div>
                        </li>
                        <li class="mSwapList clear">
                            <div class="dealPad">
                                <span class="date">06/27/2017</span>
                                <span class="icon_swap"></span>
                                <div class="swapPad">
                                    <span class="userPic checked"><a href="menu_u_myitem_other.html?j"><img src="../../../static/images/ws_user_img_3.png" alt=""></a></span>
                                    <!-- <div class="itemImg">
                                        <a href="swap_item_detail_other.html?j"><img src="images/ws_it_img_4.jpg" alt=""></a>
                                    </div> -->
                                    <div class="itemCon_1 itemImg">
                                        <div class="cssTable">
                                            <dl>
                                                <div class="itemCon_2 cssTable">
                                                    <ul>
                                                        <li><p style="background-image:url(../../../static/images/ws_it_img_4.jpg)"></p></li>
                                                    </ul>
                                                </div>
                                            </dl>
                                        </div>
                                        <a href="swap_item_detail_other.html?j"></a>
                                    </div>
                                    <p>【PS4】4K高解析/TB硬碟</p>
                                </div>
                                <div class="swapPad">
                                    <span class="userPic checked"><a href="menu_u_myitem.html?j"><img src="../../../static/images/ws_user_img_4.png" alt=""></a></span>
                                    <!-- <div class="itemImg itemFinish">
                                        <a href="swap_item_detail_finish-user.html?j"><img src="images/sr_it_img_2.jpg" alt=""></a>
                                    </div> -->
                                    <div class="itemCon_1 itemImg itemFinish">
                                        <div class="cssTable">
                                            <dl>
                                                <div class="itemCon_2 cssTable">
                                                    <ul>
                                                        <li><p style="background-image:url(../../../static/images/sr_it_img_2.jpg)"></p></li>
                                                        <li><!-- 如果只有一張圖，這個li 都不要 -->
                                                            <p style="background-image:url(../../../static/images/sr_it_img_3.jpg)"></p>
                                                            <!-- 如果有第三張圖，要放在第二個LI 裡面 -->
                                                        </li>
                                                    </ul>
                                                </div>
                                            </dl>
                                            <!-- 如果有項目，就要新增 dl > dt > 內容 -->
                                        </div>
                                        <a href="swap_item_detail_finish-user.html?j"></a>
                                    </div>
                                    <p>acer筆電，高畫質數位型辦公電腦</p>
                                </div>
                            </div>
                            <div class="dealBtPad">
                                <!-- <span class="date">06/27/2017</span> -->
                                <span class="btn_g btn_deal"><i></i>成交</span>
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
        <div class="popContent popDealPad">
            <div class="btn_closePop"></div>
            <h3>資訊確認</h3>
            <p>請提供您的聯絡資訊，方便讓對方與您聯絡！</p>
            <p>我們不會公開您的資料</p>
            <form action="menu_t_deal.html">
                <div class="dealDetail">
                    <p>姓名<input type="text" value="Jing Yun Lee"></p>
                    <p>電子信箱<input type="email" value="free@gmail.com"></p>
                    <p>電話<input type="text" value="987654321"></p>
                </div>
                <p class="popCheckPad"><input type="checkbox">不要顯示我的手機號碼</p>
                <div class="popCheckPad">
                    <p>按下「送出」後表示我同意</p>
                    <p><a href="exp_rule.html" target="_blank">服務條款</a>和<a href="exp_rule.html" target="_blank">隱私權政策</a></p>
                    <!-- <input type="button" class="btn_gr btn_cancel" value="取消"> -->
                    <input type="submit" class="btn_o btn_sure" value="確定" onclick="">
                </div>
            </form>
        </div>
        <div class="popContent popSys popChangePad">
            <div class="btn_closePop"></div>
            <h3>更改交換</h3>
            <p>請問你要取消交換還是要更改交換物品?</p>
            <div class="popCheckPad">
                <input type="button" class="btn_gr" value="取消交換" @click="check()">
                <input type="button" class="btn_o btn_popChange" value="更改交換">
            </div>
        </div>
        <div class="popContent popSys popCheckCancel">
            <div class="btn_closePop"></div>
            <h3>取消交換</h3>
            <p>你確定要取消交換嗎？</p>
            <div class="popCheckPad">
                <!-- <input type="button" class="btn_gr btn_cancel" value="取消"> -->
                <input type="button" class="btn_o btn_sure" value="確定">
            </div>
        </div>
        <div class="popContent popEditSwap">
            <div class="btn_closePop"></div>
            <h3>您可以提出物品、價錢、服務等組合來交換</h3>
            <form>
                <div class="popChoImg">
                    <h4>提出物品</h4>
                    <p>最多可以提出三個物品</p>
                    <div class="imgBoxPad clear">
                        <span class="addImg btn_imgBox firstImg"></span>
                        <span class="addImg btn_imgBox secondImg"></span>
                        <span class="addImg btn_imgBox thirdImg"></span>
                    </div>
                </div>
                <div class="popAddPrice">
                    <h4>給個價錢</h4>
                    <p><b>+</b><i></i>
                        <span class="currency btn_g"><i>TWD</i>
                            <span class="curBlock"><b>AED</b><b>AUD</b><b>CAD</b><b>CNY</b><b>EUR</b><b>HKD</b><b>JPY</b><b>KRW</b><b>TWD</b><b>USD</b></span>
                        </span>
                        <input type="number" value="" min="0" v-model="changeOffer.OfferMoney.Value"></p>
                </div>
                <div class="popAddServ">
                    <h4>提供服務</h4>
                    <p><b>+</b><i></i><input type="text" placeholder="例：教我彈烏克麗麗" value="" v-model="changeOffer.OfferService"></p>
                </div>
                <div class="popFree"><p><input type="checkbox" id="checkFree">我能免費索取？</p></div>
                <div class="popCheckPad">
                    <!-- <input type="button" class="btn_w btn_cancel" value="取消"> -->
                    <input type="submit" class="btn_o btn_sure" value="送出" @click="upload()">
                </div>
            </form>
        </div>
        <div class="popContent fake popImgList" style="top:-100vh;">
			<div class="popMask clear">
				<div class="btn_closeThisPop"></div>
				<h3>選擇照片或物品</h3>
				<div class="popChoImg">
					<dl>
					<router-link to='/market_upload'>	<dt class="addImg btn_upload" style="height:189px"><span>+選擇照片或商品</span></dt></router-link>
						<dd class="addImg btn_choosePic" v-for="item in Item"><img :src="item.PictureUrls[0]" alt="" @click="setItem(item._id)"></dd>
						<!-- <dd class="addImg btn_choosePic"><img src="../../../static/images/mk_it_img_2.jpg" alt=""></dd>
						<dd class="addImg btn_choosePic"><img src="../../../static/images/img_item_slider_07.jpg" alt=""></dd>
						<dd class="addImg btn_choosePic"><img src="../../../static/images/img_item_slider_04.jpg" alt=""></dd>
						<dd class="addImg btn_choosePic"><img src="../../../static/images/img_item_03.jpg" alt=""></dd>
						<dd class="addImg btn_choosePic action"><img src="../../../static/images/img_swapPad_01.jpg" alt=""></dd>
						<dd class="addImg btn_choosePic"><img src="../../../static/images/img_item_04.jpg" alt=""></dd>
						<dd class="addImg btn_choosePic"><img src="../../../static/images/img_item_05.jpg" alt=""></dd>
						<dd class="addImg btn_choosePic"><img src="../../../static/images/ws_it_img_1.jpg" alt=""></dd>
						<dd class="addImg btn_choosePic"><img src="../../../static/images/img_item_06.jpg" alt=""></dd>
						<dd class="addImg btn_choosePic"><img src="../../../static/images/img_item_07.jpg" alt=""></dd>
						<dd class="addImg btn_choosePic"><img src="../../../static/images/img_item_08.jpg" alt=""></dd>
						<dd class="addImg btn_choosePic"><img src="../../../static/images/mk_it_img_4.jpg" alt=""></dd> -->
					</dl>
				</div>
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
  data(){
      return{
          Offer:{},
          GotOffer:{},
          imgUrl:"",
          otherImgUrl:"",
          User:{},
          Item:{},
          MsgID:"",
          changeOffer:{
              Item:[],
              OfferMoney:{
                  Type:"",
                  Value:""
              },
              OfferService:""
          },
          changeItem:[]
        
      }
  },
  created(){
      this.getOffer();
      this.getGotOffer();
  },
  methods:{
      check(){
            $('#popContainer').removeClass();
            $('#popContainer').stop().animate({top : 0}, 300);
            $('#popContainer').addClass('popCheck');
       },
       async getOffer(){
            this.Offer = await api.get('OfferingLists',localStorage.getItem('login_token'), "")
            console.log(this.Offer)
            this.User = await api.get('User',localStorage.getItem('login_token'),'')
            this.imgUrl = api.CdnUrl + "/Uploads/User/" + this.User.ID + "/Avatar.jpg"
            this.otherImgUrl = api.CdnUrl + "/Uploads/User/"
            this.Item = await api.get('Product',localStorage.getItem('login_token'),"&ownerID=" + this.User.ID + "&filterDate=1" )
       },
       async getGotOffer(){
            this.GotOffer  = await api.get('GotOfferLists',localStorage.getItem('login_token'), "")
            console.log(this.GotOffer)
       },
       openChange(obj,MsgID){
          $('#popContainer').removeClass();
          $('#popContainer').stop().animate({
            top: 0
          }, 300);
          $('#popContainer').addClass('popChange');
          this.changeOffer = obj
          if(this.changeOffer.Items[0] != undefined){      
            $('.popEditSwap').find('.firstImg').css({'background-image':'url('+this.changeOffer.Items[0].PictureUrl+')'});
            $('.popEditSwap').find('.firstImg').addClass('getImg');
            this.changeItem[0] = this.changeOffer.Items[0].ProductID
          }
          if(this.changeOffer.Items[1] != undefined){      
            $('.popEditSwap').find('.secondImg').css({'background-image':'url('+this.changeOffer.Items[1].PictureUrl+')'});
            $('.popEditSwap').find('.secondImg').addClass('getImg');
            this.changeItem[1] = this.changeOffer.Items[1].ProductID

          }      
          if(this.changeOffer.Items[2] != undefined){      
            $('.popEditSwap').find('.thirdImg').css({'background-image':'url('+this.changeOffer.Items[2].PictureUrl+')'});
            $('.popEditSwap').find('.thirdImg').addClass('getImg');
            this.changeItem[2] = this.changeOffer.Items[2].ProductID

          }
          this.MsgID = MsgID

       },
       setItem(id){
			if(this.changeItem.length == 0){
				this.changeItem[0] = id 
			}
			else if(this.changeItem.length == 1){
				this.changeItem[1] = id 
			}
			else{
				this.changeItem[2] = id 
			}
		},
       async upload(){
           console.log(this.changeOffer)
           console.log(this.MsgID)
           this.changeOffer.Items = this.changeItem 
           api.putJSON('Change',JSON.stringify(this.changeOffer),localStorage.getItem('login_token'), "&msgID=" + this.MsgID)
           location.reload();
       },
       async passData(obj){
           api.changeData = obj
       }
       
  },
  updated(){
      setTimeout(()=>{
          var $swapPad = $('.swapPad'),
                $swapPadW = $swapPad.width(),
                $itemImg  = $swapPad.find('.itemImg');
            $itemImg.css({'height': "184px"});

            // 提出交換
        var $imgBox = $('.popEditSwap').find('.btn_imgBox'),
          $picList = $('.btn_choosePic'),
          $upload = $('.btn_upload'),
          btnInd,
          $popUpload = $('.popImgList').find('.btn_upload'),
          $popAddImg = $('.popImgList').find('.addImg'),
          $uploadW;
        //點提出物品框框,出現圖片清單
        $imgBox.click(function () {
          btnInd = $(this).index('.btn_imgBox');
          $('#popContainer').removeClass('popShare');
          $('#popContainer').removeClass('popReport');
          $('#popContainer').removeClass('popDel');
          $('.popImgList').stop().animate({
            top: 0
          }, 300);
          $('#popContainer').addClass('popChooseImg');
          $uploadW = $popAddImg.eq(1).outerWidth();
          $popAddImg.css({
            'height': $uploadW
          });
        });

        $picList.click(function () {
          var pInd = $(this).index('.btn_choosePic');
          //橘色邊框
          $picList.eq(pInd).addClass('action').siblings().removeClass('action');
          //取得點選的圖片連結
          var img = $picList.eq(pInd).find('img').attr('src');
          console.log(img);
          //圖片清單消失
          $('.popImgList').stop().animate({
            top: -100 + 'vh'
          }, 300);
          $('#popContainer').removeClass('popChooseImg');
          //將圖片匯入當下的提出物品框框
         		$imgBox.eq(btnInd).css({'background-image':'url('+img+')'});
				$imgBox.eq(btnInd).addClass('getImg');
            });
      },100)
            

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
      element.classList.add("noSearchPage", "menuPage", "mSwap");

      $('.loadPad').animate({
        opacity: 0
      }, 1000, function () {
        $('.loadPad').css({
          'display': 'none'
        });
      });
      
      $(window).on("load", function () {
        if ($(window).width() > 1024) {
          var s = skrollr.init();
        }

        // $('#header').find('.market').addClass('action');

      })
     //itemImg高度設定
            
      // Yep, that's it!
      //$('#scene').parallax();
      	$('.btn_closeThisPop').click(function(){
		$('.fake').stop().animate({top : -100 + 'vh'}, 500, function(){
			$('#popContainer').removeClass('popChooseImg');
			$('#popContainer').removeClass('popGuaQaC');
			//$('.fake').stop().fadeOut();
		});
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
      $('.backTop').click(function () {
        $('html,body').animate({
          scrollTop: $('#main').offset().top
        }, 800, 'easeOutCirc');
      });


      $('.btn_cancel').click(function () {
        $('#popContainer').stop().animate({
          top: -100 + 'vh'
        }, 500);
      });
      $('.btn_popChange').click(function () {
          $('#popContainer').removeClass();
          $('#popContainer').stop().animate({
            top: 0
          }, 300);
          $('#popContainer').addClass('addSwap');
        });

      $(document).ready(function () {
        $('.btn_deal').click(function () {
          $('#popContainer').removeClass();
          $('#popContainer').stop().animate({
            top: 0
          }, 300);
          $('#popContainer').addClass('popDeal');
        });
        $('.btn_change').click(function () {
          $('#popContainer').removeClass();
          $('#popContainer').stop().animate({
            top: 0
          }, 300);
          $('#popContainer').addClass('popChange');
        });
        $('.btn_popChange').click(function () {
          $('#popContainer').removeClass();
          $('#popContainer').stop().animate({
            top: 0
          }, 300);
          $('#popContainer').addClass('addSwap');
        });

        var $mainBt = $('.mainBtPad').find('a'),
          $conBlock = $('.conBlock');
        $conBlock.eq(1).css({
          'display': 'none'
        });
        $mainBt.click(function () {
          var ind = $(this).index();
          $(this).addClass('action').siblings().removeClass('action');
          $conBlock.eq(ind).fadeIn().siblings('.conBlock').css({
            'display': 'none'
          });
        });
        
        
       
            
        })

    
    }, 100)
  }
}


</script>