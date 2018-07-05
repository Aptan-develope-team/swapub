/*!
 * at_cage.js v1.0.1
 * http://www.art-tangency.com
 * Copyright (c) 2016 CaGe Wei
 *
 * Date: 2016-11-12T23:09:19.514Z
 */
$(window).on("load",function() {
	"use strict";
	// var Gw = $(window), Gww = Gw.width(), Gwh = Gw.height(), Gd = $(document), Gdw = Gd.width(), Gdh = Gd.height();
	// if (Gwh < Gdh){
	// 	$('#footer').css({'position':'relative'});
	// }else{
	// 	$('#footer').css({'position':'fixed'});
	// }
	// $('.loadPad').animate({opacity:0},1000, function(){
	// 	$('.loadPad').css({'display':'none'});
	// });

	// /* Side Bar */
	var $login = $('#header').find('.login'),
	$sideBt = $login.find('.sideBt'),
	$sideBarPad = $('.sideBarPad'),
	$sideList = $sideBarPad.find('.sideList')

	// 	$sideBarPadW,
	// 	$closeBt = $sideBarPad.find('.btn_close');
	// //點header頭像及選項、通知按鈕 - 頭像.選項彈出menu為400px, 通知彈出menu為500px
	// $sideBt.click(function(){
	// 	var sideInd = $('.sideBt').index($(this));
	// 	//當前按鈕效果
	// 	$sideBt.eq(sideInd).addClass('action').siblings('.sideBt').removeClass('action');
	// 	//menu寬度
	// 	if(sideInd == 2){
	// 		$closeBt.animate({'margin-left':25+'vw'}, 500);
	// 		$sideBarPad.css({'width': 450});
	// 		$sideBarPadW = $sideBarPad.outerWidth();
	// 		$sideBarPad.animate({'margin-left' : Gww - $sideBarPadW}, 500);
	// 		$sideList.eq(sideInd).fadeIn().siblings('.sideList').fadeOut();
	// 	}else{
	// 		$closeBt.animate({'margin-left':15+'vw'}, 500);
	// 		$sideBarPad.css({'width': 300});
	// 		$sideBarPadW = $sideBarPad.outerWidth();
	// 		$sideBarPad.animate({'margin-left' : Gww - $sideBarPadW}, 500);
	// 		$sideList.eq(sideInd).fadeIn().siblings('.sideList').fadeOut();
	// 	}
	// });
	//點X
	// $closeBt.click(function(){
	// 	$sideBarPad.animate({'margin-left' : 100 + 'vw'}, 500);
	// 	$sideBt.removeClass('action');
	// 	$sideList.fadeOut();
	// });
	//通知 - 動態及交易切換
	var $tgBt = $sideList.eq(2).find('dt').find('a'),
		$tgPad = $sideList.eq(2).find('dd');
	$tgBt.click(function(){
		var tgInd = $tgBt.index($(this));
		$tgBt.eq(tgInd).addClass('action').siblings().removeClass('action');
		$tgPad.eq(tgInd).addClass('action').siblings('dd').removeClass('action');
	});

	/* 搜尋地區 */
	var /*index*/
		$btn_searchCt = $('#header').find('.btn_searchCt'),
		$contName = $btn_searchCt.find('span'),
		$contFlag = $btn_searchCt.find('i'),
		/*pop*/
		$cus = $('.select-custom'),
		$cusBt = $cus.find('b'),
		$cusInput = $cus.find('input'),
		$cusFlagBox = $cus.find('.flagBox'),
		$cusLen = $cus.length,
		$couListPad = $('.country-list'),
		$inCouList = $couListPad.find('.innerList'),
		$couList = $inCouList.find('dd');
	// 預設
	$couListPad.fadeOut();
	// 點index搜尋範圍
	$btn_searchCt.click(function(){
		$('#header').find('#hPopContainer').removeClass();
		$('#header').find('#hPopContainer').stop().animate({'top' : 0}, 300);
		$('#header').find('#hPopContainer').addClass('popSrCt');
		setpopH();
	});
	// 設定pop位置
	var setpopH = function(){
		var $ctPop = $('.ctStagePad'),
			$popH = Math.round($ctPop.outerHeight());
		$ctPop.css({'margin-top':- $popH / 2});
	}
	// funtion>>關閉pop並帶值到index畫面
	var closePop = function(con, flag){
		$('#header').find('#hPopContainer').stop().animate({'top' : -100 + 'vh'}, 300, function(){
			$('#header').find('#hPopContainer').removeClass();
		});
	}
	// funtion>>清空select資料
	var clearInput = function(){
		$cusInput.val('-');
		$cusInput.removeClass('action');
		$cus.removeClass('seleced');
		$cusFlagBox.fadeOut(100);
	}
	// funtion>>清空搜尋
	var clearSearch = function(){
		$("#searchText").val('');
		$("#content-2").removeClass('action');
		setpopH();
	}
	// DEMO auto complate
	$("#searchText").keyup(function () {
		var text = $("#searchText").val();
		$couListPad.fadeOut();
		setpopH();
		clearInput();
		if (text === '') {
			$("#content-2").removeClass('action');
		} else {
			$("#content-2").addClass('action');
		}
	});
	// 點搜尋結果
	var $result = $("#content-2").find('.result').find('li');
	$result.click(function(){
		var $obj = $(this);
		$("#searchText").val('');
		var $resultImg = $obj.find('.countryImg').find('img').attr('src'),
			$resultTXT = $obj.find('.name').text();
		closePop();
		$contName.text($resultTXT);
		$contFlag.css({'background-image': 'url(' + $resultImg + ')'});
		clearSearch();
	});
	// 點X
	$('.btnCancel').click(function(){
		clearSearch();
	});
	// 點select-custom
	$cus.click(function(){
		var cusInd = $(this).index();
		clearSearch();
		$couListPad.fadeIn(500);
		setpopH();
		$inCouList.eq(cusInd).addClass('action').siblings().removeClass('action');
	});
	// 點預設清單項目
	$couList.click(function(){
		var obj = $(this),
			obInd = obj.parent().parent().index();
		getValue(obj, obInd);
		$couListPad.fadeOut(100, function(){setpopH();});
	});
	// funtion>>取得項目資料傳值給select-custom
	var getValue = function(o, i){
		var $resultImg = $(o).find('.countryImg').find('img').attr('src'),
			$resultTXT = $(o).find('.name').text(),
			$rInput = $cus.eq(i).find('input');
		if(i==0){
			//點國家
			var $rFlagBox = $cus.eq(i).find('.flagBox');
			$rFlagBox.fadeIn();
			$rFlagBox.css({'background-image': 'url(' + $resultImg + ')'});
			$cus.eq(i).addClass('seleced');
			$rInput.addClass('action');
			$rInput.val($resultTXT);
		}else if(i==2){
			//點城市
			closePop();
			var cus = $cus.eq(0).find('input').val(),
				flag = $cus.eq(0).find('.flagBox').css('background-image');
			$contName.text(cus);
			$contFlag.css({'background-image': flag});
			$cus.eq(i).addClass('seleced');
			$rInput.addClass('action');
			$rInput.val($resultTXT);
		}else{
			//點州省
			$cus.eq(i).addClass('seleced');
			$rInput.addClass('action');
			$rInput.val($resultTXT);
		}
	}


	/* 物品內容_區塊尺寸 */
	var $infoPad = $('.conBlock.infoBlock').find('.infoPad'),
	$infoPadH = $infoPad.eq(0).height(),
	$btnPadH = $('.btnPad').outerHeight(true);
	$infoPad.eq(1).css({'min-height': $infoPadH});
	// $infoPad.eq(1).find('dl').eq(0).css({'height': $infoPadH - $btnPadH - 10});


	/* ----------暫時的登入/用戶判斷start---------- */
	var $login = $('.loginBlock'),
		url=window.location.toString(),
		$urlUser = url.split('?')[1],
		$infoPad = $('.infoPad');

	// if($('body').hasClass('mItem') && $('body').hasClass('other')){
	// 	//我的物品與願望_我看別人
	// 	$('.itemPad').eq(0).find('.itemBox').eq(0).css({'display':'none'});
	// 	$('.itemPad').eq(1).find('.itemBox').eq(0).css({'display':'none'});
	// }

	// if(url.indexOf("?")!=-1){
	// 	if($urlUser == 'j'){
	// 		//網址?j 登入為Jing Yun Lee的狀態 >>預設的我自己
	// 		$login.addClass('action');
	// 		//$('#header').find('.userName').html('<i>我</i>Jing Yun Lee');
	// 		if ($('body').hasClass('userPage') && $('body').hasClass('other') ){
	// 			$('body.userPage').find('.btn_report').addClass('action');
	// 			$('body.userPage').find('.btn_edit').removeClass('action');
	// 			$('body.userPage').find('.btn_attention').addClass('action');
	// 		} else if ($('body').hasClass('userPage') ){
	// 			$('body.userPage').find('.btn_report').removeClass('action');
	// 			$('body.userPage').find('.btn_edit').addClass('action');
	// 			$('body.userPage').find('.btn_attention').removeClass('action');
	// 		}
	// 		// 商品細節最下方tab交換_商品是自己的
	// 		if(!$('body').hasClass('follow')){
	// 			$('.openSwap').addClass('action');
	// 			$('.swapList').find('a.openDetail').css({'display':'block'});
	// 		}
	// 		if($('body').hasClass('mItem') && $('body').hasClass('other')){
	// 			//我的物品與願望_我看別人
	// 			$('.itemPad').eq(0).find('.itemBox').eq(0).css({'display':'none'});
	// 			$('.itemPad').eq(1).find('.itemBox').eq(0).css({'display':'none'});
	// 		}
	// 	}else if($urlUser == 'c'){
	// 		//網址?c 登入為Chloe Chen或是Rocky stone的狀態 >>預設的別人
	// 		$login.addClass('action');
	// 		$('#header').find('.userName').html('<i>我</i>Chloe Chen');
	// 		$('.login').addClass('otherUser');
	// 		$('.userInfo').addClass('otherUserMD');
	// 		$('.userInfo.otherUserMD').find('h3').addClass('otherUser');
	// 		$('.editPad.otherUserMD').addClass('action').siblings('.editPad').removeClass('action');
	// 		$infoPad.eq(1).addClass('otherUserMD');
	// 		if($('body').hasClass('mItem') && $('body').hasClass('other') ){
	// 			//我的物品與願望_別人看他自己
	// 			$('.itemPad').eq(0).find('.itemBox').eq(0).css({'display':'block'});
	// 			$('.itemPad').eq(1).find('.itemBox').eq(0).css({'display':'block'});
	// 		}else if($('body').hasClass('mItem')){
	// 			//我的物品與願望_別人看我
	// 			$('.itemPad').eq(0).find('.itemBox').eq(0).css({'display':'none'});
	// 			$('.itemPad').eq(1).find('.itemBox').eq(0).css({'display':'none'});
	// 			$('h2.action').removeClass('action').siblings('h2').addClass('action');
	// 		}
	// 		//自己跟別人 關注/編輯/檢舉 按鈕切換
	// 		if ($('body').hasClass('userPage') && $('body').hasClass('other') ){
	// 			$('body.userPage').find('.iHeart').css({'display': 'none'});
	// 			$('body.userPage').find('.btn_report').removeClass('action');
	// 			$('body.userPage').find('.btn_edit').addClass('action');
	// 			$('body.userPage').find('.btn_attention').removeClass('action');
	// 			$('.userPic').css({'background-image':'url(images/sr_na_img_4.png)'});
	// 			$('.userName').not('.srNamePad .userName').html('<i>我</i>Rocky stone');
	// 		} else if ($('body').hasClass('userPage') ){
	// 			$('body.userPage').find('.iHeart').css({'display': 'block'});
	// 			$('body.userPage').find('.btn_report').addClass('action');
	// 			$('body.userPage').find('.btn_edit').removeClass('action');
	// 			$('body.userPage').find('.btn_attention').addClass('action');
	// 		}
	// 		// 商品細節最下方tab交換_商品不是自己的
	// 		$('.openSwap').removeClass('action');
	// 		$('.swapList').find('a.openDetail').css({'display':'none'});
	// 	}
	// 	else{//console.log('?j = Jing login / ?c = Chloe login');
	//     }
	// }
	// if ($('body').hasClass('menuPage') || $('body').hasClass('edit') || $('body').hasClass('item') || $('body').hasClass('userPage')) {
	// 	$login.addClass('action');
	// }
	
	/* ----------暫時的登入/用戶判斷end---------- */

	/* 任意頁面的pop */
	$('#header').find('.btn_closePop').click(function(){
		$('#header').find('#hPopContainer').stop().animate({top : -100 + 'vh'}, 500, function(){
			$('#header').find('#hPopContainer').removeClass();
		});
	});
	$('#header').find('.btn_cancel').click(function(){
		$('#header').find('#hPopContainer').stop().animate({top : -100 + 'vh'}, 500);
	});
	$('#header').find('.btn_sure').click(function(){
		$('#header').find('#hPopContainer').stop().animate({top : -100 + 'vh'}, 500);
	});
	$('#header').find('.btn_assess').click(function(){
		$('#header').find('#hPopContainer').removeClass();
		$('#header').find('#hPopContainer').stop().animate({top : 0}, 300);
		$('#header').find('#hPopContainer').addClass('popAssess');
	});
	$('#header').find('.btn_err').click(function(){
		$('#header').find('#hPopContainer').removeClass();
		$('#header').find('#hPopContainer').stop().animate({top : 0}, 300);
		$('#header').find('#hPopContainer').addClass('popErr');
	});

});

