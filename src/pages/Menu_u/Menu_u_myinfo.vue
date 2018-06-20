<template>
<div>
<!-- <body class="item noSearchPage menuPage mItem info"> -->
	<!-- Header -->
  <app-header></app-header>
	<!-- Header END -->
	<div id="main">
		<div class="breadcrumb">
			<i>Swapub</i><i> &#62; Jing Yun Lee</i><i></i><i></i><i></i>
		</div>
		<div class="content">
            <h1>編輯個人資料</h1>
            <div class="innerCoverBlock">
                <span class="coverImg"></span>
                <label for="editCover" class="btn_w btn_edit">點擊編輯圖片<input type="file" id="editCover"></label>
                <div>
                    <ul class="userInfo">
                        <li class="userPic">
                            <label for="editUImg" class="editUserImg"><img src="../../../static/images/ws_user_img_4.png" alt=""><input type="file" id="editUImg" @change="onFileChanged"></label>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="conBlock">
                <form>
                    <div>
                        <dl class="formdataPad clear">
                            <dt><p><span>姓</span><input type="text" name="" id=""  v-model="changeInfo.FirstName"></p></dt>
                            <dd><p><span>名</span><input type="text" name="" id="" v-model="changeInfo.LastName" ></p></dd>
                            <dd><p ><span>城市</span><input type="text" name="" id="" v-model="changeInfo.City"></p></dd>
                            <dd><p><span>州/省</span><input type="text" name="" id="" ></p></dd>
                            <dd><p><span>國家</span><input type="text" name="" id="" v-model="changeInfo.Country"></p></dd>
                            <dd></dd>
                            <dd><p class="checked"><span>電話</span><input type="text" name="" id="" v-model="changeInfo.Mobile"></p></dd>
                            <dd><p class="checked"><span>電子信箱</span><input type="email" name="" id="" :value="this.resData.Email" disabled></p></dd>
                        </dl>
                    </div>
                    <div class="checkPad">
                        <input type="button" class="btn_w btn_cancel" value="取消" @click="cancel()">
                        <input type="submit" class="btn_o btn_sure" value="送出" @click="changeData(changeInfo.FirstName,changeInfo.LastName,changeInfo.City,changeInfo.Country,changeInfo.Mobile)">
                    </div>
                </form>
            </div>
		</div>
	   <div class="btn_openPop"></div>
	</div><!-- main END -->

	<!-- Footer -->
	<app-footer></app-footer>
	<div class="backTop CGt"></div>
	<!-- Light Box -->
	<div id="popContainer" style="top:-100vh;">
        <div class="popContent popSys popImg">
            <div class="btn_closePop"></div>
            <p>請調整照片位置及大小</p>
            <div class="popImgPad"><span class="popImgMask"><i></i><img src="../../../static/images/ws_user_img_4.png" alt=""></span></div>
            <div class="popRangeBar">
                <i>-</i><input type="range" min="0" max="100" step="1" value="50"><i>+</i>
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
import qs from 'qs';
import axios from 'axios'
import api from '../../api/Api.js'



export default {
  components: {
    'app-header': Header,
    'app-footer': Footer

  },
  data(){
    return{
      PicInfo:{
        FileName:"123",
        FileContent:""
      },
      resData:[],
      changeInfo:{
        FirstName:"",
        LastName:"",
        City:"",
        Country:"",
        Mobile:"",
        Email:""
      },
      isAllowEditUserName:{}
    }
  },
  created(){
  this.getUser();
  },
  methods:{
    async getUser(){
        this.resData = await api.get('User',localStorage.getItem('login_token'),'')
        this.changeInfo.FirstName = this.resData.FirstName 
        this.changeInfo.LastName = this.resData.LastName
        this.changeInfo.City = this.resData.Location.City 
        this.changeInfo.Country = this.resData.Location.Country
        this.changeInfo.Mobile = this.resData.Mobile
        this.changeInfo.Email = this.resData.Email        
        console.log(this.resData)
        
    },
    async changeData(FirstName,LastName,City,Country,Mobile,Email){
        this.resData = await api.get('User',localStorage.getItem('login_token'),'')
        let copy = Object.assign({}, this.resData);
        this.isAllowEditUserName = await api.get('IsAllowEditUserName',localStorage.getItem('login_token'),'')
       if(this.changeInfo.FirstName != this.resData.FirstName){
          this.isAllowEditUserName = await api.get('IsAllowEditUserName',localStorage.getItem('login_token'),'')
          if(this.isAllowEditUserName == 0){
            alert("您的名字已修改過，請於180天後再進行更改")
            location.reload()
          }
          else{
            if(confirm("您確定要修改嗎？") == true){
              copy.FirstName = FirstName
              copy.LastName = LastName
              copy.Location.City = City
              copy.Location.Country = Country
              copy.Mobile = Mobile
              copy.Verification.PhoneNumber = Mobile
              copy.Name = FirstName + LastName
              await api.put('User',copy,localStorage.getItem('login_token'),'')
            }
          }
        }
        else{
            if(confirm("您確定要修改嗎？") == true){
              copy.Location.City = City
              copy.Location.Country = Country
              copy.Verification.PhoneNumber = Mobile
              copy.Mobile = Mobile
              await api.put('User',copy,localStorage.getItem('login_token'),'')
              console.log(copy)
            }
        }
        
    },
    cancel(){
        	this.$router.push('/menu_u_myitem')
    },
    onFileChanged (event) {
      const file = event.target.files[0];
      console.log(file.name)
      const reader = new FileReader();
      this.PicInfo.FileName = file.name
      reader.onload = e => { 
        this.PicInfo.FileContent = e.target.result.split(',')[1]
        console.log(this.PicInfo)

        axios.post('api/Upload?'+'accessToken='+localStorage.getItem('login_token')+'&type=1',this.PicInfo,{headers: {
			'Content-Type': 'application/json',
      'appid':'TestAppID_2',
      'AppVersion':'2.14.0'
			}}).then((res) => {
                console.log(res)
          })
      }         
      reader.readAsDataURL(file);
      setTimeout(() => {
      
            },1000)
      }
  
    
  },
  mounted() {
    setTimeout(() => {
      var element = document.getElementById("body_class");
      element.removeAttribute("class");
      element.classList.add("noSearchPage", "menuPage", "mItem", "info");

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

        $('.userPic').on('change', '#editUImg', function () {
          $('#popContainer').removeClass();
          $('#popContainer').stop().animate({
            top: 0
          }, 300);
          $('#popContainer').addClass('popEditUImg');
        });


      })


    }, 0)
  }
}


</script>