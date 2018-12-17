<template>
    <div v-if="!show">
        <div class="head">
            <div class="tab">
                <div :class="{active:active,left:true}" @click="active=true,getOutput()"><span>支出</span></div>
                <div :class="{active:!active,right:true}" @click="active=false,getInput()"><span>收入</span></div>
            </div>
        </div>
        <div style="margin-top:140rpx">
            <div class="_div data-v-34b16748 weui-cells__title">明细</div>
            <div class="_div data-v-34b16748 weui-cells weui-cells_after-title" style="background-color:transparent">
                <div class="_div data-v-34b16748 weui-cell bc" v-for="item in detail" :key="item.jilu" @click="showDetail($event,item)">
                    <div class="_div data-v-34b16748 weui-cell__bd" >
                        <div class="_div data-v-34b16748">{{item.areaName}}&nbsp;/&nbsp;<span>{{item.updateTime}}</span></div>
                        <!-- <div style="font-size: 13px;color: #888888;" class="_div data-v-34b16748 detail">{{item.detail}}</div> -->
                    </div>
                    <div class="_div data-v-34b16748 weui-cell__ft weui-cell__ft_in-access" style="font-size:80%">详细信息</div>
                </div>
            </div>
        </div>
    </div>
    <div v-else-if="show&&tag" style="position:relative;height:100%;top:0">
        <div style="margin-bottom:2em">
        <div class="_div data-v-262c43c3 weui-cells__title">支出</div> 
            <div class="_div data-v-262c43c3 weui-cells weui-cells_after-title">
                <div class="_div data-v-262c43c3 weui-cell weui-cell_input">
                    <div class="_div data-v-262c43c3 weui-cell__hd">
                        <div class="_div data-v-262c43c3 weui-label">投料量</div>
                    </div>
                    <div class="_div data-v-262c43c3 weui-cell__bd">
                        <input type="number" :disabled="true" class="_input data-v-262c43c3 weui-input" v-model="data.touLiao"  />
                        <span class="weui-s" >斤</span>
                    </div>
                </div>
                <div class="_div data-v-262c43c3 weui-cell weui-cell_input">
                    <div class="_div data-v-262c43c3 weui-cell__hd">
                        <div class="_div data-v-262c43c3 weui-label">单价</div>
                    </div>
                    <div class="_div data-v-262c43c3 weui-cell__bd">
                        <input type="number" :disabled="true" class="_input data-v-262c43c3 weui-input" v-model="data.siLiao"  />
                        <span class="weui-s" >元/斤</span>
                    </div>
                </div>
                <div class="_div data-v-262c43c3 weui-cell weui-cell_input">
                    <div class="_div data-v-262c43c3 weui-cell__hd">
                        <div class="_div data-v-262c43c3 weui-label">动保</div>
                    </div>
                    <div class="_div data-v-262c43c3 weui-cell__bd">
                        <input type="number" :disabled="true" class="_input data-v-262c43c3 weui-input weui-input-s"  v-model="data.dongBao"  />
                        <span class="weui-s" >元</span>
                    </div>
                </div>
                <div class="_div data-v-262c43c3 weui-cell weui-cell_input">
                    <div class="_div data-v-262c43c3 weui-cell__hd">
                        <div class="_div data-v-262c43c3 weui-label">电费</div>
                    </div>
                    <div class="_div data-v-262c43c3 weui-cell__bd">
                        <input type="number" :disabled="true" class="_input data-v-262c43c3 weui-input weui-input-s" v-model="data.dianFei"  />
                        <span class="weui-s" >元</span>
                    </div>
                </div>
                <div class="_div data-v-262c43c3 weui-cell weui-cell_input">
                    <div class="_div data-v-262c43c3 weui-cell__hd">
                        <div class="_div data-v-262c43c3 weui-label">其他成本</div>
                    </div>
                    <div class="_div data-v-262c43c3 weui-cell__bd">
                        <input type="number" :disabled="true" class="_input data-v-262c43c3 weui-input weui-input-s" v-model="data.qiTa"  />
                        <span class="weui-s" >元</span>
                    </div>
                </div>
            </div>
        </div>
        <i-toast id="toast" />
        <Tip sure="是" refuse="否" content="是否删除数据" title="提示" :sureCom="del" :show="tip" @close="tip=false"></Tip>
        <i-button @click="show=false,data=''" type="success" shape="circle" size="small" >返回</i-button>
        <i-button @click="tip=true" type="default" shape="circle" size="small" >删除</i-button>
    </div>
    <div v-else-if="show&!tag" style="position:relative;height:100%;top:0">
        <div style="margin-bottom:2em">
            <div class="_div data-v-262c43c3 weui-cells__title">收入</div> 
            <div class="_div data-v-262c43c3 weui-cells weui-cells_after-title">
                <div class="_div data-v-262c43c3 weui-cell weui-cell_input">
                    <div class="_div data-v-262c43c3 weui-cell__hd">
                        <div class="_div data-v-262c43c3 weui-label">抓虾量</div>
                    </div>
                    <div class="_div data-v-262c43c3 weui-cell__bd">
                        <input type="number" :disabled="true" class="_input data-v-262c43c3 weui-input" v-model="data.zhuaXia"  />
                        <span class="weui-s">斤</span>
                    </div>
                </div>
                <div class="_div data-v-262c43c3 weui-cell weui-cell_input">
                    <div class="_div data-v-262c43c3 weui-cell__hd">
                        <div class="_div data-v-262c43c3 weui-label">单价</div>
                    </div>
                    <div class="_div data-v-262c43c3 weui-cell__bd">
                        <input type="number" :disabled="true" class="_input data-v-262c43c3 weui-input" v-model="data.danJia"  />
                        <span class="weui-s">元/斤</span>
                    </div>
                </div>
            </div>
        </div>
        <i-toast id="toast" />
        <Tip sure="是" refuse="否" content="是否删除数据" title="提示" :sureCom="del" :show="tip" @close="tip=false"></Tip>
        <i-button @click="show=false,data=''" type="success" shape="circle" size="small" >返回</i-button>
        <i-button @click="tip=true" type="default" shape="circle" size="small" >删除</i-button>
    </div>
