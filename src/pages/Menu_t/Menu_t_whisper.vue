<template>
<div>
  <!-- <body class="item noSearchPage menuPage mWhisper"> -->
	<!-- Header -->
  <app-header></app-header>

	<!-- Header END -->
	<div id="main">
		<div class="breadcrumb">
			<i>Swapub</i><i> &#62; 側邊欄</i><i> &#62; 悄悄話</i><i></i><i></i>
		</div>
		<div class="content">
            <h1>悄悄話(<span>{{this.List.length}}</span>)</h1>
			<div class="conBlock">
                <ul v-for="(list,index) in List">
                    <li class="whisperList clear" v-if="ID[index] != User.ID" >
                        <div class="userInfo">
                            <span class="userPic checked" v-if="list.isRead == true" ><a href="menu_u_myitem_other.html?j"><img :src="Picture[index]" alt=""></a></span>
                            <span class="userPic checked action" v-if="list.isRead != true"><a href="menu_u_myitem_other.html?j"><img src="../../../static/images/ws_user_img_3.png" alt=""></a></span>
                            <div class="msgBlock">
                                <p class="userName" ><i>我(</i>{{Name[index]}}<i>)</i></p>

                                <!-- <p v-if="list.LastComment.indexOf('.jpg') < -1">A</p><i class="date">2017/10/27 20：15</i>
                                <p v-if="list.LastComment.indexOf('.jpg') > -1">B</p><i class="date">2017/10/27 20：15</i>  -->
                                <p v-if="list.LastComment.indexOf('.jpg') == -1">{{list.LastComment}}</p><i class="date" v-if="list.LastComment.indexOf('.jpg') == -1">{{((list.LastCommentTime).split('.')[0]).replace("T","     ")}}</i>
                                <p v-if="list.LastComment.indexOf('.jpg') > -1"><img :src="list.LastComment" width="150px"></p><i class="date" v-if="list.LastComment.indexOf('.jpg') > -1">{{((list.LastCommentTime).split('.')[0]).replace("T","     ")}}</i> 
                                <router-link :to="{name:'Market_detail',params: { id:list.ProductID},query:{MsgID:list.MessageID}}"></router-link>
                            </div>
                        </div>
                        <div class="itemInfo">
                            <div>
                                <span class="itemImg"><router-link :to="{name:'Market_detail',params: { id:list.ProductID},query:{MsgID:list.MessageID}}"><img :src="list.ProductURL" alt=""></router-link></span>
                                <span class="iQua">{{OfferNum[index]}}</span>
                            </div>
                            <p>{{Product[index]}}</p>
                        </div>
                    </li>
                    <li class="whisperList clear me" v-if="ID[index] == User.ID" >
                        <div class="userInfo">
                            <span class="userPic checked" v-if="list.isRead == true" ><a href="menu_u_myitem_other.html?j"><img :src="Picture[index]" alt=""></a></span>
                            <span class="userPic checked action" v-if="list.isRead != true"><a href="menu_u_myitem_other.html?j"><img src="../../../static/images/ws_user_img_3.png" alt=""></a></span>
                            <div class="msgBlock">
                                <p class="userName" ><i>我(</i>{{Name[index]}}<i>)</i></p>

                                <!-- <p v-if="list.LastComment.indexOf('.jpg') < -1">A</p><i class="date">2017/10/27 20：15</i>
                                <p v-if="list.LastComment.indexOf('.jpg') > -1">B</p><i class="date">2017/10/27 20：15</i>  -->
                                <p v-if="list.LastComment.indexOf('.jpg') == -1">{{list.LastComment}}</p><i class="date" v-if="list.LastComment.indexOf('.jpg') == -1">{{((list.LastCommentTime).split('.')[0]).replace("T","     ")}}</i>
                                <p v-if="list.LastComment.indexOf('.jpg') > -1"><img :src="list.LastComment"></p><i class="date" v-if="list.LastComment.indexOf('.jpg') > -1">{{((list.LastCommentTime).split('.')[0]).replace("T","     ")}}</i> 
                                <router-link :to="{name:'Market_detail',params: { id:list.ProductID},query:{MsgID:list.MessageID}}"></router-link>
                            </div>
                        </div>
                        <div class="itemInfo">
                            <div>
                                <span class="itemImg"><router-link :to="{name:'Market_detail',params: { id:list.ProductID},query:{MsgID:list.MessageID}}"><img :src="list.ProductURL" alt=""></router-link></span>
                                <span class="iQua">{{OfferNum[index]}}</span>
                            </div>
                            <p>{{Product[index]}}</p>
                        </div>
                    </li>
                    <!-- <li class="whisperList clear me">
                        <div class="userInfo">
                            <span class="userPic checked"><a href="menu_u_myitem.html?j"><img src="../../../static/images/ws_user_img_4.png" alt=""></a></span>
                            <div class="msgBlock">
                                <p class="userName"><i>我(</i>Jing Yun Lee<i>)</i></p>
                                <p>請問哪裡面交您方便呢？</p><i class="date">2017/10/27 20：15</i>
                                <a href="item_detail_whisper.html?c"></a>
                            </div>
                        </div>
                        <div class="itemInfo">
                            <div>
                                <span class="itemImg"><a href="item_detail_whisper.html?c"><img src="../../../static/images/mk_it_img_21.jpg" alt=""></a></span>
                                <span class="iQua">2</span>
                            </div>
                            <p>正韓淺紫上衣</p>
                        </div>
                    </li>
                    <li class="whisperList clear me">
                        <div class="userInfo">
                            <span class="userPic checked"><a href="menu_u_myitem.html?j"><img src="../../../static/images/ws_user_img_4.png" alt=""></a></span>
                            <div class="msgBlock">
                                <p class="userName"><i>我(</i>Jing Yun Lee<i>)</i></p>
                                <p>請問哪裡面交您方便呢？</p><i class="date">2017/10/27 20：15</i>
                                <a href="item_detail_whisper.html?c"></a>
                            </div>
                        </div>
                        <div class="itemInfo">
                            <div>
                                <span class="itemImg"><a href="item_detail_whisper.html?c"><img src="../../../static/images/mk_it_img_1.jpg" alt=""></a></span>
                                <span class="iQua">39</span>
                            </div>
                            <p>Paper Garden LED迷你植物壁掛</p>
                        </div>
                    </li>
                    <li class="whisperList clear">
                        <div class="userInfo">
                            <span class="userPic checked action"><a href="menu_u_myitem_other.html?j"><img src="../../../static/images/ws_user_img_3.png" alt=""></a></span>
                            <div class="msgBlock">
                                <p class="userName"><i>我(</i>Victor Wang<i>)</i></p>
                                <p>請問哪裡面交您方便呢？</p><i class="date">2017/10/27 20：15</i>
                                <a href="item_detail_whisper.html?c"></a>
                            </div>
                        </div>
                        <div class="itemInfo">
                            <div>
                                <span class="itemImg"><a href="item_detail_whisper.html?c"><img src="../../../static/images/img_item_03.jpg" alt=""></a></span>
                                <span class="iQua">10</span>
                            </div>
                            <p>VR數位眼鏡</p>
                        </div>
                    </li>
                    <li class="whisperList clear">
                        <div class="userInfo">
                            <span class="userPic checked action"><a href="menu_u_myitem_other.html?j"><img src="../../../static/images/ws_user_img_3.png" alt=""></a></span>
                            <div class="msgBlock">
                                <p class="userName"><i>我(</i>Victor Wang<i>)</i></p>
                                <p>請問哪裡面交您方便呢？</p><i class="date">2017/10/27 20：15</i>
                                <a href="item_detail_whisper.html?c"></a>
                            </div>
                        </div>
                        <div class="itemInfo">
                            <div>
                                <span class="itemImg"><a href="item_detail_whisper.html?c"><img src="../../../static/images/mk_it_img_20.jpg" alt=""></a></span>
                                <span class="iQua">2</span>
                            </div>
                            <p>手做造型彩色隔熱杯套</p>
                        </div>
                    </li> -->
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
          List:{
          },
          Message:{},
          Name:[],
          Date:[],
          Comment:[],
          Picture:[],
          ID:[],
          Product:[],
          OfferNum:[],
          User:{}
      }
  },
  created(){
      this.getList();
      this.getUser();
  },
  methods:{
      async getList(){
            this.List = await api.get('GetPrivateMessageList',localStorage.getItem('login_token'),'')
            console.log(this.List)
            for(var i=0 ; i< this.List.length ; i++){        
                    this.getMessage(i)
                    this.getProduct(i)
            }
      },
      async getMessage(i){
             api.get('Message',localStorage.getItem('login_token'),'&msgID=' + this.List[i].MessageID)
            .then((data) =>{
                this.$set(this.Name, i, data[0].Name)
                this.$set(this.Date, i, data[0].CreateDate)
                this.$set(this.ID, i, data[0].AccountID)
                this.$set(this.Comment, i, data[0].Comment)
                this.$set(this.Picture, i, data[0].AvatarUrl)
            })   

      },
      async getUser(){
            this.User = await api.get('User',localStorage.getItem('login_token'),'')
      },
      async getProduct(i){
            api.get('Product/'+this.List[i].ProductID ,localStorage.getItem('login_token'),'&msgID=')
            .then((data) =>{
                this.$set(this.Product, i, data.ProductName)  
                this.$set(this.OfferNum, i, data.OfferNum)  
            }) 
      }
  },
  
  mounted() {
    setTimeout(() => {
      var element = document.getElementById("body_class");
      element.removeAttribute("class");
      element.classList.add("item", "noSearchPage", "menuPage", "mWhisper");

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
      						$(window).scroll(function(){
	"use strict";
	var Gw = $(window), Gwh = Gw.height(),
		Gd = $(document), Gdh =Gd.height(),
		_nowHeight = $(window).scrollTop();

	//backTop BTN show & hide
	if (_nowHeight >= Gwh / 2) {$('.backTop').stop().animate({opacity:1});}else{$('.backTop').stop().animate({opacity:0});}
	//header
	var lastPos = Gdh - Gwh;
	if(_nowHeight >= lastPos && Gdh > (Gwh + 100)){
		$('#header').stop().animate({'top': -135 + 'px'},150);
		$('.sideBarPad').css({'height': 100 + 'vh'}); //header上縮之後menu調整為100vh
	}else{
		$('#header').stop().animate({'top': 0 + 'px'},150);
	}
});
      $('.backTop').click(function () {
        $('html,body').animate({
          scrollTop: $('#main').offset().top
        }, 800, 'easeOutCirc');
      });

    }, 100)
  }
}


</script>