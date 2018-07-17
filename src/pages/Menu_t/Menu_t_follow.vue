<template>
<div>
<!-- <body class="item noSearchPage menuPage mFollow"> -->
	<!-- Header -->
	<app-header></app-header>
	<!-- Header END -->
	<div id="main">
		<div class="breadcrumb">
			<i>Swapub</i><i> &#62; 我的追蹤</i><i></i><i></i><i></i>
		</div>
		<div class="content">
            <h1>我的追蹤(<span>7</span>)</h1>
            <div class="conBlock">
                <div class="itemPad clear">
					<div class="itemBox" v-for="track in Track">
                        <span class="iHeart"></span>
						<div class="itemImg"><img :src="track.PictureUrl" alt=""></div>
						<router-link :to="{name:'Market_detail',params: { id: track.ProductID}} "></router-link>
						<div class="itemInfo">
							<span class="iQua">{{track.OfferNum}}</span><span class="iMark">194.92公里</span>
						</div>
						<div class="itemTitle">
							<h3>{{track.ProductName}}</h3>
						</div>
					</div>
					<!-- <div class="itemBox">
                        <span class="iHeart"></span>
						<div class="itemImg"><img src="../../../static/images/mk_it_img_22.jpg" alt=""></div>
						<a href="item_detail_follow.html?j"></a>
						<div class="itemInfo">
							<span class="iQua">1192</span><span class="iMark">194.92公里</span>
						</div>
						<div class="itemTitle">
							<h3>3.1 PHILLIP LIM</h3>
						</div>
					</div>
					<div class="itemBox">
                        <span class="iHeart"></span>
						<div class="itemImg"><img src="../../../static/images/ws_it_img_7.jpg" alt=""></div>
						<a href="item_detail_follow.html?j"></a>
						<div class="itemInfo">
							<span class="iQua">48</span><span class="iMark">198.92公里</span>
						</div>
						<div class="itemTitle">
							<h3>3.1 PHILLIP LIM</h3>
						</div>
					</div>
					<div class="itemBox">
                        <span class="iHeart"></span>
						<div class="itemImg"><img src="../../../static/images/mk_it_img_22.jpg" alt=""></div>
						<a href="item_detail_follow.html?j"></a>
						<div class="itemInfo">
							<span class="iQua">20</span><span class="iMark">198.92公里</span>
						</div>
						<div class="itemTitle">
							<h3>3.1 PHILLIP LIM</h3>
						</div>
					</div>
					<div class="itemBox">
                        <span class="iHeart"></span>
						<div class="itemImg"><img src="../../../static/images/mk_it_img_24.jpg" alt=""></div>
						<a href="item_detail_follow.html?j"></a>
						<div class="itemInfo">
							<span class="iQua">86</span><span class="iMark">198.92公里</span>
						</div>
						<div class="itemTitle">
							<h3>3.1 PHILLIP LIM</h3>
						</div>
                    </div>
                    <div class="itemBox">
                        <span class="iHeart"></span>
                        <div class="itemImg"><img src="../../../static/images/mk_it_img_22.jpg" alt=""></div>
                        <a href="item_detail_follow.html?j"></a>
                        <div class="itemInfo">
                            <span class="iQua">20</span><span class="iMark">198.92公里</span>
                        </div>
                        <div class="itemTitle">
                            <h3>SAINT LAURENT LouLou Monogram Small leather ... </h3>
                        </div>
                    </div>
                    <div class="itemBox">
                        <span class="iHeart"></span>
                        <div class="itemImg"><img src="../../../static/images/mk_it_img_24.jpg" alt=""></div>
                        <a href="item_detail_follow.html?j"></a>
                        <div class="itemInfo">
                            <span class="iQua">86</span><span class="iMark">198.92公里</span>
                        </div>
                        <div class="itemTitle">
                            <h3>SAINT LAURENT LouLou Monogram Small leather ... </h3>
                        </div>
                    </div> -->
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
          Track:{}
  
      }
  },
  created(){
    this.getTrack();
  },
  methods:{
      async getTrack(){
					this.Track = await api.get('Track',localStorage.getItem('login_token'),'')
          console.log(this.Track)
      }
  },
  updated(){
    	   setTimeout(() => {			 

        var $itemPad = $('.itemPad'),
          $itemPadW = $itemPad.width(),
          itemW = $itemPadW / 5 - 8,
          $allBox = $itemPad.find('.itemBox'),
          boxLen = $allBox.length;
        var boxHArr = [];
        for (var i = 0; i < boxLen; i++) {
          var boxH = $allBox.eq(i).outerHeight();
          boxHArr.push(boxH);
          var maxHeight = Math.max(...boxHArr);
          // console.log('maxHeight= ' +maxHeight);
          $allBox.css({
            'min-height': maxHeight + 3 + 'px'
          });
        }

        $itemPad.masonry({
          itemSelector: '.itemBox',
          columnWidth: itemW,
          gutter: 10
        });
         },500)
  },
  mounted() {
    setTimeout(() => {
      var element = document.getElementById("body_class");
      element.removeAttribute("class");
      element.classList.add("noSearchPage", "menuPage", "mFollow");

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
        
      $(document).ready(function () {
        // $('.btn_deal').click(function(){
        //     $('#popContainer').removeClass();
        // 	$('#popContainer').stop().animate({top : 0}, 300);
        // 	$('#popContainer').addClass('popDeal');
        // });

      })
      $('.backTop').click(function () {
        $('html,body').animate({
          scrollTop: $('#main').offset().top
        }, 800, 'easeOutCirc');
      });

    }, 100)
  }
}


</script>