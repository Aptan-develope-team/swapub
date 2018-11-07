<template>
<div id="header">
		<div class="headerTop"><i></i><i></i><i></i></div>
		<div class="headerConts clear">
			<dl>
				<dt><router-link to='/' class="header_logo"><img src="../../static/images/swapub_logo.png" alt=""></router-link></dt>
				<dd class="headerMenu CGc">
					<router-link to="/" id="market" active-class="market action" exact><b>市集</b></router-link>
					<router-link to="/wish" id="wish" active-class="wish action"><b>許願牆</b></router-link>
					<a href="#" class="club"><b>俱樂部</b></a>
				</dd>
				<dd class="nav"><i></i><i></i><i></i></dd>
			</dl>
		</div>
		<div class="searchPad">
			<form class="itemSearchForm">
				<ul>
					<li>
						<input type="text" placeholder="你想要搜尋什麼商品或人名呢?" v-model="searchText"/>
						<input type="submit" name="" value="" class="searchBt" @click="search()"/>
					</li>
					<li>
						<div class="btn_search btn_searchCt"><u></u><b>搜尋範圍：</b><span class="ovLine">{{taiwan}}</span><i></i></div>
					</li>
					<li>
						<div class="btn_search btn_searchTp"><u></u><b>類型：</b>
							<span class="ovLine opCont">-<i style="background-image: none"></i></span>
						</div>
						<div class="searchOp clear">
							<span class="ovLine" @click="setCategory('product')">物品<i style="background-image: url(../../static/images/btn_myitem_o.svg)"></i></span>
							<span class="ovLine" @click="setCategory('name')">人名<i style="background-image: url(../../static/images/icon_att_o.svg)"></i></span>
							<span class="ovLine" @click="setCategory('wish')">願望<i style="background-image: url(../../static/images/icon_att_o.svg)"></i></span>

						</div>
						</li>
				</ul>
			</form>
			<form class="wishSearchForm">
				<ul>
					<li>
						<input type="text" placeholder="你想要搜尋什麼商品或人名呢?" v-model="searchText"/>
						<input type="submit" name="" value="" class="searchBt" @click="search()">
					</li>
					<li>
						<div class="btn_search btn_searchCt"><u></u><b>搜尋範圍：</b><span class="ovLine">台灣</span><i></i></div>
					</li>
					<li>
						<div class="btn_search btn_searchTp"><u></u><b>類型：</b>
							<span class="ovLine opCont">-<i style="background-image: none"></i></span>
						</div>
						<div class="searchOp clear">
							<span class="ovLine" @click="setCategory('product')">物品<i style="background-image: url(../../static/images/btn_myitem_o.svg)"></i></span>
							<span class="ovLine" @click="setCategory('name')">人名<i style="background-image: url(../../static/images/icon_att_o.svg)"></i></span>
							<span class="ovLine" @click="setCategory('wish')">願望<i style="background-image: url(../../static/images/icon_att_o.svg)"></i></span>

						</div>				
					</li>
				</ul>
			</form>
		</div>
		<div class="loginBlock">
			<div class="logout">
				<router-link to='/signin' class="btn_o btn_login">註冊/登入</router-link>或
				<a href="" class="ico_tw"></a>
				<a class="ico_fb" @click="fblogin()"></a>
			</div>
			<div class="login">
				<a class="sideBt userPic" :style="{ backgroundImage:`url(${this.imgUrl})`}"></a><span class="userName ovLine"><i></i>{{this.resData.Name}}</span>
				<a class="sideBt userMenu CGc"></a>
				<a class="sideBt userNoti CGc"><i class="noticeNum">{{this.Notify.Total}}</i></a>
			</div>
		</div>
		<div class="sideBarPad" v-if="resData">
			<span class="btn_close"><i></i><i></i></span>
			<div class="sideList userMenu">
				<router-link :to="{name:'Menu_u_myitem',params: { id: this.resData.ID}} "><i></i>我的物品與願望</router-link>
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
						<a class="action">動態(<i>{{this.Feed.length}}</i>)</a>
						<a>交易(<i>{{this.Trade.length}}</i>)</a>
					</dt>
					<dd class="action">
						<div class="noticePad CG_scorll">
							<p class="action" v-for="feed in Feed">
								<span v-if="feed.Type == 1">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 比一個讚</span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<!-- <i class="itemImg"><img :src="feed.Objects" alt=""></i> -->
								</span>
								<span v-if="feed.Type == 2">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 對我的 {{feed.ArguStr[0]}} 留言</span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
								</span>
								<span v-if="feed.Type == 3">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 收藏你的物品</span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
								</span>
								<span v-if="feed.Type == 4">
									<router-link :to="{name:'User_attention',params: {id: feed.AccountID}}">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 在關注我</span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<!-- <i class="itemImg"><img :src="feed.Objects" alt=""></i> -->
									</router-link>
								</span>
								<span v-if="feed.Type == 5">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 提交換訊息給我</span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<!-- <i class="itemImg"><img :src="feed.Objects" alt=""></i> -->
								</span>
								<span v-if="feed.Type == 6">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 對你講悄悄話  </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<!-- <i class="itemImg"><img :src="feed.Objects" alt=""></i> -->
								</span>
								<span v-if="feed.Type == 7">
									<router-link to='/menu_t_whisper'>
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 提出交換  </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<!-- <i class="itemImg"><img :src="feed.Objects" alt=""></i> -->
									</router-link>
								</span>
								<span v-if="feed.Type == 8">
									<router-link to='/menu_t_whisper'>
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 更改交換 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<!-- <i class="itemImg"><img :src="feed.Objects" alt=""></i> -->
									</router-link>
								</span>
								<span v-if="feed.Type == 9">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 接受我的交換  </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<!-- <i class="itemImg"><img :src="feed.Objects" alt=""></i> -->
								</span>
								<span v-if="feed.Type == 10">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">我接受 {{feed.Name}} 的交換  </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<!-- <i class="itemImg"><img :src="feed.Objects" alt=""></i> -->
								</span>
								<span v-if="feed.Type == 11">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">請給 {{feed.Name}} 評價  </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<!-- <i class="itemImg"><img :src="feed.Objects" alt=""></i> -->
								</span>
								<span v-if="feed.Type == 12">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 給我評價  </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<!-- <i class="itemImg"><img :src="feed.Objects" alt=""></i> -->
								</span>
								<span v-if="feed.Type == 13">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">我收藏的 {{feed.Name}} 已經下架 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<!-- <i class="itemImg"><img :src="feed.Objects" alt=""></i> -->
								</span>
								<span v-if="feed.Type == 14">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">我收藏的 {{feed.ArguStr[0]}} 已被交易 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
								</span>
								<span v-if="feed.Type == 15">
									<!-- <span class="userImg"><img :src="feed.AvatarUrl" alt=""></span> -->
									<span class="userInfo">有物品符合你的期望 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<!-- <i class="itemImg"><img :src="feed.Objects" alt=""></i> -->
								</span>
								<span v-if="feed.Type == 16">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 取消交換 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<!-- <i class="itemImg"><img :src="feed.Objects" alt=""></i> -->
								</span>
								<span v-if="feed.Type == 17">
									<router-link :to="{name:'Market_detail',params: { id: feed.RelationID}} ">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 對我的 {{feed.ArguStr[0]}} 留言 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
									</router-link>
								</span>
								<span v-if="feed.Type == 18">
									<router-link :to="{name:'Market_detail',params: { id: feed.RelationID}} ">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 對 {{feed.ArguStr[0]}} 留言 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
									</router-link>
								</span>
								<span v-if="feed.Type == 19">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">我交換中的 {{feed.ArguStr[0]}} 物品描述已被修改 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
								</span>
								<span v-if="feed.Type == 20">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 修改了 {{feed.ArguStr[0]}} 的物品描述 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
								</span>
								<span v-if="feed.Type == 21">
									<router-link :to="{name:'Market_detail',params: { id: feed.RelationID}} ">
									<!-- <span class="userImg"><img :src="feed.AvatarUrl" alt=""></span> -->
									<span class="userInfo">你要交換的 {{feed.Name}} 已經關閉 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
									</router-link>
								</span>
								<span v-if="feed.Type == 22">
									<!-- <span class="userImg"><img :src="feed.AvatarUrl" alt=""></span> -->
									<span class="userInfo">你要交換的 {{feed.ArguStr[0]}} 已經與其他人交換了 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
								</span>
								<span v-if="feed.Type == 23">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 比一個讚！</span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<!-- <i class="itemImg"><img :src="feed.Objects" alt=""></i> -->
								</span>
								<span v-if="feed.Type == 24">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 收藏你的物品 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
								</span>
								<span v-if="feed.Type == 25">
									<router-link :to="{name:'User_attention',params: {id: feed.AccountID}}">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 在關注我 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<!-- <i class="itemImg"><img :src="feed.Objects" alt=""></i> -->
									</router-link>
								</span>
								<span v-if="feed.Type == 26">
									<router-link :to="{name:'Market_detail',params: { id: feed.RelationID}} ">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 對我的 {{feed.ArguStr[0]}} 留言 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
									</router-link>
								</span>
								<span v-if="feed.Type == 27">
									<router-link :to="{name:'Market_detail',params: { id: feed.RelationID}} ">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 對 {{feed.ArguStr[0]}} 留言 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
									</router-link>
								</span>
								<span v-if="feed.Type == 28">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 上傳新物品</span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
								</span>
								<span v-if="feed.Type == 29">
                                    <router-link :to="{name:'Wish_detail',params: { id: feed.RelationID}} ">									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 新增了願望 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
									</router-link>
								</span>
								<span v-if="feed.Type == 30">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 寄送貨資訊給你 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<!-- <i class="itemImg"><img :src="feed.Objects" alt=""></i> -->
								</span>
								<span v-if="feed.Type == 31">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.ArguStr[0]}} </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
								</span>
								<span v-if="feed.Type == 32">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.ArguStr[0]}} </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
								</span>
								<span v-if="feed.Type == 33">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.ArguStr[0]}}</span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
								</span>
								<span v-if="feed.Type == 35">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">提醒您未完成手機認證，為保障交換安全，請點選此通知，繼續認證流程。 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
								</span>
								<span v-if="feed.Type == 200">
									<!-- <span class="userImg"><img :src="feed.AvatarUrl" alt=""></span> -->
									<span class="userInfo">您的交換物品 {{feed.ArguStr[1]}}門市已收貨，等待配送中。  </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
								</span>
								<span v-if="feed.Type == 201">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">您的交換物品 {{feed.ArguStr[0]}}，{{feed.ArguStr[1]}}，{{feed.ArguStr[2]}} </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
								</span>
								<span v-if="feed.Type == 202">
									<!-- <span class="userImg"><img :src="feed.AvatarUrl" alt=""></span> -->
									<span class="userInfo">您寄送的的交換物品 {{feed.ArguStr[1]}} ，換家以取貨。 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
								</span>
								<span v-if="feed.Type == 203">
									<!-- <span class="userImg"><img :src="feed.AvatarUrl" alt=""></span> -->
									<span class="userInfo">您寄送的的交換物品 {{feed.ArguStr[1]}} ，換家未取貨，等待退貨中。 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
								</span>
								<span v-if="feed.Type == 204">
									<!-- <span class="userImg"><img :src="feed.AvatarUrl" alt=""></span> -->
									<span class="userInfo">您寄送的的交換物品 {{feed.ArguStr[1]}} ，已經抵達退貨門市(同寄件門市)。 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
								</span>
								<span v-if="feed.Type == 210">
									<!-- <span class="userImg"><img :src="feed.AvatarUrl" alt=""></span> -->
									<span class="userInfo">您的交換物品 {{feed.ArguStr[1]}} ，已建立LALAMOVE訂單，等待司機接單。 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
								</span>
								<span v-if="feed.Type == 211">
									<!-- <span class="userImg"><img :src="feed.AvatarUrl" alt=""></span> -->
									<span class="userInfo">您的交換物品 {{feed.ArguStr[1]}} ，LALAMOVE訂單有司機接單，等待司機前來取件。 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
								</span>
								<span v-if="feed.Type == 212">
									<!-- <span class="userImg"><img :src="feed.AvatarUrl" alt=""></span> -->
									<span class="userInfo">您的交換物品 {{feed.ArguStr[1]}} ，LALAMOVE訂單司機遞送中。 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
								</span>
								<span v-if="feed.Type == 213">
									<!-- <span class="userImg"><img :src="feed.AvatarUrl" alt=""></span> -->
									<span class="userInfo">您的交換物品 {{feed.ArguStr[1]}} ，LALAMOVE訂單遞送物品成功。 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
								</span>
								<span v-if="feed.Type == 214">
									<!-- <span class="userImg"><img :src="feed.AvatarUrl" alt=""></span> -->
									<span class="userInfo">您的交換物品 {{feed.ArguStr[1]}} ，LALAMOVE訂單已被司機取消，系統將為您重新建單。 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
								</span>
								<span v-if="feed.Type == 215">
									<!-- <span class="userImg"><img :src="feed.AvatarUrl" alt=""></span> -->
									<span class="userInfo">您的交換物品 {{feed.ArguStr[1]}} ，LALAMOVE訂單已過期，無司機接單，系統將為您重新建單。 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
								</span>
								<span v-if="feed.Type == 301">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 邀請你加入他的俱樂部。 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<!-- <i class="itemImg"><img :src="feed.Objects" alt=""></i> -->
								</span>
								<span v-if="feed.Type == 302">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 想要加入你的俱樂部。 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<!-- <i class="itemImg"><img :src="feed.Objects" alt=""></i> -->
								</span>
								<span v-if="feed.Type == 303">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 你成為管理者。 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<!-- <i class="itemImg"><img :src="feed.Objects" alt=""></i> -->
								</span>
								<span v-if="feed.Type == 401">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 提出履約保證金。 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<!-- <i class="itemImg"><img :src="feed.Objects" alt=""></i> -->
								</span>
								<span v-if="feed.Type == 401">
									<router-link to='/menu_t_whisper'></router-link>
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 同意交換保證金。 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<!-- <i class="itemImg"><img :src="feed.Objects" alt=""></i> -->
								</span>
								<span v-if="feed.Type == 402">
									<router-link to='/menu_t_whisper'></router-link>
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 同意交換保證金。 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<!-- <i class="itemImg"><img :src="feed.Objects" alt=""></i> -->
								</span>
								<span v-if="feed.Type == 403">
									<router-link to='/menu_t_whisper'></router-link>
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 不同意交換保證金。 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<!-- <i class="itemImg"><img :src="feed.Objects" alt=""></i> -->
								</span>
								<span v-if="feed.Type == 404">
									<router-link to='/menu_t_whisper'></router-link>
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 重新提出保證金。</span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<!-- <i class="itemImg"><img :src="feed.Objects" alt=""></i> -->
								</span>
								<span v-if="feed.Type == 405">
									<router-link to='/menu_t_whisper'></router-link>
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 已匯入保證金。 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<!-- <i class="itemImg"><img :src="feed.Objects" alt=""></i> -->
								</span>
								<span v-if="feed.Type == 406">
									<router-link to='/menu_t_whisper'></router-link>
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 已確認交易無誤。</span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<!-- <i class="itemImg"><img :src="feed.Objects" alt=""></i> -->
								</span>
								<span v-if="feed.Type == 407">
									<router-link to='/menu_t_whisper'></router-link>
									<!-- <span class="userImg"><img :src="feed.AvatarUrl" alt=""></span> -->
									<span class="userInfo">履約保證金已退還到您的帳戶 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<!-- <i class="itemImg"><img :src="feed.Objects" alt=""></i> -->
								</span>
								<span v-if="feed.Type == 408">
									<router-link to='/menu_t_whisper'></router-link>
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">對方取消履約保證金。 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<!-- <i class="itemImg"><img :src="feed.Objects" alt=""></i> -->
								</span>
								<span v-if="feed.Type == 409">
									<router-link to='/menu_t_whisper'></router-link>
									<!-- <span class="userImg"><img :src="feed.AvatarUrl" alt=""></span> -->
									<span class="userInfo">我已經取消履約保證金。 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<!-- <i class="itemImg"><img :src="feed.Objects" alt=""></i> -->
								</span>
								<span v-if="feed.Type == 410">
									<router-link to='/menu_t_whisper'></router-link>
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">Swapub已經收到您的履約保證金。 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<!-- <i class="itemImg"><img :src="feed.Objects" alt=""></i> -->
								</span>
								<span v-if="feed.Type == 411">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">付款流程未完成，我們將會退回您已支付的款項。</span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<!-- <i class="itemImg"><img :src="feed.Objects" alt=""></i> -->
								</span>
								<span v-if="feed.Type == 701">
									<router-link :to="{name:'Wish_detail',params: { id: feed.RelationID}} ">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 對你的 {{feed.ArguStr[0]}} 願望留言。 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
									</router-link>
								</span>
								<span v-if="feed.Type == 702">
									<router-link :to="{name:'Wish_detail',params: { id: feed.RelationID}} ">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 對 {{feed.ArguStr[0]}} 願望留言。 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
									</router-link>
								</span>
								<span v-if="feed.Type == 703">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 在評價中留言。 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
								</span>
								<span v-if="feed.Type == 704">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 在評價中留言。 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
								</span>
								<span v-if="feed.Type == 801">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 對你的話題留言 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
								</span>
								<span v-if="feed.Type == 804">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 對你的話題按讚。 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
								</span>
								<span v-if="feed.Type == 805">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 對你的留言按讚。 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
								</span>
								<span v-if="feed.Type == 806">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 對你的回覆按讚。</span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
								</span>
								<span v-if="feed.Type == 808">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 對你的回覆留言。</span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
								</span>
								<span v-if="feed.Type == 809">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 希望你成為俱樂部的管理者。 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
								</span>
								<span v-if="feed.Type == 810">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 接受成為俱樂部的管理者。 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
								</span>
								<span v-if="feed.Type == 809">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 拒絕成為俱樂部的管理者。 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
								</span>
							</p>
							<!-- 
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
							</a></p> -->
						</div>
						<span class="showMore"><a>顯示更多</a></span>
					</dd>
					<dd>
						<div class="noticePad">
							<p class="action" v-for="feed in Trade">
								<span v-if="feed.Type == 1">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 比一個讚</span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<!-- <i class="itemImg"><img :src="feed.Objects" alt=""></i> -->
								</span>
								<span v-if="feed.Type == 2">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 對我的 {{feed.ArguStr[0]}} 留言</span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
								</span>
								<span v-if="feed.Type == 3">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 收藏你的物品</span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
								</span>
								<span v-if="feed.Type == 4">
									<router-link :to="{name:'User_attention',params: {id: feed.AccountID}}">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 在關注我</span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<!-- <i class="itemImg"><img :src="feed.Objects" alt=""></i> -->
									</router-link>
								</span>
								<span v-if="feed.Type == 5">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 提交換訊息給我</span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<!-- <i class="itemImg"><img :src="feed.Objects" alt=""></i> -->
								</span>
								<span v-if="feed.Type == 6">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 對你講悄悄話  </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<!-- <i class="itemImg"><img :src="feed.Objects" alt=""></i> -->
								</span>
								<span v-if="feed.Type == 7">
									<router-link to='/menu_t_whisper'></router-link>
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 提出交換  </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<!-- <i class="itemImg"><img :src="feed.Objects" alt=""></i> -->
								</span>
								<span v-if="feed.Type == 8">
									<router-link to='/menu_t_whisper'></router-link>
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 更改交換 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<!-- <i class="itemImg"><img :src="feed.Objects" alt=""></i> -->
								</span>
								<span v-if="feed.Type == 9">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 接受我的交換  </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<!-- <i class="itemImg"><img :src="feed.Objects" alt=""></i> -->
								</span>
								<span v-if="feed.Type == 10">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">我接受 {{feed.Name}} 的交換  </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<!-- <i class="itemImg"><img :src="feed.Objects" alt=""></i> -->
								</span>
								<span v-if="feed.Type == 11">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">請給 {{feed.Name}} 評價  </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<!-- <i class="itemImg"><img :src="feed.Objects" alt=""></i> -->
								</span>
								<span v-if="feed.Type == 12">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 給我評價  </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<!-- <i class="itemImg"><img :src="feed.Objects" alt=""></i> -->
								</span>
								<span v-if="feed.Type == 13">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">我收藏的 {{feed.Name}} 已經下架 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<!-- <i class="itemImg"><img :src="feed.Objects" alt=""></i> -->
								</span>
								<span v-if="feed.Type == 14">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">我收藏的 {{feed.ArguStr[0]}} 已被交易 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
								</span>
								<span v-if="feed.Type == 15">
									<!-- <span class="userImg"><img :src="feed.AvatarUrl" alt=""></span> -->
									<span class="userInfo">有物品符合你的期望 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<!-- <i class="itemImg"><img :src="feed.Objects" alt=""></i> -->
								</span>
								<span v-if="feed.Type == 16">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 取消交換 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<!-- <i class="itemImg"><img :src="feed.Objects" alt=""></i> -->
								</span>
								<span v-if="feed.Type == 17">
									<router-link :to="{name:'Market_detail',params: { id: feed.RelationID}} ">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 對我的 {{feed.ArguStr[0]}} 留言 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
									</router-link>
								</span>
								<span v-if="feed.Type == 18">
									<router-link :to="{name:'Market_detail',params: { id: feed.RelationID}} ">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 對 {{feed.ArguStr[0]}} 留言 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
									</router-link>
								</span>
								<span v-if="feed.Type == 19">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">我交換中的 {{feed.ArguStr[0]}} 物品描述已被修改 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
								</span>
								<span v-if="feed.Type == 20">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 修改了 {{feed.ArguStr[0]}} 的物品描述 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
								</span>
								<span v-if="feed.Type == 21">
									<router-link :to="{name:'Market_detail',params: { id: feed.RelationID}} ">
									<!-- <span class="userImg"><img :src="feed.AvatarUrl" alt=""></span> -->
									<span class="userInfo">你要交換的 {{feed.Name}} 已經關閉 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
									</router-link>
								</span>
								<span v-if="feed.Type == 22">
									<!-- <span class="userImg"><img :src="feed.AvatarUrl" alt=""></span> -->
									<span class="userInfo">你要交換的 {{feed.ArguStr[0]}} 已經與其他人交換了 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
								</span>
								<span v-if="feed.Type == 23">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 比一個讚！</span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<!-- <i class="itemImg"><img :src="feed.Objects" alt=""></i> -->
								</span>
								<span v-if="feed.Type == 24">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 收藏你的物品 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
								</span>
								<span v-if="feed.Type == 25">
									<router-link :to="{name:'User_attention',params: {id: feed.AccountID}}">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 在關注我 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<!-- <i class="itemImg"><img :src="feed.Objects" alt=""></i> -->
									</router-link>
								</span>
								<span v-if="feed.Type == 26">
									<router-link :to="{name:'Market_detail',params: { id: feed.RelationID}} ">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 對我的 {{feed.ArguStr[0]}} 留言 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
									</router-link>
								</span>
								<span v-if="feed.Type == 27">
									<router-link :to="{name:'Market_detail',params: { id: feed.RelationID}} ">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 對 {{feed.ArguStr[0]}} 留言 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
									</router-link>
								</span>
								<span v-if="feed.Type == 28">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 上傳新物品</span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
								</span>
								<span v-if="feed.Type == 29">
                                    <router-link :to="{name:'Wish_detail',params: { id: feed.RelationID}} ">									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 新增了願望 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
									</router-link>
								</span>
								<span v-if="feed.Type == 30">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 寄送貨資訊給你 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<!-- <i class="itemImg"><img :src="feed.Objects" alt=""></i> -->
								</span>
								<span v-if="feed.Type == 31">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.ArguStr[0]}} </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
								</span>
								<span v-if="feed.Type == 32">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.ArguStr[0]}} </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
								</span>
								<span v-if="feed.Type == 33">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.ArguStr[0]}}</span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
								</span>
								<span v-if="feed.Type == 35">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">提醒您未完成手機認證，為保障交換安全，請點選此通知，繼續認證流程。 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
								</span>
								<span v-if="feed.Type == 200">
									<!-- <span class="userImg"><img :src="feed.AvatarUrl" alt=""></span> -->
									<span class="userInfo">您的交換物品 {{feed.ArguStr[1]}}門市已收貨，等待配送中。  </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
								</span>
								<span v-if="feed.Type == 201">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">您的交換物品 {{feed.ArguStr[0]}}，{{feed.ArguStr[1]}}，{{feed.ArguStr[2]}} </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
								</span>
								<span v-if="feed.Type == 202">
									<!-- <span class="userImg"><img :src="feed.AvatarUrl" alt=""></span> -->
									<span class="userInfo">您寄送的的交換物品 {{feed.ArguStr[1]}} ，換家以取貨。 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
								</span>
								<span v-if="feed.Type == 203">
									<!-- <span class="userImg"><img :src="feed.AvatarUrl" alt=""></span> -->
									<span class="userInfo">您寄送的的交換物品 {{feed.ArguStr[1]}} ，換家未取貨，等待退貨中。 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
								</span>
								<span v-if="feed.Type == 204">
									<!-- <span class="userImg"><img :src="feed.AvatarUrl" alt=""></span> -->
									<span class="userInfo">您寄送的的交換物品 {{feed.ArguStr[1]}} ，已經抵達退貨門市(同寄件門市)。 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
								</span>
								<span v-if="feed.Type == 210">
									<!-- <span class="userImg"><img :src="feed.AvatarUrl" alt=""></span> -->
									<span class="userInfo">您的交換物品 {{feed.ArguStr[1]}} ，已建立LALAMOVE訂單，等待司機接單。 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
								</span>
								<span v-if="feed.Type == 211">
									<!-- <span class="userImg"><img :src="feed.AvatarUrl" alt=""></span> -->
									<span class="userInfo">您的交換物品 {{feed.ArguStr[1]}} ，LALAMOVE訂單有司機接單，等待司機前來取件。 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
								</span>
								<span v-if="feed.Type == 212">
									<!-- <span class="userImg"><img :src="feed.AvatarUrl" alt=""></span> -->
									<span class="userInfo">您的交換物品 {{feed.ArguStr[1]}} ，LALAMOVE訂單司機遞送中。 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
								</span>
								<span v-if="feed.Type == 213">
									<!-- <span class="userImg"><img :src="feed.AvatarUrl" alt=""></span> -->
									<span class="userInfo">您的交換物品 {{feed.ArguStr[1]}} ，LALAMOVE訂單遞送物品成功。 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
								</span>
								<span v-if="feed.Type == 214">
									<!-- <span class="userImg"><img :src="feed.AvatarUrl" alt=""></span> -->
									<span class="userInfo">您的交換物品 {{feed.ArguStr[1]}} ，LALAMOVE訂單已被司機取消，系統將為您重新建單。 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
								</span>
								<span v-if="feed.Type == 215">
									<!-- <span class="userImg"><img :src="feed.AvatarUrl" alt=""></span> -->
									<span class="userInfo">您的交換物品 {{feed.ArguStr[1]}} ，LALAMOVE訂單已過期，無司機接單，系統將為您重新建單。 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
								</span>
								<span v-if="feed.Type == 301">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 邀請你加入他的俱樂部。 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<!-- <i class="itemImg"><img :src="feed.Objects" alt=""></i> -->
								</span>
								<span v-if="feed.Type == 302">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 想要加入你的俱樂部。 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<!-- <i class="itemImg"><img :src="feed.Objects" alt=""></i> -->
								</span>
								<span v-if="feed.Type == 303">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 你成為管理者。 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<!-- <i class="itemImg"><img :src="feed.Objects" alt=""></i> -->
								</span>
								<span v-if="feed.Type == 401">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 提出履約保證金。 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<!-- <i class="itemImg"><img :src="feed.Objects" alt=""></i> -->
								</span>
								<span v-if="feed.Type == 401">
									<router-link to='/menu_t_whisper'></router-link>
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 同意交換保證金。 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<!-- <i class="itemImg"><img :src="feed.Objects" alt=""></i> -->
								</span>
								<span v-if="feed.Type == 402">
									<router-link to='/menu_t_whisper'></router-link>
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 同意交換保證金。 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<!-- <i class="itemImg"><img :src="feed.Objects" alt=""></i> -->
								</span>
								<span v-if="feed.Type == 403">
									<router-link to='/menu_t_whisper'></router-link>
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 不同意交換保證金。 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<!-- <i class="itemImg"><img :src="feed.Objects" alt=""></i> -->
								</span>
								<span v-if="feed.Type == 404">
									<router-link to='/menu_t_whisper'></router-link>
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 重新提出保證金。</span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<!-- <i class="itemImg"><img :src="feed.Objects" alt=""></i> -->
								</span>
								<span v-if="feed.Type == 405">
									<router-link to='/menu_t_whisper'></router-link>
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 已匯入保證金。 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<!-- <i class="itemImg"><img :src="feed.Objects" alt=""></i> -->
								</span>
								<span v-if="feed.Type == 406">
									<router-link to='/menu_t_whisper'></router-link>
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 已確認交易無誤。</span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<!-- <i class="itemImg"><img :src="feed.Objects" alt=""></i> -->
								</span>
								<span v-if="feed.Type == 407">
									<router-link to='/menu_t_whisper'></router-link>
									<!-- <span class="userImg"><img :src="feed.AvatarUrl" alt=""></span> -->
									<span class="userInfo">履約保證金已退還到您的帳戶 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<!-- <i class="itemImg"><img :src="feed.Objects" alt=""></i> -->
								</span>
								<span v-if="feed.Type == 408">
									<router-link to='/menu_t_whisper'></router-link>
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">對方取消履約保證金。 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<!-- <i class="itemImg"><img :src="feed.Objects" alt=""></i> -->
								</span>
								<span v-if="feed.Type == 409">
									<router-link to='/menu_t_whisper'></router-link>
									<!-- <span class="userImg"><img :src="feed.AvatarUrl" alt=""></span> -->
									<span class="userInfo">我已經取消履約保證金。 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<!-- <i class="itemImg"><img :src="feed.Objects" alt=""></i> -->
								</span>
								<span v-if="feed.Type == 410">
									<router-link to='/menu_t_whisper'></router-link>
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">Swapub已經收到您的履約保證金。 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<!-- <i class="itemImg"><img :src="feed.Objects" alt=""></i> -->
								</span>
								<span v-if="feed.Type == 411">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">付款流程未完成，我們將會退回您已支付的款項。</span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<!-- <i class="itemImg"><img :src="feed.Objects" alt=""></i> -->
								</span>
								<span v-if="feed.Type == 701">
									<router-link :to="{name:'Wish_detail',params: { id: feed.RelationID}} "></router-link>
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 對你的 {{feed.ArguStr[0]}} 願望留言。 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
								</span>
								<span v-if="feed.Type == 702">
									<router-link :to="{name:'Wish_detail',params: { id: feed.RelationID}} ">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 對 {{feed.ArguStr[0]}} 願望留言。 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
									</router-link>
								</span>
								<span v-if="feed.Type == 703">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 在評價中留言。 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
								</span>
								<span v-if="feed.Type == 704">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 在評價中留言。 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
								</span>
								<span v-if="feed.Type == 801">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 對你的話題留言 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
								</span>
								<span v-if="feed.Type == 804">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 對你的話題按讚。 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
								</span>
								<span v-if="feed.Type == 805">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 對你的留言按讚。 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
								</span>
								<span v-if="feed.Type == 806">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 對你的回覆按讚。</span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
								</span>
								<span v-if="feed.Type == 808">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 對你的回覆留言。</span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
								</span>
								<span v-if="feed.Type == 809">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 希望你成為俱樂部的管理者。 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
								</span>
								<span v-if="feed.Type == 810">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 接受成為俱樂部的管理者。 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
								</span>
								<span v-if="feed.Type == 809">
									<span class="userImg"><img :src="feed.AvatarUrl" alt=""></span>
									<span class="userInfo">{{feed.Name}} 拒絕成為俱樂部的管理者。 </span>
									<span class="date">{{((feed.LastUpdatedDate).split('.')[0]).replace("T","     ")}}</span>
									<i class="itemImg"><img :src="feed.Objects" alt=""></i>
								</span>
							</p>
							<!-- <p class="action"><a class="btn_assess">
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
							</a></p> -->
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
								<span class="userPic checked"><img src="../../static/images/ws_user_img_5.png" alt=""></span>
								<!-- <div class="itemImg"><img src="../../static/images/mk_it_img_23.jpg" alt=""></div> -->
								<div class="itemCon_1 itemImg">
									<div class="cssTable">
										<dl>
											<div class="itemCon_2 cssTable">
												<ul>
													<li><p style="background-image:url(images/mk_it_img_23.jpg)"></p></li>
													<li><!-- 如果只有一張圖，這個li 都不要 -->
														<p style="background-image:url(images/ws_it_img_3.jpg)"></p>
														<!-- 如果有第三張圖，要放在第二個LI 裡面 -->
													</li>
												</ul>
											</div>
										</dl>
										<dl><dt><b>+</b><i style="background-image:url(images/icon_addmoney_w.png)"></i><span class="ovLine">TWD 2000</span></dt></dl><!-- 如果有項目，就要新增 dl > dt > 內容 -->
									</div>
								</div>
								<p>TRWIWA手錶</p>
							</li>
							<li class="swapPad">
								<span class="userPic checked"><img src="../../static/images/ws_user_img_4.png" alt=""></span>
								<!-- <div class="itemImg"><img src="../../static/images/mk_it_img_1.jpg" alt=""></div> -->
								<div class="itemCon_1 itemImg">
									<div class="cssTable">
										<dl>
											<div class="itemCon_2 cssTable">
												<ul>
													<li><p style="background-image:url(images/mk_it_img_1.jpg)"></p></li>
												</ul>
											</div>
										</dl>
										<dl><dt><b>+</b><i style="background-image:url(images/icon_addmoney_w.png)"></i><span class="ovLine">TWD 2000</span></dt></dl><!-- 如果有項目，就要新增 dl > dt > 內容 -->
										<dl><dt><b>+</b><i style="background-image:url(images/icon_addserv_w.png)"></i><span class="ovLine">幫忙跑腿一次，任何地點</span></dt></dl>
									</div>
								</div>
								<p>桌上型盆栽擺飾</p>
							</li>
						</ul>
					</div>
					<div class="popAssessPad">
						<span class="userPic checked"><img src="../../static/images/ws_user_img_4.png" alt=""></span>
						<textarea name="" id="" placeholder="請填寫評價內容"></textarea>
						<p><b>請給予評價</b></p>
						<div class="popAssessBtn">
							<input type="button" class="btn_gr" value="不滿意"><input type="button" class="btn_gr" value="滿意">
						</div>
					</div>
					<div class="popCheckPad">
						<!-- <input type="button" class="btn_w btn_cancel" value="取消"> -->
						<input type="button" class="btn_o btn_sure" value="確定" onclick="assess()">
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
											<div class="countryImg"><img src="../../static/images/flag_tw.png" alt=""></div>
											<div class="name">台灣</div>
										</li>
										<li>
											<div class="countryImg"><img src="../../static/images/flag_tw.png" alt=""></div>
											<div class="name">日本</div>
										</li>
									</div>
									<div class="fail false"> <!-- false 拿掉就會顯示 -->
										<div class="failImg">
											<img src="../../static/images/search_default.png" alt="">
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
											<input type="text" id="select_Country" class="ovLine" value="-" v-model="Reg.Country">
											<!-- <div class="optionPad">
												<span class="ovLine">-</span>
												<span class="ovLine"><img src="images/flag_tw.png" alt="">台灣</span>
												
											</div> -->
										</div>
										<div class="select-custom">
											<b>州/省</b>
											<input type="text" id="select_State" value="-"  v-model="Reg.State">
											<!-- <div class="optionPad">
												<span class="ovLine">-</span>
												<span class="ovLine">江蘇省</span>
											</div> -->
										</div>
										<div class="select-custom">
											<b>城市</b>
											<input type="text" id="select_City" value="-"  v-model="Reg.City">
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
												<dd v-for="(country,key) in Country" @click="setCountry(key,country)">
													<div class="countryImg"><img src="../../static/images/flag_tw.png" alt=""></div>
													<div class="name">{{country}}</div>
												</dd>
												<!-- <dd>
													<div class="countryImg"><img src="../../static/images/flag_tw.png" alt=""></div>
													<div class="name">中國</div>
												</dd>
												<dd>
													<div class="countryImg"><img src="../../static/images/flag_uae.png" alt=""></div>
													<div class="name">香港</div>
												</dd>
												<dd>
													<div class="countryImg"><img src="../../static/images/flag_uae.png" alt=""></div>
													<div class="name">澳門</div>
												</dd>
												<dd>
													<div class="countryImg"><img src="../../static/images/flag_uae.png" alt=""></div>
													<div class="name">日本</div>
												</dd>
												<dd>
													<div class="countryImg"><img src="../../static/images/flag_tw.png" alt=""></div>
													<div class="name">南韓</div>
												</dd>
												<dd>
													<div class="countryImg"><img src="../../static/images/flag_dprk.png" alt=""></div>
													<div class="name">北韓</div>
												</dd>
												<dd>
													<div class="countryImg"><img src="../../static/images/flag_uae.png" alt=""></div>
													<div class="name">馬來西亞</div>
												</dd>
												<dd>
													<div class="countryImg"><img src="../../static/images/flag_uae.png" alt=""></div>
													<div class="name">泰國</div>
												</dd>
												<dd>
													<div class="countryImg"><img src="../../static/images/flag_uae.png" alt=""></div>
													<div class="name">印度</div>
												</dd>
												<dd>
													<div class="countryImg"><img src="../../static/images/flag_uae.png" alt=""></div>
													<div class="name">越南</div>
												</dd>
												<dd>
													<div class="countryImg"><img src="../../static/images/flag_uae.png" alt=""></div>
													<div class="name">緬甸</div>
												</dd>
												<dd>
													<div class="countryImg"><img src="../../static/images/flag_uae.png" alt=""></div>
													<div class="name">柬埔寨</div>
												</dd>
												<dd>
													<div class="countryImg"><img src="../../static/images/flag_uae.png" alt=""></div>
													<div class="name">聖誕島</div>
												</dd>
												<dd>
													<div class="countryImg"><img src="../../static/images/flag_uae.png" alt=""></div>
													<div class="name">菲律賓</div>
												</dd>
												<dd>
													<div class="countryImg"><img src="../../static/images/flag_uae.png" alt=""></div>
													<div class="name">寮國</div>
												</dd>
												<dd>
													<div class="countryImg"><img src="../../static/images/flag_uae.png" alt=""></div>
													<div class="name">科科島</div>
												</dd>
												<dd>
													<div class="countryImg"><img src="../../static/images/flag_uae.png" alt=""></div>
													<div class="name">東帝汶</div>
												</dd>
												<dd>
													<div class="countryImg"><img src="../../static/images/flag_uae.png" alt=""></div>
													<div class="name">蒙古國</div>
												</dd>
												<dd>
													<div class="countryImg"><img src="../../static/images/flag_tw.png" alt=""></div>
													<div class="name">汶萊</div>
												</dd>
												<dd>
													<div class="countryImg"><img src="../../static/images/flag_uae.png" alt=""></div>
													<div class="name">阿拉伯聯合大公國</div>
												</dd> -->
											</dl>
										</div>
										<div class="innerList">
											<dl>
												<dd v-for="(state,key) in State"  @click="setState(key,state)">
													<div class="name">{{key}}</div>
												</dd>
												<!-- <dd>
													<div class="name"></div>
												</dd>
												<dd>
													<div class="name">安徽省</div>
												</dd>
												<dd>
													<div class="name">湖北省</div>
												</dd> -->
											</dl>
										</div>
										<div class="innerList">
											<dl>
												<dd v-for="(city,key) in City" @click="setCity(key,city)">
													<div class="name">{{city}}</div>
												</dd>
												<!-- <dd>
													<div class="name">基隆市</div>
												</dd>
												<dd>
													<div class="name">新北市</div>
												</dd>
												<dd>
													<div class="name">宜蘭縣</div>
												</dd> -->
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
import city from '../language/zh-TW/city.js'
import country from '../language/zh-TW/country.js'
import cityen from '../language/en/city.json'
import countryen from '../language/en/country.json'
import region from '../language/region.js'

