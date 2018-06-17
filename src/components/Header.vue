<template>
<div id="header">
		<div class="headerTop"><i></i><i></i><i></i></div>
		<div class="headerConts clear">
			<dl>
				<dt><a href="index.html" class="header_logo"><img src="../../static/images/swapub_logo.png" alt=""></a></dt>
				<dd class="headerMenu CGc">
					<router-link to="/" active-class="market action" exact><b>市集</b></router-link>
					<router-link to="/wish" active-class="wish action"><b>許願牆</b></router-link>
					<a href="#" class="club"><b>俱樂部</b></a>
				</dd>
				<dd class="nav"><i></i><i></i><i></i></dd>
			</dl>
		</div>
		<div class="searchPad">
			<form action="item_search.html" method="get" accept-charset="utf-8" class="itemSearchForm">
				<ul>
					<li>
						<input type="text" placeholder="你想要搜尋什麼商品或人名呢?"/>
						<input type="submit" name="" value="" class="searchBt">
					</li>
					<li>
						<div class="btn_searchCt"><u></u><b>搜尋範圍：</b><span class="ovLine">台灣</span><i></i></div>
					</li>
				</ul>
			</form>
			<form action="wish_search.html" method="get" accept-charset="utf-8" class="wishSearchForm">
				<ul>
					<li>
						<input type="text" placeholder="你想要搜尋什麼商品或人名呢?"/>
						<router-link to='/wish_search'><input type="submit" name="" value="" class="searchBt"></router-link>
					</li>
					<li>
						<div class="btn_searchCt"><u></u><b>搜尋範圍：</b><span class="ovLine">台灣</span><i></i></div>
					</li>
				</ul>
			</form>
		</div>
		<div class="loginBlock">
			<div class="logout">
				<router-link to='/signin' class="btn_o btn_login">註冊/登入</router-link>或
				<a href="" class="ico_tw"></a>
				<a href="" class="ico_fb"></a>
			</div>
			<div class="login">
				<a class="sideBt userPic"></a><span class="userName"><i>我</i>Jing Yun Lee</span>
				<a class="sideBt userMenu CGc"></a>
				<a class="sideBt userNoti CGc"><i class="noticeNum">2</i></a>
			</div>
		</div>
		<div class="sideBarPad">
			<span class="btn_close"><i></i><i></i></span>
			<div class="sideList userMenu">
				<router-link to='/menu_u_myitem'><i></i>我的物品與願望</router-link>
				<router-link to='/menu_u_myinfo'><i></i>個人資料與檔案</router-link>
				<router-link to='/menu_u_set'><i></i>設定</router-link>
				<a @click="logout()"><i></i>登出</a>
			</div>
			<div class="sideList toolMenu">
				<router-link to='/menu_t_swap'><i></i>討論中的交換</router-link>
				<router-link to='/menu_t_deal'><i></i>成交紀錄</router-link>
		      	<router-link to='/menu_t_whisper'><i></i>悄悄話</router-link>
				<router-link to='/menu_t_follow'><i></i>我的追蹤</router-link>
			</div>
			<div class="sideList noticeMenu">
				<dl>
					<dt>
						<h2>通知</h2>
						<a class="action">動態(<i>7</i>)</a>
						<a>交易(<i>4</i>)</a>
					</dt>
					<dd class="action">
						<div class="noticePad CG_scorll">
							<p class="action"><a href="menu_u_myitem_other.html?j">
								<span class="userImg"><img src="../../static/images/sr_na_img_4.jpg" alt=""></span>
								<span class="userInfo">Rockstone 上傳新物品</span>
								<span class="date">2017/10/27 19:55</span>
								<i class="itemImg"><img src="../../static/images/mk_it_img_10.jpg" alt=""></i>
							</a></p>
							<p class="action"><a href="item_detail.html?j">
								<span class="userImg checked"><img src="../../static/images/ws_user_img_6.png" alt=""></span>
								<span class="userInfo">妮可 妮可薇 比一個讚！</span>
								<span class="date">2017/10/27 19:55</span>
								<i class="itemImg"><img src="../../static/images/img_item_slider_02.jpg" alt=""></i>
							</a></p>
							<p class="newsAdd"><a>
								<span class="userImg"><img src="../../static/images/img_user_add.png" alt=""></span>
								<span class="userInfo">天堂有血盟最美～戰友相隨！Swapub！每週一物幫你找回經典回憶！還有各種好禮等你來抽！</span>
								<span class="date">2017/10/27 09:13</span>
							</a></p>
							<p class="newsAdd"><a>
								<span class="userImg checked"><img src="../../static/images/img_user_add.png" alt=""></span>
								<span class="userInfo">好康同樂會～Swapub豪禮週週抽～快開啟APP邀請好友加入～舊可以抽3萬GASH點數！棒棒</span>
								<span class="date">2017/10/27 08:43</span>
							</a></p>
							<p class="newsAdd"><a>
								<span class="userImg checked"><img src="../../static/images/img_user_add.png" alt=""></span>
								<span class="userInfo">勇闖天堂M，Swapub送你去韓國！ 天堂M開戰啦，每個人心中都有天堂，熱血回憶再度沸騰。戰歌唱起來，立即下載註冊...</span>
								<span class="date">2017/10/27 08:43</span>
							</a></p>
							<p class="newsAdd"><a>
								<span class="userImg checked"><img src="../../static/images/img_user_add.png" alt=""></span>
								<span class="userInfo">天堂M《現在我想見你》第六集大首播 總是負責背水的撒基努綁架了在減肥的四叉貓而王子錦榮帥氣踹門營救沒想到四叉貓直接倒戈！？</span>
								<span class="date">2017/10/27 08:43</span>
							</a></p>
							<p class="newsAdd"><a>
								<span class="userImg checked"><img src="../../static/images/img_user_add.png" alt=""></span>
								<span class="userInfo">天堂最狂回憶小物讓你週週抽到流眼淚SWAPUB 幫天堂的戰友們找回憶</span>
								<span class="date">2017/10/27 08:43</span>
							</a></p>
						</div>
						<span class="showMore"><a>顯示更多</a></span>
					</dd>
					<dd>
						<div class="noticePad">
							<p class="action"><a href="swap_item_detail_user.html?j">
								<span class="userImg"><img src="../../static/images/ws_user_img_4.png" alt=""></span>
								<span class="userInfo"><i>我(</i>Jing Yun Lee<i>)</i>提出交換</span>
								<span class="date">2017/10/27 19:55</span>
								<i class="itemImg swap"><img src="../../static/images/img_item_01.jpg" alt=""></i>
							</a></p>
							<p class="action"><a class="btn_assess">
								<span class="userImg checked"><img src="../../static/images/ws_user_img_1.png" alt=""></span>
								<span class="userInfo">請給Chloe Chen評價</span>
								<span class="date">2017/10/27 19:55</span>
								<i class="itemImg"><img src="../../static/images/img_item_slider_02.jpg" alt=""></i>
							</a></p>
							<p><a href="swap_item_detail_otherOK.html?j">
								<span class="userImg"><img src="../../static/images/ws_user_img_3.png" alt=""></span>
								<span class="userInfo">Sam Lee接受我的交換</span>
								<span class="date">2017/10/27 09:13</span>
								<i class="itemImg deal"><img src="../../static/images/ws_it_img_3.jpg" alt=""></i>
							</a></p>
							<p class="action"><a class="btn_err">
								<span class="userImg checked"><img src="../../static/images/ws_user_img_8.png" alt=""></span>
								<span class="userInfo">你要交換的 VR數位眼鏡已經與其他人交換了</span>
								<span class="date">2017/10/27 08:43</span>
								<i class="itemImg"><img src="../../static/images/ws_it_img_4.jpg" alt=""></i>
							</a></p>
						</div>
						<span class="showMore"><a>顯示更多</a></span>
					</dd>
				</dl>
			</div>
		</div>
		<div id="hPopContainer" style="top:-100vh;">
			<div class="popContent popAssessBlock">
				<div class="btn_closePop"></div>
				<form action="" method="GET">
					<h3>這次的交換你覺得如何？</h3>
					<div>
						<ul class="dealPad clear">
							<li class="icon_deal"></li>
							<li class="swapPad">
								<span class="userPic checked"><img src="images/ws_user_img_5.png" alt=""></span>
								<div class="itemImg"><img src="images/mk_it_img_23.jpg" alt=""></div>
								<p>TRWIWA手錶</p>
							</li>
							<li class="swapPad">
								<span class="userPic checked"><img src="images/ws_user_img_4.png" alt=""></span>
								<div class="itemImg"><img src="images/mk_it_img_1.jpg" alt=""></div>
								<p>桌上型盆栽擺飾</p>
							</li>
						</ul>
					</div>
					<div class="popAssessPad">
						<span class="userPic checked"><img src="images/ws_user_img_4.png" alt=""></span>
						<textarea name="" id="" placeholder="請填寫評價內容"></textarea>
						<p><b>請給予評價</b></p>
						<div class="popAssessBtn">
							<input type="button" class="btn_gr" value="不滿意"><input type="button" class="btn_gr" value="滿意">
						</div>
					</div>
					<div class="popCheckPad">
						<input type="button" class="btn_w btn_cancel" value="取消"><input type="button" class="btn_o btn_sure" value="確定" onclick="assess()">
					</div>
				</form>
			</div>
			<div class="popContent popSys popErrPad false">
				<h3>系統訊息</h3>
				<p>交易無效，此物品已經被成交或刪除</p>
				<div class="popCheckPad">
					<input type="button" class="btn_o btn_sure" value="確定">
				</div>
			</div>
			
			<div class="popContent ctStagePad">
				<div class="btn_closePop"></div>
				<h3>搜尋地區</h3>
				<div class="searchFilter action countryStage">
					<div class="tab-single clearfix">
						<div class="">
							<div id="content-2">
								<div class="SearchInput">
									<i class="i_search_org"></i>
									<input type="text" id="searchText" placeholder="輸入你想看到的城市、州/省或國家">
									<a class="btnCancel">取消</a>
								</div>
								<div class="result">
									<div class="success clearfix">
										<li>
											<div class="countryImg"><img src="images/flag_tw.png" alt=""></div>
											<div class="name">台灣</div>
										</li>
										<li>
											<div class="countryImg"><img src="images/flag_tw.png" alt=""></div>
											<div class="name">日本</div>
										</li>
									</div>
									<div class="fail false"> <!-- false 拿掉就會顯示 -->
										<div class="failImg">
											<img src="images/search_default.png" alt="">
										</div>
										<span>沒有搜尋結果</span>
									</div>
								</div>
								<div class="index">
									<span>無搜尋結果</span>
									<span><hr><i>或</i></span>
									<div class="selectPad clear">
										<div class="select-custom slt_1Country">
											<b>國家</b><i class="flagBox"></i>
											<input type="text" id="select_Country" class="ovLine" value="-">
											<!-- <div class="optionPad">
												<span class="ovLine">-</span>
												<span class="ovLine"><img src="images/flag_tw.png" alt="">台灣</span>
												
											</div> -->
										</div>
										<div class="select-custom">
											<b>州/省</b>
											<input type="text" id="select_State" value="-">
											<!-- <div class="optionPad">
												<span class="ovLine">-</span>
												<span class="ovLine">江蘇省</span>
											</div> -->
										</div>
										<div class="select-custom">
											<b>城市</b>
											<input type="text" id="select_City" value="-">
											<!-- <div class="optionPad">
												<span class="ovLine">-</span>
												<span class="ovLine">全區</span>
											</div> -->
										</div>
									</div>
									<div class="country-list">
										<div class="innerList action">
											<dl>
												<!-- <dt>亞洲</dt> -->
												<dd>
													<div class="countryImg"><img src="images/flag_tw.png" alt=""></div>
													<div class="name">台灣</div>
												</dd>
												<dd>
													<div class="countryImg"><img src="images/flag_tw.png" alt=""></div>
													<div class="name">中國</div>
												</dd>
												<dd>
													<div class="countryImg"><img src="images/flag_uae.png" alt=""></div>
													<div class="name">香港</div>
												</dd>
												<dd>
													<div class="countryImg"><img src="images/flag_uae.png" alt=""></div>
													<div class="name">澳門</div>
												</dd>
												<dd>
													<div class="countryImg"><img src="images/flag_uae.png" alt=""></div>
													<div class="name">日本</div>
												</dd>
												<dd>
													<div class="countryImg"><img src="images/flag_tw.png" alt=""></div>
													<div class="name">南韓</div>
												</dd>
												<dd>
													<div class="countryImg"><img src="images/flag_dprk.png" alt=""></div>
													<div class="name">北韓</div>
												</dd>
												<dd>
													<div class="countryImg"><img src="images/flag_uae.png" alt=""></div>
													<div class="name">馬來西亞</div>
												</dd>
												<!-- <dt>歐洲</dt> -->
												<dd>
													<div class="countryImg"><img src="images/flag_uae.png" alt=""></div>
													<div class="name">泰國</div>
												</dd>
												<dd>
													<div class="countryImg"><img src="images/flag_uae.png" alt=""></div>
													<div class="name">印度</div>
												</dd>
												<dd>
													<div class="countryImg"><img src="images/flag_uae.png" alt=""></div>
													<div class="name">越南</div>
												</dd>
												<dd>
													<div class="countryImg"><img src="images/flag_uae.png" alt=""></div>
													<div class="name">緬甸</div>
												</dd>
												<dd>
													<div class="countryImg"><img src="images/flag_uae.png" alt=""></div>
													<div class="name">柬埔寨</div>
												</dd>
												<dd>
													<div class="countryImg"><img src="images/flag_uae.png" alt=""></div>
													<div class="name">聖誕島</div>
												</dd>
												<dd>
													<div class="countryImg"><img src="images/flag_uae.png" alt=""></div>
													<div class="name">菲律賓</div>
												</dd>
												<dd>
													<div class="countryImg"><img src="images/flag_uae.png" alt=""></div>
													<div class="name">寮國</div>
												</dd>
												<dd>
													<div class="countryImg"><img src="images/flag_uae.png" alt=""></div>
													<div class="name">科科島</div>
												</dd>
												<dd>
													<div class="countryImg"><img src="images/flag_uae.png" alt=""></div>
													<div class="name">東帝汶</div>
												</dd>
												<dd>
													<div class="countryImg"><img src="images/flag_uae.png" alt=""></div>
													<div class="name">蒙古國</div>
												</dd>
												<dd>
													<div class="countryImg"><img src="images/flag_tw.png" alt=""></div>
													<div class="name">汶萊</div>
												</dd>
												<dd>
													<div class="countryImg"><img src="images/flag_uae.png" alt=""></div>
													<div class="name">阿拉伯聯合大公國</div>
												</dd>
											</dl>
										</div>
										<div class="innerList">
											<dl>
												<dd>
													<div class="name">江蘇省</div>
												</dd>
												<dd>
													<div class="name">浙江省</div>
												</dd>
												<dd>
													<div class="name">安徽省</div>
												</dd>
												<dd>
													<div class="name">湖北省</div>
												</dd>
											</dl>
										</div>
										<div class="innerList">
											<dl>
												<dd>
													<div class="name">台北市</div>
												</dd>
												<dd>
													<div class="name">基隆市</div>
												</dd>
												<dd>
													<div class="name">新北市</div>
												</dd>
												<dd>
													<div class="name">宜蘭縣</div>
												</dd>
											</dl>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
