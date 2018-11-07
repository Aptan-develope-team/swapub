<template>
<div>
<!-- <body class="item noSearchPage menuPage mSet"> -->
	<!-- Header -->
	<app-header></app-header>
	<!-- Header END -->
	<div id="main">
		<div class="breadcrumb">
			<i>Swapub</i><i> &#62; 設定</i><i></i><i></i><i></i>
		</div>
		<div class="content">
            <h1>設定</h1>
            <form action="">
                <div class="conBlock">
                        <p><span>幣值</span><select name="" id="" v-model="currency"><option value="TWD">新台幣(NT$)</option><option value="AED">AED</option><option value="AUD">AUD</option><option value="CAD">CAD</option><option value="CNY">CNY</option><option value="EUR">EUR</option><option value="HKD">HKD</option><option value="JPY">JPY</option><option value="KRW">KRW</option><option value="USD">USD</option></select></p>
                        <p><span>語言</span><select name="" id="" v-model="language"><option value="ch">繁體中文</option><option value="en">英文</option></select></p>
                        <h3>分享</h3>
                        <p class="setShareList">
                            <label for=""><input type="checkbox" name="" id="">Facebook </label>
                            <label for=""><input type="checkbox" name="" id="">Twitter</label>
                        </p>
                </div>
                <div class="checkPad">
                    <input type="button" class="btn_w btn_cancel" value="取消">
                    <input type="submit" class="btn_o btn_sure" value="送出" @click="setLanguage()">
                </div>
            </form>
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

export default {
   data() {
    return {
      language:"ch",
      currency:"TWD"
    }
   },
  created(){
    if(localStorage.getItem("language") == 'en'){
      this.language = "en"
    }
    if(localStorage.getItem("currency")!="" && localStorage.getItem("currency")!= undefined){
      this.currency = localStorage.getItem("currency")
    }
  },
  components: {
    'app-header': Header,
    'app-footer': Footer

  },
  methods:{
    setLanguage(){
      console.log(this.language)
        localStorage.setItem("language",this.language)
        localStorage.setItem("currency",this.currency)
        alert("設定成功")

      }
  },
  mounted() {
    setTimeout(() => {
      var element = document.getElementById("body_class");
      element.removeAttribute("class");
      element.classList.add("noSearchPage", "menuPage", "mSet");

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
    }, 0)
  }
}


</script>