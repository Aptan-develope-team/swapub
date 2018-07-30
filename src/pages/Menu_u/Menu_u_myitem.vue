<template>
<div>
<!-- <body class="item noSearchPage menuPage userPage mItem"> -->
	<!-- Header -->
<app-header></app-header>
	<!-- Header END -->
	<div id="main">
		<div class="breadcrumb">
			<i>Swapub</i><i> &#62; Jing Yun Lee</i><i></i><i></i><i></i>
        </div>
        <div class="coverBlock">
            <div>
                <ul class="userInfo">
                    <li class="userPic"><a href="menu_u_myitem.html?j"><img :src="this.imgUrl" alt=""></a></li>
                    <li class="userDetail">
                        <h3 class="userName"><i>我</i>{{this.resData.Name}}</h3>
                        <p class="userAdd">台北市，台灣</p>
                    </li>
                </ul>
            </div>
            <p class="countPad">
                <span class="countSwap"><i>{{this.DealList.length}}</i>筆交換</span>
                <span class="countAssess">
                    <i class="btn_smile">{{this.Comment.good}}</i>
                    <i class="btn_cry">{{this.Comment.bad}}</i>
                </span>
                <span><router-link to='/user_attention' class="iconAttention"></router-link></span>
                <span>
                    <a class="btn_g btn_attention"><i class="action">關注</i><i>取消關注</i></a>
                    <router-link to='/menu_u_myinfo' class="btn_gr btn_edit action">編輯</router-link>
                </span>
                <a class="btn_report">檢舉</a>
            </p>
            <div class="assMsgPad assessMsgPad">
                <div v-for="rating in RatingList">
                    <ul class="userInfo oUserMsg clear">
                        <li class="userPic"><a href="menu_u_myitem_other.html">
                            <img :src="rating.AvatarUrl" alt=""></a>
                        </li>
                        <li class="userDetail">
                            <h3 class="userName">{{rating.Name}}</h3>
                            <p class="ovLine">{{rating.Comment}}</p>
                            <span class="date">2017/10/27 18:07</span>
                        </li>
                        <li class="swapInfo">
                            <a href="menu_t_deal_detail.html">
                                <dl class="dealPad clear">
                                    <dt class="icon_deal"></dt>
                                    <dd class="itemCon_1 itemImg swapPad">
                                        <div class="cssTable">
                                            <dl>
                                                <div class="itemCon_2 cssTable">
                                                    <ul>
                                                        <li><p style="background-image:url(../../../static/images/mk_it_img_23.jpg)"></p></li>
                                                        <li><!-- 如果只有一張圖，這個li 都不要 -->
                                                            <p style="background-image:url(../../../static/images/ws_it_img_4.jpg)"></p><!-- 如果有第三張圖，要放在第二個LI 裡面 -->
                                                        </li>
                                                    </ul>
                                                </div>
                                            </dl>
                                            <dl><dt><b>+</b><i style="background-image:url(../../../static/images/icon_addmoney_w.png)"></i><span class="ovLine">TWD 2000</span></dt></dl><!-- 如果有項目，就要新增 dl > dt > 內容 -->
                                        </div>                                    </dd>
                                    <dd class="itemCon_1 itemImg swapPad">
                                         <div class="cssTable">
                                            <dl>
                                                <div class="itemCon_2 cssTable">
                                                    <ul>
                                                        <li><p style="background-image:url(../../../static/images/mk_it_img_1.jpg)"></p></li>
                                                    </ul>
                                                </div>
                                            </dl>
                                        </div>
                                    </dd>
                                </dl>
                            </a>
                        </li>
                        <li class="assessFace">
                                   <img src="../../../static/images/icon_smile_o.svg" alt="">
                        </li>
                    </ul>
                </div>
            </div>
            <div class="assMsgPad badAssMsgPad">
                <div>
                    <ul class="userInfo oUserMsg clear">
                        <li class="userPic"><a href="menu_u_myitem_other.html?j">
                            <img src="../../../static/images/ws_user_img_4.png" alt=""></a>
                        </li>
                        <li class="userDetail">
                            <h3 class="userName"><i>我(</i>Jing Yun Lee<i>)</i></h3>
                            <p class="ovLine">我有在悄悄話裡面留言</p>
                            <span class="date">2017/10/27 18:07</span>
                        </li>
                        <li class="swapInfo">
                            <a href="menu_t_deal_detail.html">
                                <dl class="dealPad clear">
                                    <dt class="icon_deal"></dt>
                                    <dd class="itemCon_1 itemImg swapPad">
                                        <div class="cssTable">
                                            <dl>
                                                <div class="itemCon_2 cssTable">
                                                    <ul>
                                                        <li><p style="background-image:url(../../../static/images/mk_it_img_23.jpg)"></p></li>
                                                        <li><!-- 如果只有一張圖，這個li 都不要 -->
                                                            <p style="background-image:url(../../../static/images/ws_it_img_4.jpg)"></p><!-- 如果有第三張圖，要放在第二個LI 裡面 -->
                                                        </li>
                                                    </ul>
                                                </div>
                                            </dl>
                                            <dl><dt><b>+</b><i style="background-image:url(../../../static/images/icon_addmoney_w.png)"></i><span class="ovLine">TWD 2000</span></dt></dl><!-- 如果有項目，就要新增 dl > dt > 內容 -->
                                        </div>
                                    </dd>
                                    <dd class="itemCon_1 itemImg swapPad">
                                        <div class="cssTable">
                                            <dl>
                                                <div class="itemCon_2 cssTable">
                                                    <ul>
                                                        <li><p style="background-image:url(../../../static/images/mk_it_img_1.jpg)"></p></li>
                                                    </ul>
                                                </div>
                                            </dl>
                                        </div>
                                    </dd>
                                </dl>
                            </a>
                        </li>
                        <li class="assessFace">
                            <img src="images/icon_cry_b.svg" alt="">
                        </li>
                    </ul>
                </div>
                <!-- <div>
                    <ul class="userInfo oUserMsg">
                        <li class="userPic"><a href="menu_u_myitem_other.html">
                            <img src="../../../static/images/ws_user_img_5.png" alt=""></a>
                        </li>
                        <li class="userDetail">
                            <h3 class="userName">Rock stone</h3>
                             <p class="ovLine">謝謝你~ 超級好換友</p>
                            <span class="date">2017/10/27 18:07</span>
                        </li>
                        <li class="swapInfo">
                            <a href="menu_t_deal_detail.html">
                                <dl class="dealPad clear">
                                    <dt class="icon_deal"></dt>
                                    <dd class="swapPad itemImg">
                                        <img src="../../../static/images/mk_it_img_23.jpg" alt="">
                                    </dd>
                                    <dd class="swapPad itemImg">
                                        <img src="../../../static/images/mk_it_img_1.jpg" alt="">
                                    </dd>
                                </dl>
                            </a>
                        </li>
                        <li class="assessFace">
                            <img src="../../../static/images/icon_smile.png" alt="">
                        </li>
                    </ul>
                </div>
                <div>
                    <ul class="userInfo oUserMsg">
                        <li class="userPic"><a href="menu_u_myitem_other.html">
                            <img src="../../../static/images/ws_user_img_5.png" alt=""></a>
                        </li>
                        <li class="userDetail">
                            <h3 class="userName">Rock stone</h3>
                            <p>謝謝你~ 超級好換友</p>
                            <span class="date">2017/10/27 18:07</span>
                        </li>
                        <li class="swapInfo">
                            <a href="menu_t_deal_detail.html">
                                <dl class="dealPad clear">
                                    <dt class="icon_deal"></dt>
                                    <dd class="swapPad itemImg">
                                        <img src="../../../static/images/mk_it_img_23.jpg" alt="">
                                    </dd>
                                    <dd class="swapPad itemImg">
                                        <img src="../../../static/images/mk_it_img_1.jpg" alt="">
                                    </dd>
                                </dl>
                            </a>
                        </li>
                        <li class="assessFace">
                            <img src="../../../static/images/icon_smile.png" alt="">
                        </li>
                    </ul>
                </div> -->
            </div>
        </div>
		<div class="content">
            <!-- <h1>設定</h1> -->
            <div class="innerCoverBlock">
                <span class="coverImg" :style="{ backgroundImage:`url(${this.CoverUrl})`}"></span>
                <div>
                    <ul class="userInfo">
                        <li class="userPic"><a href="menu_u_myitem.html?j"><img :src="this.imgUrl" alt=""></a></li>
                        <li class="userDetail">
                            <h3 class="userName">{{this.resData.Name}}</h3>
                            <p class="userAdd">台北市，台灣</p>
                        </li>
                    </ul>
                </div>
                <p class="countPad">
                    <span class="countSwap"><i>{{this.DealList.length}}</i>筆交換</span>
                    <span class="countAssess"><i class="btn_smile">{{this.Comment.good}}</i><i class="btn_cry">{{this.Comment.bad}}</i></span>
                    <router-link :to="{name:'User_attention',params: {id: this.id}}" class="iconAttention"></router-link>
                </p>
                <a class="btn_g btn_attention"><i class="action">關注</i><i>取消關注</i></a>
                <router-link to='/menu_u_myinfo' class="btn_w btn_edit action">編輯</router-link>
                <a class="btn_report">檢舉</a>
                <div class="assMsgPad assessMsgPad">
                    <div  v-for="rating in RatingList">
                        <ul class="userInfo oUserMsg clear">
                            <li class="userPic"><a href="menu_u_myitem_other.html">
                                <img :src="rating.AvatarUrl" alt=""></a>
                            </li>
                            <li class="userDetail">
                                <h3 class="userName">{{rating.Name}}</h3>
                                <p class="ovLine">{{rating.Comment}}</p>
                                <span class="date">2017/10/27 18:07</span>
                            </li>
                            <li class="swapInfo">
                                <a href="menu_t_deal_detail.html">
                                    <dl class="dealPad clear">
                                        <dt class="icon_deal"></dt>
                                        <dd class="itemCon_1 itemImg swapPad">
                                            <div class="cssTable">
                                                <dl>
                                                    <div class="itemCon_2 cssTable">
                                                        <ul>
                                                            <li><p style="background-image:url(../../../static/images/mk_it_img_23.jpg)"></p></li>
                                                            <li><!-- 如果只有一張圖，這個li 都不要 -->
                                                                <p style="background-image:url(../../../static/images/ws_it_img_4.jpg)"></p><!-- 如果有第三張圖，要放在第二個LI 裡面 -->
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </dl>
                                                <dl><dt><b>+</b><i style="background-image:url(../../../static/images/icon_addmoney_w.png)"></i><span class="ovLine">TWD 2000</span></dt></dl><!-- 如果有項目，就要新增 dl > dt > 內容 -->
                                            </div>
                                        </dd>
                                        <dd class="itemCon_1 itemImg swapPad">
                                            <div class="cssTable">
                                                <dl>
                                                    <div class="itemCon_2 cssTable">
                                                        <ul>
                                                            <li><p style="background-image:url(../../../static/images/mk_it_img_1.jpg)"></p></li>
                                                        </ul>
                                                    </div>
                                                </dl>
                                            </div>
                                        </dd>
                                    </dl>
                                </a>
                            </li>
                            <li class="assessFace">
                                 <img src="../../../static/images/icon_smile_o.svg" alt="">
                        </li>
                    </ul>
                </div>
            </div>
            <div class="assMsgPad badAssMsgPad">
                <div>
                    <ul class="userInfo oUserMsg clear">
                        <li class="userPic"><a href="menu_u_myitem_other.html?j">
                            <img src="../../../static/images/ws_user_img_4.png" alt=""></a>
                        </li>
                        <li class="userDetail">
                            <h3 class="userName"><i>我(</i>Jing Yun Lee<i>)</i></h3>
                            <p class="ovLine">我有在悄悄話裡面留言</p>
                            <span class="date">2017/10/27 18:07</span>
                        </li>
                        <li class="swapInfo">
                            <a href="menu_t_deal_detail.html">
                                <dl class="dealPad clear">
                                    <dt class="icon_deal"></dt>
                                    <dd class="itemCon_1 itemImg swapPad">
                                        <div class="cssTable">
                                            <dl>
                                                <div class="itemCon_2 cssTable">
                                                    <ul>
                                                        <li><p style="background-image:url(../../../static/images/mk_it_img_23.jpg)"></p></li>
                                                        <li><!-- 如果只有一張圖，這個li 都不要 -->
                                                            <p style="background-image:url(../../../static/images/ws_it_img_4.jpg)"></p><!-- 如果有第三張圖，要放在第二個LI 裡面 -->
                                                        </li>
                                                    </ul>
                                                </div>
                                            </dl>
                                            <dl><dt><b>+</b><i style="background-image:url(../../../static/images/icon_addmoney_w.png)"></i><span class="ovLine">TWD 2000</span></dt></dl><!-- 如果有項目，就要新增 dl > dt > 內容 -->
                                        </div>
                                    </dd>
                                    <dd class="itemCon_1 itemImg swapPad">
                                        <div class="cssTable">
                                            <dl>
                                                <div class="itemCon_2 cssTable">
                                                    <ul>
                                                        <li><p style="background-image:url(../../../static/images/mk_it_img_1.jpg)"></p></li>
                                                    </ul>
                                                </div>
                                            </dl>
                                        </div>
                                    </dd>
                                </dl>
                            </a>
                        </li>
                        <li class="assessFace">
                            <img src="../../../static/images/icon_cry_b.svg" alt="">
                            </li>
                        </ul>
                    </div>
                    <!-- <div>
                        <ul class="userInfo oUserMsg">
                            <li class="userPic"><a href="menu_u_myitem_other.html">
                                <img src="../../../static/images/ws_user_img_5.png" alt=""></a>
                            </li>
                            <li class="userDetail">
                                <h3 class="userName">Rock stone</h3>
                                <p>謝謝你~ 超級好換友</p>
                                <span class="date">2017/10/27 18:07</span>
                            </li>
                            <li class="swapInfo">
                                <a href="menu_t_deal_detail.html">
                                    <dl class="dealPad clear">
                                        <dt class="icon_deal"></dt>
                                        <dd class="swapPad itemImg">
                                            <img src="../../../static/images/mk_it_img_23.jpg" alt="">
                                        </dd>
                                        <dd class="swapPad itemImg">
                                            <img src="../../../static/images/mk_it_img_1.jpg" alt="">
                                        </dd>
                                    </dl>
                                </a>
                            </li>
                            <li class="assessFace">
                                <img src="../../../static/images/icon_smile.png" alt="">
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul class="userInfo oUserMsg">
                            <li class="userPic"><a href="menu_u_myitem_other.html">
                                <img src="../../../static/images/ws_user_img_5.png" alt=""></a>
                            </li>
                            <li class="userDetail">
                                <h3 class="userName">Rock stone</h3>
                                <p>謝謝你~ 超級好換友</p>
                                <span class="date">2017/10/27 18:07</span>
                            </li>
                            <li class="swapInfo">
                                <a href="menu_t_deal_detail.html">
                                    <dl class="dealPad clear">
                                        <dt class="icon_deal"></dt>
                                        <dd class="swapPad itemImg">
                                            <img src="../../../static/images/mk_it_img_23.jpg" alt="">
                                        </dd>
                                        <dd class="swapPad itemImg">
                                            <img src="../../../static/images/mk_it_img_1.jpg" alt="">
                                        </dd>
                                    </dl>
                                </a>
                            </li>
                            <li class="assessFace">
                                <img src="images/icon_smile.png" alt="">
                            </li>
                        </ul>
                    </div> -->
                </div>
            </div>
            <div class="itemBlock">
                <div class="conBlock marketPad">
                    <h2 class="action"><i></i>我的物品(<span>{{this.Item.length}}</span>)</h2><h2><i></i>物品(<span>10</span>)</h2>
                    <div class="itemPad clear">
                        <div class="itemBox mBox" v-if="this.id == this.User.ID">
                            <div class="itemImg">
                                <span class="addImg"></span>
                                <i>新增物品</i>
                            </div>
                            <a href="item_upload.html"></a>
                        </div>
                        <div class="itemBox mBox" v-for="product in Item">
                            <div class="itemImg" v-if="product.PictureUrls"><img :src="(product.PictureUrls)[0]" alt=""></div>
                            <!-- <a href="item_detail.html?j"></a> -->
                            <router-link :to="{name:'Market_detail',params: { id: product._id}} "></router-link>
                            <div class="itemInfo">
                                <span class="iQua">{{product.OfferNum}}</span><span class="iHeart"></span>
                            </div>
                            <div class="itemTitle">
                                <h3>{{product.ProductName}}</h3>
                            </div>
                        </div>
                       <!--  <div class="itemBox mBox">
                            <div class="itemImg"><img src="../../../static/images/mk_it_img_4.jpg" alt=""></div>
                            <a href="item_detail.html?j"></a>
                            <div class="itemInfo">
                                <span class="iQua">10</span><span class="iHeart"></span>
                            </div>
                            <div class="itemTitle">
                                <h3>木製貓頭鷹造型桌飾</h3>
                            </div>
                        </div>
                        <div class="itemBox mBox">
                            <div class="itemImg"><img src="../../../static/images/mk_it_img_5.jpg" alt=""></div>
                            <a href="item_detail.html?j"></a>
                            <div class="itemInfo">
                                <span class="iQua">48</span><span class="iHeart"></span>
                            </div>
                            <div class="itemTitle">
                                <h3>Apple watch第一代，附上一個全新錶帶</h3>
                            </div>
                        </div>
                        <div class="itemBox mBox">
                            <div class="itemImg"><img src="../../../static/images/mk_it_img_6.jpg" alt=""></div>
                            <a href="item_detail.html?j"></a>
                            <div class="itemInfo">
                                <span class="iQua">39</span><span class="iHeart"></span>
                            </div>
                            <div class="itemTitle">
                                <h3>Canon單眼相機</h3>
                            </div>
                        </div>
                        <div class="itemBox mBox">
                            <div class="itemImg"><img src="../../../static/images/mk_it_img_7.jpg" alt=""></div>
                            <a href="item_detail.html?j"></a>
                            <div class="itemInfo">
                                <span class="iQua">20</span><span class="iHeart"></span>
                            </div>
                            <div class="itemTitle">
                                <h3>PS遊戲片（多換一可）</h3>
                            </div>
                        </div>
                        <div class="itemBox mBox">
                            <div class="itemImg"><img src="../../../static/images/mk_it_img_10.jpg" alt=""></div>
                            <a href="item_detail.html?j"></a>
                            <div class="itemInfo">
                                <span class="iQua">29</span><span class="iHeart"></span>
                            </div>
                            <div class="itemTitle">
                                <h3>PS遊戲片NINIA 2</h3>
                            </div>
                        </div>
                        <div class="itemBox mBox noSwap">
                            <div class="itemImg"><img src="../../../static/images/mk_it_img_17.jpg" alt=""></div>
                            <a href="item_detail.html?j"></a>
                            <div class="itemInfo">
                                <span class="iQua">0</span><span class="iHeart"></span>
                            </div>
                            <div class="itemTitle">
                                <h3>Watch dogs遊戲片（專屬ps4，換出不退</h3>
                            </div>
                        </div>
                        <div class="itemBox mBox">
                            <div class="itemImg"><img src="../../../static/images/mk_it_img_19.jpg" alt=""></div>
                            <a href="item_detail.html?j"></a>
                            <div class="itemInfo">
                                <span class="iQua">20</span><span class="iHeart"></span>
                            </div>
                            <div class="itemTitle">
                                <h3>全新air pod</h3>
                            </div>
                        </div> -->
                    </div>
                </div>
                <div class="conBlock wishPad">
                    <h2 class="action"><i></i>我想要(<span>{{this.Wish.length}}</span>)</h2><h2><i></i>許願牆(<span>5</span>)</h2>
                    <div class="itemPad">
                        <div class="itemBox">
                            <div class="itemTitle">
                                <h4>我想要...</h4>
                            </div>
                            <div class="itemImg">
                                <span class="addImg"></span>
                                <i>新增願望</i>
                            </div>
                            <a href="wish_upload.html"></a>
                        </div>
                        <div class="itemBox">
                            <div class="itemTitle">
                                <h4>我想要...</h4>
                                <h3>棒球帽</h3>
                            </div>
                            <div class="itemImg"><img src="../../../static/images/wss_it_img_1.jpg" alt=""></div>
                            <a href="wish_detail.html?j"></a>
                            <div class="itemInfo">
                                <p>類似此素色款式棒球帽，用商品交換，喜歡再留言</p>
                                <p class="timer">1小時前</p>
                                <!-- <span class="iUser"><i><img src="images/ws_user_img_1.png" alt=""></i>Amy Tesi</span> -->
                                <span class="iChat">5</span>
                            </div>
                        </div>
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
        <div class="popContent popReportPad">
            <!-- <div class="btn_closePop"></div> -->
            <h3>我要檢舉的原因是？</h3>
            <div class="reportList">
                <p><label for="reListA"><input type="radio" name="reList" id="reListA">這是假帳號</label></p>
                <p><label for="reListB"><input type="radio" name="reList" id="reListB">盜用他人商品圖片</label></p>
                <p><label for="reListC"><input type="radio" name="reList" id="reListC">此商品有濫發廣告訊息之嫌疑</label></p>
                <p><label for="reListD"><input type="radio" name="reList" id="reListD">此人商品充滿不恰當內容</label></p>
            </div>
            <div class="popCheckPad">
				<input class="btn_o btn_cancel" type="button" value="取消">
				<input class="btn_o btn_sure" type="submit" value="確定">
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
  data(){
      return{
           resData:{},
           imgUrl:"",
           CoverUrl:"",
           Item:[],
           Wish:[],
           Comment:{},
           RatingList:{},
           DealList:{},
           User:{}
      }
  },
  created(){
        this.getUser();
        this.getRatingList();
        this.getDealList();
        this.getItem();
        this.getComment();
        this.getuser();
  },
  methods:{
    async getuser(){
        this.User = await api.get('User',localStorage.getItem('login_token'),'')
    },
    async getUser(){
        this.resData = await api.get('User/' + this.id,localStorage.getItem('login_token'),'')
        this.imgUrl = api.CdnUrl + "/Uploads/User/" + this.id  + "/Avatar.jpg"
        this.CoverUrl = api.CdnUrl + "/Uploads/User/" + this.id  + "/Cover.jpg"   
    },
    async getRatingList(){
        this.RatingList = await api.get('Rating',localStorage.getItem('login_token'),"&accountID=" + this.id + "&filterDate=1" )
        console.log(this.RatingList)
    },
    async getDealList(){
        this.DealList = await api.get('DealedListsWithDealStatus_v2',localStorage.getItem('login_token'),'')
        console.log(this.DealList)
        for(var i = 0 ; i< this.RatingList.length; i++){
            for(var j = 0; j < this.DealList.length; j++){
                if(this.RatingList[i].ChangeID == this.DealList[j].ChangeID){
                    this.RatingList[i].leftImg = this.DealList[j].Product.PictureUrl
                    console.log("cool")
                }
                //console.log(this.DealList[j].ChangeID)
            }
        }
    },
    async getComment(){
        this.Comment = await api.get('Rating',localStorage.getItem('login_token'),"&accountID=" + this.id)
        console.log(this.Comment)
    },
    async getItem(){
        this.Item = await api.get('Product',localStorage.getItem('login_token'),"&ownerID=" + this.id + "&filterDate=1" )
        console.log(this.Item)
    },
    async getWish(){
        this.Wish = await api.get('Wish',localStorage.getItem('login_token'),"&ownerID=" + this.id + "&filterDate=1" )
        console.log(this.Wish) 
    }
    

    
   
  },
  updated(){
 //item排版_marketPad
    setTimeout(() => {
        var Gw = $(window),
        Gww = Gw.width(),
        Gwh = Gw.height(),
        Gd = $(document),
        Gdw = Gd.width(),
        Gdh = Gd.height();
    var $itemPad = $('.marketPad').find('.itemPad'),
				$itemPadW = $itemPad.width(),
				itemW = $itemPadW / 3 - 8,
				$allBox = $itemPad.find('.mBox'),
				boxLen = $allBox.length;
			var boxHArr = [];
			for(var i=0; i<boxLen; i++){
				var boxH = $allBox.eq(i).outerHeight();
				boxHArr.push(boxH);
				var maxHeight = Math.max(...boxHArr);
				$allBox.css({'min-height':maxHeight + 'px'});
			}
			$itemPad.masonry({
				itemSelector: '.mBox',
				columnWidth: itemW,
				gutter: 10
            });
            
        var $coverBts = $('.coverBlock').find('.btn_smile'),
		$coverMsgPad = $('.coverBlock').find('.assessMsgPad');
	$coverBts.click(function(){
		var $btnPo = $coverBts.offset(),
			$msgPadW = $coverMsgPad.outerWidth();
		$coverMsgPad.css({'left': $btnPo.left - $msgPadW / 2});
	});
	var $innerBts = $('.innerCoverBlock').find('.btn_smile'),
		$innerMsgPad = $('.innerCoverBlock').find('.assessMsgPad');
	$innerBts.click(function(){
		var $btnPo = $innerBts.offset(),
			$msgPadW = $innerMsgPad.outerWidth();
		if(Gww > 1280){
			var conW = $('.innerCoverBlock').outerWidth(),
				conMG = ( Gww - conW ) / 2;
			$innerMsgPad.css({'left': $btnPo.left - conMG - $msgPadW / 2});
		}else{
			$innerMsgPad.css({'left': $btnPo.left - $msgPadW / 2 - 14 + 'px'});
		}
	});
   },800)
       

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
      element.classList.add("noSearchPage", "menuPage", "userPage", "mItem");

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
      $('.iHeart').click(function () {
        $(this).toggleClass('action');
      });
      var $coverBts = $('.coverBlock').find('.btn_smile'),
        $coverMsgPad = $('.coverBlock').find('.assessMsgPad');
      $coverBts.click(function () {
        var $btnPo = $coverBts.offset(),
          $msgPadW = $coverMsgPad.outerWidth();
        $coverMsgPad.css({
          'left': $btnPo.left - $msgPadW / 2 + 5 + 'px'
        });
      });
      var $innerBts = $('.innerCoverBlock').find('.btn_smile'),
        $innerMsgPad = $('.innerCoverBlock').find('.assessMsgPad');
      $innerBts.click(function () {
        var $btnPo = $innerBts.offset(),
          $msgPadW = $innerMsgPad.outerWidth();
        if (Gww > 1280) {
          var conW = $('.innerCoverBlock').outerWidth(),
            conMG = (Gww - conW) / 2;
          $innerMsgPad.css({
            'left': $btnPo.left - conMG - $msgPadW / 2 + 5 + 'px'
          });
        } else {
          $innerMsgPad.css({
            'left': $btnPo.left - $msgPadW / 2 - 14 + 'px'
          });
        }
      });
      $('.backTop').click(function () {
        $('html,body').animate({
          scrollTop: $('#main').offset().top
        }, 800, 'easeOutCirc');
      });
          //btn_attention 關注按鈕
	var $btn_attention = $('.btn_attention'),
		$attOp = $btn_attention.find('i'),
		$attOpInd;
	$btn_attention.find('i.action').fadeIn();
	$btn_attention.click(function(){
		if($('body').hasClass('userAtt')){
			//user_attention_other.html 追蹤清單的已追蹤用戶關注按鈕不與用戶本身的關注按鈕同步
			$(this).toggleClass('btn_gr btn_g');
			var $oneBtn = $(this).find('i.action');
			$oneBtn.removeClass('action').css({'display':'none'}).siblings().addClass('action').fadeIn();
			
		}else{
			//用戶個人頁面2顆關注按鈕同步
			$btn_attention.toggleClass('btn_gr btn_g');
			var $btnTXT = $btn_attention.find('i.action');
			$btnTXT.removeClass('action').css({'display':'none'}).siblings().addClass('action').fadeIn();
		}
	});


        //item排版_wishPad
          if($('.userName').hasClass('otherUser')){
                //如果是別人的角度看, 則第一個item(新增物品/新增願望)會消失
                $('.wishPad').addClass('otherUser');
                var $box = $('.wishPad').find('.itemPad').find('.itemBox');
                $box.eq(0).removeClass('itemBox').css({'display':'none'});
            }else{
                $('.wishPad').removeClass('otherUser');
                var $box = $('.wishPad').find('.itemPad').find('.itemBox');
                $box.eq(0).addClass('itemBox').css({'display':'block'});
            }
			var $outBox = $('.wishPad').find('.itemPad'), //外層容器
				$outBoxW = $outBox.width(), //外層容器寬度
				$allBox = $outBox.find('.itemBox'), //每個item
				boxLen = $allBox.length, //item數目
				boxW = $allBox.eq(0).outerWidth(true), //隨便一個item的寬度
                cols = $outBoxW / boxW; //取得行數
            //預設陣列
        var boxHeightArr = [],
            minHeight = 0,
            boxHeight = 0;

        for (var i = 0; i < boxLen; i++) {
          var boxH = $allBox.eq(i).outerHeight(true);
          // console.log(boxHeightArr);
          if (i < cols) {
            //將第1排item的高度存入陣列boxHeightArr
            boxHeightArr.push(boxH);
          } else {
            //第2排之後的item放在boxHeightArr陣列中最小高度的地方
            minHeight = Math.min(...boxHeightArr);
            var minIndex = getIndexByValue(boxHeightArr, minHeight);
            $allBox[i].style.position = 'absolute';
            $allBox[i].style.top = minHeight + 'px';
            $allBox[i].style.left = minIndex * boxW + 'px';
            boxHeightArr[minIndex] += $allBox[i].offsetHeight;
            var maxHeight = Math.max(...boxHeightArr);
            $outBox.css({
              'height': maxHeight * boxHeightArr.length / cols
            });
          }
        }

        function getIndexByValue(arr, value) {
          for (var i = 0; i < arr.length; i++) {
            if (arr[i] == value) {
              return i;
            }
          }
        }

        function loadItem() {
          var $allBox = $outBox.find('.itemBox'),
            lastBox = $allBox[$allBox.length - 1],
            lastBoxDis = lastBox.offsetTop,
            screenH = document.documentElement.clientHeight || document.body.clientHeight,
            scrollH = scroll().top,
            maxH = scrollH + screenH;
          if (lastBoxDis <= maxH) {
            return true;
          } else {
            return false;
          }
        }

        
        

		// Yep, that's it!
		//$('#scene').parallax();

		$(document).ready(function(){
			$('.btn_report').click(function(){
                $('#popContainer').removeClass();
				$('#popContainer').stop().animate({top : 0}, 300);
				$('#popContainer').addClass('popReport');
            });

             var $btnSmile = $('.btn_smile'),
                $btnCry = $('.btn_cry'),
                $assPad = $('.assessMsgPad'),
                $bAssPad = $('.badAssMsgPad');
            $btnSmile.eq(0).click(function () {
                $assPad.eq(0).fadeToggle();
                $bAssPad.eq(0).fadeOut();
            });
            $btnSmile.eq(1).click(function () {
                $assPad.eq(1).fadeToggle();
                $bAssPad.eq(1).fadeOut();
            });
            $btnCry.eq(0).click(function () {
                $bAssPad.eq(0).fadeToggle();
                $assPad.eq(0).fadeOut();
            });
            $btnCry.eq(1).click(function () {
                $bAssPad.eq(1).fadeToggle();
                $assPad.eq(1).fadeOut();
            });

            var $coverBlock = $('.coverBlock'),
                $icBlock = $('.innerCoverBlock'),
                $icH = $icBlock.height();

            $coverBlock.css({ 'top': -60 + 'px', 'opacity': 0 });
            $(window).scroll(function () {
                "use strict";
                var _nowHeight = $(window).scrollTop(),
                    lastPos = $('body').height() - $(window).height();
                if (_nowHeight >= $icH) {
                    $icBlock.stop().animate({ 'opacity': 0 }, 150);
                    $assPad.eq(1).fadeOut();
                    $bAssPad.eq(1).fadeOut();
                    $coverBlock.stop().animate({ 'top': 100 + 'px', 'opacity': 1 }, 500);
                    if (_nowHeight >= lastPos) {
                        $coverBlock.stop().animate({ 'top': 0 + 'px', 'opacity': 1 }, 150);
                    } else if (_nowHeight < lastPos) {
                        $coverBlock.stop().animate({ 'top': 100 + 'px', 'opacity': 1 }, 150);
                    }
                } else if (_nowHeight < $icH) {
                    $icBlock.stop().animate({ 'opacity': 1 }, 150);
                    $coverBlock.stop().animate({ 'top': -60 + 'px', 'opacity': 0 , 'display':'none'}, 500);
                    $assPad.eq(0).fadeOut();
                    $bAssPad.eq(0).fadeOut();
                }
            });

      })
      

    }, 0)
  }
}


</script>