<template>
 <div>
	<!-- Header -->
	<!-- <div id="header">

	</div> -->
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
			<div class="conBlock marketPad">
				<div class="conTitle">
					<div class="assign btn_assign">
						<a>全部</a>
					</div>
					<h1>市集</h1>
					<p>[享受交換樂趣，充滿無限可能]</p>
				</div>
				<div class="itemPad clear" >
					 <div class="itemBox itemL" v-for="(product,index) in resData" v-if="index == 0" >
						<div class="itemImg"><img :src="(product.PictureUrls)[0]" alt="" ></div>
						<router-link :to="{name:'Market_detail',params: { id: product._id}} "></router-link>
						<div class="itemInfo">
							<span class="iQua">{{ getExchangeCount(product._id) }}</span><span class="iHeart" id="iHeart"></span>
						</div>
						<div class="itemTitle">
							<h3>{{product.ProductName}}</h3>
							<p>{{product.ProductName}}</p>
						</div>
					</div>
					<div class="itemBox itemS" v-for="(product,index) in resData" v-if="index > 0 && index <= 9 ">
						<div class="itemImg"><img :src="product.PictureUrls[0]" alt="" ></div>
						<router-link :to="{name:'Market_detail',params: { id: product._id}}"></router-link>
						<div class="itemInfo">
							<span class="iQua">4</span><span class="iHeart action"></span>
						</div>
						<div class="itemTitle">
							<h3>{{product.ProductName}}</h3>
						</div>
					</div>
					<div class="itemBox itemL itemAd">
						<p>廣告</p>
						<div class="itemImg"><img src="../../../static/images/mk_it_img_11.jpg" alt=""></div>
						<a href="#"></a>
						<div class="itemInfo">
							<span>&nbsp;</span><span class="iHeart"></span>
						</div>
						<div class="itemTitle">
							<h3>《天堂M》凌晨開服瞬間18萬人熱爆，遊戲橘子：營運預算無上限</h3>
						</div>
					</div>
					<div class="itemBox itemS" v-for="(product,index) in resData" v-if="index > 9 ">
						<div class="itemImg"><img :src="product.PictureUrls[0]" alt=""></div>
						<router-link :to="{name:'Market_detail',params: { id: product._id}}"></router-link>
						<div class="itemInfo">
							<span class="iQua">4</span><span class="iHeart action"></span>
						</div>
						<div class="itemTitle">
							<h3>{{product.ProductName}}</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	   <div class="btn_openPop"></div>
	</div><!-- main END -->

	<!-- Footer -->
	<!-- <div id="footer">
	</div> -->
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
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'
import api from '../../api/Api.js'

export default {
  components: {
    'app-header': Header,
	'app-footer': Footer,
  },
  name: 'HelloWorld',
  data() {
    return {
		resData:[],
		data:{},
		Owner:{},
		User:{},
		Exchange:{}
    }
  },
  created(){
	 this.getItem();
	 this.getUser();
	 
  },
  methods:{
	  async getItem(){
	    this.getToken()
		  this.resData = await api.get('GetProductWithLocationAndCategory_V2',localStorage.getItem('api_token'),'&filterDate=16')
		  console.log(this.resData)
		// for (var i = 0; i < this.resData.length; i++) {
		// }
	  },
	   async getToken(){
		   await api.getToken()
	   },
	//    goDetail(id,owner){
	// 	   if(owner.ID != this.User.ID){
	// 	   		this.$router.push({name:'Market_detail_follow',params: { id:id}})
	// 	   }
	// 	   else{
	// 		    this.$router.push({name:'Market_detail',params: { id:id}})

	// 	   }		   
	//    },
	   async getUser(){
			this.User = await api.get('User',localStorage.getItem('login_token'),'')
	   },	
	   getExchangeCount(id){
			this.Exchange = api.get('Message',localStorage.getItem('api_token'),'&productID=' + id )
		    console.log(this.Exchange)
			return this.Exchange.length
		 },
		 async setCategory(id){
			 this.resData = await api.get('GetProductWithLocationAndCategory_V2',localStorage.getItem('api_token'),'&filterDate=16'+'&category='+id)
		 }
		 
  },
  updated(){
	   setTimeout(() => {			 
		  var $itemPad = $('.itemPad'),
          $itemPadW = $itemPad.width(),
          itemW = $itemPadW / 5 - 8, // .itemPad寬度 / 5行 - (marginRight=10 * 4個 / 5行)
          $allBox = $itemPad.find('.itemBox'),
          boxLen = $allBox.length,
          $boxS = $itemPad.find('.itemS'),
          boxSL = $boxS.length,
          $boxL = $itemPad.find('.itemL');
        var boxHArr = [];
        for (var i = 0; i < boxSL; i++) {
          var boxH = $boxS.eq(i).height();
          boxHArr.push(boxH);
          var maxHeight = Math.max(...boxHArr);
		  //console.log('maxHeight= ' + maxHeight);
          $boxS.css({
            'min-height': maxHeight + 'px'
		  });
          $boxL.css({
            'min-height': maxHeight * 2 + 10 + 'px'
          });
        }
		 $('.itemPad').masonry({
          itemSelector: '.itemBox',
          columnWidth: itemW,
          gutter: 10
		});
		   $('.iHeart').click(function(){
	    	$(this).toggleClass('action');
		  });
	   },500)
  },
  mounted() {
	 
	  
    setTimeout(() => {	
	 
      var element = document.getElementById("body_class");
      element.removeAttribute("class");
      element.classList.add("index", "mainPage");

      $('.loadPad').animate({
        opacity: 0
      }, 1000, function () {
        $('.loadPad').css({
          'display': 'none'
        });
	  });
	 
	$('.backTop').click(function(){$('html,body').animate({scrollTop:$('#main').offset().top}, 800, 'easeOutCirc');});
	    $(window).on('load', function () {
          if ($(window).width() > 1024) {
          var s = skrollr.init();
				}
				
		})

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
	//item排版_marketPad
        
	
	$(document).ready(function () {

			  

        $('.btn_assign').click(function () {
          $('#popContainer').stop().animate({
            top: 0
          }, 300);
          $('#popContainer').addClass('popAssign');
        })
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
	  
    }, 100)
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
