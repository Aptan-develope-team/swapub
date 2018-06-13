<template>
<div>
<!-- <body class="expPage noSearchPage"> -->
	<!-- Header -->
 <app-header></app-header>
	<!-- Header END -->
	<div id="main">
		<div class="breadcrumb">
			<i>Swapub</i><i> &#62; 關於Swapub</i><i></i><i></i><i></i>
		</div>
		<div class="content">
			<div class="titleMenu CGt">
				<ul>
					<li><router-link to='/exp_about' active-class="about action">關於Swapub</router-link></li>
					<li><router-link to='/exp_rule' active-class="rule action">隱私權與使用條款</router-link></li>
					<li><router-link to='/exp_qa' active-class="rule action">FAQ</router-link></li>
					<li><a href="#" class="social_icon social_tw"><i class="ico_tw"></i>Twitter</a></li>
					<li><a href="#" class="social_icon social_fb"><i class="ico_fb"></i>Facebook</a></li>
				</ul>
			</div>
			<div class="conBlock">
				<h1>What is Swapub?</h1>
				<div class="aboutDetail">
					<p>Swapub is an app based around the concept of "bartering". Its inspiration comes from the story that started with the trading of a paper clip and ended with a house.<br>
					Through Swapub, you can experience the thrill of treasure hunting and relive those special moments. For a small fee, you will find through bartering the kind of happiness that money just can't buy!</p>
					<h2>A Market without Distances</h2>
					<p>In a market filled with everything you can imagine, you can hunt for treasure from all around the world and meet with users in different places. Support for switching between different languages and a currency calculator takes the hassle out of bartering with people in different countries. The choice of different filters will help you find what you want to barter for more quickly so that you can have fun treasure hunting.</p>
					<h2>Capture the Value of Items Perfectly</h2>
					<p>The image editing function can help you create a story that fully conveys the charm of the item. You can upload three photos from different angles and with all their details. You can also record a video to show the item in motion. Your item can be listed in just a few simple steps.</p>
					<h2>The Wishing Wall</h2>
					<p>You don't have to wait passively. Make a wish and post what you are looking for to the Wishing Wall. Use images and descriptions to make your wish more tangible. The Wishing Wall will allow your wishes to be seen by more people and increase the chance that your dreams will come true.</p>
					<h2>Well-Organized Personal Space and Record</h2>
					<p>In About Me, you can see all of your items and wishes so you can keep them neatly organized. Every transaction is recorded in full so you can keep track of what's happening with every transaction at all times.</p>
					<h2>Trading with Personal Warmth</h2>
					<p>The incorporation of social networking into the exchanges with other people in the market means transactions are no longer all about cold hard cash changing hands. There are now more options that come together to deliver more surprises. Find trading buddies through comments and communications during the trading process so you can share resources, hobbies, and meet more like-minded enthusiasts. You can also share your items and wishes to other social networks so more people can take part in your journey into bartering.</p>
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
		<div class="popContent">

		</div>
	</div>
	<!-- Loader  -->
	<div class="loadPad"><div class="loader_g"><i></i><i></i><i></i><i></i></div></div>
</div>
</template>

 <script>
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer

  },
  mounted() {
    setTimeout(() => {
      var element = document.getElementById("body_class");
      element.removeAttribute("class");
      element.classList.add("expPage", "noSearchPage");

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

    }, 0)
  }
}


</script>