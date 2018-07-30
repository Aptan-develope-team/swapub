<template>
<div>
<!-- <body class="item noSearchPage menuPage mDeal"> -->
	<!-- Header -->
	
    <app-header></app-header>
	<!-- Header END -->
	<div id="main">
		<div class="breadcrumb">
			<i>Swapub</i><i> &#62; 交換</i><i> &#62; 成交紀錄</i><i></i><i></i>
		</div>
		<div class="content">
            <h1>成交紀錄(<span>{{List.length}}</span>)</h1>
            <div class="mainBtPad CGt">
                <a class="action">全部</a>
                <a class="">履約保證金</a>
            </div>
			<div class="conBlock action">
                <ul>
                    <li class="dealBlock clear" v-for="list in List">
                        <div class="dealPad">
                            <span class="date">{{((list.UpdatedDate).split(' ')[0]).replace("T","     ")}}</span>
                            <span class="icon_deal"></span>
                            <div class="swapPad">
                                <span class="userPic checked"><router-link :to="{name:'Menu_u_myitem',params: { id: list.TargetUser.ID}}"><img :src="otherImgUrl + list.TargetUser.ID + '/Avatar.jpg'" alt=""></router-link></span>
                                <div class="itemCon_1 itemImg">
                                    <div class="cssTable">
                                        <dl>
                                            <div class="itemCon_2 cssTable">
                                                <ul v-if="list.Offer.Items">
                                                    <li><p :style="{ backgroundImage:`url(${list.Offer.Items[0].PictureUrl})`}" v-if="list.Offer.Items.length == 1 || list.Offer.Items.length == 2 || list.Offer.Items.length == 3 "></p></li>
                                                    <li v-if="list.Offer.Items < 2"><!-- 如果只有一張圖，這個li 都不要 -->
                                                        <p :style="{ backgroundImage:`url(${list.Offer.Items[1].PictureUrl})`}" v-if="list.Offer.Items.length == 2 || list.Offer.Items.length == 3 "></p>
                                                        <p :style="{ backgroundImage:`url(${list.Offer.Items[2].PictureUrl})`}" v-if="list.Offer.Items.length == 3" ></p><!-- 如果有第三張圖，要放在第二個LI 裡面 -->
                                                    </li>
                                                </ul>
                                            </div>
                                        </dl>
                                        <dl v-if="list.Offer.OfferMoney"><dt><b>+</b><i style="background-image:url(../../../static/images/icon_addmoney_w.png)"></i><span class="ovLine">{{list.Offer.OfferMoney.Type}} {{list.Offer.OfferMoney.Value}}</span></dt></dl><!-- 如果有項目，就要新增 dl > dt > 內容 -->
                                        <dl v-if="list.Offer.OfferService"><dt><b>+</b><i style="background-image:url(../../../static/images/icon_addserv_w.png)"></i><span class="ovLine">{{list.Offer.OfferService}}</span></dt></dl>
                                    </div>
                                    <router-link :to="{name:'Menu_t_deal_detail',query: { 'changeID': list.ChangeID}}"></router-link>
                                </div>
                                <p v-if="list.Offer.Items[0]">{{list.Offer.Items[0].ProductName}}</p>
                            </div>
                            <div class="swapPad">
                                <span class="userPic checked"><router-link :to="{name:'Menu_u_myitem',params: { id: User.ID}} "><img :src="UserImg" alt=""></router-link></span>
                                <div class="itemCon_1 itemImg">
                                    <div class="cssTable">
                                        <dl>
                                            <div class="itemCon_2 cssTable">
                                                <ul>
                                                    <li v-if="list.Product"><p :style="{ backgroundImage:`url(${list.Product.PictureURL})`}"></p></li>
                                                </ul>
                                            </div>
                                        </dl>
                                    </div>
                                    <router-link :to="{name:'Menu_t_deal_detail',query: { 'changeID': list.ChangeID}}"></router-link>
                                </div>
                                <p v-if="list.Product">{{list.Product.ProductName}}</p>
                            </div>
                        </div>
                        <div class="swapDetailPad">
                            <div class="guaranteeInfo clear btn_getGua">
                                <p class="guaranteePad action" @click="useBond(list.ChangeID)">我要使用履約保證金</p>
                                <p class="guaranteePad"><span class="userName">Rock stone</span>已建議使用履約保證金</p>
                                <p class="swapVal"><span class="currencyBlock">TWD</span><span class="price">9,999</span></p><i></i>
                            </div>
                            <div class="userInfo">
                                <!-- <span class="date">06/27/2017</span> -->
                                <p>姓名：Rock stone</p>
                                <p>電子信箱：<a href="mailto:rckone@gmail.com">rckone@gmail.com</a></p>
                                <p>電話：暫不提供</p>
                                <span class="btn_guarantee_qa"><i></i>何謂履約保證金</span>
                            </div>
                            <div class="dealOption">
                               <router-link :to="{name:'Market_detail',params: { id:list.Product.ProductID},query:{MsgID:list.MsgID}}" class="btn_whisper"><i></i>悄悄話</router-link>
                                <a class="btn_transport"><i></i>運送</a>
                                <a class="btn_assess"><i></i>評價</a>
                            </div>
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
	<div id="popContainer" style="top: -100vh;">
		<div class="popContent popAssessBlock">
            <div class="btn_closePop"></div>
            <form action="" method="GET">
                <h3>這次的交換你覺得如何？</h3>
                <div>
                    <ul class="dealPad clear">
                        <li class="icon_deal"></li>
                        <li class="swapPad">
                            <span class="userPic checked"><a href="menu_u_myitem_other.html?j"><img src="../../../static/images/ws_user_img_5.png" alt=""></a></span>
                            <div class="itemCon_1 itemImg">
                                <div class="cssTable">
                                    <dl>
                                        <div class="itemCon_2 cssTable">
                                            <ul>
                                                <li><p style="background-image:url(../../../static/images/mk_it_img_23.jpg)"></p></li>
                                                <li><!-- 如果只有一張圖，這個li 都不要 -->
                                                    <p style="background-image:url(../../../static/images/ws_it_img_3.jpg)"></p>
                                                    <!-- 如果有第三張圖，要放在第二個LI 裡面 -->
                                                </li>
                                            </ul>
                                        </div>
                                    </dl>
                                    <!-- 如果有項目，就要新增 dl > dt > 內容 -->
                                </div>
                            </div>
                            <p>TRWIWA手錶</p>
                        </li>
                        <li class="swapPad">
                            <span class="userPic checked"><a href="menu_u_myitem.html?j"><img src="../../../static/images/ws_user_img_4.png" alt=""></a></span>
                            <div class="itemCon_1 itemImg">
                                <div class="cssTable">
                                    <dl>
                                        <div class="itemCon_2 cssTable">
                                            <ul>
                                                <li><p style="background-image:url(../../../static/images/mk_it_img_1.jpg)"></p></li>
                                            </ul>
                                        </div>
                                    </dl>
                                    <!-- 如果有項目，就要新增 dl > dt > 內容 -->
                                    <dl><dt><b>+</b><i style="background-image:url(../../../static/images/icon_addserv_w.png)"></i><span class="ovLine">幫忙跑腿一次，任何地點</span></dt></dl>
                                </div>
                            </div>
                            <p>桌上型盆栽擺飾</p>
                        </li>
                    </ul>
                </div>
                <div class="popAssessPad">
                    <span class="userPic checked"><a href="menu_u_myitem.html?j"><img src="../../../static/images/ws_user_img_4.png" alt=""></a></span>
                    <textarea name="" id="" placeholder="請填寫評價內容"></textarea>
                    <p><b>請給予評價</b></p>
                    <div class="popAssessBtn">
                        <input type="button" class="btn_gr" value="不滿意"><input type="button" class="btn_gr" value="滿意">
                    </div>
                </div>
                <div class="popCheckPad">
                    <!-- <input type="button" class="btn_w btn_cancel" value="取消"/> -->
                    <input type="button" class="btn_o btn_sure" value="確定"/>
                </div>
            </form>
        </div>
        <div class="popContent popGua qa">
            <div class="btn_closePop"></div>
            <h3>何謂履約保證金？</h3>
            <div class="popGuaDeta">
                <p>曾經擔心受騙或換友不寄出物品嗎？Swapub了解您的困擾，現在提供了履約保證金的服務給換換們，快來看看怎麼使用吧！</p>
                <p>1. 雙方協議一定的保證金金額。</p>
                <p>2. 支付保證金時，Swapub玉山信託專戶先保管雙方的保證金。</p>
                <p>3-1. 雙方確認收到物品無誤，Swapub退回雙方保證金。</p>
                <p>3-2. 雙方支付保證金後，確認取消交易，Swapub將退回雙方保證金。</p>
                <p>4. 當您的交易有爭議時，Swapub建議您先與對方溝通，許多糾紛都可以透過溝通順利解決。</p>
                <p>4-1當溝通無法達成共識時，您可向Swapub平台提出申訴。</p>
                <p>4-2如交易任一方於收到Swapub平台之協調通知後30日內無回覆，則Swapub得將違反本服務同意書及/或Swapub會員之相關規範及/或相關法令之一方所提供之保證金支付予交易之對方作為賠償。</p>
                <p>4-3如發生異常交易狀況協調不成之情形(包含但不限於一方無法原物返還、無法確認是否違反本服務同意書及/或Swapub會員之相關規範及/或相關法令及其他Swapub平台無權代為處理之任何狀況)時，交換雙方同意Swapub得將本案爭議提交Swapub所在地之調解委員會進行調解，Swapub將會協助進行調查，交換雙方均應配合出席Swapub安排之調解委員會，Swapub將依調解結果處理本件申訴案件。</p>
            </div>
            <div class="popCheckPad">
                <input type="button" class="btn_o btn_GD_next" value="開始使用" onclick=""/>
                <p>按下開始表示同意使用<i>履約保證金條款</i></p>
            </div>
        </div>
        <div class="popContent popGua detail send">
            <div class="btn_closePop"></div>
            <form action="">
                <h3>Step1 建議履約保證金<i class="btn_gua_qac"></i></h3>
                <div class="popGuaPrice">
                    <h4>我希望保證金為</h4>
                    <p>
                        <span class="currency btn_g"><i>TWD</i>
                            <span class="curBlock"><b>AED</b><b>AUD</b><b>CAD</b><b>CNY</b><b>EUR</b><b>HKD</b><b>JPY</b><b>KRW</b><b>TWD</b><b>USD</b></span>
                        </span>
                        <input type="number" value="0" class="guaPrice" min="0">
                    </p>
                    <p>Swapub提供以下支付方式</p>
                    <p class="cardList">信用卡<span class="card_visa"></span><span class="card_jcb"></span><span class="card_master"></span></p>
                    <p>本系統已使用256-bit SSL安全加密機制</p>
                    <p class="sslMsg"><i></i>我們交易使用安全傳輸方式</p>
                    <p class="sslMsg"><i></i>我們會保護您的交易個人資料</p>
                </div>
                <div class="popCheckPad">
                    <!-- <input type="button" class="btn_gr btn_cancel" value="取消"/> -->
                    <input type="button" class="btn_o btn_sure" value="送出" @click="upload()"/>
                    <input type="button" class="btn_gr btn_editPrice" value="建議其他金額" onclick="editGua()"/>
                </div>
            </form>
        </div>
        <div class="popContent popGua detail get">
            <div class="btn_closePop"></div>
            <form action="">
                <h3>Step1 建議履約保證金<i class="btn_gua_qac"></i></h3>
                <div class="popGuaPrice">
                    <h4><span>Rock stone</span>希望保證金為</h4>
                    <p>
                        <span class="currency btn_g"><i>TWD</i>
                            <span class="curBlock"><b>AED</b><b>AUD</b><b>CAD</b><b>CNY</b><b>EUR</b><b>HKD</b><b>JPY</b><b>KRW</b><b>TWD</b><b>USD</b></span>
                        </span>
                        <input type="number" value="200" class="guaPrice" min="0" v-model="Bond.Value">
                    </p>
                    <p>Swapub提供以下支付方式</p>
                    <p class="cardList">信用卡<span class="card_visa"></span><span class="card_jcb"></span><span class="card_master"></span></p>
                    <p>本系統已使用256-bit SSL安全加密機制</p>
                    <p class="sslMsg"><i></i>我們交易使用安全傳輸方式</p>
                    <p class="sslMsg"><i></i>我們會保護您的交易個人資料</p>
                </div>
                <div class="popCheckPad">
                    <input type="button" class="btn_gr btn_cancel" value="不同意"/>
                    <input type="button" class="btn_gr btn_editPrice" value="建議其他金額"/>
                    <input type="button" class="btn_o btn_sure" value="同意" onclick=""/>
                </div>
            </form>
        </div>
        <div class="popContent fake popGua qacheck" style="top:-100vh;">
            <div class="popMask">
                <div class="btn_closeThisPop"></div>
                <h3>何謂履約保證金？</h3>
                <div class="popGuaDeta">
                    <p>曾經擔心受騙或換友不寄出物品嗎？Swapub了解您的困擾，現在提供了履約保證金的服務給換換們，快來看看怎麼使用吧！</p>
                    <p>1. 雙方協議一定的保證金金額。</p>
                    <p>2. 支付保證金時，Swapub玉山信託專戶先保管雙方的保證金。</p>
                    <p>3-1. 雙方確認收到物品無誤，Swapub退回雙方保證金。</p>
                    <p>3-2. 雙方支付保證金後，確認取消交易，Swapub將退回雙方保證金。</p>
                    <p>4. 當您的交易有爭議時，Swapub建議您先與對方溝通，許多糾紛都可以透過溝通順利解決。</p>
                    <p>4-1當溝通無法達成共識時，您可向Swapub平台提出申訴。</p>
                    <p>4-2如交易任一方於收到Swapub平台之協調通知後30日內無回覆，則Swapub得將違反本服務同意書及/或Swapub會員之相關規範及/或相關法令之一方所提供之保證金支付予交易之對方作為賠償。</p>
                    <p>4-3如發生異常交易狀況協調不成之情形(包含但不限於一方無法原物返還、無法確認是否違反本服務同意書及/或Swapub會員之相關規範及/或相關法令及其他Swapub平台無權代為處理之任何狀況)時，交換雙方同意Swapub得將本案爭議提交Swapub所在地之調解委員會進行調解，Swapub將會協助進行調查，交換雙方均應配合出席Swapub安排之調解委員會，Swapub將依調解結果處理本件申訴案件。</p>
                </div>
                <div class="popCheckPad">
                    <input type="button" class="btn_o btn_fake_sure" value="開始使用"/>
                    <p>按下開始表示同意使用<i>履約保證金條款</i></p>
                </div>
            </div>
        </div>
        <div class="popContent popSys popTrpOption">
            <div class="btn_closePop"></div>
            <h3>運送</h3>
            <div class="popCheckPad">
                <input type="button" class="btn_o btn_inquire" value="我要查詢"/>
                <input type="button" class="btn_o btn_post" value="我要寄件"/>
            </div>
        </div>
        <div class="popContent popTrp inquire">
            <div class="btn_closePop"></div>
            <form action="">
                <h3>我要查詢</h3>
                <div class="inquireDetail">
                    <p class="clear">
                        <label for="">寄件方式</label><select name="" id=""><option value="">7-11交貨便(台灣)</option><option value="">郵局</option></select>
                    </p>
                    <p class="clear">
                        <label for="">包裹號碼</label><input type="text" placeholder="請輸入包裹號碼">
                    </p>
                </div>
                <div class="popCheckPad">
                    <input type="button" class="btn_b btn_subInquire btn_cancel" value="查詢"/>
                </div>
            </form>
        </div>
        <div class="popContent popTrp post">
            <div class="btn_closePop"></div>
            <form action="" name="">
                <h3>送貨資訊</h3>
                <div class="popTrpMask CG_scorll">
                    <div>
                        <ul class="dealPad clear">
                            <li class="icon_deal"></li>
                            <li class="swapPad">
                                <span class="userPic checked"><a href="menu_u_myitem_other.html?j"><img src="../../../static/images/ws_user_img_5.png" alt=""></a></span>
                                <div class="itemCon_1 itemImg">
                                    <div class="cssTable">
                                        <dl>
                                            <div class="itemCon_2 cssTable">
                                                <ul>
                                                    <li><p style="background-image:url(../../../static/images/mk_it_img_23.jpg)"></p></li>
                                                </ul>
                                            </div>
                                        </dl>
                                        <!-- 如果有項目，就要新增 dl > dt > 內容 -->
                                        <dl><dt><b>+</b><i style="background-image:url(../../../static/images/icon_addserv_w.png)"></i><span class="ovLine">幫忙跑腿一次，任何地點</span></dt></dl>
                                    </div>
                                </div>
                                <p>TRWIWA手錶</p>
                            </li>
                            <li class="swapPad">
                                <span class="userPic checked"><a href="menu_u_myitem.html?j"><img src="../../../static/images/ws_user_img_4.png" alt=""></a></span>
                                <div class="itemCon_1 itemImg">
                                    <div class="cssTable">
                                        <dl>
                                            <div class="itemCon_2 cssTable">
                                                <ul>
                                                    <li><p style="background-image:url(../../../static/images/mk_it_img_1.jpg)"></p></li>
                                                </ul>
                                            </div>
                                        </dl>
                                        <!-- 如果有項目，就要新增 dl > dt > 內容 -->
                                    </div>
                                </div>
                                <p>桌上型盆栽擺飾</p>
                            </li>
                        </ul>
                    </div>
                    <div class="deliveryDetail">
                        <h4>交貨便代碼</h4>
                        <input type="text" class="btn_w" id="deliveryNo" value="H02434828069">
                        <input type="button" class="btn_b" value="複製代碼" onclick="copyNo();"/>
                        <p>前往任一7-11門市ibon或使用ibon App輸入交貨便代碼即可開始寄件。</p>
                        <div class="clear"><a>送貨細節</a><input type="button" class="btn_b" value="修改"></div>
                    </div>
                    <div class="inquireDetail">
                        <p class="clear">
                            <label for="">寄件方式</label>
                            <select name="" id="" onchange="showUserData();">
                                <option value=""></option>
                                <option value="">7-11交貨便(台灣)</option>
                                <option value="">郵局</option>
                            </select>
                        </p>
                        <div class="iqKeyin">
                            <p class="clear"><label>寄件日期</label><label for="keyDate" class="keyDate"></label><input type="date" id="keyDate"></p>
                            <p class="clear"><label for="">包裹號碼</label><input type="text" placeholder="請輸入包裹號碼"></p>
                        </div>
                        <div class="iqUserData">
                            <p class="clear noBD"><label for="">寄件人姓名</label><input type="text" placeholder="請輸入真實姓名" required="required"></p>
                            <p class="clear inqNote">#由於收退貨需出示證件，請填寫與證件相符之真實姓名</p>
                            <p class="clear"><label for="">寄件人行動電話</label><input type="text" placeholder="請輸入手機號碼" required="required"></p>
                            <p class="clear noBD"><label for="">收件人姓名</label><input type="text" placeholder="請輸入真實姓名" required="required"></p>
                            <p class="clear inqNote">#由於收退貨需出示證件，請填寫與證件相符之真實姓名</p>
                            <p class="clear"><label for="">收件人行動電話</label><input type="text" placeholder="請輸入手機號碼" required="required"></p>
                            <input type="button" class="btn_b" value="收件人取貨店家" onclick="showStore();"/>
                            <div class="storePad">
                                <p><span>門市店號：</span>153319</p>
                                <p><span>門市店名：</span>大台</p>
                                <p><span>地址：</span>台北市大安區羅斯福路3段283巷14弄16號1樓</p>
                                <p><span>電話：</span>(02)23636229</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="popCheckPad">
                    <!-- <input type="button" class="btn_w btn_cancel" value="取消"/> -->
                    <input type="button" class="btn_b btn_sure" value="送出" onclick=""/>
                    <input type="button" class="btn_b btn_submit" value="確認，並取得交貨便代碼" onclick="trpData()"/>
                </div>
            </form>
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
  data(){
      return{
          DealList:{},
          List:{},
          User:{},
          UserImg:"",
          otherImgUrl:"",
          Bond:{
              ChangeID:"",
              Currency:2,
              Value:"",
              PaymentType:4
          }
      }
  },
  created(){
      this.getDeal()
      this.getUser()
  },
  updated(){
            $('.btn_guarantee_qa').click(function(){
                $('#popContainer').removeClass();
				$('#popContainer').stop().animate({top : 0}, 300);
				$('#popContainer').addClass('popGuaQa');
            });
            $('.btn_assess').click(function(){
				$('#popContainer').removeClass();
				$('#popContainer').stop().animate({top : 0}, 300);
				$('#popContainer').addClass('popAssess');
            });
           
            $('.btn_GD_next').click(function(){
                $('#popContainer').removeClass();
				$('#popContainer').stop().animate({top : 0}, 300);
				$('#popContainer').addClass('popGuaD');
            });
             $('.btn_sendGua').click(function(){
                $('#popContainer').removeClass();
				$('#popContainer').stop().animate({top : 0}, 300);
				$('#popContainer').addClass('popGuaD');
            });
            $('.btn_getGua').click(function(){
                $('#popContainer').removeClass();
				$('#popContainer').stop().animate({top : 0}, 300);
                $('#popContainer').addClass('popGuaGet');
                            });
            $('.btn_gua_qac').click(function(){
				$('.fake').stop().animate({top : 0}, 300);
				$('#popContainer').addClass('popGuaQaC');
			});
            $('.popGua.detail.get').find('.btn_editPrice').click(function(){
                $('#popContainer').removeClass();
				$('#popContainer').stop().animate({top : 0}, 300);
				$('#popContainer').addClass('popGuaD');
            });
            $('.btn_transport').click(function(){
                $('#popContainer').removeClass();
				$('#popContainer').stop().animate({top : 0}, 300);
				$('#popContainer').addClass('popTransport');
            });
            $('.btn_inquire').click(function(){
                $('#popContainer').removeClass();
				$('#popContainer').stop().animate({top : 0}, 300);
				$('#popContainer').addClass('popInquire');
            });
            $('.btn_post').click(function(){
                $('#popContainer').removeClass();
				$('#popContainer').stop().animate({top : 0}, 300);
				$('#popContainer').addClass('popPost');
            });
  },
  methods:{
        async getDeal(){
            // this.DealList = await api.get('DealedLists',localStorage.getItem('login_token'), "")
            // console.log(this.DealList)
            this.List = await api.get('DealedListsWithDealStatus_v2',localStorage.getItem('login_token'), "")
            console.log(this.List)
            this.otherImgUrl = api.CdnUrl + "/Uploads/User/"
        },
        async getUser(){
            this.User = await api.get('User',localStorage.getItem('login_token'),'')
            this.UserImg = api.CdnUrl + "/Uploads/User/" + this.User.ID  + "/Avatar.jpg"

        },
        useBond(id){
            this.Bond.ChangeID = id
            console.log(this.Bond.ChangeID)
        },
        async upload(){
            await api.postJSON('AskPerformanceBond',JSON.stringify(this.Bond),localStorage.getItem('login_token'),'')
        }

  },
  mounted(){
         setTimeout(() => {
             var element = document.getElementById("body_class");
	element.removeAttribute("class");
	element.classList.add("item","noSearchPage","menuPage","mDeal");
	
	$('.loadPad').animate({opacity:0},1000, function(){
		$('.loadPad').css({'display':'none'});
    });
         $(window).on('load', function() {
			if($(window).width() > 1024){
			  var s = skrollr.init();
			}

            // $('#header').find('.market').addClass('action');
        })
        
        $('.btn_closePop').click(function(){
		$('#popContainer').stop().animate({top : -100 + 'vh'}, 500, function(){
			// $('#popContainer').fadeOut();
			$('#popContainer').removeClass();
		});
		if($('body').hasClass('mDeal')){
			$('.post').find('.btn_submit').css({'display':'none'}).siblings().fadeIn();
			$('.post').find('.inquireDeta.userData').css({'display':'none'}).siblings('.inquireDeta').fadeIn();
		}
	});
    $('.backTop').click(function(){$('html,body').animate({scrollTop:$('#main').offset().top}, 800, 'easeOutCirc');});
	$('.btn_cancel').click(function(){
		$('#popContainer').stop().animate({top : -100 + 'vh'}, 500);
	});
		// Yep, that's it!
		//$('#scene').parallax();
		$(document).ready(function(){
			
            

            $('.dealBlock').find('.dealPad').append('<a href="/#/menu_t_deal_detail"></a>');

            var $dealBtn = $('.mainBtPad').find('a'),
                $dealBlock = $('.conBlock');

            $dealBlock.eq(0).css({'display':'block'});
            $dealBtn.click(function(){
                var ind = $(this).index();
                $dealBtn.eq(ind).addClass('action').siblings('a').removeClass('action');
                $dealBlock.eq(ind).fadeIn().siblings('.conBlock').fadeOut();
            });
              //已使用保證金的不顯示"何謂履約保證金"
            var $guaPad = $('.swapDetailPad').find('.guaranteeInfo.action'),
                $gua = $guaPad.parent(),
                $guaQA = $gua.find('.btn_guarantee_qa');
            $guaQA.fadeOut();


        })

        // function sendGua(){
        //     var $value = $('.popGua.detail.send').find('.guaPrice');
        //     $value.attr('value','100');
        //     $('.popGua.detail.send').find('.btn_editPrice').fadeIn().siblings().css({'display':'none'});
        // }
        function editGua(){
            $('.popGua.detail.send').find('.btn_editPrice').css({'display':'none'}).siblings().fadeIn();
        }
 //選擇寄件方式
        function showUserData(){
            $('.popTrp.post').find('.btn_submit').fadeIn().siblings().css({'display':'none'});
            $('.popTrp.post').find('.iqUserData').fadeIn();
            $('.popTrp.post').find('.iqKeyin').css({'display':'none'});
            $('.deliveryDetail').css({'display':'none'});
    }
     //取得交貨便代碼
        function trpData(){
            $('.popTrp.post').find('.btn_submit').fadeIn().siblings().css({'display':'none'});
             $('.popTrp.post').find('.iqUserData').css({'display':'none'});
            $('.popTrp.post').find('.iqKeyin').fadeIn();
            $('.deliveryDetail').fadeIn();
        }
        //顯示取貨店家
        function showStore(){
            $('.storePad').fadeIn();
        }
         // 複製交貨便代碼
        function copyNo(){
            var $deliveryNo = $('#deliveryNo');
            $deliveryNo.select();
            document.execCommand("copy");
        }

        
         },0)
    }
}

</script>