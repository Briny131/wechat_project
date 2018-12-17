<template>
  <div >
    <div class="h">
      <i-row>
        <i-col span="4">
          <picker class="weui-btn" mode="multiSelector" :value="[0,date.month-1]" @change="DateChange" :range="da">
            <div class="w-all shu">
              <div class="w-title">{{date.year}}</div>
              <div class="main-font">{{date.month}}<span class="w">月</span></div>
            </div>
          </picker>
        </i-col>
        <i-col span="10">
          <div class="w-all">
            <div class="w-title">收入</div>
            <div class="main-font" :class="classL">{{input.num}}<span>.{{input.point}}</span></div>
          </div>
        </i-col>
        <i-col span="10">
          <div class="w-all">
            <div class="w-title">支出</div>
            <div class="main-font" :class="classR">{{output.num}}<span>.{{output.point}}</span></div>
          </div>
        </i-col>
      </i-row>
      <!-- <picker class="weui-btn" mode="date" :value="date" start="1999-01-01" end="2099-01-01" @change="DateChange">
        <div style="width:30px;height:20px;background:red"></div>
      </picker> -->
    </div>
    <div id="content">
      <div class="_div data-v-34b16748 weui-cells__title">塘口信息</div>
      <div class="_div data-v-34b16748 weui-cells weui-cells_after-title" style="background-color:transparent">
        <div class="_div data-v-34b16748 weui-cell bc" v-for="item in tangkou" :key="item.id" @click="detail($event,item)">
          <div class="_div data-v-34b16748 weui-cell__hd" style="position: relative;margin-right: 10px;">
            <image :src="item.url" style="width: 50px; height: 50px;border-radius:50%; display: block" class="_image data-v-34b16748" /><!--../../static/img/tangImg/1.png-->
          </div>
          <div class="_div data-v-34b16748 weui-cell__bd">
            <div class="_div data-v-34b16748">{{item.areaName}}</div>
            <div style="font-size: 13px;color: #888888;" class="_div data-v-34b16748">{{item.detail}}</div>
          </div>
          <div class="_div data-v-34b16748 weui-cell__ft weui-cell__ft_in-access" style="font-size:80%">详细信息</div>
        </div>
      </div>

      <!-- <Btn styles='middle' texts='text' @click="fun"></Btn> -->
      <Tip sure="确定" refuse="取消" content="是否使用账号登入" title="提示" :show="ceshi" @close="fun1" @sh="fun2"></Tip>

      <div class="add" @click="addNew">
        <div class="ad"></div>
      </div>
    </div>
    <i-toast id="toast" />
  </div>
</template>

<script>
import card from '@/components/card'
// import Btn from '../../components/button.vue'
import Tip from '../../components/tip'

