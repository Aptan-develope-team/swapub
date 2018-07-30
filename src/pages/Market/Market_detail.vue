<template>
<div>
<!-- <body class="item noSearchPage itemDetail"> -->
	<!-- Header -->
	<app-header></app-header>
	<!-- Header END -->
	<div id="main">
		<div class="breadcrumb">
			<i>Swapub</i><i> &#62; 交換</i><i> &#62; 傢俱</i><i> &#62; 商品細節</i><i></i>
		</div>
		<div class="content">
			<div class="conBlock infoBlock clear">
				<div class="infoPad">
					<dl>
						<dt>
							<ul class="userInfo">
								<li class="userPic"><router-link to='menu_u_myitem'><img :src="this.imgUrl" alt=""></router-link></li>
								<li class="userDetail"><h3 class="userName"><i v-if="isShow == true">我(</i>{{this.user.Name}}<i v-if="isShow == true">)</i></h3><span class="userAdd">{{this.location.City}}，{{this.location.Country}}</span></li>
								<!-- <li class="timer"><span>53分鐘前</span></li> -->
							</ul>
						</dt>
						<dd>
							<ul class="itemImg CGt">
								<li class="imgCont"><img :src="(this.productImg)[0]" alt=""></li>
								<li class="imgList action"><img :src="(this.productImg)[0]" alt=""></li>
								<li class="imgList" v-for="(img,index) in productImg" v-if="index > 0"><img :src="img" alt=""></li>
								<!-- <li class="imgList vedio"><img src="../../../static/images/img_item_02.jpg" alt=""></li> -->
							</ul>
						</dd>
						<dd class="editPad">
							<ul>
								<li class="btn_edit"><router-link :to="{name:'Market_edit',params: { id: this.id}} "><p>編輯</p></router-link></li>
								<li class="btn_del"><p>刪除</p></li>
								<li class="btn_share"><p>分享</p></li>
							</ul>
						</dd>
						<dd class="editPad otherUserMD">
							<ul>
								<li class="btn_good" @click="postLike()"><p>讚</p></li>
								<li class="btn_like" @click="postGood()"><p>追蹤</p></li>
								<li class="btn_share"><p>分享</p></li>
								<li class="btn_report"><p>檢舉</p></li>
							</ul>
						</dd>
						<dd class="timer"><span>53分鐘前</span></dd>
					</dl>
				</div>
				<div class="infoPad">
					<dl class="CG_scorll">
						<dt>
							<ul class="itemTitle">
								<li><h1>{{this.resData.ProductName}}</h1></li>
								<li>
									<!-- <p>產品概念 /<br>利用紙板可折疊的特性，作品以連續三角塊面拼接，透過不同角度的光影折射，來展現動物造型的力與美。</p>
									<p>產品功能 /居家擺飾、書擋、門擋</p>
									<p>尺寸：(W)27cm×(H)20.5cm×(D)10 cm<br>材質：poly</p>
									<p>-----------------------------------------------------------</p>
									<p>※寄件至中國大陸注意事項：<br>
									因順豐速運寄件要求，結帳時請務必備註收件人的"公司名稱"，我們會以"到付"方式寄出。</p>
									<p>※國際運費注意事項：<br>
										寄送其他國家的運費，請先詢問設計師，我們會協助估算最優惠的寄送方式。<br>
										確認好實際運費之後，我們會另開運費專屬賣場給您下單付款。
									</p> -->
									{{this.resData.Description}}
								</li>
							</ul>
						</dt>
						<dd>
							<ul class="itemInfo">
								<li class="itemTag" v-if="this.resData.Tags"><a>{{this.resData.Tags[0]}}</a><a></a></li>
								<li><span>我想要交換到的物品</span><p v-if="this.Data.Data">{{this.Data.Data[0]}}</p></li>
                <li><p>TWD <i>4500</i></p></li>
								<li><span>交貨細節</span><p>郵寄&nbsp;&nbsp;&nbsp;&nbsp;NT$70<br>全家取貨 (出貨後48hr店到店)&nbsp;&nbsp;&nbsp;&nbsp;NT$60<br>7-11取貨 (出貨後48hr店到店)&nbsp;&nbsp;&nbsp;&nbsp;NT$60</p></li>
							</ul>
						</dd>
						<dd class="btnPad">
							<ul>
								<li><a class="btn_o btn_whisper" @click="openComment()"><i><img src="../../../static/images/icon_swap_w.png" alt=""></i>悄悄話來交換</a></li>
							</ul>
						</dd>
						<dd>
							<ul class="whisperPad" style="height:690px">
								<li>悄悄話來交換<span class="btn_closePop" ></span></li>
								<li>
									<dl>
										<dt class="swapPad">
											<span class="addImg btn_addSwap action"></span>
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
													<p class="msgBlock" v-if="(comment.Comment).indexOf('.jpg') == -1 ">
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
											<span class="goTop"></span>
										</dd>
										<dd>
											<span class="btn_img">
												<label for="sendImg"></label>
												<input type="file" id="sendImg" @change="onFileChanged">
											</span>
											<input type="text" name="" value="" placeholder="我想說..." v-model="privateMessage" >
											<span class="btn_o" @click="sendComment()"></span>
										</dd>
									</dl>
								</li>
							</ul>
						</dd>
					</dl>
				</div>
			</div>
			<div class="conBlock socialBlock">
				<div class="btnPad clear">
					<span class="action">留言<i>({{this.messageNum}})</i></span>
					<span>交換<i>({{this.Exchange.length}})</i></span>
				</div>
				<div class="socialPad">
					<dl>
						<dt class="socialList msgPad action">
							<ul>
								<li>
									<span class="userPic"><a href="menu_u_myitem.html?j"><img :src="this.userImg" alt=""></a></span>
                  <p><input type="text" name="" value="" placeholder="我想說..." v-model="message"></p>
									<a class="btn_sentMsg btn_o" @click="sendMessage()"></a>
								</li>
								<li v-for="message in messageList">
									<span class="userPic"><a href="menu_u_myitem_other.html?j"><img :src="message.AvatarUrl" alt=""></a></span>
									<span class="date">{{((message.CreateDate).split('.')[0]).replace("T","     ")}}</span>
                  <p class="userName"><a href="menu_u_myitem_other.html?j">{{message.Name}}</a></p>
									<p>{{message.Message}}</p>
								</li>
								<!-- <li>
									<span class="userPic"><a href="menu_u_myitem_other.html?j"><img src="../../../static/images/ws_user_img_2.png" alt=""></a></span>
								  <span class="date">2017/10/27 19:55</span>
                  <p class="userName"><a href="menu_u_myitem_other.html?j">Victor Wang</a></p>
									<p>請來我的看看!</p>
								</li>
								<li>
									<span class="userPic"><a href="menu_u_myitem_other.html?j"><img src="../../../static/images/ws_user_img_3.png" alt=""></a></span>
																		<span class="date">2017/10/27 19:55</span>
                  <p class="userName"><a href="menu_u_myitem_other.html?j">Amy Tesi</a></p>
									<p>有更新,看看!</p>
								</li>
								<li>
									<span class="userPic"><a href="menu_u_myitem_other.html?j"><img src="../../../static/images/ws_user_img_2.png" alt=""></a></span>
																	<span class="date">2017/10/27 19:55</span>
                	<p class="userName"><a href="menu_u_myitem_other.html?j">Victor Wang</a></p>
									<p>請來我的看看!</p>
								</li>
								<li>
									<span class="userPic"><a href="menu_u_myitem_other.html?j"><img src="../../../static/images/ws_user_img_3.png" alt=""></a></span>
																	<span class="date">2017/10/27 19:55</span>
                	<p class="userName"><a href="menu_u_myitem_other.html?j">Amy Tesi</a></p>
									<p>有更新,看看!</p>
								</li> -->
							</ul>
						</dt>
						<dd class="socialList swapPad">
							<ul>
								<li class="swapList" v-for="exchange in Exchange">
									<span class="userPic"><a href="menu_u_myitem_other.html?j"><img :src="exchange.AvatarUrl" alt=""></a></span>
									<span class="date">{{((exchange.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<span class="openSwap action"></span>
									<p class="userName"><a href="menu_u_myitem_other.html?j">{{exchange.Name}}</a></p>
									<div v-if="exchange.Offer != '' && exchange.Offer != undefined">
										<p class="swapImg" v-if="exchange.Offer.length == 1"><img :src="exchange.Offer[0].PictureUrl" alt=""></p>
										<p class="swapImg" v-if="exchange.Offer.length == 2"><img :src="exchange.Offer[0].PictureUrl" alt="">+<img :src="exchange.Offer[1].PictureUrl" alt=""></p>
										<p class="swapImg" v-if="exchange.Offer.length == 3"><img :src="exchange.Offer[0].PictureUrl" alt="">+<img :src="exchange.Offer[1].PictureUrl" alt="">+<img :src="exchange.Offer[2].PictureUrl" alt=""></p>
									</div>
									<p class="swapAdd" v-if="exchange.OfferMoney != '' && exchange.OfferMoney != undefined">+<img src="../../../static/images/icon_addmoney.png" alt=""> {{exchange.OfferMoney.Type}} {{exchange.OfferMoney.Value}}</p>
									<p class="swapAdd"v-if="exchange.OfferService != '' && exchange.OfferService != undefined ">+<img src="../../../static/images/icon_addserv.png" alt=""> {{exchange.OfferService}}</p>
									<p v-if="exchange.ChangeID == '000000000000000000000000'"><b>悄悄話來交換</b></p>
								</li>
								<!-- <li class="swapList">
									<span class="userPic"><a href="menu_u_myitem_other.html?j"><img src="../../../static/images/ws_user_img_7.png" alt=""></a></span>
									<span class="date">2017/10/27 18:07</span>
									<span class="openSwap action"></span>
									<p class="userName"><a href="menu_u_myitem_other.html?j">皮梅 陳</a></p>
									<p><b>悄悄話來交換</b></p>
								</li>
								<li class="swapList">
									<span class="userPic"><a href="menu_u_myitem_other.html?j"><img src="../../../static/images/ws_user_img_8.png" alt=""></a></span>
									<span class="date">2017/10/27 18:07</span>
									<span class="openSwap action"></span>
									<p class="userName"><a href="menu_u_myitem_other.html?j">Su Hau Kuo</a></p>
									<p class="swapImg"><img src="../../../static/images/img_swapPad_02.jpg" alt="">+<img src="../../../static/images/img_swapPad_03.jpg" alt=""></p>
									<p class="swapAdd">+<img src="../../../static/images/icon_addmoney.png" alt=""> TWD 1000</p>
									<p class="swapAdd">+<img src="../../../static/images/icon_addserv.png" alt=""> 電玩展跑腿買遊戲</p>
								</li>
								<li class="swapList">
									<span class="userPic"><a href="menu_u_myitem_other.html?j"><img src="../../../static/images/ws_user_img_8.png" alt=""></a></span>
									<span class="date">2017/10/27 18:07</span>
									<span class="openSwap action"></span>
									<p class="userName"><a href="menu_u_myitem_other.html?j">Su Hau Kuo</a></p>
									<p class="swapImg"><img src="../../../static/images/img_swapPad_02.jpg" alt="">+<img src="../../../static/images/img_swapPad_03.jpg" alt=""></p>
									<p class="swapAdd">+<img src="../../../static/images/icon_addmoney.png" alt=""> TWD 1000</p>
									<p class="swapAdd">+<img src="../../../static/images/icon_addserv.png" alt=""> 電玩展跑腿買遊戲</p>
								</li>
								<li class="swapList">
									<span class="userPic"><a href="menu_u_myitem_other.html?j"><img src="../../../static/images/ws_user_img_7.png" alt=""></a></span>
									<span class="date">2017/10/27 18:07</span>
									<span class="openSwap action"></span>
									<p class="userName"><a href="menu_u_myitem_other.html?j">皮梅 陳</a></p>
									<p><b>悄悄話來交換</b></p>
								</li> -->
							</ul>
						</dd>
						<dd class="showMore"><p class="action">顯示更多</p></dd>
					</dl>
				</div>
			</div>
      <div class="conBlock suggestBlock">
				<h4>這些東西也很棒</h4>
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
		<div class="popContent popEditSwap">
			<div class="btn_closePop"></div>
			<h3>您可以提出物品、價錢、服務等組合來交換</h3>
			<form>
				<div class="popChoImg">
					<h4>提出物品</h4>
					<p>最多可以提出三個物品</p>
					<div class="imgBoxPad clear">
						<span class="addImg btn_imgBox"></span>
						<span class="addImg btn_imgBox"></span>
						<span class="addImg btn_imgBox"></span>
					</div>
				</div>
				<div class="popAddPrice">
					<h4>給個價錢</h4>
					<p><b>+</b><i></i>
						<span class="currency btn_g"><i>TWD</i>
                            <span class="curBlock"><b>AED</b><b>AUD</b><b>CAD</b><b>CNY</b><b>EUR</b><b>HKD</b><b>JPY</b><b>KRW</b><b>TWD</b><b>USD</b></span>
                        </span>
						<input type="number" min="0" v-model="Change.OfferMoney.Value"></p>
				</div>
				<div class="popAddServ">
					<h4>提供服務</h4>
					<p><b>+</b><i></i><input type="text" placeholder="例：教我彈烏克麗麗" v-model="Change.OfferService"></p>
				</div>
				<div class="popFree"><p><input type="checkbox" id="checkFree">我能免費索取？</p></div>
				<div class="popCheckPad">
					<!-- <input type="button" class="btn_w btn_cancel" value="取消"> -->
					<input type="submit" class="btn_o btn_sure" value="送出" @click="postOffer()">
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
	props: ["id"],
	data() {
    return {
			resData:{},
			user:{},
			location:{},
			productImg:[],
			User:{},
			Exchange:{},
			TrackCount:{},
			Smart:{},
			Like:{},
			imgUrl:"",
			messageNum:"",
			messageList:{},
			message:"",
			userImg:"",
			isShow:"",
			Data:{},
			Item:{},
			Change:{
				Items:[],
				OfferMoney:{
					Type:"TWD",
					Value:""
				},
				OfferService:""
			},
			checkMsgID:{},
			checkUser:{},
			msgID:"",
			Comment:{},
			privateMessage:"",
			PicInfo:{
        FileName:"",
        FileContent:""
      },
    }
  },
  created(){
			this.getProductInfo();
			this.getMessageNum();
			this.getMessageList();
			this.getExchange();
			//this.getSmart()
			this.getProductTrackCount();
			this.getComment()
  },
  methods:{
	  async getProductInfo(){
				this.getToken();  
				this.resData = await api.get('Product/'+ this.id,localStorage.getItem('api_token'),'')
				this.Data = this.resData.Wants
				this.user = this.resData.Owner
				this.location = this.user.Location
				this.imgUrl = api.CdnUrl + "/Uploads/User/" + this.user.ID  + "/Avatar.jpg"
				this.productImg = this.resData.PictureUrls
				if(localStorage.getItem('login_token') != "" && localStorage.getItem('login_token') != null){
						this.User = await api.get('User',localStorage.getItem('login_token'),'')	
						this.userImg = api.CdnUrl + "/Uploads/User/" + this.User.ID  + "/Avatar.jpg"
						this.Item = await api.get('Product',localStorage.getItem('login_token'),"&ownerID=" + this.User.ID + "&filterDate=1" )
				}
				//this.getSmart(this.resData.ProductName)
				$('.btn_good').attr('data-good',this.resData.LikeCount);
				if(this.resData.IsTracked == true){
					$('.btn_like').addClass("action");
				}
				if(this.resData.LikeStatus == true){
					$('.btn_good').addClass("action");
				}
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
				console.log(this.resData)

		},
		async getMessageNum(){
				this.messageNum = await api.get('PublicMessage',localStorage.getItem('api_token'),'&productID=' + this.id)
		},
	  async getToken(){
		   await api.getToken()
		},
		async sendMessage(){
			 await api.postJSON('PublicMessage',JSON.stringify(this.message),localStorage.getItem('api_token'),'&productID=' + this.id)
			 this.getMessageNum();
			 this.getMessageList();
			 this.message=""
		},
		async getMessageList(){
				this.messageList = await api.get('PublicMessage',localStorage.getItem('api_token'),'&productID=' + this.id + "&maxtime=1")
		},
		async getExchange(){
				this.Exchange = await api.get('Message',localStorage.getItem('api_token'),'&productID=' + this.id )
				console.log(this.Exchange)
		},
		async getSmart(ProductName){
				this.Smart = await api.get('search_product_es',localStorage.getItem('login_token'),'&keyword='+ ProductName + "&skip=0")
					console.log(this.Smart)
		},
		async getProductTrackCount(){
				this.TrackCount = await api.get('GetProductTrackCount',localStorage.getItem('api_token'),'&productID=' + this.id)
				$('.btn_like').attr('data-like',this.TrackCount.Value);
				console.log(this.TrackCount)
		},
		async postLike(){
				this.Like = await api.put('Product',"",localStorage.getItem('api_token'),'&productID=' + this.id)
				$('.btn_good').attr('data-good',this.Like.LikeCount);
		},
		postGood(){
				api.postJSON('Track',"1",localStorage.getItem('api_token'),"")
		},
		async deleteItem(){
				api.delete('Product/'+ this.id,localStorage.getItem('login_token'),"")
				this.$router.push('/')
				location.reload()
		},
		setItem(id){
			if(this.Change.Items.length == 0){
				this.Change.Items[0] = id 
			}
			else if(this.Change.length == 1){
				this.Change.Items[1] = id 
			}
			else{
				this.Change.Items[2] = id 
			}
			console.log(this.Change.Items)
		},
		async postOffer(){
			api.postJSON('Change',JSON.stringify(this.Change),localStorage.getItem('login_token'), "&msgID=" + this.msgID)
		},
		async sendComment(){
			if(this.$route.query.MsgID != undefined){
							await api.putJSON('Message',JSON.stringify(this.privateMessage),localStorage.getItem('login_token'),"&msgID=" + this.$route.query.MsgID)
							this.privateMessage = ""
							this.Comment = await api.get('Message',localStorage.getItem('login_token'), "&msgID=" + this.$route.query.MsgID)
					
			}
			else{
							await api.putJSON('Message',JSON.stringify(this.privateMessage),localStorage.getItem('login_token'),"&msgID=" + this.msgID)
							this.privateMessage = ""
							this.Comment = await api.get('Message',localStorage.getItem('login_token'), "&msgID=" + this.msgID)			
			}

		},
		async openComment(){
			      this.checkMsgID = await api.get('Message',localStorage.getItem('login_token'),'&productID=' + this.id )
						console.log(this.checkMsgID)
						for( var i = 0 ; i < this.checkMsgID.length;i++){
							 if(this.checkMsgID[i].AccountID == this.User.ID){
								 this.msgID = this.checkMsgID[i].ID
							 }
						}
						if(this.msgID == ""){
							this.msgID = await api.postJSON('Message',"",localStorage.getItem('login_token'),'&productID=' + this.id )
						}
						//console.log(this.msgID)
						this.Comment = await api.get('Message',localStorage.getItem('login_token'), "&msgID=" + this.msgID)
						console.log(this.Comment)
		},
		async getComment(){
			  if(this.$route.query.MsgID != undefined){
						$('.whisperPad').css({'left': 0, 'opacity': '1'});
						this.Comment = await api.get('Message',localStorage.getItem('login_token'), "&msgID=" + this.$route.query.MsgID)
						console.log(this.Comment)
				}
				console.log(this.$route.query.MsgID)

		},
	  onFileChanged (event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      this.PicInfo.FileName = file.name
      reader.onload = e => { 
        this.imgUrl = e.target.result
				this.PicInfo.FileContent = e.target.result.split(',')[1]
			  api.postJSON('UploadCommentPicture',this.PicInfo,localStorage.getItem('login_token'),"&msgID=" + this.$route.query.MsgID)    

			}
			reader.readAsDataURL(file); 

    }
		
	},
	updated(){
		  setTimeout(() => {
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
        //'height': $infoPadH - $btnPadH
      });
      $btn_like.click(function () {
        $(this).toggleClass('action');
      });
      $('.backTop').click(function () {
        $('html,body').animate({
          scrollTop: $('#main').offset().top
        }, 800, 'easeOutCirc');
      });

      //物品照片切換
      $imgList.click(function () {
        var imgInd = $(this).index('.imgList'),
          img = $(this).find('img').attr('src');
        imgCont.find('img').attr('src', img);
        $(this).addClass('action').siblings('.imgList').removeClass('action');
      });
      $('.btn_cancel').click(function () {
        $('#popContainer').stop().animate({
          top: -100 + 'vh'
        }, 500);
			});
			//物品照片切換
	$imgList.hover(function(){
		var imgInd = $(this).index('.imgList'),
			img = $(this).find('img').attr('src');
		imgCont.find('img').attr('src', img);
		if($(this).hasClass('vedio')){
			imgCont.find('.vedioMD').addClass('action');
		}else{
			imgCont.find('.vedioMD').removeClass('action');
		}
		$(this).addClass('action').siblings('.imgList').removeClass('action');
	});
	$('.vedioMD').click(function(){
		$(this).toggleClass('pause');
	});
	//物品說明more.less
      if ($itInfoH < $itMaxH) {
        if ($itTips == true) {
          $itTips.remove();
        }
      } else {
        $itInfo.eq(1).append('<span class="itTips">more<i></i><i></i><i></i></span>');
      }
      var $itTips = $('.itTips');
      $itTips.click(function () {
        $itTips.toggleClass('action');
        $itInfo.eq(1).toggleClass('action');
        if ($itTips.hasClass('action')) {
          $itTips.text('less');
        } else {
          $itTips.html('more<i></i><i></i><i></i>');
        }
			});
			var $btn_good = $('.btn_good');
			$btn_good.click(function(){
					$('.btn_good').toggleClass('action');
			});

			//提出交換
	var $imgBox = $('.popEditSwap').find('.btn_imgBox'),
		$picList = $('.btn_choosePic'),
		btnInd=0,
		$popAddImg = $('.popImgList').find('.addImg'),
		$uploadW;
	//點提出物品框框,出現圖片清單
	$imgBox.click(function(){chooseImg($(this));});
	function chooseImg(obj){
		if($('#checkFree').prop('checked') == false){
			btnInd = obj.index('.btn_imgBox');
			$('#popContainer').removeClass('popShare');
			$('#popContainer').removeClass('popReport');
			$('#popContainer').removeClass('popDel');
			$('.popImgList').stop().animate({top : 0}, 300);
			$('#popContainer').addClass('popChooseImg');
			$uploadW = $popAddImg.eq(1).outerWidth();
			$popAddImg.css({'height': $uploadW});
		}
	}

	$picList.click(function(){
		var pInd = $(this).index('.btn_choosePic');
		$picList.eq(pInd).addClass('action').siblings().removeClass('action'); //橘色邊框
		var img = $picList.eq(pInd).find('img').attr('src'); //取得點選的圖片連結
		$('.popImgList').stop().animate({top : -100 + 'vh'}, 300); //圖片清單消失
		$('#popContainer').removeClass('popChooseImg');
		$imgBox.eq(btnInd).addClass('getImg').css({'background-image':'url('+img+')'}); //將圖片匯入當下的提出物品框框
	});

	$('.btn_closeThisPop').click(function(){
		$('.fake').stop().animate({top : -100 + 'vh'}, 500, function(){
			$('#popContainer').removeClass('popChooseImg');
			$('#popContainer').removeClass('popGuaQaC');
			//$('.fake').stop().fadeOut();
		});
	});

	if(this.$route.query.MsgID != undefined){
			$('.whisperPad').css({'left': 0, 'opacity': '1'});
	}
			
			},100)

	},
  mounted() {
		this.isShow = false

    setTimeout(() => {	
      var Gw = $(window),
        Gww = Gw.width(),
        Gwh = Gw.height(),
        Gd = $(document),
        Gdw = Gd.width(),
        Gdh = Gd.height();
      var element = document.getElementById("body_class");
      element.removeAttribute("class");
      element.classList.add("item", "noSearchPage", "itemDetail");

      $('.loadPad').animate({
        opacity: 0
      }, 1000, function () {
        $('.loadPad').css({
          'display': 'none'
        });
			});
		

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


      $(window).on('load', function () {
        if ($(window).width() > 1024) {
          var s = skrollr.init();
        }

        $('#header').find('.market').addClass('action');

      })

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
        });

        /* 悄悄話來交換 */
        //按這裡提交換
        $('.btn_addSwap').click(function () {
          $('#popContainer').removeClass();
          $('#popContainer').stop().animate({
            top: 0
          }, 300);
          $('#popContainer').addClass('addSwap');
        });
        var $imgBox = $('.popEditSwap').find('.btn_imgBox'),
          $picList = $('.btn_choosePic'),
          $upload = $('.btn_upload'),
					btnInd;


      })
    }, 100)
  }

}




</script>