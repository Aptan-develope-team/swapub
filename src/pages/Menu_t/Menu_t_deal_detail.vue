<template>
<div>
<!-- <body class="item noSearchPage mItemDetail"> -->
	<!-- Header -->
<app-header></app-header>
	<!-- Header END -->
	<div id="main">
		<div class="breadcrumb">
			<i>Swapub</i><i> &#62; 交換</i><i> &#62; 成交紀錄</i><i> &#62; 商品細節</i><i></i>
		</div>
		<div class="content">
			<div class="conBlock infoBlock clear">
                <div class="timer"><span>2017/10/27</span></div>
                <!-- 左邊是提出交換的人 -->
				<div class="infoPad">
                    <dl>
                        <dt>
                            <ul class="userInfo">
                                <li class="userPic"><a href="menu_u_myitem.html?j"><img :src="this.ownerImg" alt=""></a></li>
                                <li class="userDetail"><h3 class="userName"><i>我(</i>{{this.OwnerUser.Name}}<i>)</i></h3><span class="userAdd" >{{this.OwnerLocation.City}}，{{this.OwnerLocation.Country}}</span></li>
                                <!-- <li class="timer"><span>53分鐘前</span></li> -->
                            </ul>
                        </dt>
                        <dd>
                            <ul class="itemImg itemDeal">
                                <li><img :src="this.Offer.PictureUrl" alt=""></li>
                            </ul>
                        </dd>
                        <dd>
                            <ul class="itemInfo">
                                <li><h2>{{this.OfferProduct.ProductName}}</h2></li>
                                <li class="itemTag"><a></a></li>
                                <li><p>{{this.OfferProduct.Description}}</p></li>
                                <li><span>我想要交換到的物品</span><p>都可以，只要等值商品，喜歡就換！!</p></li>
                                <li><p>TWD <i>4500</i></p></li>
                                <li><span>交貨細節</span><p>店到店</p></li>
                            </ul>
                        </dd>
                        
                    </dl>
                </div>
                <!-- 右邊是收到交換的人 -->
				<div class="infoPad">
                    <dl>
                        <dt>
                            <ul class="userInfo oUser">
                                <li class="userPic"><a href="menu_u_myitem_other.html?j"><img :src="this.offerImg" alt=""></a></li>
                                <li class="userDetail"><h3 class="userName">{{this.OfferUser.Name}}</h3><span class="userAdd">{{this.OfferLocation.City}}，{{this.OwnerLocation.City}}</span></li>
                                <!-- <li class="timer"><span>11分鐘前</span></li> -->
                            </ul>
                        </dt>
                        <dd>
                            <ul class="itemImg itemDeal">
                                <li><img :src="this.Product.PictureURL" alt=""></li>
                            </ul>
                        </dd>
                        <dd>
                            <ul class="itemInfo">
                                <li><h2>{{this.OwnerProduct.ProductName}}</h2></li>
                                <!-- <li><a>#flower</a><a>#house</a><a>#red</a></li> -->
                                <li><p>{{this.OwnerProduct.Description}}</p></li>
                                <li><p>TWD <i>4500</i></p></li>
                                <li><span>交貨細節</span><p>可PC<br>同意面交<br>台北車站捷運站</p></li>
                            </ul>
                        </dd>
                        
                    </dl>
                </div>
            </div>
            <div class="conBlock assessCon">
                <dl class="clear">
                    <dt><h2 class="assessTitle">評價</h2></dt>
                    <!-- 收到的給提出的評價 -->
                    <dd class="assessBlock">
                    <!-- .assessBlock 正常狀態顯示 對方尚未評價(li.unAssess)
                        .assessBlock.actionAD 狀態顯示 按鈕(li.assessPad)
                        .assessBlock.actionAD.action 狀態顯示 已評價的內容(li.oUserMsg) -->
                        <ul>
                            <!-- 登入者 還沒給評價之前顯示 按鈕 -->
                            <li class="assessPad">
                                <a class="btn_o btn_assess">
                                    請給<i class="userName">Jing Yun Lee</i>評價
                                </a>
                            </li>
                            <!-- 對方 還沒給評價之前顯示 尚未評價 -->
                            <li class="userInfo unAssess clear">
                                <span class="userPic"><a href="menu_u_myitem_other.html?j"><img src="../../../static/images/ws_user_img_5.png" alt=""></a></span>
                                <div class="userDetail">
                                    <h3 class="userName otherUser"><i>我(</i>Rock stone<i>)</i></h3>
                                    <p>對方尚未評價</p>
                                    <span class="date">2017/10/27 18:07</span>
                                </div>
                                <span class="assessFace"><img src="../../../static/images/icon_pokerface_gr.svg" alt=""></span>
                            </li>
                            <!-- 登入者 點btn_o顯示pop視窗, 評價完成顯示以下評價內容 -->
                            <li class="userInfo oUserMsg clear">
                                <span class="userPic"><a href="menu_u_myitem_other.html?j"><img src="../../../static/images/ws_user_img_5.png" alt=""></a></span>
                                <div class="userDetail">
                                    <h3 class="userName otherUser"><i>我(</i>Rock stone<i>)</i></h3>
                                    <p>謝謝你~ 超級好換友</p>
                                    <span class="date">2017/10/27 18:07</span>
                                </div>
                                <span class="assessFace"><img src="../../../static/images/icon_smile_o.svg" alt=""></span>
                            </li>
                        </ul>
                    </dd>
                    <!-- 提出的給收到的評價 -->
                    <dd class="assessBlock actionAD">
                        <ul>
                            <!-- 登入者 還沒給評價之前顯示btn_o -->
                            <li class="assessPad">
                                <a class="btn_o btn_assess">
                                    請給<i class="userName">Rock stone</i>評價
                                </a>
                            </li>
                            <!-- 對方 還沒給評價之前顯示尚未評價 -->
                            <li class="userInfo unAssess clear">
                                <span class="userPic"><a href="menu_u_myitem.html?j"><img src="../../../static/images/ws_user_img_4.png" alt=""></a></span>
                                <div class="userDetail">
                                    <h3 class="userName"><i>我(</i>Jing Yun Lee<i>)</i></h3>
                                    <p>對方尚未評價</p>
                                    <span class="date">2017/10/27 18:07</span>
                                </div>
                                <span class="assessFace"><img src="../../../static/images/icon_pokerface_gr.svg" alt=""></span>
                            </li>
                            <!-- 登入者 點btn_o顯示pop視窗, 評價完成顯示以下評價內容 -->
                            <li class="userInfo oUserMsg clear">
                                <span class="userPic"><a href="menu_u_myitem.html?j"><img src="../../../static/images/ws_user_img_4.png" alt=""></a></span>
                                <div class="userDetail">
                                    <h3 class="userName"><i>我(</i>Jing Yun Lee<i>)</i></h3>
                                    <p>我有在悄悄話裡面留言，但你都惡意不回復訊息也不處理，那我只好再這裡留話了，以表示我有向你說明過。如果明天中午前還是這樣消失，我會報警，假貨詐欺，並且請警員協助調閱便利商店監視器，還有我親戚家就是警察，你騙錯人了，為了一雙鞋子一輩子背上詐欺罪名，你考慮一下吧！另外提醒您，工訴罪不能和解，關於詐欺罪在我國法定型為：五年以下有期徒刑、拘役或併科一千元以下罰金。因為詐欺罪章後，法未明文規定此為告訴乃論，所以是公訴罪。</p>
                                    <span class="date">2017/10/27 18:07</span>
                                </div>
                                <span class="assessFace"><img src="../../../static/images/icon_cry_b.svg" alt=""></span>
                            </li>
                        </ul>
                    </dd>
                </dl>
            </div>
		</div>
	   <div class="btn_openPop"></div>
	</div><!-- main END -->

	<!-- Footer -->
	<app-footer></app-footer>
	<div class="backTop CGt"></div>
	<!-- Light Box -->
	<div id="popContainer" style="top:-100vh;">
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
          Deal:{},
          OwnerUser:{},
          OfferUser:{},
          OwnerLocation:{},
          OfferLocation:{},
          Offer:{},
          Product:{},
          OwnerProduct:{},
          OfferProduct:{},
          ownerImg:"",
          offerImg:"",
          Rating:{}
      }
  },
  created(){
      this.getDeal()
  },
  methods: {
    assess() {
      $('.assessBlock').addClass('active');
      $('.assessPad').fadeOut(200, function () {
        $('.oUserMsg').fadeIn();
      });
    },
     async getDeal(){
            // this.DealList = await api.get('DealedLists',localStorage.getItem('login_token'), "")
            // console.log(this.DealList)
            this.Deal = await api.get('ProductDeal',localStorage.getItem('login_token'), "&changeID=" + this.$route.query.changeID + "&Product=true&OwnerUser=true&Offer=true&OfferUser=true&DealTarget=true&")     
            console.log(this.Deal)
            this.OwnerUser = await api.get('User/'+this.Deal.OwnerUser.ID,localStorage.getItem('login_token'),'')
            this.OfferUser = await api.get('User/'+this.Deal.OfferUser.ID,localStorage.getItem('login_token'),'')
            this.OwnerLocation = this.OwnerUser.Location
            this.OfferLocation = this.OfferUser.Location
            this.Offer = this.Deal.Offer.Items[0]
            this.Product = this.Deal.Product
            this.ownerImg = api.CdnUrl + "/Uploads/User/" + this.Deal.OwnerUser.ID  + "/Avatar.jpg"
            this.offerImg = api.CdnUrl + "/Uploads/User/" + this.Deal.OfferUser.ID  + "/Avatar.jpg"
            this.OfferProduct = await api.get('Product/' + this.Offer.ProductID,localStorage.getItem('login_token'), "")     
            this.OwnerProduct = await api.get('Product/' + this.Product.ProductID,localStorage.getItem('login_token'), "")     
            this.Rating = await api.get('Rating',localStorage.getItem('login_token'),"&ratingID=" + this.Deal.RatingID)
            console.log(this.OfferProduct)
    },
  },
  mounted() {
    setTimeout(() => {
      var element = document.getElementById("body_class");
      element.removeAttribute("class");
      element.classList.add("item", "noSearchPage", "mItemDetail");

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
      $('.backTop').click(function () {
        $('html,body').animate({
          scrollTop: $('#main').offset().top
        }, 800, 'easeOutCirc');
      });
      $(document).ready(function () {
             var assInd;
			$('.btn_assess').click(function(){
                assInd = $(this).parent().parent().parent().index('.assessBlock');
				$('#popContainer').removeClass();
				$('#popContainer').stop().animate({top : 0}, 300);
                $('#popContainer').addClass('popAssess');
            });
            $('.popAssessBlock .btn_sure').click(function(){
                var $assBlock = $('.assessBlock');
                $assBlock.eq(assInd).addClass('action');
            });           
            var $itemImg_M = $('.content').find('.itemImg').find('li'),
                imgW = $itemImg_M.width();
            $itemImg_M.css({'height' : imgW});
      })

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

      $('.btn_cancel').click(function () {
        $('#popContainer').stop().animate({
          top: -100 + 'vh'
        }, 500);
      });
      $('.btn_sure').click(function () {
        $('#popContainer').stop().animate({
          top: -100 + 'vh'
        }, 500);
      });
    }, 100)



  }


}


</script>