$(document).ready(function(){
	"use strict";
	// ======= Project Coding ====== //
	var Gw = $(window), Gww = Gw.width(), Gwh = Gw.height(), Gd = $(document), Gdw = Gd.width(), Gdh = Gd.height(),
		mainH = $('#main').height(), contentPad_H = Gwh - $('#header').height() - $('#footer').height();
//	$('.height_F').css({'height':Gwh});
//	$('.height_F2').css({'height':contentPad_H});

	// $.get('header.html',function(data){$('#header').html(data);});
	// $.get('footer.html',function(data){$('#footer').html(data);});


	/* =========== header - for firefox *start* (有時要F5才會生效) =============================== */
	/* Side Bar */
	var $login = $('#header').find('.login'),
		$sideBt = $login.find('.sideBt'),
		$sideBarPad = $('.sideBarPad'),
		$sideList = $sideBarPad.find('.sideList'),
		$sideBarPadW = $sideBarPad.outerWidth(),
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
	$tgBt.click(function(){
		var tgInd = $tgBt.index($(this));
		$tgBt.eq(tgInd).addClass('action').siblings().removeClass('action');
		$tgPad.eq(tgInd).addClass('action').siblings('dd').removeClass('action');
	});

	/* 搜尋地區 */
	var /*index*/
		$btn_searchCt = $('#header').find('.btn_searchCt'),
		$contName = $btn_searchCt.find('span'),
		$contFlag = $btn_searchCt.find('i'),
		/*pop*/
		$cus = $('.select-custom'),
		$cusBt = $cus.find('b'),
		$cusInput = $cus.find('input'),
		$cusFlagBox = $cus.find('.flagBox'),
		$cusLen = $cus.length,
		$couListPad = $('.country-list'),
		$inCouList = $couListPad.find('.innerList'),
		$couList = $inCouList.find('dd');
	// 預設
	$couListPad.fadeOut();
	// 點index搜尋範圍
	$btn_searchCt.click(function(){
		$('#header').find('#hPopContainer').removeClass();
		$('#header').find('#hPopContainer').stop().animate({'top' : 0}, 300);
		$('#header').find('#hPopContainer').addClass('popSrCt');
		setpopH();
	});
	// 設定pop位置
	var setpopH = function(){
		var $ctPop = $('.ctStagePad'),
			$popH = Math.round($ctPop.outerHeight());
		$ctPop.css({'margin-top':- $popH / 2});
	}
	// funtion>>關閉pop並帶值到index畫面
	var closePop = function(con, flag){
		$('#header').find('#hPopContainer').stop().animate({'top' : -100 + 'vh'}, 300, function(){
			$('#header').find('#hPopContainer').removeClass();
		});
	}
	// funtion>>清空select資料
	var clearInput = function(){
		$cusInput.val('-');
		$cusInput.removeClass('action');
		$cus.removeClass('seleced');
		$cusFlagBox.fadeOut(100);
	}
	// funtion>>清空搜尋
	var clearSearch = function(){
		$("#searchText").val('');
		$("#content-2").removeClass('action');
		setpopH();
	}
	// DEMO auto complate
	$("#searchText").keyup(function () {
		var text = $("#searchText").val();
		$couListPad.fadeOut();
		setpopH();
		clearInput();
		if (text === '') {
			$("#content-2").removeClass('action');
		} else {
			$("#content-2").addClass('action');
		}
	});
	// 點搜尋結果
	var $result = $("#content-2").find('.result').find('li');
	$result.click(function(){
		var $obj = $(this);
		$("#searchText").val('');
		var $resultImg = $obj.find('.countryImg').find('img').attr('src'),
			$resultTXT = $obj.find('.name').text();
		closePop();
		$contName.text($resultTXT);
		$contFlag.css({'background-image': 'url(' + $resultImg + ')'});
		clearSearch();
	});
	// 點X
	$('.btnCancel').click(function(){
		clearSearch();
	});
	// 點select-custom
	$cus.click(function(){
		var cusInd = $(this).index();
		clearSearch();
		$couListPad.fadeIn(500);
		setpopH();
		$inCouList.eq(cusInd).addClass('action').siblings().removeClass('action');
	});
	// 點預設清單項目
	$couList.click(function(){
		var obj = $(this),
			obInd = obj.parent().parent().index();
		getValue(obj, obInd);
		$couListPad.fadeOut(100, function(){setpopH();});
	});
	// funtion>>取得項目資料傳值給select-custom
	var getValue = function(o, i){
		var $resultImg = $(o).find('.countryImg').find('img').attr('src'),
			$resultTXT = $(o).find('.name').text(),
			$rInput = $cus.eq(i).find('input');
		if(i==0){
			//點國家
			var $rFlagBox = $cus.eq(i).find('.flagBox');
			$rFlagBox.fadeIn();
			$rFlagBox.css({'background-image': 'url(' + $resultImg + ')'});
			$cus.eq(i).addClass('seleced');
			$rInput.addClass('action');
			$rInput.val($resultTXT);
		}else if(i==2){
			//點城市
			closePop();
			var cus = $cus.eq(0).find('input').val(),
				flag = $cus.eq(0).find('.flagBox').css('background-image');
			$contName.text(cus);
			$contFlag.css({'background-image': flag});
			$cus.eq(i).addClass('seleced');
			$rInput.addClass('action');
			$rInput.val($resultTXT);
		}else{
			//點州省
			$cus.eq(i).addClass('seleced');
			$rInput.addClass('action');
			$rInput.val($resultTXT);
		}
	}

	/* ----------暫時的登入/用戶判斷start---------- */
	var $login = $('.loginBlock'),
		url=window.location.toString(),
		$urlUser = url.split('?')[1],
		$infoPad = $('.infoPad');

	if(url.indexOf("?")!=-1){
		if($urlUser == 'j'){
			//網址?j 登入為Jing Yun Lee的狀態 >>預設的我自己
			$login.addClass('action');
			//$('#header').find('.userName').html('<i>我</i>Jing Yun Lee');
			if ($('body').hasClass('userPage') && $('body').hasClass('other') ){
				$('body.userPage').find('.btn_report').addClass('action');
				$('body.userPage').find('.btn_edit').removeClass('action');
				$('body.userPage').find('.btn_attention').addClass('action');
			} else if ($('body').hasClass('userPage') ){
				$('body.userPage').find('.btn_report').removeClass('action');
				$('body.userPage').find('.btn_edit').addClass('action');
				$('body.userPage').find('.btn_attention').removeClass('action');
			}
			// 商品細節最下方tab交換_商品是自己的
			if(!$('body').hasClass('follow')){
				$('.openSwap').addClass('action');
				$('.swapList').find('a.openDetail').css({'display':'block'});
			}
			if($('body').hasClass('mItem') && $('body').hasClass('other') ){
				//我的物品與願望_我看別人
				$('.itemPad').eq(0).find('.itemBox').eq(0).css({'display':'none'});
				$('.itemPad').eq(1).find('.itemBox').eq(0).css({'display':'none'});
			}
		}else if($urlUser == 'c'){
			//網址?c 登入為Chloe Chen或是Rocky stone的狀態 >>預設的別人
			$login.addClass('action');
			$('#header').find('.userName').html('<i>我</i>Chloe Chen');
			$('.login').addClass('otherUser');
			$('.userInfo').addClass('otherUserMD');
			$('.userInfo.otherUserMD').find('h3').addClass('otherUser');
			$('.editPad.otherUserMD').addClass('action').siblings('.editPad').removeClass('action');
			$infoPad.eq(1).addClass('otherUserMD');
			if($('body').hasClass('mItem') && $('body').hasClass('other') ){
				//我的物品與願望_別人看他自己
				$('.itemPad').eq(0).find('.itemBox').eq(0).css({'display':'block'});
				$('.itemPad').eq(1).find('.itemBox').eq(0).css({'display':'block'});
			}else if($('body').hasClass('mItem')){
				//我的物品與願望_別人看我
				$('.itemPad').eq(0).find('.itemBox').eq(0).css({'display':'none'});
				$('.itemPad').eq(1).find('.itemBox').eq(0).css({'display':'none'});
				$('h2.action').removeClass('action').siblings('h2').addClass('action');
			}
			//自己跟別人 關注/編輯/檢舉 按鈕切換
			if ($('body').hasClass('userPage') && $('body').hasClass('other') ){
				$('body.userPage').find('.iHeart').css({'display': 'none'});
				$('body.userPage').find('.btn_report').removeClass('action');
				$('body.userPage').find('.btn_edit').addClass('action');
				$('body.userPage').find('.btn_attention').removeClass('action');
				$('.userPic').css({'background-image':'url(images/sr_na_img_4.png)'});
				$('.userName').not('.srNamePad .userName').html('<i>我</i>Rocky stone');
			} else if ($('body').hasClass('userPage') ){
				$('body.userPage').find('.iHeart').css({'display': 'block'});
				$('body.userPage').find('.btn_report').addClass('action');
				$('body.userPage').find('.btn_edit').removeClass('action');
				$('body.userPage').find('.btn_attention').addClass('action');
			}
			// 商品細節最下方tab交換_商品不是自己的
			$('.openSwap').removeClass('action');
			$('.swapList').find('a.openDetail').css({'display':'none'});
		}
		else{//console.log('?j = Jing login / ?c = Chloe login');
	}
	}
	if ($('body').hasClass('menuPage') || $('body').hasClass('edit') || $('body').hasClass('item') || $('body').hasClass('userPage')) {
		$login.addClass('action');
	}
	/* ----------暫時的登入/用戶判斷end---------- */
	/* =========== header - for firefox *end* =============================== */

	/* Login Pad */
	var loginTag = $('.userLoginTag');
	var loginTagTitle = $('.userLoginTag_Title');
	loginTagTitle.click(function(){loginTag.toggleClass('active');});
	var closeLoginTag = $('.btnCloseLoginTag');
	closeLoginTag.click(function(){loginTag.toggleClass('active');});


	// /* index Slider */
	// var i = 0,
	// 	$sliderCont = $('.sliderCont'),
	// 	$sliderUL = $sliderCont.find('ul'),
	// 	$sliderLI = $sliderCont.find('li'),
	// 	$sliderLeng = $sliderLI.length,
	// 	$sliderNow = 0, //現在的slider 位置
	// 	$sliderBt = $('.sliderBTPad'),
	// 	$sliderBtList = $sliderBt.find('i'),
	// 	$sliderCtrl = $('.sliderCtrl'),
	// 	ind, timer, showSpeed = 8000, stop = false;

	// for(i=0; i < $sliderLeng; i++){
	// 	$sliderCtrl.append("<i></i>");
	// }
	// var $sliderList = $sliderCtrl.find('i');
	// $sliderList.eq(0).addClass('action');
	// $sliderUL.css({width:$sliderLeng*1200+"px"});
	// // 點擊點點
	// $sliderList.click(function(){
	// 	ind = $(this).index();
	// 	if(ind !== $sliderNow){
	// 		$sliderNow = ind;
	// 		$sliderUL.css({left:"0"});
	// 	}
	// 	$(this).addClass('action').siblings().removeClass('action');
	// 	$sliderUL.stop().animate({"margin-left":"-1200"*ind+"px"}, 1500 ,'easeOutCubic');
	// 	$sliderList.eq(ind).addClass('action').siblings().removeClass('action');
	// });
	// // 自動輪播
	// timer = setTimeout(move, showSpeed);
	// $sliderList.hover(function(){
	// 	stop = true;
	// 	clearTimeout(timer);
	// }, function(){
	// 	stop = false;
	// 	timer = setTimeout(move, showSpeed);
	// });
	// function move(){
	// 	if($sliderNow < $sliderLeng - 1){
	// 	   $sliderNow += 1;
	// 	   }else{
	// 		   $sliderNow = 0;
	// 		   $sliderUL.css({left:"0"});
	// 	   }
	// 	$sliderUL.stop().animate({"margin-left":"-1200"*$sliderNow+"px"}, 1500 ,'easeOutCubic');
	// 	$sliderList.eq($sliderNow).addClass('action').siblings().removeClass('action');
	// 	timer = setTimeout(move, showSpeed);
	// }
	// $sliderBtList.click(function(){
	// 	var $ind = $(this).index();
	// 	if($ind !== 1 && $sliderNow > 0){
	// 		$sliderNow --;
	// 		if($sliderNow === 0){
	// 			$sliderBtList.eq(0).addClass('false');
	// 		}
	// 	}else if($sliderNow < $sliderLeng - 1){

	// 		$sliderBtList.eq(0).removeClass('false');
	// 		$sliderNow ++;
	// 	}else{
	// 		console.log("none");
	// 	}
	// 	$sliderCont.css({left:"-"+$sliderNow*100+"vw"});
	// 	$sliderList.eq($sliderNow).addClass('action').siblings().removeClass('action');
	// 	console.log($ind, "+" ,$sliderNow);
	// });

	//選擇商品類別
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

	/* marketPad 市集 */
	// $('.iHeart').click(function(){
	// 	$(this).toggleClass('action');
	// });

	var $itemBox = $('.itemBox'),
		$iFinish = $('.itemBox.iFinish'),
		$itemLink = $iFinish.find('a');
	$itemLink.attr('href','menu_t_deal_detail.html');

	/* item_detail 物品細節 */
	var $itemImg = $('.itemImg'),
		imgCont = $itemImg.find('.imgCont'),
		$imgList = $itemImg.find('.imgList'),
		//$vedList = $itemImg.find('.imgList.vedio'),
		$itInfo = $('.itemTitle').find('li'),
		$itInfoH = $itInfo.eq(1).height() + 'px',
		$itMaxH = $itInfo.eq(1).css('max-height')
		//$btn_like = $('.btn_like'),
		//$btn_good = $('.btn_good');
	 imgCont.append('<i class="vedioMD"></i>');	
	// $btn_like.click(function(){
	// 	$(this).toggleClass('action');
	// });
	// $btn_good.click(function(){
	// 	$(this).toggleClass('action');
	// });
	//物品照片切換
	$imgList.hover(function(){
		var imgInd = $(this).index('.imgList'),
			img = $(this).find('img').attr('src');
		imgCont.find('img').attr('src', img);
		if($(this).hasClass('vedio')){
			imgCont.find('.vedioMD').addClass('action');
		}else{
			imgCont.find('.vedioMD').removeClass('action');
		}
		$(this).addClass('action').siblings('.imgList').removeClass('action');
	});
	$('.vedioMD').click(function(){
		$(this).toggleClass('pause');
	});
	
	//物品說明more.less
	if($itInfoH < $itMaxH){
		if($itTips == true){$itTips.remove();}
	}else{
		$itInfo.eq(1).append('<span class="itTips">more<i></i><i></i><i></i></span>');
	}
	var $itTips = $('.itTips');
	$itTips.click(function(){
		//$itTips.toggleClass('action');
		$itInfo.eq(1).addClass('action');
		$itTips.fadeOut();
		/* if($itTips.hasClass('action')){
			$itTips.text('less');
		}else{
			$itTips.html('more<i></i><i></i><i></i>');
		} */
	});
	//悄悄話來交換
	var btnWhi = $('.btnPad').find('.btn_whisper'),
		whisperPad = $('.whisperPad'),
		$wMsgPad = $('.wMsgPad'),
		whGoTop = whisperPad.find('.goTop'),
		closeWhBt = whisperPad.find('.btn_closePop');
	btnWhi.click(function(){
		whisperPad.animate({'left': 0, 'opacity': '1'}, 300);
	});
	$wMsgPad.scroll(function(){
		"use strict";
		var wMsgPadH = $wMsgPad.outerHeight(),
			nowHeight = $wMsgPad.scrollTop();
		if(nowHeight > wMsgPadH / 6){
			whGoTop.fadeIn();
		}else{
			whGoTop.fadeOut();
		}			
	});
	whGoTop.click(function(){
		$('.wMsgPad').scrollTop(0);
	});
	closeWhBt.click(function() {
		whisperPad.animate({'left': -110 + '%', 'opacity': '0'}, 300);
	});

	/* 推薦物品 suggestBlock (共用) */
	var $sugBlock = $('.suggestBlock'),
		conW = $('#main').find('.content').width(),
		conW = conW / 2;
	$sugBlock.css({
		'padding-left' : ( Gww / 2 ) - conW,
		'padding-right' : ( Gww / 2 ) - conW,
		'margin-left' : - ( Gww / 2 ) + conW
	});
	var i = 0,
		$sgCont = $('.sgCont'),
		$sgContW = $sgCont.width(),
		$sgMaskW = $('.sgMask').width(),
		$sgUL = $sgCont.find('ul'),
		$sgLI = $sgCont.find('li'),
		$sgLeng = $sgLI.length,
		$sgW = $sgLI.outerWidth(true),
		$sgNow = 0, //現在的 sg 位置
		$sgBt = $('.sgBtPad'),
		$sgBtList = $sgBt.find('.sliderBt'),
		$conInd,ind;
	//基本設定
	$sgUL.css({'min-width': $sgLeng * $sgW});
	if($('body').hasClass('itemDetail')){
		$sgLI.append('<a href="item_detail.html?c"></a>');
	}else if($('body').hasClass('wishDetail')){
		$sgLI.append('<a href="wish_detail.html?c"></a>');
	}else{//console.log('unset');
    }
	var $sgULW = $sgUL.width();
	$conInd = $sgULW / $sgMaskW; // 總頁數
	$sgBtList.eq(1).css({'left' : $sgContW + 50 + 'px'});
	$sgBtList.eq(0).css({'opacity':0.4});
	//點箭頭
	$sgBtList.click(function(){
		ind = $(this).index();
		if(ind !== 1 && $sgNow !== 0){
			$sgNow--;
			$sgBtList.eq(1).css({'opacity':1});
			$sgUL.stop().animate({"margin-left": -$sgMaskW * $sgNow}, 2000 ,'easeOutCubic');
			if($sgNow == 0){$sgBtList.eq(0).css({'opacity':0.4});}
		}else if(ind === 1 && $sgNow < $conInd - 1){
			$sgNow++;
			$sgBtList.eq(0).css({'opacity':1});
			$sgUL.stop().animate({"margin-left": - $sgMaskW * $sgNow}, 2000 ,'easeOutCubic');
			if($sgNow >= ($conInd - 1)){$sgBtList.eq(1).css({'opacity':0.4})}
		}
	});
	//留言.交換區塊 socialBlock
	var $btnPad = $('.socialBlock').find('.btnPad'),
		$scBtn = $btnPad.find('span'),
		$scPad = $('.socialPad'),
		$scUL = $scPad.find('.socialList'),
		$showMore = $scPad.find('.showMore'),
		$paction, pInd, pLen, $scList, $scItem, $scLen;
	$scBtn.click(function(){
		var scInd = $(this).index();
		$scList = $scUL.eq(scInd),
		$scItem = $scList.find('li');
		$scLen = $scItem.length;
		if($scLen < 4){
			$showMore.css({'display':'none'});
		}else{
			$showMore.fadeIn();
		}
		//socialPad內3個以上的項目隱藏或顯示
		for(i=0; i<$scLen; i++){
			if(i>2){$scItem.eq(i).css({'display':'none'});}else{$scItem.eq(i).fadeIn();}
		}
		$scBtn.eq(scInd).addClass('action').siblings().removeClass('action');
		$scUL.eq(scInd).addClass('action').siblings().removeClass('action');
	});
	//點顯示更多
	$showMore.click(function(){
		$scList = $scPad.find('.socialList.action'),
		$scItem = $scList.find('li');
		$scItem.fadeIn();
		//$showMore.fadeOut();
	});
	//交換區塊的開啟交換頁 socialBlock
	var $openSwap = $('.swapPad').find('.swapList');
	$openSwap.append('<a class="openDetail" href="swap_item_detail.html"></a>');


	/* item_edit 編輯物品 */
	var $stepPad = $('.stepPad'),
		$editImg = $stepPad.find('.editImg'),
		$addImg = $stepPad.find('.addImg'),
		$addImgW = $addImg.outerWidth(),
		$imgMask = $('.imgMask'),
		$imgMaskW = $imgMask.width(),
		$imgBlock = $imgMask.find('.imgBlock'),
		$imgList = $imgBlock.find('.imgList'),
		$imgListL = $imgList.length,
		$delImg = $('.delImg');
	//基本設定
	$addImg.css({'height': $addImgW});
	$imgList.css({'width': $addImgW, 'height': $addImgW});
	var $imgListW = $imgList.outerWidth(true);
	var $imgMaskWh = $('.imgMaskW');
	if($imgListL > 3){
		$imgMaskWh.fadeIn();
	}else{
		$imgMaskWh.fadeOut();
	}
	//編輯按鈕.垃圾桶
	$editImg.hover(function(){
		$(this).find('span').addClass('action');
	},function(){
		$(this).find('span').removeClass('action');
	});
	//物品類別選擇
	var $icoPad = $('.icoPad'),
		$ico = $icoPad.find('i'),
		$itemType = $('.itemOption.itemType').find('input'),
		$itemTag = $('.itemOption.itemType').find('span'),
		icInd, icTXT;
	//$('.itemOption.itemType').append('<i class="clearVal">清除</i>');
	if($('.itemOption.itemType').hasClass('action')){
		var itL = $itemType.val().length;
		if(itL < 3){
			$itemType.attr('size', itL + 1 + 'rem');
		}else{
			$itemType.attr('size', itL + 3 + 'rem');
		}
		var itW = $itemType.outerWidth();
		$itemTag.css({'margin-left': itW});
		$icoPad.fadeOut(100);
	}
	//點icon
	$ico.click(function(){
		$('.itemOption.itemType').removeClass('require');
		$('.clearVal').removeClass('clear');
		icInd = $(this).index();
		icTXT = $ico.eq(icInd).text();
		$('.itemOption.itemType').addClass('action');
		$itemType.eq(0).attr('value', icTXT );
		var itL = $itemType.val().length;
		if(itL < 3){
			$itemType.attr('size', itL + 1 + 'rem');
		}else{
			$itemType.attr('size', itL + 3 + 'rem');
		}
		var itW = $itemType.outerWidth();
		$itemTag.css({'margin-left': itW});
		$icoPad.fadeOut(100);
	});
	//點清空
	$('.clearVal').click(function(){
		$(this).addClass('clear');
		$('.itemOption.itemType').addClass('require');
		$('.itemOption.itemType').removeClass('action');
		$itemType.eq(0).attr('value', '' );
		$itemType.attr('size', 'auto');
		$itemTag.css({'margin-left': 'unset'});
		$icoPad.fadeIn();
		return
	});
	//require警告
	$('*:required').keyup(function(){
		if($(this).val() !== ''){
			$(this).parent().removeClass('require');
		}else{
			$(this).parent().addClass('require');
		}
	});
	var $btnSubmit = $('body.edit').find('.btn_submit');
	$btnSubmit.hover(function(){
		$(this).removeClass('btn_w').addClass('btn_o');
	},function(){
		$(this).removeClass('btn_o').addClass('btn_w');
	});

	//選取我願意免費贈送清空表單
	var $editFree = $('.editFree').find('#checkFree');
	$editFree.click(function(){
		var $expectList = $('.expectPad').find('dd').find('p'),
			$expLen = $expectList.length,
			$expInput = $expectList.find('input'),
			$expTxt = $expectList.find('textarea');
		$expectList.removeClass('require');
		if($('#checkFree').prop('checked') == true){
			for(i=0; i<$expLen-1; i++){
				$expectList.eq(i).addClass('disabled');
				$expInput.eq(i).prop('required',false).prop('disabled',true).val('');
				$expTxt.eq(i).prop('disabled',true).val('');
				$btnCUR.find('i').text('TWD');
			}
		}else if($('#checkFree').prop('checked') == false){
			$expectList.removeClass('disabled');
			$expectList.find('input:text').prop('required',true);
			$expInput.prop('disabled',false);
			$expTxt.prop('disabled',false);
		}else{
			console.log('none');
		}
	});
	

	/* 登入頁 */
	var $con = $('body.signin').find('.content'),
		$conW, //$con寬度
		conH, //$con高度
		$conBlock = $con.find('.conBlock'),
		$cBlockW, //conBlock寬度
		$cBlockH, //conBlock高度
		nowCon = 0, //當前的conBlock(表單區塊)
		$bgBlock = $('.bgBlock'),
		$bgBlockA = $bgBlock.find('a'), //背景區塊
		$expBlock = $('.expBlock'), //conBlock下方連結
		$setpwBt = $('.signinPad').find('.forgotPW'), //忘記密碼
		$setpwBgA = $('.pwBgBlock').find('a');
	// 初始設定
	$bgBlock.eq(0).css({'display' : 'block'});
	$conBlock.eq(nowCon).css({'display' : 'block'}).siblings().css({'display' : 'none'});
	$expBlock.css({'display' : 'block'});
	// 設定當前conBlock尺寸
	var setH = function(){
		$cBlockW = $conBlock.eq(nowCon).outerWidth();
		$cBlockH = $conBlock.eq(nowCon).outerHeight();
		$con.innerWidth($cBlockW);
		$con.innerHeight($cBlockH);
		conW = $con.outerWidth();
		conH = $con.outerHeight();
		$con.css({'top' : ( Gdh - conH ) / 2 , 'left' : ( Gdw - conW ) / 2});
	}
	setH();
	// 登入或註冊 點左右色塊
	$bgBlockA.click(function(){
		var ind = $(this).index();
		if( ind !== 1){
			nowCon = 1;
			$('.signBgBlock').addClass('goLeft'); //移動色塊
			$bgBlockA.eq(nowCon).removeClass('action').siblings().addClass('action'); //字改白色
			$conBlock.eq(nowCon).fadeIn().siblings('.conBlock').fadeOut(); //更換conBlock
			$expBlock.stop().fadeOut();
		}else{
			nowCon = 0;
			$('.signBgBlock').removeClass('goLeft');
			$bgBlockA.eq(nowCon).removeClass('action').siblings().addClass('action');
			$conBlock.eq(nowCon).fadeIn().siblings('.conBlock').fadeOut();;
			$expBlock.fadeIn(1000);
		}
		setH();
	});
	//點忘記密碼
	$setpwBt.click(function(){
		nowCon = 2;
		$bgBlock.eq(0).find('a').find('p').fadeOut();
		$bgBlock.eq(0).find('a').find('h2').fadeOut();
		$('.signBgBlock').addClass('goTop');
		setTimeout(function() {$('.signBgBlock').fadeOut();}, 500);
		setTimeout(function() {$('.pwBgBlock').fadeIn();}, 440);
		$setpwBgA.eq(1).removeClass('action').siblings().addClass('action');
		$conBlock.eq(nowCon).fadeIn().siblings().fadeOut();
		$expBlock.stop().fadeOut();
		setH();
	});
	$setpwBgA.eq(0).unbind('click');
	$setpwBgA.eq(0).css({'cursor':'auto'})
	//點忘記密碼頁的上下色塊
	$setpwBgA.eq(1).click(function(){
		nowCon = 0;
		$bgBlock.eq(nowCon).find('a').find('p').fadeIn();
		$bgBlock.eq(nowCon).find('a').find('h2').fadeIn();
		$('.signBgBlock').fadeIn(0, function(){
			$('.signBgBlock').removeClass('goTop');
			$('.pwBgBlock').fadeOut(500, function(){
				setTimeout(function(){
					$conBlock.eq(nowCon).fadeIn(500).siblings('.conBlock').fadeOut();
				}, 500);
			});
		});
	});


	/* searchPage */
	var $srType = $('.mainBtPad').find('a'),
		$srCounter = $('.searchCounter'),
		$cAmount = $srCounter.find('span'),
		$srTypePad = $('.content').find('.conBlock'),
		$hotSearch = $('.hotSearch');

	$srType.click(function(){
		var ind = $(this).index();
		$cAmount.html('20');
		$hotSearch.fadeIn();
		$srType.eq(ind).addClass('action').siblings().removeClass('action');
		$srTypePad.eq(ind).addClass('action').siblings().removeClass('action');
		if(ind !== 0){
			$cAmount.html('5');
			$hotSearch.fadeOut();
		}
	});

	/* 側邊欄頁面 */
	//btn_attention 關注按鈕
	var $btn_attention = $('.btn_attention');
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

	//btn_smile 彈出視窗
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

	/* footer連結頁面 expPage */
	var $ruleBtn = $('body.hasMainBt').find('.mainBtPad').find('span'),
		$ruleBlock = $('body.hasMainBt').find('.conBlock');
	$ruleBtn.click(function(){
		var ind = $(this).index();
		$ruleBtn.eq(ind).addClass('action').siblings($ruleBtn).removeClass('action');
		$ruleBlock.eq(ind).addClass('action').siblings($ruleBlock).removeClass('action');
	});

	var $qaBtn = $('body.hasSideMenu').find('.sideMenu').find('li'),
		$qaBlock = $('body.hasSideMenu').find('.conBlock');
	$qaBtn.click(function(){
		var ind = $(this).index();
		$qaBtn.eq(ind).addClass('action').siblings($qaBtn).removeClass('action');
		$qaBlock.eq(ind).addClass('action').siblings($qaBlock).removeClass('action');
	});

	/* popContent 局部與內頁item_edit.html / item_upload.html共用設定 */
	//popEditSwap點 "我能免費索取checkbox" 則清空上面的內容
	var $popEditSwap = $('.popEditSwap'),
		$popEditList = $popEditSwap.find('form').find('div'),
		$popEditLen = $popEditList.length,
		$btnCUR = $('.currency'),
		$curBlock = $('.curBlock'),
		$curList = $curBlock.find('b'),
		$inputFree = $popEditSwap.find('#checkFree');
	//點幣別按鈕
	$btnCUR.click(function(){btnCUR($(this));});
	$curList.click(function(){curList($(this));});
	function btnCUR(obj){
		if($('#checkFree').prop('checked') == false){
			obj.find('.curBlock').fadeToggle();
		}}
	function curList(tag, txt){
		var txt = tag.text(),
			$thisCUR = tag.parent().parent().find('i');
		$thisCUR.text(txt);
	}
	//提出交換
	var $imgBox = $('.popEditSwap').find('.btn_imgBox'),
		$picList = $('.btn_choosePic'),
		btnInd=0,
		$popAddImg = $('.popImgList').find('.addImg'),
		$uploadW;
	//點提出物品框框,出現圖片清單
	$imgBox.click(function(){chooseImg($(this));});
	function chooseImg(obj){
		if($('#checkFree').prop('checked') == false){
			btnInd = obj.index('.btn_imgBox');
			$('#popContainer').removeClass('popShare');
			$('#popContainer').removeClass('popReport');
			$('#popContainer').removeClass('popDel');
			$('.popImgList').stop().animate({top : 0}, 300);
			$('#popContainer').addClass('popChooseImg');
			$uploadW = $popAddImg.eq(1).outerWidth();
			$popAddImg.css({'height': $uploadW});
		}
	}
	//點選擇照片或物品跳轉到上傳物品頁
	// $('.btn_upload').click(function(){window.location.href='item_upload.html';});
	//選圖片
	$picList.click(function(){
		var pInd = $(this).index('.btn_choosePic');
		$picList.eq(pInd).addClass('action').siblings().removeClass('action'); //橘色邊框
		var img = $picList.eq(pInd).find('img').attr('src'); //取得點選的圖片連結
		$('.popImgList').stop().animate({top : -100 + 'vh'}, 300); //圖片清單消失
		$('#popContainer').removeClass('popChooseImg');
		$imgBox.eq(btnInd).addClass('getImg').css({'background-image':'url('+img+')'}); //將圖片匯入當下的提出物品框框
	});
	//點免費索取 清空pop內容
	$inputFree.click(function(){
		btnInd=0;
		if($('#checkFree').prop('checked') == true){
			for(i=0; i<$popEditLen-2; i++){
				$popEditList.eq(i).addClass('disabled');
				$imgBox.removeClass('getImg action').css({'background-image': ''});
				$popEditList.eq(i).find('input').prop('disabled',true).val('');
				$btnCUR.find('i').text('TWD');
			}
		}else if($('#checkFree').prop('checked') == false){
			$popEditList.removeClass('disabled');
			$popEditList.find('input').prop('disabled',false);
		}else{
			console.log('false');
		}
	});
	

	// ======= AT CaGe Wei Basic ====== //
	// Nav
	$('.nav').click(function(){$('.headerConts').toggleClass('action');});
	// back Top
	$('.backTop').click(function(){$('html,body').animate({scrollTop:$('#main').offset().top}, 800, 'easeOutCirc');});
	$('.btn_back').click(function(){window.history.go(-1);});

	// LightBox
	// $('#popContainer').hide();
	$('.btn_openPop').click(function(){
		var _popItem = $(this).find('img'),
			_popSrc = _popItem.attr('src'),
			_popImg = $('.popContent').find('img');
		_popImg.attr('src',_popSrc);
		$('#popContainer').fadeIn();
	});
	/* $('.btn_closePop').click(function(){$('#popContainer').fadeOut();});
	$('#popContainer').click(function(){
		$('#popContainer').fadeOut();
		//_popImg.attr('src','');
	}); */
	$('.btn_closePop').click(function(){
		$('#popContainer').stop().animate({top : -100 + 'vh'}, 500, function(){
			// $('#popContainer').fadeOut();
			$('#popContainer').removeClass();
		});
		if($('body').hasClass('mDeal')){
			$('.post').find('.btn_submit').css({'display':'none'}).siblings().fadeIn();
			$('.post').find('.inquireDeta.userData').css({'display':'none'}).siblings('.inquireDeta').fadeIn();
		}
	});

	$('.btn_cancel').click(function(){
		$('#popContainer').stop().animate({top : -100 + 'vh'}, 500);
	});
	$('.btn_sure').click(function(){
		$('#popContainer').stop().animate({top : -100 + 'vh'}, 500);
	});

	$('.btn_closeThisPop').click(function(){
		$('.fake').stop().animate({top : -100 + 'vh'}, 500, function(){
			$('#popContainer').removeClass('popChooseImg');
			$('#popContainer').removeClass('popGuaQaC');
			//$('.fake').stop().fadeOut();
		});
	});
	$('.fake').find('.btn_fake_sure').click(function(){
		$('.fake').stop().animate({top : -100 + 'vh'}, 500, function(){
			$('#popContainer').removeClass('popGuaQaC');
		});
	});
	// $('#popContainer').click(function(){
	// 	$('#popContainer').stop().animate({top : -100 + 'vh'}, 500, function(){$('#popContainer').fadeOut();});
	// 	//_popImg.attr('src','');
	// });

	// Social LInk
	var $thisUrl = document.location.href + "?socialShare";
	$('.shareToFB').attr({
		href:"https://www.facebook.com/sharer/sharer.php?u=" + $thisUrl, target:"_blank"});
	$('.shareToLine').attr({
		href:"http://line.me/R/msg/text/?" + $thisUrl , target:"_blank"});

	//console.log("Developer: %c天井創意 Art Tangency Creation | 烤雞","background:#433;color:#fff;padding:2px 10px;font-size:1em");
});

