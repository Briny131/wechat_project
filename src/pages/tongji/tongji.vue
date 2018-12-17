<template>
    <div style="overflow:hidden;height:100%">
        <div style="height:100%;">
            <div class="head" >
                <div class="tab">
                    <div :class="{active:active,left:true}" @click="active=true,change+=1"><span>详细</span></div>
                    <div :class="{active:!active,right:true}" @click="active=false,change+=1"><span>总支出</span></div>
                </div>
            </div>
            <div style="height:70%;margin-top:140rpx" >
                <mpvue-echarts :echarts="echarts" v-if="active" :onInit="onInit" :change="change" canvasId="demo-canvas" />
                <mpvue-echarts :echarts="echarts" v-else :onInit="onBar" :change="change" canvasId="demo-canva" />
                <div class="add" @click="ceshi">
                    <div class="ad">估</div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>   

import * as echarts from 'echarts/dist/echarts.min.js'
import mpvueEcharts from 'mpvue-echarts'
// import WxCanvas from '../../../node_modules/mpvue-echarts/src/wx-canvas';
import { setTimeout } from 'timers';

export default {
    components: {
      mpvueEcharts
    },
    data () {//ccz
      return {
        echarts,
        bar:'',
        pie:'',
        onInit:this.initChart,
        onBar:this.draw,
        change:1,
        c:1,
        width:'',
        height:'',
        output:[],
        input:[],
        active:true,
        show:true,
        emp:true,
        s:'元'
      }
    },
    computed:{
        info:function(){
            return this.$store.state.baseData
        }
    },
    methods:{
        ceshi(){
            wx.navigateTo({
                url:'./gu/main'
            })
        },
        draw(canvas, width, height){
            var char=''
            char = echarts.init(canvas, null, {
                width: width,
                height: height
            });
            canvas.setChart(char);

            var option = {
                title: {
                    text: '总支出'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} \n{b} : {c} ({d}%)",
                },
                grid: {
                    top:'20'
                },
                legend: {
                    bottom:10,
                    data:['电费','动保','其他','饲料'],
                    position:['40%,50%']
                },
                series: [{
                    name: '支出',
                    type: 'pie',
                    radius:'60%',
                    data: [{value:this.$store.state.pie.DianFei,name:'电费'},
                    {value:this.$store.state.pie.DongBao,name:'动保'},
                    {value:this.$store.state.pie.QiTa,name:'其他'},
                    {value:this.$store.state.pie.WeiShi,name:'饲料'}]
                }]
            }; // ECharts 配置项

            char.setOption(option);

            return char; // 返回 chart 后可以自动绑定触摸操作 
        },
        // yData(inP,outP){
        //     console.log(inP,outP,'数据处理')
        //     var max=0,arr=[],del=0
        //     for(let i of inP){
        //         if(i.num>max) max=i.num
        //     }
        //     for(let i of outP){
        //         if(i.num>max) max=i.num
        //     }
        //     console.log(Math.ceil(max/10**(max.toString(10).length-1))*10**(max.toString(10).length-1))
        //     max=Math.ceil(max/10**(max.toString(10).length-1))*10**(max.toString(10).length-1)
        //     if(max>1000000){
        //         del=max/10
        //         for(let i = 1; i <= 6 ;i++){
        //             arr.unshift(max/1000+'k')
        //             max=max-del
        //         }
        //         arr.unshift(0)
        //         return arr
        //     }else{
        //         del=max/10
        //         for(let i = 1; i <= 6 ;i++){
        //             arr.unshift(max)
        //             max=max-del
        //         }
        //         arr.unshift(0)
        //         return arr
        //     }

        //     // return Math.ceil(max/10**(max.toString(10).length-1))*10**(max.toString(10).length-1)

        // },
        yData(x){
        },
        initChart(canvas, width, height) {
            this.width=width
            this.height=height
            var char=''
            char = echarts.init(canvas, null, {
                width: width,
                height: height
            });
            canvas.setChart(char);

            var option = {
                title: {
                    text: '详细'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} : {c} ",
                    position: function (pos, params, dom, rect, size) {
                        // 鼠标在左侧时 tooltip 显示到右侧，鼠标在右侧时 tooltip 显示到左侧。
                        var obj = {top: pos[1]};
                        obj['left'] = pos[0]+(pos[0] < size.viewSize[0]/2?0:-70);
                        return obj;
                    }
                },
                legend: {
                    bottom:10,
                    data:['支出','收入'],
                    position:['100%,50%']
                },
                xAxis: {
                    data: this.output.map(function(x){
                            let d=x.date.split('-')
                            return `${d[1]}-${d[2]}`
                        }
                    ),
                    axisLabel:{
                        interval:0,
                        // rotate:-30
                    }
                },
                yAxis: {
                    // data:this.yData(this.input,this.output),
                    axisTick:{
                        show:false
                    },
                    name:'元',
                    axisLabel:{
                        formatter:function(value){
                            let v=(+value)
                            if(v>=10000&&v<100000000){
                                return v/10000+'万'
                            }else if(v>=100000000){
                                return v/100000000+'亿'
                            }
                            return v
                        }
                    }
                    // max:this.yData(this.input,this.output),
                    // splitNumber:6
                },
                grid: {
                    top: '20%',
                    left: '15%',
                    right: '5%',
                },
                series: [{
                    name: '支出',
                    type: 'bar',
                    data: this.output.map(function(x){return x.num})
                },{
                    name: '收入',
                    type: 'bar',
                    data: this.input.map(function(x){return x.num})
                }]
            }; // ECharts 配置项

            char.setOption(option);

            return char; // 返回 chart 后可以自动绑定触摸操作
        }
    },
    onShow(){
        function add(x,y){
            if(x.length<y.length){
                let u
                u=x;
                x=y;
                y=u
            }
            console.log(x,y)
            var re=x
            var xl=x.length,yl=y.length,up=0
            for(let i=1;i<=xl;i++){
                if(yl-i>=0){
                    re=re.slice(0,xl-i)+(up+(+x[xl-i])+(+y[yl-i]))%10+re.slice(xl-i+1,xl)
                    up=Math.floor((up+(+x[xl-i])+(+y[yl-i]))/10)
                }
                else{
                    re=re.slice(0,xl-i)+(up+(+x[xl-i]))%10+re.slice(xl-i+1,xl)
                    up=Math.floor((up+(+x[xl-i]))/10)
                }
                    
            }
            return re
        }
        this.$fetch.drawOutput({openId:this.$store.state.baseData.openId}).then(resp=>{
            var date='',d;
            this.output=[]
            for(let i=6;i>=0;i--){
                d=new Date()
                d.setDate(d.getDate()-i)
                let day=d.getDate()>=10?d.getDate():'0'+d.getDate(),month=d.getMonth()+1>=10?d.getMonth()+1:'0'+(d.getMonth()+1)
                this.output.push({date:`${d.getFullYear()}-${month}-${day}`,num:'0'})
            }
            for(let i in resp.data.output){
                for(let j in this.output){
                    if(resp.data.output[i].updateTime==this.output[j].date){
                        this.output[j].num=add(this.output[j].num,resp.data.output[i].num)
                        // this.output[j].num+=(+resp.data.output[i].num)
                        break
                    }
                }
            }
            this.$fetch.drawInput({openId:this.$store.state.baseData.openId}).then(resp=>{
                var date='',d;
                this.input=[]
                for(let i=6;i>=0;i--){
                    d=new Date()
                    d.setDate(d.getDate()-i)
                    let day=d.getDate()>=10?d.getDate():'0'+d.getDate(),month=d.getMonth()+1>=10?d.getMonth()+1:'0'+(d.getMonth()+1)
                    this.input.push({date:`${d.getFullYear()}-${month}-${day}`,num:'0'})
                }
                for(let i in resp.data.input){
                    for(let j in this.input){
                        if(resp.data.input[i].updateTime==this.input[j].date){
                            this.input[j].num=add(this.input[j].num,resp.data.input[i].num)
                            // this.input[j].num+=(+resp.data.input[i].num)
                            break
                        }
                    }
                }
                this.$fetch.getTotal({openId:this.$store.state.baseData.openId}).then(resp=>{
                    this.$store.state.pie=resp.data
                    this.change+=1
                })
            })
        }).catch(e=>{
            
        })
        
        
        
    },
    onLoad(){
        console.log('加载')
    }
}
</script>