export default {
 data() {
    return {
			resData:{},
			imgUrl:"",
			Notify:{},
			Feed:{},
			Trade:{},
			category:"",
			searchText:"",
			Country:country,
			City:[],
			Region:region,
			State:{},
			Reg:{
				Country:"-",
				State:"-",
				City:"-"
			},
			searchCountry:"",
			searchArea:"",
			searchCity:"",
			CityKey:[],
			taiwan:"台灣"
			
    }
  },	
  created(){
	    if(localStorage.getItem('language')=='en'){
			this.Country = countryen
			this.taiwan = "Taiwan"
		}
		console.log(this.Region)
		if(localStorage.getItem('login_token')!="" || localStorage.getItem('login_token')!= undefined){
			this.getUser();
			this.getNotify();
			this.getFeed();
			this.getTrade()
		}
  },
  updated(){
	  /* 搜尋地區 */
    setTimeout(() => {
  
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
			$cus.eq(1).removeClass('seleced');
			$cus.eq(2).removeClass('seleced');
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
		}else{
			//點州省
			$cus.eq(i).addClass('seleced');
			$rInput.addClass('action');
			$rInput.val($resultTXT);
		}
	}
	},0)
  },
  methods:{
	  async getUser(){
			if(localStorage.getItem('login_token') != "" && localStorage.getItem('login_token') != undefined){
					this.resData = await api.get('User',localStorage.getItem('login_token'),'')
					this.imgUrl = api.CdnUrl + "/Uploads/User/" + this.resData.ID  + "/Avatar.jpg"
					//console.log(this.resData)
			}
	  },
	  fblogin() {
    let vm = this
    FB.login(function (response) {
      console.log(response)
    }, {
      scope: 'email, public_profile',
      return_scopes: true
    })
    FB.api('/me?fields=name,id,email', function (response) {
		console.log(response)
	})
  },
	  logout(){
		  localStorage.setItem('login_token','')
		  this.$router.push('/')
		  location.reload();
		},
		async getNotify(){
			   			if(localStorage.getItem('login_token') != "" && localStorage.getItem('login_token') != null){
				this.Notify = await api.get('Notification/GetNotifyCountWithType',localStorage.getItem('login_token'),'&unRead=true')
				console.log(this.Notify)	
						   }					
		},
		async getFeed(){
			if(localStorage.getItem('login_token') != "" && localStorage.getItem('login_token') != null){
				this.Feed = await api.get('Notification/GetListByType',localStorage.getItem('login_token'),'&groupType=0')
				console.log(this.Feed)
			}
		},
		async getTrade(){
		     if(localStorage.getItem('login_token') != "" && localStorage.getItem('login_token') != null){
				this.Trade = await api.get('Notification/GetListByType',localStorage.getItem('login_token'),'&groupType=1')
				console.log(this.Trade)
			}
		},
		setCategory(category){
			if(category == 'product'){
				this.category = "product"
			}
			else if(category == 'wish'){
				this.category = "wish"
			}
			else{
				this.category = "name"
			}
		},
		setCountry(k,c){
			this.Reg.Country = c
			this.Reg.State = '-'
			this.Reg.City = '-'
			this.searchCountry = k
			this.searchArea = ""
			this.searchCity = ""
			this.City = {}
			this.State = this.Region[k]
			if((this.Region[k])[""] != undefined){
				for(var i=0; i<(this.Region[k])[""].length ; i++){
					if(localStorage.getItem('language')=='en'){
						this.$set(this.City, i, cityen[(this.Region[k])[""][i]]) 
					}
					else{
						this.$set(this.City, i, city[(this.Region[k])[""][i]]) 
					}
				}
			}
			// else{
			// 	for(var i=0; i<this.Region[k].length ; i++){
			// 		this.City[i] = city[(this.Region[k])[i]]
			// 	}
			// }
			console.log(this.City)
		},
		
		setState(k,s){
			this.Reg.State = k
			console.log(this.City)
			console.log(this.State[k])
			this.searchArea = k
			this.Reg.City = "-"
			this.searchCity = ""
			for(var i = 0 ; i < this.State[k].length;i++){
				this.$set(this.City, i, city[(this.State[k])[i]]) 
				this.$set(this.CityKey, i, (this.State[k])[i]) 

			}
		},
		setCity(k,c){
			this.Reg.City = c
			this.searchCity = this.CityKey[k]
		},
		search(){
			if(this.category == ''){
				alert("請選擇種類")
			}
			else if(this.searchText == ''){
				alert("請輸入搜尋")
			}
			else{
				console.log(this.category)
				var element = document.getElementById("market");
					if(this.category == 'product'){
						this.$router.push({name:'Market_search',query:{text:this.searchText,Country:this.searchCountry,Area:this.searchArea,City:this.searchCity}})
					
					}
					else if(this.category == 'wish'){
						this.$router.push({name:'Wish_search',query:{text:this.searchText,Country:this.searchCountry,Area:this.searchArea,City:this.searchCity}})
					}
					else{
						this.$router.push({name:'Market_search_name',query:{text:this.searchText,Country:this.searchCountry,Area:this.searchArea,City:this.searchCity}})
					}
			}
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

	

	/* header > 搜尋類型 */
	$('.btn_searchTp').click(function(){
		$('.searchOp').fadeToggle();
	});
	var $searchOpt = $('.searchOp').find('span');
	$searchOpt.click(function(){
		var obj = $(this).html();
		$('.searchOp').fadeOut();
		$('.opCont').html(obj);
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
	  
	  if(localStorage.getItem('login_token')!= undefined && localStorage.getItem('login_token')!= ''){
      var $login = $('.loginBlock'),
        url = window.location.toString(),
        $urlUser = url.split('?')[1],
        $infoPad = $('.infoPad');
      $login.addClass('action');
      //$('#header').find('.userName').html('<i>我</i>Jing Yun Lee');
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
	  
	   var hideP = function () {
        for (var i = 0; i < $scLen; i++) {
          if (i > 2) {
            $scItem.eq(i).fadeOut();
          } else {
            $scItem.eq(i).fadeIn();
          }
        }
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

