<template>

<div>
    <!-- Header -->
	<app-header></app-header>
	<!-- Header END -->
<div id="main">
		<div class="sliderPad">
			<div class="sliderCont">
				<div class="sliderMask">
					<ul>
						<li><img src="../../../static/images/slider_01.jpg" alt="" width="970px"></li>
						<li><img src="../../../static/images/slider_01.jpg" alt="" width="970px"></li>
						<li><img src="../../../static/images/slider_01.jpg" alt="" width="970px"></li>
						<li><img src="../../../static/images/slider_01.jpg" alt="" width="970px"></li>
						<li><img src="../../../static/images/slider_01.jpg" alt="" width="970px"></li>
					</ul>
				</div>
			</div>
			<!-- <div class="sliderBtPad">
				<i class="sliderBt fa fa-angle-left" aria-hidden="true"></i>
				<i class="sliderBt fa fa-angle-right" aria-hidden="true"></i>
			</div> -->
			<div class="sliderCtrl"></div>
		</div>
		<div class="content">
			<div class="indexBtPad clear">
				<router-link to ='/market_upload' class="btn_item">+物品</router-link>
				<router-link to ='/wish_upload' class="btn_wish">+許願</router-link>
			</div>
			<p class="textAd">行銷文案說明，保留一行文字區塊</p>
			<div class="conBlock wishPad">
				<div class="conTitle">
					<div class="assign btn_assign">
						<a>全部</a>
					</div>
					<h1>許願牆</h1>
					<p>[許一個心願，讓大家替你實現]</p>
				</div>
				<div class="itemPad">
<!--
				<div class="itemBox itemL" v-for="(product,index) in resData" v-if="index == 0">
						<div class="itemTitle">
							<h4>我想要...</h4>
							<h3>{{product.Name}}</h3>
						</div>
						<div class="itemImg"><i><img :src="(product.PictureUrls)" alt=""></i></div>
						<router-link :to="{name:'Wish_detail',params: { id: product.ID}} "></router-link>
						<div class="itemInfo">
							<p>{{product.Description}}</p>
							<p class="timer">{{product.Date}}</p>
							<span class="iUser"><i><img :src="(product.UserInfo.AvatarUrl)"  alt=""/></i>{{product.UserInfo.Name}}</span>
							<span class="iChat"><h3>{{product.Status}}</h3></span>
						</div>
					</div> 				
					v-if="index > 0 && index <= 9 "
-->

					<div class="itemBox itemS" v-for="(product,index) in resData" >
						
						<div class="itemTitle">
							<h4>我想要...</h4>
							<h3>{{product.Name}}</h3>
					  </div>
						<div class="itemImg"><i><img v-bind:src="(product.PictureUrl)"  alt=""/></i></div>									
						<router-link :to="{name:'Wish_detail',params: { id: product.ID}} "></router-link>
						
						<div class="itemInfo">	
						<p>{{product.Description}}</p>
						<p class="timer">{{product.Date}}</p>
						<span class="iUser"><i><img v-bind:src="(product.UserInfo.AvatarUrl)"  alt=""/></i>{{product.UserInfo.Name}}</span>					
						<span class="iChat"><h3>{{product.MessageCount}}</h3></span>
						</div>
					</div>