</template>

<script>
import Tip from '../../components/tip.vue'
export default {
    data(){
        return{
            active:true,
            detail:[],
            show:false,
            tag:1,
            data:'',
            tip:false
        }
    },
    components:{
        Tip
    },
    methods:{
        getOutput(){
            this.$fetch.getOutputD({openId:this.$store.state.baseData.openId}).then(resp=>{
                let that=this
                this.tag=1
                console.log(resp)
                this.detail=resp.data.map(function(x){
                    // x.updateTime=that.$ceshi.madeTime(x.updateTime)
                    return x
                }).reverse()
            })
        },
        getInput(){
            this.$fetch.getInputD({openId:this.$store.state.baseData.openId}).then(resp=>{
                let that=this
                this.tag=0
                this.detail=resp.data.map(function(x){
                    // x.updateTime=that.$ceshi.madeTime(x.updateTime)
                    return x
                }).reverse()
            })
        },
        showDetail(e,item){
            this.show=true;
            this.data={...item}
        },
        del(){
            this.tip=false;
            if(this.tag){
                this.$fetch.delOutDetail({jilu:this.data.jilu}).then(resp=>{
                    if(resp.data.returnCode){
                        this.$toast({
                            content:resp.data.returnMsg,
                            type:'success'
                        })
                        setTimeout(()=>{
                            this.show=false
                            this.data=''
                            this.getOutput()
                        },1000)
                    }else{
                        this.$toast({
                            content:resp.data.returnMsg,
                            type:'error'
                        })
                    }
                })
            }else{
                this.$fetch.delInDetail({jilu:this.data.jilu}).then(resp=>{
                    if(resp.data.returnCode){
                        this.$toast({
                            content:resp.data.returnMsg,
                            type:'success'
                        })
                        setTimeout(()=>{
                            this.show=false
                            this.data=''
                            this.getInput()
                        },1000)
                    }else{
                        this.$toast({
                            content:resp.data.returnMsg,
                            type:'error'
                        })
                    }
                })
            }
        }
    },
    computed:{
        tangkou:function(){
            return this.$store.state.detail
        }
    },
    onShow(){
        Object.assign(this.$data, this.$options.data())
        this.getOutput()
        console.log(this.detail)
    }
}
</script>

<style scoped>
.bc{
  background:white;
  margin:0.5em 1em;
  border-radius:0.5em;
  padding:1em 0.3em 1em 1em
}
.bc span{
    font-size: 0.7em;
    color:#444
}
.weui-cells_after-title:after,.weui-cells_after-title::before,.bc:after,.bc:before{
  border-color:transparent
}
.detail{
    overflow:hidden;
    text-overflow: ellipsis;
    white-space:nowrap;
    width:20em;
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
</style>