//popSharePad 複製連結
if($('body').hasClass('itemDetail') || $('body').hasClass('wishDetail')){
	$('.popSharePad').find('.copyLink').find('input').attr('id', 'copyLink');
	$('.popSharePad').find('.copyLink').append('<span class="copied">已複製連結</span>');
	var copyLink = document.getElementById('copyLink');
	copyLink.addEventListener('click', function(){
		copyLink.select();
		document.execCommand("copy");
		$('.copied').fadeIn();
	});
}

//textarea
function setHeight(obj){obj.style.height = obj.scrollHeight + 'px';}
//required判斷

function checkRq(){
	var $rqInput = $('*:required'),
	    $rqLen = $rqInput.length;
	for(i=0; i<$rqLen; i++){
		if($rqInput.eq(i).val() !== ''){
			$rqInput.eq(i).parent().removeClass('require');
		}else{
			$rqInput.eq(i).parent().addClass('require');
		}
	}
}


// Resize reload
$(window).resize(function(){
	"use strict";
	var Gw = $(window), Gww = Gw.width();
	if (/ipad/i.test(navigator.userAgent.toLowerCase())) {
    	console.log("pad");

	} // 目前是用ipad瀏覽
	else if (/iphone|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase())) {
		console.log("mobile");

	} // 目前是用手機瀏覽
	else {
		if (Gww > 768) {location.reload();}

	} // 目前是用電腦瀏覽
});

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