<style scoped>
    .add{
        width: 3em;
        height:3em;
        border-radius: 50%;
        background:rgb(81, 204, 153);
        position: fixed;
        right:1em;
        bottom:1em;
        z-index:100;
    }
    .ad{
        text-align: center;
        line-height:3em;
        color:rgb(52, 99, 21)
    }
    .head{
        height:120rpx;
        width:100%;
        background:rgb(81, 204, 153);
        position:fixed;
        z-index:100;
        top:0

    }
    .tab{
        position: absolute;
        width:70%;
        height:60rpx;
        line-height: 60rpx;
        border:3rpx solid black;
        border-radius:0.4em;
        right:0;
        left:0;
        margin:20rpx auto 40rpx;
        z-index:1000;
        overflow: hidden;
    }
    .left,.right{
        font-size: 0.8em;
        height:calc(100% + 3rpx);
        width:50%;
        position:absolute;
        text-align:center;
        z-index:2
    }
    .left{
        border-radius:0.4em 0 0 0.4em;
    }
    .tab:after{
        content:'';
        width:0.1em;
        height:100%;
        background:black;
        position:absolute;
        left:50%;
        top:0;
        z-index:1000
    }
    .right{
        border-radius:0 0.4em 0.4em 0;
        left:calc(50% + 3rpx);
    }
    .active{
        background:black;
        color:rgb(81, 204, 153)
    }
    .markData{
        margin:1em 0 2em;
        border-radius:1em
    }
</style>

