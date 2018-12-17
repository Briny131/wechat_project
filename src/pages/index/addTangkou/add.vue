<template>
    <div>
        <div class="_div data-v-262c43c3 weui-cells__title">{{findout.title}}</div>
        <div class="_div data-v-262c43c3 weui-cells weui-cells_after-title input-margin" style="margin-bottom:2em">
            <div class="_div data-v-262c43c3 weui-cell weui-cell_input">
                <div class="_div data-v-262c43c3 weui-cell__hd">
                    <div class="_div data-v-262c43c3 weui-label">塘口名称</div>
                </div>
                <div class="_div data-v-262c43c3 weui-cell__bd">
                    <input placeholder-class="place" class="_input data-v-262c43c3 weui-input" v-model="data.areaName" placeholder="请输入名称" />
                </div>
            </div>
            <div class="_div data-v-262c43c3 weui-cell weui-cell_input">
                <div class="_div data-v-262c43c3 weui-cell__hd">
                    <div class="_div data-v-262c43c3 weui-label">养殖面积</div>
                </div>
                <div class="_div data-v-262c43c3 weui-cell__bd">
                    <input placeholder-class="place" type="number" class="_input data-v-262c43c3 weui-input weui-input-s" @change="checkArea" v-model="data.area" placeholder="请输入养殖面积" />
                    <span class="weui-s" v-if="areaCheck">亩</span>
                </div>
                <div class="_div data-v-262c43c3 weui-cell__ft" v-if="!areaCheck">
                    <icon type="warn" size="18" color="#E64340" class="_icon data-v-262c43c3"></icon>
                </div>
            </div>
            <div class="_div data-v-262c43c3 weui-cell weui-cell_input">
                <div class="_div data-v-262c43c3 weui-cell__hd">
                    <div class="_div data-v-262c43c3 weui-label">放苗量</div>
                </div>
                <div class="_div data-v-262c43c3 weui-cell__bd">
                    <input placeholder-class="place" type="number" class="_input data-v-262c43c3 weui-input weui-input-s" @change="checkConut" v-model="data.areaCount" placeholder="请输入放苗量" />
                    <span class="weui-s" v-if="countCheck">万尾</span>
                </div>
                <div class="_div data-v-262c43c3 weui-cell__ft" v-if="!countCheck">
                    <icon type="warn" size="18" color="#E64340" class="_icon data-v-262c43c3"></icon>
                </div>
            </div>
            <div class="_div data-v-262c43c3 weui-cell weui-cell_input">
                <div class="_div data-v-262c43c3 weui-cell__hd">
                    <div class="_div data-v-262c43c3 weui-label">放苗时间</div>
                </div>
                <div class="_div data-v-262c43c3 weui-cell__bd">
                    <picker mode="date" start="1999-01-01" end="2029-01-01" @change="inputTimeW">
                        <input placeholder-class="place" class="_input data-v-262c43c3 weui-input" :disabled="true" v-model="data.inputTime" placeholder="请输入放苗时间" />
                    </picker>
                </div>
            </div>
            <div class="_div data-v-262c43c3 weui-cell weui-cell_input">
                <div class="_div data-v-262c43c3 weui-cell__hd">
                    <div class="_div data-v-262c43c3 weui-label">抓虾时间</div>
                </div>
                <div class="_div data-v-262c43c3 weui-cell__bd">
                    <picker mode="date" start="1999-01-01" end="2029-01-01" @change="outputTimeW">
                        <input placeholder-class="place" class="_input data-v-262c43c3 weui-input" :disabled="true" v-model="data.outputTime" placeholder="请输入抓虾时间" />
                    </picker>
                </div>
            </div>
            <div class="_div data-v-262c43c3 weui-cell weui-cell_input">
                <div class="_div data-v-262c43c3 weui-cell__hd">
                    <div class="_div data-v-262c43c3 weui-label">养殖周期</div>
                </div>
                <div class="_div data-v-262c43c3 weui-cell__bd">
                    <input placeholder-class="place" class="_input data-v-262c43c3 weui-input weui-input-s" :disabled="true" v-model="data.cycle" placeholder="请输入养殖周期" />
                    <span class="weui-s" v-if="cycleCheck">天</span>
                </div>
                <div class="_div data-v-262c43c3 weui-cell__ft" v-if="!cycleCheck">
                    <icon type="warn" size="18" color="#E64340" class="_icon data-v-262c43c3"></icon>
                </div>
            </div>
            <div class="_div data-v-262c43c3 weui-cell weui-cell_input">
                <div class="_div data-v-262c43c3 weui-cell__hd">
                    <div class="_div data-v-262c43c3 weui-label">简述</div>
                </div>
                <div class="_div data-v-262c43c3 weui-cell__bd" >
                    <textarea placeholder-class="place" class="_textarea data-v-262c43c3" placeholder="简述" style="height: 10em;width:100%" maxlength="200" v-model="data.detail"/> 
                    <div class="_div data-v-262c43c3 weui-textarea-counter">{{data.detail.length}}/200</div>
                </div>
            </div>
        </div>
        <i-button @click="commit" type="success" shape="circle" size="small" >提交</i-button>
        <i-toast id="toast" />
    </div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
    data(){
        return{
            data:{
                openId:'',
                areaName:'',
                area:'',
                areaCount:'',
                inputTime:'',
                outputTime:'',
                cycle:'',
                detail:'',
            },
            areaCheck:true,
            countCheck:true,
            cycleCheck:true,
            findout:{
            }
        }
    },
    methods:{
        commit(){
            if(!this.data.url){
                var url='../../static/img/tangImg/'+Math.ceil((Math.random()*15))+'.png'
                this.data.url=url
            }
            this.$fetch.modifyTang(this.data).then(resp=>{
                if(resp.data.returnCode){
                    this.$toast({
                        content:'提交成功',
                        type:'success'
                    })
                    setTimeout(() => {
                        wx.navigateBack()
                    }, 1500);   
                }else{
                    this.$toast({
                        content:'提交失败',
                        type:'error'
                    })
                }
                
            })
        },
        inputTimeW(e){
            this.data.inputTime=e.mp.detail.value
            if(this.data.outputTime){
                let input=new Date(this.data.inputTime),output=new Date(this.data.outputTime)
                if(output.getTime()-input.getTime()<0){
                    this.$toast({
                        content:'放苗时间晚于抓虾时间',
                        type:'warning'
                    })
                    this.data.inputTime=''
                    this.data.cycle=''
                }else
                    this.data.cycle=(output.getTime()-input.getTime())/1000/60/60/24
            }
            
        },
        outputTimeW(e){
            this.data.outputTime=e.mp.detail.value
            if(this.data.inputTime){
                let input=new Date(this.data.inputTime),output=new Date(this.data.outputTime)
                if(output.getTime()-input.getTime()<0){
                    this.$toast({
                        content:'抓虾时间早于放苗时间',
                        type:'warning'
                    })
                    this.data.outputTime=''
                    this.data.cycle=''
                }else
                    this.data.cycle=(output.getTime()-input.getTime())/1000/60/60/24
            }
        },
        checkArea(data){
            if(/^[0-9]+$/.test(data.mp.detail.value)){
                this.areaCheck=true;
            }else{
                this.areaCheck=false
            }
        },
        checkConut(data){
            if(/^[0-9]+$/.test(data.mp.detail.value)){
                this.countCheck=true;
            }else{
                this.countCheck=false
            }
        },
    },
    onLoad(option){
        if(option.list){
            this.findout=JSON.parse(option.list)
            if(JSON.stringify(this.findout.list)!='{}'){
                this.data=!this.findout.add?{...this.findout.list}:{...this.data,openId:this.$store.state.baseData.openId}
                this.data.outputTime=this.$ceshi.madeTime(this.data.outputTime)
                this.data.inputTime=this.$ceshi.madeTime(this.data.inputTime)
            }else{
                this.data.openId=this.$store.state.baseData.openId
            }
            
        }
        
    },
    onUnload(){
        this.data.res();
        delete this.data.url
    }
}
</script>