// Rev
window.sr = ScrollReveal();
var leftRev = {reset:true,origin:'left',distance:'50px',duration:500,delay:500,rotate:{x:0,y:0,z:0},opacity:0,scale:1,easing:'cubic-bezier(0.6, 0.2, 0.1, 1)'}
sr.reveal('.leftRev', leftRev);
sr.reveal('.Rev',{reset: true, delay:300, easing:'ease-in-out'});

// jQuery UI draggable Options connect To Sortable
$(function () {
	"use strict";
	$(".dragPad .items").sortable({
		helper: "clone",
		connectWith: "li"  /*換ul可以跨攔*/
	});
});

// Google Analytics: 天井創意
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-2540234X-X', 'art-tangency.com');
  ga('create', 'UA-2540234X-X', 'auto');
  ga('require', 'linkid', 'linkid.js');
  ga('send', 'pageview');

$(function() {
	"use strict";
	var url = window.location.href;
	url = url.split("http://www.wingbra.com.tw/")[1];

	// menu
	$(".headerConts a").click(function(){
		switch ($(this).index()) {
			case 0:
				ga('send', 'event', 'Menu > About', 'click', 'About關於我們');
				break;
			case 1:
				ga('send', 'event', 'Menu > Contact', 'click', 'Contact聯絡我們');
				break;
		}
	});

	$(".logo").click(function(){
		ga('send', 'event', 'Logo > 回首頁', 'click', 'Logo回首頁');
	});

});