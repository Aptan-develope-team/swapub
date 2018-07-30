<template>
<div>
<!-- <body class="item noSearchPage swap"> -->
	<!-- Header -->
<app-header></app-header>
	<!-- Header END -->
<div id="main">
		<div class="breadcrumb">
			<i>Swapub</i><i> &#62; 交換</i><i> &#62; 3C電子</i><i> &#62; 【Nikon】類單眼相機</i><i></i>
		</div>
		<div class="content">
			<div class="conBlock infoBlock clear">
				<div class="userPad">
					<ul class="userInfo user">
						<li class="userPic"><a href="menu_u_myitem.html?j"><img :src="this.Offer.AvatarUrl" alt=""></a></li>
                        <li class="userDetail"><h3 class="userName otherUser"><i>我(</i>{{Offer.Name}}<i>)</i></h3><span class="userAdd" v-if="OtherUser.Location">{{OtherUser.Location.City}}，{{OtherUser.Location.Country}}</span></li>
                        <!-- .userName 有 .otherUser , 僅顯示人名部分 (Rock stone) ; 沒有 .otherUser , 會顯示"我"+"人名" (我Rock stone) -->
						<li class="btnPad">
                            <!-- .btnPad 有 .otherUser , 僅顯示"成交"按鈕 ; 沒有 .otherUser 時, 則顯示"更改交換"按鈕 -->
							<a class="btn_o btn_change" @click="openChange()">更改交換</a>
							<a class="btn_g btn_deal"><i><img src="../../../static/images/icon_deal_w.png" alt=""></i>成交</a>
						</li>
					</ul>
				</div>
				<div class="infoPad_plus">
					<dl>
						<dt class="pd_block action"> <!-- .pd_block隱藏, .pd_block.action 顯示 -->
							<ul class="clearfix itemImg">
								<li class="lazyload big" :style="{ backgroundImage:`url(${Item1.PictureUrl})`}" v-if="Item1">
									<span class="itResize"></span><span class="openInfo"></span><i class="btn_info"></i>
								</li>
								<li class="lazyload" :style="{ backgroundImage:`url(${Item2.PictureUrl})`}" v-if="Item2">
									<span class="itResize"></span><span class="openInfo"></span><i class="btn_info"></i>
								</li>
								<li class="lazyload" :style="{ backgroundImage:`url(${Item3.PictureUrl})`}" v-if="Item3">
									<span class="itResize"></span><span class="openInfo"></span><i class="btn_info"></i>
								</li>
							</ul>
                        </dt>
                        <dd>
                            <ul class="editPad free">
                                <!-- 假如商品為免費索取, .editPad.free + .action 即顯示本區塊 -->
                                <li>
                                    <i><img src="../../../static/images/icon_itrm_free.svg" alt=""></i><p>免費索取</p>
                                </li>
                            </ul>
                        </dd>
						<dd class="itInfoPad"> <!-- .itInfoPad 隱藏, .itInfoPad.action 顯示 -->
							<ul class="itInfo" v-if="this.Item1 != undefined">
								<li><span class="btn_closePop"></span></li>
								<li><h2>{{this.Item1.ProductName}}</h2></li>
								<li><p>{{this.Item1.Description}}</p></li>
								<li class="itemTag" v-if="Item1.Tags"><a>{{Item1.Tags[0]}}</a></li>
								<li>
									<h3>交貨細節</h3>
									<p>{{this.Infos1[0]}}</p>
								</li>
							</ul>
							<ul class="itInfo" v-if="this.Item2 != undefined">
								<li><span class="btn_closePop"></span></li>
								<li><h2>{{this.Item2.ProductName}}</h2></li>
								<li><p>{{this.Item2.Description}}</p></li>
								<li class="itemTag" v-if="Item2.Tags"><a>{{Item2.Tags[0]}}</a></li>
								<li>
									<h3>交貨細節</h3>
									<p>{{this.Infos2[0]}}</p>
								</li>
							</ul>
							<ul class="itInfo" v-if="this.Item3 != undefined">
								<li><span class="btn_closePop"></span></li>
								<li><h2>{{this.Item3.ProductName}}</h2></li>
								<li><p>{{this.Item3.Description}}</p></li>
								<li class="itemTag" v-if="Item3.Tags"><a>{{Item3.Tags[0]}}</a></li>
								<li>
									<h3>交貨細節</h3>
									<p>{{this.Infos3[0]}}</p>
								</li>
							</ul>
						</dd>
						<dd v-if="Offer.OfferMoney">
							<ul class="editPad price action"> <!-- .editPad 隱藏, .editPad.action 顯示 -->
								<li><p><b>+</b>價格</p></li>
								<li>
									<i><img src="../../../static/images/icon_addmoney_w.png" alt=""></i><p>{{Offer.OfferMoney.Type}} {{Offer.OfferMoney.Value}}</p>
								</li>
							</ul>
						</dd>
						<dd v-if="Offer.OfferService != ''">
							<ul class="editPad action"> <!-- .editPad 隱藏, .editPad.action 顯示 -->
								<li><p><b>+</b>服務</p></li>
								<li>
									<i><img src="../../../static/images/icon_addserv_w.png" alt=""></i><p>{{Offer.OfferService}}</p>
								</li>
							</ul>
						</dd>
						<dd>
							<ul>
								<li class="timer"><span>53分鐘前</span></li>
							</ul>
						</dd>
					</dl>
				</div>
				<div class="infoPad infoPad_plus">
					<dl class="CG_scorll">
						<dd>
							<ul class="whisperPad done">
								<li>悄悄話來交換</li>
								<li>
									<dl>
										<dt class="swapPad">
											<span class="addImg btn_addImg"></span>
											<h3>按這裡提交換</h3>
											<h4>安全交易提醒</h4>
											<p>為何保障您的權益，建議您在此進行對話，提醒您再進行交易時請務必確認交易內容。若您使用第三方軟體溝通我們將無法為您記錄完整的交易過程，請協助我們保障您權益。</p>
										</dt>
										<dd class="wMsgPad CG_scorll_auto">
											<div class="msgMask">
												<div v-for="comment in Comment">
												<div class="otherUserMsg" v-if="comment.AccountID != User.ID">
													<span class="userPic"><a href="menu_u_myitem_other.html?j"><img :src="comment.AvatarUrl" alt=""></a></span>
													<p class="msgBlock" v-if="(comment.Comment).indexOf('.jpg') == -1 ">
														<span>{{comment.Comment}}</span><i class="date">{{((comment.CreateDate).split('.')[0]).replace("T","     ")}}</i>
													</p>
													<p class="msgBlock" v-if="(comment.Comment).indexOf('.jpg') > -1">
														<span><img :src="comment.Comment"></span><i class="date">{{((comment.CreateDate).split('.')[0]).replace("T","     ")}}</i>
													</p>
												</div>
												<div class="myMsg" v-if="comment.AccountID == User.ID">
													<p class="msgBlock" v-if="(comment.Comment).indexOf('.jpg') == -1 ">
														<span>{{comment.Comment}}</span><i class="date">{{((comment.CreateDate).split('.')[0]).replace("T","     ")}}</i>
													</p>
													<p class="msgBlock" v-if="(comment.Comment).indexOf('.jpg') > -1 ">
														<span><img :src="comment.Comment"></span><i class="date">{{((comment.CreateDate).split('.')[0]).replace("T","     ")}}</i>
													</p>
												</div>
												<!-- <div class="otherUserMsg">
													<span class="userPic"><a href="menu_u_myitem_other.html?j"><img src="../../../static/images/ws_user_img_6.png" alt=""></a></span>
													<p class="msgBlock">
														<span>請問1600元可以換嗎？</span><i class="date">2017/10/27 19：55</i>
													</p>
												</div>
												<div class="myMsg">
													<p class="msgBlock">
														<span>嗯！可以啊～那要怎麼換？</span><i class="date">2017/10/27 19：55</i>
													</p>
												</div>
												<div class="otherUserMsg">
													<span class="userPic"><a href="menu_u_myitem_other.html?j"><img src="../../../static/images/ws_user_img_6.png" alt=""></a></span>
													<p class="msgBlock">
														<span>你有郵寄服務嗎？這東西有點大！</span><i class="date">2017/10/27 19：58</i>
													</p>
												</div>
												<div class="myMsg">
													<p class="msgBlock">
														<span>可以喔！但是運費需要由你這邊負擔</span><i class="date">2017/10/27 19：59</i>
													</p>
												</div>
												<div class="otherUserMsg">
													<span class="userPic"><a href="menu_u_myitem_other.html?j"><img src="../../../static/images/ws_user_img_6.png" alt=""></a></span>
													<p class="msgBlock">
														<span>嗯嗯！好的沒問題</span><i class="date">2017/10/27 20：15</i>
													</p>
												</div> -->
												</div>
											</div>
											<span class="goTop"></span>
										</dd>
										<dd>
											<span class="btn_img">
												<label for="sendImg"></label>
												<input type="file" id="sendImg" @change="onFileChanged">
											</span>
											<input type="text" name="" value="" placeholder="我想說..." v-model="privateMessage">
											<span class="btn_o" @click="sendComment()"></span>
										</dd>
									</dl>
								</li>
							</ul>
						</dd>
					</dl>
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


	<!-- Footer END -->
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
	props:['id'],
	data(){
		return{
			User:{},
			Offer:{},
			OtherUser:{},
			Item:{},
			Item1:{},
			Item2:{},
			Item3:{},
			Infos1:"",
			Infos2:"",
			Infos3:"",
			Comment:{},
			privateMessage:"",
			Product:{},
			changeOffer:{
              Item:[],
              OfferMoney:{
                  Type:"",
                  Value:""
              },
              OfferService:""
          },
			changeItem:[],
			PicInfo:{
        FileName:"",
        FileContent:""
      },
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
	created(){
		this.getUser();
		this.getDetail();
		this.getComment();
	},
	methods:{
		async getUser(){
				this.User = await api.get('User',localStorage.getItem('login_token'),'')
				this.Item = await api.get('Product',localStorage.getItem('login_token'),"&ownerID=" + this.User.ID + "&filterDate=1" )
				this.OtherUser = await api.get('User/' + this.id,localStorage.getItem('login_token'),'')
				console.log(this.OtherUser)				
        if(this.User.ID == this.id){
					$('.btn_change').addClass("action");
				}
				else{
					$('.btn_deal').addClass("action");
				}
		},
		async getDetail(){
				this.Offer = await api.get('Message',localStorage.getItem('login_token'),'&productID='+ this.$route.query.ProductID + '&accountID=' + this.id)
				console.log(this.Offer)
				this.Item1 = this.Offer.Offer[0]				
				this.Item2 = this.Offer.Offer[1]
				this.Item3 = this.Offer.Offer[2]
				if(this.Item1 != undefined){
					this.Product = await api.get('Product/'+ this.Item1.ProductID,localStorage.getItem('api_token'),'')
					this.Item1.ProductName = this.Product.ProductName
					this.Item1.Description = this.Product.Description
					this.Item1.Tags = this.Product.Tags
					this.Infos1 = this.Product.Infos
				}
				if(this.Item2 != undefined){
					this.Product = await api.get('Product/'+ this.Item2.ProductID,localStorage.getItem('api_token'),'')
					this.Item2.ProductName = this.Product.ProductName
					this.Item2.Description = this.Product.Description
					this.Item2.Tags = this.Product.Tags
					this.Infos2 = this.Product.Infos
				}
				if(this.Item3 != undefined){
					this.Product = await api.get('Product/'+ this.Item3.ProductID,localStorage.getItem('api_token'),'')
					this.Item3.ProductName = this.Product.ProductName
					this.Item3.Description = this.Product.Description
					this.Item3.Tags = this.Product.Tags
					this.Infos3 = this.Product.Infos
				}
		},
		async sendComment(){
			api.putJSON('Message',JSON.stringify(this.privateMessage),localStorage.getItem('login_token'),"&msgID=" + this.$route.query.MsgID)
			this.Comment = await api.get('Message',localStorage.getItem('login_token'), "&msgID=" + this.$route.query.MsgID)
			this.privateMessage = ""
		},
		async getComment(){
						//console.log(this.msgID)
						this.Comment = await api.get('Message',localStorage.getItem('login_token'), "&msgID=" + this.$route.query.MsgID)
						console.log(this.Comment)
						for(var i =0 ; i < this.Comment.length;i++){
								if(this.Comment[i].Comment.indexOf('.jpg') > -1){
										
								}
						}
		},
		openChange(){
          $('#popContainer').removeClass();
          $('#popContainer').stop().animate({
            top: 0
          }, 300);
          $('#popContainer').addClass('popChange');
          this.changeOffer = this.Offer
          if(this.Item1 != undefined){      
            $('.popEditSwap').find('.firstImg').css({'background-image':'url('+this.Item1.PictureUrl+')'});
            $('.popEditSwap').find('.firstImg').addClass('getImg');
            this.changeItem[0] = this.Item1.ProductID
          }
          if(this.Item2 != undefined){      
            $('.popEditSwap').find('.secondImg').css({'background-image':'url('+this.Item2.PictureUrl+')'});
            $('.popEditSwap').find('.secondImg').addClass('getImg');
            this.changeItem[1] = this.Item2.ProductID

          }      
          if(this.Item3 != undefined){      
            $('.popEditSwap').find('.thirdImg').css({'background-image':'url('+this.Item3.PictureUrl+')'});
            $('.popEditSwap').find('.thirdImg').addClass('getImg');
            this.changeItem[2] = this.Item3.ProductID
          }
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
				this.changeOffer.Items = this.changeItem 
				api.putJSON('Change',JSON.stringify(this.changeOffer),localStorage.getItem('login_token'), "&msgID=" + this.$route.query.MsgID)
    },
   onFileChanged (event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      this.PicInfo.FileName = file.name
      reader.onload =  e => { 
				this.PicInfo.FileContent = e.target.result.split(',')[1]
				api.postJSON('UploadCommentPicture',this.PicInfo,localStorage.getItem('login_token'),"&msgID=" + this.$route.query.MsgID) 
				
			}
			//this.Comment = await api.get('Message',localStorage.getItem('login_token'), "&msgID=" + this.$route.query.MsgID)
			reader.readAsDataURL(file);   
    }
	},
  mounted() {
		
    setTimeout(() => {
      var element = document.getElementById("body_class");
      element.removeAttribute("class");
      element.classList.add("item", "noSearchPage", "swap");

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
      // var $itTips = $('.itTips');
      // $itTips.click(function () {
      //   $itTips.toggleClass('action');
      //   $itInfo.eq(1).toggleClass('action');
      //   if ($itTips.hasClass('action')) {
      //     $itTips.text('less');
      //   } else {
      //     $itTips.html('more<i></i><i></i><i></i>');
      //   }
      // });

      // Yep, that's it!
      //$('#scene').parallax();
      /* item_detail 物品細節 */
      var $itemImg = $('.itemImg'),
        imgCont = $itemImg.find('.imgCont'),
        $imgList = $itemImg.find('.imgList'),
        $itInfo = $('.itemTitle').find('li'),
        $itInfoH = $itInfo.eq(1).height() + 'px',
        $itMaxH = $itInfo.eq(1).css('max-height'),
        $btn_like = $('.btn_like'),
        $infoPad = $('.conBlock.infoBlock').find('.infoPad'),
        $infoPadH = $infoPad.eq(0).height(),
        $btnPadH = $('.btnPad').outerHeight(true);
      $infoPad.eq(1).css({
        'min-height': $infoPadH
      });
      $infoPad.eq(1).find('dl').css({
        // 'height': $infoPadH - $btnPadH
      });
      var btnWhi = $('.btnPad').find('.btn_whisper'),
        whisperPad = $('.whisperPad'),
        whGoTop = whisperPad.find('.goTop'),
        closeWhBt = whisperPad.find('.btn_closePop');
      btnWhi.click(function () {
        whisperPad.animate({
          'left': 0,
          'opacity': '1'
        }, 300);
      });
      whGoTop.click(function () {
        $('.wMsgPad').scrollTop(0);
      });
      closeWhBt.click(function () {
        whisperPad.animate({
          'left': -110 + '%',
          'opacity': '0'
        }, 300);
      });
      if ($itInfoH < $itMaxH) {
        if ($itTips == true) {
          $itTips.remove();
        }
      } else {
        $itInfo.eq(1).append('<span class="itTips">more<i></i><i></i><i></i></span>');
      }


      $(document).ready(function () {
        $('.btn_deal').click(function(){
                $('#popContainer').removeClass();
				$('#popContainer').stop().animate({top : 0}, 300);
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
			// 	});
			// 			//提出交換
      //       var $imgBox = $('.popEditSwap').find('.btn_imgBox'),
			// 	$picList = $('.btn_choosePic'),
      //           $upload = $('.btn_upload'),
      //           btnInd,
      //           $popUpload = $('.popImgList').find('.btn_upload'),
      //           $popAddImg = $('.popImgList').find('.addImg'),
      //           $uploadW;
			// //點提出物品框框,出現圖片清單
			// $imgBox.click(function(){
			// 	btnInd = $(this).index('.btn_imgBox');
			// 	$('#popContainer').removeClass('popShare');
			// 	$('#popContainer').removeClass('popReport');
			// 	$('#popContainer').removeClass('popDel');
			// 	$('.popImgList').stop().animate({top : 0}, 300);
      //           $('#popContainer').addClass('popChooseImg');
      //           $uploadW = $popAddImg.eq(1).outerWidth();
      //           $popAddImg.css({'height': $uploadW});
      //       });
            
			// $picList.click(function(){
			// 	var pInd = $(this).index('.btn_choosePic');
			// 	//橘色邊框
			// 	$picList.eq(pInd).addClass('action').siblings().removeClass('action');
			// 	//取得點選的圖片連結
			// 	var img = $picList.eq(pInd).find('img').attr('src');
			// 	console.log(img);
			// 	//圖片清單消失
			// 	$('.popImgList').stop().animate({top : -100 + 'vh'}, 300);
			// 	$('#popContainer').removeClass('popChooseImg');
			// 	//將圖片匯入當下的提出物品框框
			// 	$imgBox.eq(btnInd).css({'background-image':'url('+img+')'});
			// 	$imgBox.eq(btnInd).addClass('getImg');
			});


			// =====商品圖.商品資訊設定================ //
			var $btnInfo = $('.pd_block').find('.btn_info'),
				$infoPad = $('.infoPad_plus'),
				$itInfoPad = $('.itInfoPad'),
				$itInfo = $itInfoPad.find('.itInfo'),
				$itPad = $('.lazyload'),
				$itLen = $itPad.length,
				$itBig = $itPad.eq(0).find('span'),
				$itClose = $itInfo.find('.btn_closePop');
			// 基本尺寸設定
			if($itLen == 1){
				$itPad.css({"left":"0", "top":"0", "width": "100%", "height": "100%"});
				$('.pd_block ul').css({"height": "482px"});
			}else if($itLen == 2){
				$itPad.eq(1).css({"left":"66.66%", "top":"0", "height": "100%"});
			}
			// 商品圖尺寸.位置變化
			$(".pd_block li .itResize").click(function(){
				closeInfo();
				resizeImg($(this));
			});
			var resizeImg = function(obj){
				var $this = obj.parent();
				var index = $this.index();
				if(index == 0){
					$this.addClass('big').css({"left":"0", "top":"0", "height": "100%", "transition":"all 0.25s linear"});
					$this.next(0).css({"left":"66.66%", "top":"0", "height": "50%", "transition":"all 0.25s linear"});
					$this.next().next().css({"left":"66.666%", "top":"50%", "height": "50%", "transition":"all 0.25s linear"});
					$this.siblings().removeClass('big');
					return false;
				}
				if(index == 1){
					$this.prev().css({"left":"66.66%", "top":"0%", "height": "50%", "transition":"all 0.25s linear"});
					$this.next().css({"left":"66.66%", "top":"50%", "height": "50%", "transition":"all 0.25s linear"});
					$this.addClass('big').css({"left":"0", "top":"0", "height": "100%", "transition":"all 0.25s linear"});
					$this.siblings().removeClass('big');
					return false;
				}
				if(index == 2){
					$this.prev().prev().css({"left":"66.66%", "top":"0", "height": "50%", "transition":"all 0.25s linear"});
					$this.prev().css({"left":"66.66%", "top":"50%", "height": "50%", "transition":"all 0.25s linear"});
					$this.addClass('big').css({"left":"0", "top":"0", "height": "100%", "transition":"all 0.25s linear"}) ;
					$this.siblings().removeClass('big');
					return false;
				}
			}
			// 點大圖 , 出現物品資訊
			$(".openInfo").click(function(){
				var $this = $(this).parent('li');
				var bIndex = $this.index();
				var $itInfo = $('.itInfo');
				$itInfoPad.addClass('action');
				$infoPad.addClass('action');
				$itInfo.eq(bIndex).addClass('action').siblings().removeClass('action');
				return false;
			});
			// 點物品照片上的 i , 出現物品資訊
			$btnInfo.click(function(){
				resizeImg($(this));
				var ind = $(this).index('.btn_info');
				$itInfoPad.addClass('action');
				$infoPad.addClass('action');
				$itInfo.eq(ind).addClass('action').siblings().removeClass('action');
			});
			// 點 x 物品資訊消失
			$itClose.click(function(){
				$itInfoPad.removeClass('action');
				$itInfo.removeClass('action');
				$infoPad.removeClass('action');
			});
			var closeInfo = function(){
				$itInfoPad.removeClass('action');
				$itInfo.removeClass('action');
				$infoPad.removeClass('action');
			}
     })


      function deal() {
        $('.infoPad').find('.btn_deal').fadeOut(100);
        $('.infoPad').find('.btn_whisper').css({
          'width': 90 + '%'
				});
				}
		
		function check(){
            $('#popContainer').removeClass();
            $('#popContainer').stop().animate({top : 0}, 300);
            $('#popContainer').addClass('popCheck');
      }
    }, 0)
  }
}


</script>