export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {},
      ceshi:false,
      date:{
        year:null,
        month:null
      },
      input:{
        num:0,
        point:'00'
      },
      output:{
        num:0,
        point:'00'
      },
      classL:'',
      classR:''
    }
  },

  computed:{
    tangkou:function(){
      return this.$store.state.tangkou
    },
    da: () => {
      let array = [];
      const date = new Date();
      const years = [];
      const months = [];
      for (let i = date.getFullYear(); i >= 1990; i--) {
        years.push("" + i+'年');
      }
      array.push(years);
      for (let i = 1; i <= 12; i++) {
        if (i < 10) {
          i = "0" + i;
        }
        months.push("" + i+'月');
      }
      array.push(months);
      return array;
    }
  },

  components: {
    card,
    // Btn,
    Tip
  },

  methods: {
    fun(){
      this.$fetch.getUserInfo({areaId:'111'}).then(resp=>{
      })
    },
    fun1(){
      this.ceshi=false;
    },
    detail(e,data){
      wx.navigateTo({url:'./addTangkou/main?list='+JSON.stringify({title:'塘口信息',add:false,list:data})})
    },
    DateChange(e){
      this.date.year=parseInt(this.da[0][e.mp.detail.value[0]])
      this.date.month=parseInt(this.da[1][e.mp.detail.value[1]])
      this.$fetch.getMonthIn({openId:this.$store.state.baseData.openId,time:`${this.date.year}-${this.date.month}`}).then(res=>{
        this.changeStyleL(res.data.ZongShouRu)
        this.input.num=res.data.ZongShouRu
      })
      this.$fetch.getMonthOut({openId:this.$store.state.baseData.openId,time:`${this.date.year}-${this.date.month}`}).then(res=>{
        this.changeStyleR(res.data.ZongZhiChu)
        this.output.num=res.data.ZongZhiChu
      })
    },
    addNew(){
      wx.navigateTo({url:'./addTangkou/main?list='+JSON.stringify({title:'新增塘口',add:true,list:{}})})
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    },
    changeStyleR(x){
      if(x>=10000000&&x<1000000000){
        this.classR='font-1'
      }else if(x>=1000000000){
        this.classR='font-2'
      }
    },
    changeStyleL(x){
      if(x>=10000000&&x<1000000000){
        this.classL='font-1'
      }else if(x>=1000000000){
        this.classL='font-2'
      }
    },
  },

  created () {
    let d=new Date();
    this.date.year=d.getFullYear();
    this.date.month=d.getMonth()+1;
    var that=this
    wx.getStorage({
      key:"userInfo",
      success(){
        that.$store.state.login=true
      },
      fail(){
        wx.switchTab({
          // url:'pages/me/login/main'
          url:'/pages/me/main'
        })
        // wx.redirectTo({
        //   url:'../me/login/main'
        // })
      }
    })
  },
  onShow(){
    this.$fetch.getTang({openId:this.$store.state.baseData.openId}).then(resp=>{
      this.$store.state.tangkou=resp.data.reverse()
      this.$fetch.getMonthIn({openId:this.$store.state.baseData.openId,time:`${this.date.year}-${this.date.month}`}).then(res=>{
        this.input.num=res.data.ZongShouRu
        this.changeStyleL(this.input.num)
      })
      this.$fetch.getMonthOut({openId:this.$store.state.baseData.openId,time:`${this.date.year}-${this.date.month}`}).then(res=>{
        this.output.num=res.data.ZongZhiChu
        this.changeStyleR(res.data.ZongZhiChu)
      })
    }).catch(e=>{
      this.$toast({
          content:'请检查网络',
          type:'warning'
      })
    })
  }
}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
  color: transparent
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
.bc{
  background:white;
  margin:0.5em 1em;
  border-radius:0.5em;
  padding:0.8em 0.3em
}
.weui-cells_after-title:after,.weui-cells_after-title::before,.bc:after,.bc:before{
  border-color:transparent
}
.h{
  width:100%;
  height:4em;
  background:#51cc99;
  position:fixed;
  top:0;
  z-index: 1000;
}
#content{
  margin-top:4.5em
}
.w-all{
  padding:0.5em 0 0 0.5em;
}
.shu{
  position:relative;
}
/* .shu::after{
  content:'';
  position:absolute;
  width:1rpx;
  height:40%;
  background:rgb(129, 129, 129);
  right:0;
  bottom:10rpx;
} */
.w{
  position:relative;
}
.w::after{
  content:'';
	width:0;
	height:0;
  position:absolute;
  right:-20rpx;
  bottom:10rpx;
	border-top:10rpx solid #000;
	border-right:10rpx solid transparent;
	border-left:10rpx solid transparent;
}
.w-title{
  font-size: 70%;
  color:#777
}
.main-font{
  font-size:120%;
  height:90rpx;
  line-height:90rpx
}
.main-font>span{
  font-size: 70%
}
.add{
  width: 3em;
  height:3em;
  border-radius: 50%;
  background:rgb(81, 204, 153);
  position: fixed;
  right:1em;
  bottom:1em;
}
.ad {
  position:relative;
  top:48%;
  left:25%;
	width:1.5em;
	height:.1em;
	background-color:#000;
	border-radius:.15em;
}
.ad:after {
	content:"";
	position:absolute;
	width:1.5em;
	height:.1em;
	background-color:#000;
	transform:rotate(90deg);
	border-radius:.15em;
}
.font-1{
  font-size:90%
}
.font-2{
  font-size:80%;
  width:100%;
  overflow:auto
}
.font-2::-webkit-scrollbar{
  display:none
}
</style>
