<template>
<div>
<!-- <body class="noSearchPage userPage userAtt"> -->
	<!-- Header -->
	<app-header></app-header>
	<!-- Header END -->
	<div id="main">
		<!-- <div class="breadcrumb">
			<i>Swapub</i><i> &#62; 交換</i><i> &#62; 搜尋</i><i></i><i></i>
        </div> -->
        <div class="coverBlock">
            <div>
                <ul class="userInfo">
                    <li class="userPic"><a href="menu_u_myitem.html?j"><img :src="this.imgUrl" alt=""></a></li>
                    <li class="userDetail">
                        <h3 class="userName"><i></i>{{this.User.Name}}</h3>
                        <p class="userAdd" v-if="this.User.Location">{{this.User.Location.City}}，{{this.User.Location.Country}}</p>
                    </li>
                </ul>
            </div>
            <p class="countPad">
                <span class="countSwap"><a href="menu_u_myitem.html"><i>2</i>筆交換</a></span>
                <span class="countAssess"><i class="btn_smile">{{this.Comment.good}}</i><i class="btn_cry">{{this.Comment.bad}}</i></span>
                <span><a class="iconAttention"></a></span>
                <span>
                    <a class="btn_gr btn_attention"><i>關注</i><i class="action">取消關注</i></a>
                    <router-link to='/menu_u_myinfo'><i></i><a class="btn_gr btn_edit action">編輯</a></router-link>                   
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
                            <img src="images/icon_smile_o.svg" alt="">
                        </li>
                    </ul>
                </div>
            </div>
            <div class="assMsgPad badAssMsgPad">
                <div>
                    <ul class="userInfo oUserMsg clear">
                        <li class="userPic"><a href="menu_u_myitem_other.html?j">
                            <img src="../../../static/images/sr_na_img_1.jpg" alt=""></a>
                        </li>
                        <li class="userDetail">
                            <h3 class="userName otherUser"><i>我(</i>sia<i>)</i></h3>
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
            </div>
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
                            <img src="../../../static/images/icon_smile.png" alt="">
                        </li>
                    </ul>
                </div> -->
           
		<div class="content">
			<div class="mainBtPad">
				<a class="action"><i>{{this.Follow.length}}</i>追蹤中</a>
				<a><i>{{this.Followed.length}}</i>粉絲</a>
            </div>
            <div class="conBlock srNamePad action">
                <div class="itemPad">
                    <div class="itemBox" v-for="follow in Follow"><router-link :to="{name:'Menu_u_myitem',params: { id: follow._id}} "></router-link>

                        <div class="itemImg"><img :src="follow.AvatarUrl" alt=""></div>
                        <div class="itemTitle"><h3 class="userName">{{follow.Name}}</h3><a class="btn_gr btn_attention action" @click="followchange(follow._id)"><i>關注</i><i class="action">取消關注</i></a></div>

                    </div>
                    <!-- <div class="itemBox"><a href="menu_u_myitem_other.html?j"></a>
                        <div class="itemImg"><img src="../../../static/images/sr_na_img_2.jpg" alt=""></div>
                        <div class="itemTitle"><h3 class="userName">Sam</h3><a href="#" class="btn_gr btn_attention"><i>關注</i><i class="action">取消關注</i></a></div>
                    </div>
                    <div class="itemBox"><a href="menu_u_myitem_other.html?j"></a>
                        <div class="itemImg"><img src="../../../static/images/sr_na_img_3.jpg" alt=""></div>
                        <div class="itemTitle"><h3 class="userName">Sphia</h3><a href="#" class="btn_gr btn_attention"><i>關注</i><i class="action">取消關注</i></a></div>
                    </div> -->
                </div>
            </div>
			<div class="conBlock srNamePad">
				<div class="itemPad">
					<div class="itemBox" v-for="(followed,index) in Followed"><router-link :to="{name:'Menu_u_myitem',params: { id: followed._id}} "></router-link>
						<div class="itemImg"><img :src="followed.AvatarUrl" alt=""></div>
						<div class="itemTitle" v-if="status[index] == true"><h3 class="userName">{{followed.Name}}</h3><a class="btn_gr btn_attention" @click="followchange(followed._id)"><i >關注</i><i class="action">取消關注</i></a></div>
						<div class="itemTitle" v-if="status[index] == false"><h3 class="userName">{{followed.Name}}</h3><a class="btn_g btn_attention" @click="followchange(followed._id)"><i class="action">關注</i><i>取消關注</i></a></div>
                    </div>
					<!-- <div class="itemBox"><a href="menu_u_myitem_other.html?j"></a>
						<div class="itemImg"><img src="../../../static/images/sr_na_img_2.jpg" alt=""></div>
						<div class="itemTitle"><h3 class="userName">Sam</h3><a href="#" class="btn_gr btn_attention"><i>關注</i><i class="action">取消關注</i></a></div>
					</div>
					<div class="itemBox"><a href="menu_u_myitem_other.html?j"></a>
						<div class="itemImg"><img src="../../../static/images/sr_na_img_3.jpg" alt=""></div>
						<div class="itemTitle"><h3 class="userName">Sphia</h3><a href="#" class="btn_gr btn_attention"><i>關注</i><i class="action">取消關注</i></a></div>
					</div>
					<div class="itemBox"><a href="menu_u_myitem_other.html?j"></a>
						<div class="itemImg"><img src="../../../static/images/sr_na_img_4.jpg" alt=""></div>
						<div class="itemTitle"><h3 class="userName">Sam antoner</h3><a href="#" class="btn_g btn_attention"><i class="action">關注</i><i>取消關注</i></a></div>
					</div>
					<div class="itemBox"><a href="menu_u_myitem_other.html?j"></a>
						<div class="itemImg"><img src="../../../static/images/sr_na_img_5.jpg" alt=""></div>
						<div class="itemTitle"><h3 class="userName">Steven</h3><a href="#" class="btn_g btn_attention"><i class="action">關注</i><i>取消關注</i></a></div>
					</div> -->
				</div>
			</div>
            <div class="sharePad">
                <p>邀請好友</p>
                <a href="" class="ico_tw"></a>
                <a href="" class="ico_fb"></a>
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
                <span class="btn_o btn_cancel">取消</span><span class="btn_o btn_sure">確定</span>
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
          User:{},
          RatingList:{},
          Comment:{},
          Follow:{},
          Followed:{},
          imgUrl:"",
          status:[]
      }
  },
  created(){
      this.getUser();
      this.getRating();
      this.getComment();
      this.getFollow();
  },
  updated(){
        //btn_attention 關注按鈕
            setTimeout(() => {

            var $btn_attention = $('.btn_attention'),
                $attOp = $btn_attention.find('i'),
                $attOpInd;
                $btn_attention.find('i.action').fadeIn();
                $btn_attention.click(function () {
                if ($('body').hasClass('userAtt')) {
                //user_attention_other.html 追蹤清單的已追蹤用戶關注按鈕不與用戶本身的關注按鈕同步
                $(this).toggleClass('btn_gr btn_g');
                var $oneBtn = $(this).find('i.action');
                $oneBtn.removeClass('action').css({
                    'display': 'none'
                }).siblings().addClass('action').fadeIn();

                } 
                // else {
                //     //用戶個人頁面2顆關注按鈕同步
                //     $btn_attention.toggleClass('btn_gr btn_g');
                //     var $btnTXT = $btn_attention.find('i.action');
                //     $btnTXT.removeClass('action').css({
                //         'display': 'none'
                //     }).siblings().addClass('action').fadeIn();
                // }
             });
        },100)
 
  },
  methods:{
      async getUser(){
         this.User = await api.get('User/' + this.id,localStorage.getItem('login_token'),'')
         console.log(this.User)
         this.imgUrl = api.CdnUrl + "/Uploads/User/" + this.id  + "/Avatar.jpg"
         
      },
      async getRating(){
         this.RatingList = await api.get('Rating',localStorage.getItem('login_token'),"&accountID=" + this.id + "&filterDate=1" )
      },
      async getComment(){
         this.Comment = await api.get('Rating',localStorage.getItem('login_token'),"&accountID=" + this.id)
      },
      async getFollow(){
        this.Follow = await api.get('Follow',localStorage.getItem('login_token'),"&accountID=" + this.id + "&isFollower=false")
        console.log(this.Follow)
        this.Followed = await api.get('Follow',localStorage.getItem('login_token'),"&accountID=" + this.id + "&isFollower=true")
        console.log(this.Followed)
        for(var i=0 ; i< this.Followed.length ; i++){        
             this.getFollowStatus(i)
        }
      },
      async changeFollow(){
          //await api.postJSON("Follow","",localStorage.getItem('login_token'),"")
                var follow = document.getElementById("follow");
                var unfollow = document.getElementById("unfollow");
                var btn1 = document.getElementById("btn1");
                if(follow.className == 'action'){ 
                    follow.removeAttribute("class");
                    follow.style.display = "none"
                    unfollow.classList.add("action")
                    unfollow.style.display = "inline"
                    // var $btn_attention = $('.btn_attention')
                    // $btn_attention.toggleClass('btn_gr btn_g');
                    btn1.classList.toggle("btn_gr")

                }
                else{
                    unfollow.removeAttribute("class");
                    unfollow.style.display = "none"
                    follow.classList.add("action")
                    follow.style.display = "inline"   
                    // var $btn_attention = $('.btn_attention')
                    // $btn_attention.toggleClass('btn_gr btn_g'); 
                    btn1.classList.toggle("btn_gr")  
                }
      },
      async changeFollow2(){
          //await api.postJSON("Follow","",localStorage.getItem('login_token'),"")
                var follow = document.getElementById("follow2");
                var unfollow = document.getElementById("unfollow2");
                var btn2 = document.getElementById("btn2");

                if(follow.className == 'action'){ 
                    follow.removeAttribute("class");
                    follow.style.display = "none"
                    unfollow.classList.add("action")
                    unfollow.style.display = "inline"
                    // var $btn_attention = $('.btn_attention')
                    // $btn_attention.toggleClass('btn_gr btn_g');
                    btn2.removeAttribute("class");
                    btn2.classList.add("btn_gr","btn_attention");


                }
                else{
                    unfollow.removeAttribute("class");
                    unfollow.style.display = "none"
                    follow.classList.add("action")
                    follow.style.display = "inline"   
                    // var $btn_attention = $('.btn_attention')
                    // $btn_attention.toggleClass('btn_gr btn_g');   
                    
                    btn2.removeAttribute("class");
                    btn2.classList.add("btn_g","btn_attention");
                }
      },
      async followchange(id){
        //     $btn_attention.click(function () {
                var $btn_attention = $('.btn_attention')
                await api.postJSON('Follow',id,localStorage.getItem('login_token'),'')
                alert("更改狀態成功")
                location.reload()

                

                // if ($('body').hasClass('userAtt')) {
                //     //user_attention_other.html 追蹤清單的已追蹤用戶關注按鈕不與用戶本身的關注按鈕同步
                //     $btn_attention.toggleClass('btn_gr btn_g');
                //     var $oneBtn = $btn_attention.find('i.action');
                //     $oneBtn.removeClass('action').css({
                //         'display': 'none'
                //     }).siblings().addClass('action').fadeIn();
                // } 
                // else {
                //     //用戶個人頁面2顆關注按鈕同步
                //     $btn_attention.toggleClass('btn_gr btn_g');
                //     var $btnTXT = $btn_attention.find('i.action');
                //     $btnTXT.removeClass('action').css({
                //         'display': 'none'
                //     }).siblings().addClass('action').fadeIn();
                // }
      },
      async getFollowStatus(i){
        api.get('Follow',localStorage.getItem('login_token'),"&followID=" + this.Followed[i]._id)
        .then((data)=>{
            console.log(data)
            this.$set(this.status, i, data)

        })
        console.log(this.status)
      },
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
      element.classList.add("noSearchPage", "userPage", "userAtt");

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

      

      $(document).ready(function () {
        $('.btn_report').click(function () {
          $('#popContainer').removeClass();
          $('#popContainer').stop().animate({
            top: 0
          }, 300);
          $('#popContainer').addClass('popReport');
        });

        var $srType = $('.mainBtPad').find('a'),
          $srLen = $srType.length,
          $srTypePad = $('.content').find('.conBlock'),
          $srPadLen = $srTypePad.length;

        $srType.click(function () {
          var ind = $(this).index();
          $srType.eq(ind).addClass('action').siblings().removeClass('action');
          $srTypePad.eq(ind).addClass('action').siblings('.conBlock').removeClass('action');
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
      })
    }, 0)
  }
}


</script>