</div>
</template>

<script>
import api from '../api/Api.js'

export default {
  methods:{
	  logout(){
		  localStorage.setItem('login_token','')
		  this.$router.push('/')
		  location.reload();
	  }
  },
  mounted() {
    setTimeout(() => {
      var Gw = $(window),
        Gww = Gw.width(),
        Gwh = Gw.height(),
        Gd = $(document),
        Gdw = Gd.width(),
        Gdh = Gd.height();

      $('#header').find('.btn_searchCt').click(function () {
        $('#header').find('#hPopContainer').removeClass();
        $('#header').find('#hPopContainer').stop().animate({
          top: 0
        }, 300);
        $('#header').find('#hPopContainer').addClass('popSrCt');
      });
      $('#header').find('.btn_closePop').click(function () {
        $('#header').find('#hPopContainer').stop().animate({
          top: -100 + 'vh'
        }, 500, function () {
          $('#header').find('#hPopContainer').removeClass();
        });
      });
     /* Side Bar */
	var $login = $('#header').find('.login'),
		$sideBt = $login.find('.sideBt'),
		$sideBarPad = $('.sideBarPad'),
		$sideList = $sideBarPad.find('.sideList'),
		$sideBarPadW,
		$closeBt = $sideBarPad.find('.btn_close');
	//點header頭像及選項、通知按鈕 - 頭像.選項彈出menu為400px, 通知彈出menu為500px
	$sideBt.click(function(){
		var sideInd = $('.sideBt').index($(this));
		//當前按鈕效果
		$sideBt.eq(sideInd).addClass('action').siblings('.sideBt').removeClass('action');
		//menu寬度
		if(sideInd == 2){
			$closeBt.animate({'margin-left':25+'vw'}, 500);
			$sideBarPad.css({'width': 450});
			$sideBarPadW = $sideBarPad.outerWidth();
			$sideBarPad.animate({'margin-left' : Gww - $sideBarPadW}, 500);
			$sideList.eq(sideInd).fadeIn().siblings('.sideList').fadeOut();
		}else{
			$closeBt.animate({'margin-left':15+'vw'}, 500);
			$sideBarPad.css({'width': 300});
			$sideBarPadW = $sideBarPad.outerWidth();
			$sideBarPad.animate({'margin-left' : Gww - $sideBarPadW}, 500);
			$sideList.eq(sideInd).fadeIn().siblings('.sideList').fadeOut();
		}
	});
	//點X
	$closeBt.click(function(){
		$sideBarPad.animate({'margin-left' : 100 + 'vw'}, 500);
		$sideBt.removeClass('action');
		$sideList.fadeOut();
	});
      //通知 - 動態及交易切換
      var $tgBt = $sideList.eq(2).find('dt').find('a'),
        $tgPad = $sideList.eq(2).find('dd');
      $tgBt.click(function () {
        var tgInd = $tgBt.index($(this));
        $tgBt.eq(tgInd).addClass('action').siblings().removeClass('action');
        $tgPad.eq(tgInd).addClass('action').siblings('dd').removeClass('action');
      });
	  
	  if(localStorage.getItem('login_token')!= null && localStorage.getItem('login_token')!= ''){
      var $login = $('.loginBlock'),
        url = window.location.toString(),
        $urlUser = url.split('?')[1],
        $infoPad = $('.infoPad');
      $login.addClass('action');
      $('#header').find('.userName').html('<i>我</i>Jing Yun Lee');
      if ($('body').hasClass('userPage') && $('body').hasClass('other')) {
        $('body.userPage').find('.btn_report').addClass('action');
        $('body.userPage').find('.btn_edit').removeClass('action');
        $('body.userPage').find('.btn_attention').addClass('action');
      } else if ($('body').hasClass('userPage')) {
        $('body.userPage').find('.btn_report').removeClass('action');
        $('body.userPage').find('.btn_edit').addClass('action');
        $('body.userPage').find('.btn_attention').removeClass('action');
	  }
	  }
      // 商品細節最下方tab交換_商品是自己的
      if (!$('body').hasClass('follow')) {
        $('.openSwap').addClass('action');
        $('.swapList').find('a.openDetail').css({
          'display': 'block'
        });
      }

      var $btnPad = $('.socialBlock').find('.btnPad'),
        $scBtn = $btnPad.find('span'),
        $scPad = $('.socialPad'),
        $scUL = $scPad.find('.socialList'),
        $showMore = $scPad.find('.showMore'),
        $paction, pInd, pLen;
      $scBtn.click(function () {
        var scInd = $(this).index();
        $scBtn.eq(scInd).addClass('action').siblings().removeClass('action');
        $scUL.eq(scInd).addClass('action').siblings().removeClass('action');
        $showMore.find('p').removeClass('action');
        $showMore.find('p').eq(0).addClass('action');
        pLen = $('.socialList.action').find('li').length;
        if (pLen < 4) {
          $showMore.fadeOut();
        } else {
          $showMore.fadeIn();
        }
        hideP();
      });
      //點顯示更多.顯示較少
      var $scList, $scItem, $scLen;
      $showMore.click(function () {
        $scList = $scPad.find('.socialList.action'),
          $scItem = $scList.find('li'),
          $scLen = $scItem.length;
        $paction = $showMore.find('p.action'),
          pInd = $paction.index();
        $paction.removeClass('action').siblings().addClass('action');
        if (pInd !== 1) {
          $scItem.fadeIn();
        } else {
          hideP();
        }
      });
    }, 0)
  }
}
</script>


<style>

</style>

