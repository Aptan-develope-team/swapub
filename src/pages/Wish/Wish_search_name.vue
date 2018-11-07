<template>
<div>
<!-- <body class="item searchPage"> -->
	<!-- Header -->
	<app-header></app-header>
	<!-- Header END -->
	<div id="main">
		<div class="breadcrumb">
			<i>Swapub</i><i> &#62; 交換</i><i> &#62; 搜尋</i><i></i><i></i>
		</div>
		<div class="content">
			
			<p class="searchCounter">搜尋結果：<span>20</span>筆符合</p>
			
			<div class="conBlock srNamePad action">
				<div class="itemPad">
					<div class="itemBox">
						<div class="itemImg"><img src="../../../static/images/sr_na_img_1.jpg" alt=""></div>
						<div class="itemTitle"><h3>Sia</h3></div><a href="menu_u_myitem_other.html?j"></a>
					</div>
					<div class="itemBox">
						<div class="itemImg"><img src="../../../static/images/sr_na_img_2.jpg" alt=""></div>
						<div class="itemTitle"><h3>Sam</h3></div><a href="menu_u_myitem_other.html?j"></a>
					</div>
					<div class="itemBox">
						<div class="itemImg"><img src="../../../static/images/sr_na_img_3.jpg" alt=""></div>
						<div class="itemTitle"><h3>Sphia</h3></div><a href="menu_u_myitem_other.html?j"></a>
					</div>
					<div class="itemBox">
						<div class="itemImg"><img src="../../../static/images/sr_na_img_4.jpg" alt=""></div>
						<div class="itemTitle"><h3>Sam antoner</h3></div><a href="menu_u_myitem_other.html?j"></a>
					</div>
					<div class="itemBox">
						<div class="itemImg"><img src="../../../static/images/sr_na_img_5.jpg" alt=""></div>
						<div class="itemTitle"><h3>Steven</h3></div><a href="menu_u_myitem_other.html?j"></a>
					</div>
				</div>
			</div>
			<p class="hotSearch">熱門搜尋：<a>iphone</a><a>ps4</a><a>adidas</a>
			<a>vans</a><a>後背包</a><a>外套</a><a>switch</a><a>niek</a></p>
		</div>
	   <div class="btn_openPop"></div>
	</div><!-- main END -->
	
	<!-- Footer -->
	<app-footer></app-footer>
	<div class="backTop CGt"></div>
	<!-- Light Box -->
	<div id="popContainer" style="top:-100vh;">
		<div class="popContent"></div>
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
	data() {
    return {
		
    }
  },
  created(){
	 
  },
  methods:{
		
	},
  mounted() {
    setTimeout(() => {
      var element = document.getElementById("body_class");
      element.removeAttribute("class");
      element.classList.add("item", "searchPage");
      var element2 = document.getElementById("wish");
      element2.classList.add("action");
      $('.loadPad').animate({
        opacity: 0
      }, 1000, function () {
        $('.loadPad').css({
          'display': 'none'
        });
      });
      /* searchPage */
      var $srType = $('.mainBtPad').find('a'),
        $srLen = $srType.length,
        $srCounter = $('.searchCounter'),
        $cAmount = $srCounter.find('span'),
        $srTypePad = $('.content').find('.conBlock'),
        $srPadLen = $srTypePad.length,
        $hotSearch = $('.hotSearch');

      $srType.click(function () {
        var ind = $(this).index();
        $cAmount.html('20');
        $hotSearch.fadeIn();
        $srType.eq(ind).addClass('action').siblings().removeClass('action');
        $srTypePad.eq(ind).addClass('action').siblings().removeClass('action');
        if (ind !== 0) {
          $cAmount.html('5');
          $hotSearch.fadeOut();
        }
      });
      $('.iHeart').click(function () {
        $(this).toggleClass('action');
      });

      $(window).on('load', function () {
        if ($(window).width() > 1024) {
          var s = skrollr.init();
        }

        $('#header').find('.market').addClass('action');

      })


    }, 0)
  }
}


</script>