<!--

					<div class="itemBox">
						<div class="itemTitle">
							<h4>我想要...</h4>
							<h3>拍立得相機粉紅</h3>
						</div>

						<div class="itemImg"><img src="../../../static/images/ws_it_img_1.jpg" alt=""></div>
						<a href="wish_detail.html?j"></a>
						
						<div class="itemInfo">
							<p>Nikon類單眼相機，一定要此款式，其他暫無需求</p>
							<p class="timer">1小時前</p>

							<span class="iUser"><i><img src="../../../static/images/ws_user_img_1.png" alt=""></i>Amy Tesi</span>
							<span class="iChat">5</span>
						</div>
					</div>

					
					<div class="itemBox">
						<div class="itemTitle">
							<h4>我想要...</h4>
							<h3>Nikon類單眼相機</h3>
						</div>
						<div class="itemImg"><img src="../../../static/images/ws_it_img_2.jpg" alt=""></div>
						<a href="wish_detail.html?j"></a>
						<div class="itemInfo">
							<p>類似款式類單眼相機</p>
							<p class="timer">1小時前</p>
							<span class="iUser"><i><img src="../../../static/images/ws_user_img_1.png" alt=""></i>Amy Tesi</span>
							<span class="iChat">5</span>
						</div>
					</div>
					<div class="itemBox">
						<div class="itemTitle">
							<h4>我想要...</h4>
							<h3>Nikon類單眼相機</h3>
						</div>
						<div class="itemImg"><img src="../../../static/images/ws_it_img_3.jpg" alt=""></div>
						<a href="wish_detail.html?j"></a>
						<div class="itemInfo">
							<p>iphone6 plus粉紅</p>
							<p class="timer">1小時前</p>
							<span class="iUser"><i><img src="../../../static/images/ws_user_img_1.png" alt=""></i>Amy Tesi</span>
							<span class="iChat">6</span>
						</div>
					</div>
					<div class="itemBox noImg">
						<div class="itemTitle">
							<h4>我想要...</h4>
							<h3>PS VR眼鏡</h3>
						</div>
						<div class="itemImg"><img src="#" alt=""></div>
						<a href="wish_detail.html?c"></a>
						<div class="itemInfo">
							<p>徵求PS小遊戲的vr眼鏡</p>
							<p class="timer">2小時前</p>
							<span class="iUser"><i><img src="../../../static/images/ws_user_img_2.png" alt=""></i>Peter Lin</span>
							<span class="iChat">6</span>
						</div>
					</div>
					<div class="itemBox">
						<div class="itemTitle">
							<h4>我想要...</h4>
							<h3>VR數位眼鏡</h3>
						</div>
						<div class="itemImg"><img src="../../../static/images/ws_it_img_4.jpg" alt=""></div>
						<a href="wish_detail.html?c"></a>
						<div class="itemInfo">
							<p>VR數位眼鏡，全新改版新款式</p>
							<p class="timer">2小時前</p>
							<span class="iUser"><i><img src="../../../static/images/ws_user_img_2.png" alt=""></i>Peter Lin</span>
							<span class="iChat">6</span>
						</div>
					</div>
					<div class="itemBox">
						<div class="itemTitle">
							<h4>我想要...</h4>
							<h3>iphone8</h3>
						</div>
						<div class="itemImg"><img src="../../../static/images/ws_it_img_5.jpg" alt=""></div>
						<a href="wish_detail.html?c"></a>
						<div class="itemInfo">
							<p>求i8手機</p>
							<p class="timer">1小時前</p>
							<span class="iUser"><i><img src="../../../static/images/ws_user_img_1.png" alt=""></i>Amy Tesi</span>
							<span class="iChat">22</span>
						</div>
					</div>
					<div class="itemBox noImg">
						<div class="itemTitle">
							<h4>我想要...</h4>
							<h3>演唱會共遊</h3>
						</div>
						<div class="itemImg"><img src="#" alt=""></div>
						<a href="wish_detail.html?j"></a>
						<div class="itemInfo">
							<p>徵求一名演唱會共遊者，門票由我來提供，詳細時間有興趣再敲敲畫說明</p>
							<p class="timer">14小時前</p>
							<span class="iUser"><i><img src="../../../static/images/ws_user_img_2.png" alt=""></i>Peter Lin</span>
							<span class="iChat">6</span>
						</div>
					</div>
					<div class="itemBox">
						<div class="itemTitle">
							<h4>我想要...</h4>
							<h3>棒球帽</h3>
						</div>
						<div class="itemImg"><img src="../../../static/images/ws_it_img_6.jpg" alt=""></div>
						<a href="wish_detail.html?j"></a>
						<div class="itemInfo">
							<p>收各式樣的棒球帽，不限品牌，友都可以先討論，再決定要不要收，款式月薪越好，願意出高價收</p>
							<p class="timer">18小時前</p>
							<span class="iUser"><i><img src="../../../static/images/ws_user_img_3.png" alt=""></i>Andy labor</span>
							<span class="iChat">6</span>
						</div>
					</div>
					<div class="itemBox">
						<div class="itemTitle">
							<h4>我想要...</h4>
							<h3>SAINT LAURENT</h3>
						</div>
						<div class="itemImg"><img src="../../../static/images/ws_it_img_7.jpg" alt=""></div>
						<a href="wish_detail.html?c"></a>
						<div class="itemInfo">
							<p>收!SAINT LAU-RENT LouLou Monogram Small leather shoulder bag</p>
							<p class="timer">20小時前</p>
							<span class="iUser"><i><img src="../../../static/images/ws_user_img_4.png" alt=""></i>我(Jing YunLee)</span>
							<span class="iChat">6</span>
						</div>
					</div>
					<div class="itemBox">
						<div class="itemTitle">
							<h4>我想要...</h4>
							<h3>SAINT LAURENT</h3>
						</div>
						<div class="itemImg"><img src="../../../static/images/ws_it_img_8.jpg" alt=""></div>
						<a href="wish_detail_date.html?c"></a>
						<div class="itemInfo">
							<p>求一支apple watch，一代或二代都可以收</p>
							<p class="timer">01/20/2018</p>
							<span class="iUser"><i><img src="../../../static/images/ws_user_img_5.png" alt=""></i>Rock stone</span>
							<span class="iChat">29</span>
						</div>
					</div>
					<div class="itemBox">
						<div class="itemTitle">
							<h4>我想要...</h4>
							<h3>iphone8</h3>
						</div>
						<div class="itemImg"><img src="../../../static/images/ws_it_img_5.jpg" alt=""></div>
						<a href="wish_detail.html?c"></a>
						<div class="itemInfo">
							<p>求i8手機</p>
							<p class="timer">1小時前</p>
							<span class="iUser"><i><img src="../../../static/images/ws_user_img_1.png" alt=""></i>Amy Tesi</span>
							<span class="iChat">22</span>
						</div>
					</div>
					<div class="itemBox noImg">
						<div class="itemTitle">
							<h4>我想要...</h4>
							<h3>演唱會共遊</h3>
						</div>
						<div class="itemImg"><img src="#" alt=""></div>
						<a href="wish_detail.html?j"></a>
						<div class="itemInfo">
							<p>徵求一名演唱會共遊者，門票由我來提供，詳細時間有興趣再敲敲畫說明</p>
							<p class="timer">14小時前</p>
							<span class="iUser"><i><img src="../../../static/images/ws_user_img_2.png" alt=""></i>Peter Lin</span>
							<span class="iChat">6</span>
						</div>
					</div>
					<div class="itemBox">
						<div class="itemTitle">
							<h4>我想要...</h4>
							<h3>棒球帽</h3>
						</div>
						<div class="itemImg"><img src="../../../static/images/ws_it_img_6.jpg" alt=""></div>
						<a href="wish_detail.html?j"></a>
						<div class="itemInfo">
							<p>收各式樣的棒球帽，不限品牌，友都可以先討論，再決定要不要收，款式月薪越好，願意出高價收</p>
							<p class="timer">18小時前</p>
							<span class="iUser"><i><img src="../../../static/images/ws_user_img_3.png" alt=""></i>Andy labor</span>
							<span class="iChat">6</span>
						</div>
					</div>
					<div class="itemBox">
						<div class="itemTitle">
							<h4>我想要...</h4>
							<h3>SAINT LAURENT</h3>
						</div>
						<div class="itemImg"><img src="../../../static/images/ws_it_img_7.jpg" alt=""></div>
						<a href="wish_detail.html?c"></a>
						<div class="itemInfo">
							<p>收!SAINT LAU-RENT LouLou Monogram Small leather shoulder bag</p>
							<p class="timer">20小時前</p>
							<span class="iUser"><i><img src="../../../static/images/ws_user_img_4.png" alt=""></i>我(Jing YunLee)</span>
							<span class="iChat">6</span>
						</div>
					</div>
					<div class="itemBox">
						<div class="itemTitle">
							<h4>我想要...</h4>
							<h3>SAINT LAURENT</h3>
						</div>
						<div class="itemImg"><img src="../../../static/images/ws_it_img_8.jpg" alt=""></div>
						<a href="wish_detail_date.html?c"></a>
						<div class="itemInfo">
							<p>求一支apple watch，一代或二代都可以收</p>
							<p class="timer">01/20/2018</p>
							<span class="iUser"><i><img src="../../../static/images/ws_user_img_5.png" alt=""></i>Rock stone</span>
							<span class="iChat">29</span>
						</div>
					</div>-->
				</div>
			</div>
		</div>
	   <div class="btn_openPop"></div>
	</div> <!-- main END -->

	<!-- Footer -->
	<app-footer></app-footer>
	<div class="backTop CGt"></div>
	<!-- Light Box -->
	<div id="popContainer" style="top:-100vh;">
		<div class="popContent popAssignPad">
			<div class="btn_closePop"></div>
			<div class="assignList clear">
				<a><i><img src="../../../static/images/icon_item_all.svg" alt="" @click="setCategory('')"></i>全部</a>
				<a><i><img src="../../../static/images/icon_item_man.svg" alt="" @click="setCategory('524a426c430cb207947788fd')"></i>男士時尚</a>
				<a><i><img src="../../../static/images/icon_item_lady.svg" alt="" @click="setCategory('524a427e430cb207947788fe')"></i>女士時尚</a>
				<a><i><img src="../../../static/images/icon_item_baby.svg" alt="" @click="setCategory('524a428d430cb207947788ff')"></i>媽咪寶貝</a>
				<a><i><img src="../../../static/images/icon_item_pet.svg" alt="" @click="setCategory('524a4298430cb20794778900')"></i>寵物用品</a>
				<a><i><img src="../../../static/images/icon_item_book.svg" alt="" @click="setCategory('524a491e430cb20c9c163a3c')"></i>書籍</a>
				<a><i><img src="../../../static/images/icon_item_game.svg" alt="" @click="setCategory('524a4929430cb20c9c163a3d')"></i>遊戲</a>
				<a><i><img src="../../../static/images/icon_item_media.svg" alt="" @click="setCategory('524a4931430cb20c9c163a42')"></i>數位影音</a>
				<a><i><img src="../../../static/images/icon_item_toy.svg" alt="" @click="setCategory('524a4941430cb20c9c163a43')"></i>玩具公仔</a>
			</div>
			<div class="assignList clear">
				<a><i><img src="../../../static/images/icon_item_3c.svg" alt="" @click="setCategory('524a494f430cb20c9c163a44')"></i>3C電子</a>
				<a><i><img src="../../../static/images/icon_item_electric.svg" alt="" @click="setCategory('524a4957430cb20c9c163a45')"></i>家電</a>
				<a><i><img src="../../../static/images/icon_item_furniture.svg" alt="" @click="setCategory('524a495f430cb20c9c163a46')"></i>傢俱</a>
				<a><i><img src="../../../static/images/icon_item_garden.svg" alt="" @click="setCategory('524a4966430cb20c9c163a47')"></i>居家園藝</a>
				<a><i><img src="../../../static/images/icon_item_sport.svg" alt="" @click="setCategory('524a4970430cb20c9c163a48')"></i>戶外活動</a>
				<a><i><img src="../../../static/images/icon_item_fitness.svg" alt="" @click="setCategory('524a497b430cb20c9c163a49')"></i>健身</a>
				<a><i><img src="../../../static/images/icon_item_makeup.svg" alt="" @click="setCategory('524a4983430cb20c9c163a4a')"></i>美妝保養</a>
				<a><i><img src="../../../static/images/icon_item_food.svg" alt="" @click="setCategory('524a498b430cb20c9c163a4b')"></i>美食</a>
				<a><i><img src="../../../static/images/icon_item_stationery.svg" alt="" @click="setCategory('524a4994430cb20c9c163a4c')"></i>文具用品</a>
			</div>
			<div class="assignList clear">
				<a><i><img src="../../../static/images/icon_item_art.svg" alt="" @click="setCategory('524a499d430cb20c9c163a4d')"></i>藝術古董</a>
				<a><i><img src="../../../static/images/icon_item_musical.svg" alt="" @click="setCategory('524a49a6430cb20c9c163a4e')"></i>樂器</a>
				<a><i><img src="../../../static/images/icon_item_crafts.svg" alt="" @click="setCategory('524a49c2430cb20c9c163a4f')"></i>手工藝品</a>
				<a><i><img src="../../../static/images/icon_item_traffic.svg" alt="" @click="setCategory('525cf3bb430cb210a8fc554c')"></i>交通工具</a>
				<a><i><img src="../../../static/images/icon_item_ticket.svg" alt="" @click="setCategory('525cf3c1430cb210a8fc555f')"></i>票券</a>
				<a><i><img src="../../../static/images/icon_item_service.svg" alt="" @click="setCategory('54ae3cb2bdf19b2008aa52c9')"></i>個人服務</a>
				<a><i><img src="../../../static/images/icon_item_gift.svg" alt=""></i>免費贈與</a>
			</div>
		</div>
	</div>
	<!-- Loader  -->
	<div class="loadPad"><div class="loader_g"><i></i><i></i><i></i><i></i></div></div>

</div>

</template>
<script>
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import api from '../../api/Api.js';

export default {
  components: {
    "app-header": Header,
    "app-footer": Footer
	},
	data() {
    return {
		resData:[],
		data:{}
    }
  },
  created(){
	 this.getItem();
	 
  },
  methods:{
	  async getItem(){
	  this.getToken();  
		this.resData = await api.get('GetWishs',localStorage.getItem('api_token'),'&filterDate=16')
		console.log(this.resData)
		},

		async getToken(){
			await api.getToken()
		},
		async setCategory(id){
			 this.resData = await api.get('GetWishs',localStorage.getItem('api_token'),'&filterDate=16'+'&category='+id)
		 }
	},
updated(){		
				 //item排版
       var $outBox = $('.itemPad'), //外層容器
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
          //console.log(boxHeightArr);
          if (i < cols) {
            boxHeightArr.push(boxH);
          } else {
            minHeight = Math.min(...boxHeightArr);
            var minIndex = getIndexByValue(boxHeightArr, minHeight);
            $allBox[i].style.position = "absolute";
            $allBox[i].style.top = minHeight + "px";
            $allBox[i].style.left = minIndex * boxW + "px";
            //取得item的margin-bottom
					  var styles = window.getComputedStyle($allBox[i]),
					  boxMG = parseFloat(styles['marginBottom']);
					  boxHeightArr[minIndex] += $allBox[i].offsetHeight + boxMG;
            var maxHeight = Math.max(...boxHeightArr);
           	$outBox.css({'height': maxHeight * boxHeightArr.length / cols});
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
          var $allBox = $outBox.find(".itemBox"),
            lastBox = $allBox[$allBox.length - 1];
          (lastBoxDis = lastBox.offsetTop),
          (screenH =
            document.documentElement.clientHeight ||
            document.body.clientHeight),
          (scrollH = scroll().top),
          (maxH = scrollH + screenH);
          if (lastBoxDis <= maxH) {
            return true;
          } else {
            return false;
          }
        }
},
  mounted() {
    setTimeout(() => {
     
      var element = document.getElementById("body_class");
      element.removeAttribute("class");
      element.classList.add("wish", "mainPage");
      $(".loadPad").animate({
        opacity: 0
      }, 1000, function () {
        $(".loadPad").css({
          display: "none"
        });
			});
			
     
      $(window).on("load", function () {
        if ($(window).width() > 1024) {
          var s = skrollr.init();
        }
        // $('#header').find('.wish').addClass('action');
			});
				$('.backTop').click(function(){$('html,body').animate({scrollTop:$('#main').offset().top}, 800, 'easeOutCirc');});
			
				var $assBox = $('.assign').find('a'),
		$assItem = $('.popAssignPad').find('.assignList').find('a');
	$assItem.click(function(){
		var ind = $(this).index(),
			txt = $(this).text();
		$assBox.text(txt);
		$('#popContainer').stop().animate({top : -100 + 'vh'}, 500, function(){
			$('#popContainer').removeClass();
		});
	 });
	 
						/* index Slider */
	var i = 0,
		$sliderCont = $('.sliderCont'),
		$sliderUL = $sliderCont.find('ul'),
		$sliderLI = $sliderCont.find('li'),
		$sliderLeng = $sliderLI.length,
		$sliderNow = 0, //現在的slider 位置
		$sliderBt = $('.sliderBTPad'),
		$sliderBtList = $sliderBt.find('i'),
		$sliderCtrl = $('.sliderCtrl'),
		ind, timer, showSpeed = 8000, stop = false;
    if($sliderLeng <= 5){
			for(i=0; i < $sliderLeng; i++){
				$sliderCtrl.append("<i></i>");
			}
	}
	var $sliderList = $sliderCtrl.find('i');
	$sliderList.eq(0).addClass('action');
	$sliderUL.css({width:$sliderLeng*1200+"px"});
	// 點擊點點
	$sliderList.click(function(){
		ind = $(this).index();
		if(ind !== $sliderNow){
			$sliderNow = ind;
			$sliderUL.css({left:"0"});
		}
		$(this).addClass('action').siblings().removeClass('action');
		$sliderUL.stop().animate({"margin-left":"-1200"*ind+"px"}, 1500 ,'easeOutCubic');
		$sliderList.eq(ind).addClass('action').siblings().removeClass('action');
	});
	// 自動輪播
	timer = setTimeout(move, showSpeed);
	$sliderList.hover(function(){
		stop = true;
		clearTimeout(timer);
	}, function(){
		stop = false;
		timer = setTimeout(move, showSpeed);
	});
	function move(){
		if($sliderNow < $sliderLeng - 1){
		   $sliderNow += 1;
		   }else{
			   $sliderNow = 0;
			   $sliderUL.css({left:"0"});
		   }
		$sliderUL.stop().animate({"margin-left":"-1200"*$sliderNow+"px"}, 1500 ,'easeOutCubic');
		$sliderList.eq($sliderNow).addClass('action').siblings().removeClass('action');
		timer = setTimeout(move, showSpeed);
	}
	$sliderBtList.click(function(){
		var $ind = $(this).index();
		if($ind !== 1 && $sliderNow > 0){
			$sliderNow --;
			if($sliderNow === 0){
				$sliderBtList.eq(0).addClass('false');
			}
		}else if($sliderNow < $sliderLeng - 1){
			$sliderBtList.eq(0).removeClass('false');
			$sliderNow ++;
		}else{
			console.log("none");
		}
		$sliderCont.css({left:"-"+$sliderNow*100+"vw"});
		$sliderList.eq($sliderNow).addClass('action').siblings().removeClass('action');
		console.log($ind, "+" ,$sliderNow);
	});
						 
						 
						 $(document).ready(function () {
        $(".btn_assign").click(function () {
          $("#popContainer")
            .stop()
            .animate({
              top: 0
            }, 300);
          $("#popContainer").addClass("popAssign");
        });
        //自動載入還沒寫.........
        /* var htmlobj = $.ajax({url:"items.html",async:false});
			var $newIten = htmlobj.find('.itemBox');
			window.onscroll = function(){
				var dataArr = [];
				
			} */
      });
      $(".btn_closePop").click(function () {
        $("#popContainer")
          .stop()
          .animate({
            top: -100 + "vh"
          }, 500, function () {
            // $('#popContainer').fadeOut();
            $("#popContainer").removeClass();
          });
        if ($("body").hasClass("mDeal")) {
          $(".post")
            .find(".btn_submit")
            .css({
              display: "none"
            })
            .siblings()
            .fadeIn();
          $(".post")
            .find(".inquireDeta.userData")
            .css({
              display: "none"
            })
            .siblings(".inquireDeta")
            .fadeIn();
        }
      });
    }, 500);
  }
};
</script>