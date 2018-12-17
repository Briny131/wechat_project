<template>
    <div>
        <div class="head">
            <div class="tab">
                <div :class="{active:active,left:true}" @click="active=true"><span>支出</span></div>
                <div :class="{active:!active,right:true}" @click="active=false"><span>收入</span></div>
            </div>
        </div>
        <div style="margin-top:140rpx">
            <div class="_div data-v-262c43c3 weui-cells__title">选择塘口</div> 
            <div class="_div data-v-262c43c3 weui-cells weui-cells_after-title">
                <div class="_div data-v-262c43c3 weui-cell weui-cell_select">
                    <div class="_div data-v-262c43c3 weui-cell__hd weui-cell__hd_in-select-after">
                        <div class="_div data-v-262c43c3 weui-label">选择塘口</div>
                    </div> 
                    <div class="_div data-v-262c43c3 weui-cell__bd">
                        <picker model="selcetor" @change="handleChange" :range="tangkou" range-key="areaName" class="_picker data-v-262c43c3">
                            <div class="_div data-v-262c43c3 weui-select weui-select_in-select-after">{{tangData.areaName}}</div>
                        </picker>
                    </div>
                </div>
            </div>
            <div v-if="active" class="markData">
                <div class="_div data-v-262c43c3 weui-cells weui-cells_after-title">
                    <div class="_div data-v-262c43c3 weui-cell weui-cell_input">
                        <div class="_div data-v-262c43c3 weui-cell__hd">
                            <div class="_div data-v-262c43c3 weui-label">投料量</div>
                        </div>
                        <div class="_div data-v-262c43c3 weui-cell__bd">
                            <input placeholder-class="place" type="number" class="_input data-v-262c43c3 weui-input" placeholder="0 - 9999999" maxlength="7" v-model="data.output.touLiao"  />
                            <span class="weui-s" >斤</span>
                        </div>
                    </div>
                    <div class="_div data-v-262c43c3 weui-cell weui-cell_input">
                        <div class="_div data-v-262c43c3 weui-cell__hd">
                            <div class="_div data-v-262c43c3 weui-label">单价</div>
                        </div>
                        <div class="_div data-v-262c43c3 weui-cell__bd">
                            <input placeholder-class="place" type="number" class="_input data-v-262c43c3 weui-input" placeholder="0 - 999" maxlength="3" v-model="data.output.siLiao"  />
                            <span class="weui-s" >元/斤</span>
                        </div>
                    </div>
                    <div class="_div data-v-262c43c3 weui-cell weui-cell_input">
                        <div class="_div data-v-262c43c3 weui-cell__hd">
                            <div class="_div data-v-262c43c3 weui-label">动保</div>
                        </div>
                        <div class="_div data-v-262c43c3 weui-cell__bd">
                            <input placeholder-class="place" type="number" class="_input data-v-262c43c3 weui-input weui-input-s" placeholder="0 - 9999999" maxlength="7" v-model="data.output.dongBao"  />
                            <span class="weui-s" >元</span>
                        </div>
                    </div>
                    <div class="_div data-v-262c43c3 weui-cell weui-cell_input">
                        <div class="_div data-v-262c43c3 weui-cell__hd">
                            <div class="_div data-v-262c43c3 weui-label">电费</div>
                        </div>
                        <div class="_div data-v-262c43c3 weui-cell__bd">
                            <input placeholder-class="place" type="number" class="_input data-v-262c43c3 weui-input weui-input-s" placeholder="0 - 9999999" maxlength="7" v-model="data.output.dianFei"  />
                            <span class="weui-s" >元</span>
                        </div>
                    </div>
                    <div class="_div data-v-262c43c3 weui-cell weui-cell_input">
                        <div class="_div data-v-262c43c3 weui-cell__hd">
                            <div class="_div data-v-262c43c3 weui-label">其他成本</div>
                        </div>
                        <div class="_div data-v-262c43c3 weui-cell__bd">
                            <input placeholder-class="place" type="number" class="_input data-v-262c43c3 weui-input weui-input-s" placeholder="0 - 9999999" maxlength="7" v-model="data.output.qiTa"  />
                            <span class="weui-s" >元</span>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else class="markData">
                <div class="_div data-v-262c43c3 weui-cells weui-cells_after-title">
                    <div class="_div data-v-262c43c3 weui-cell weui-cell_input">
                        <div class="_div data-v-262c43c3 weui-cell__hd">
                            <div class="_div data-v-262c43c3 weui-label">抓虾量</div>
                        </div>
                        <div class="_div data-v-262c43c3 weui-cell__bd">
                            <input placeholder-class="place" type="number" class="_input data-v-262c43c3 weui-input" maxlength="7" placeholder="0 - 9999999" v-model="data.input.zhuaXia"  />
                            <span class="weui-s">斤</span>
                        </div>
                    </div>
                    <div class="_div data-v-262c43c3 weui-cell weui-cell_input">
                        <div class="_div data-v-262c43c3 weui-cell__hd">
                            <div class="_div data-v-262c43c3 weui-label">单价</div>
                        </div>
                        <div class="_div data-v-262c43c3 weui-cell__bd">
                            <input placeholder-class="place" type="number" class="_input data-v-262c43c3 weui-input" maxlength="3" placeholder="0 - 999" v-model="data.input.danJia"  />
                            <span class="weui-s">元/斤</span>
                        </div>
                    </div>
                </div>
            </div>
            <i-button @click="commit" type="success" shape="circle" size="small" >提交</i-button>
        </div>
        
        <i-toast id="toast" />
    </div>
</template>

<script>
export default {
    data(){
        return{
            active:true,
            tangData:{
                areaName:'',
                id:'',
                openId:''
            },
            data:{
                output:{
                    touLiao:'',
                    siLiao:'',
                    dongBao:'',
                    dianFei:'',
                    qiTa:''
                },
                input:{
                    zhuaXia:'',
                    danJia:''
                }
            }
        }
    },
    computed:{
        tangkou:function(){
            console.log(this.$store.state.tangkou)
            return this.$store.state.tangkou
        }
    },
    methods:{
        handleChange(e){
            console.log(e)
            let a=this.tangkou[parseInt(e.mp.detail.value)]
            for(let i in this.tangData){
                this.tangData[i]=a[i]
            }
            console.log(this.tangData)
            // this.tangData.areaName=a.areaName
            // this.tangData.id=a.id
            // this.tangData.openId=a.areaName
        },
        commit(){
            if(this.active){
                this.$fetch.addOutput({...this.data.output,...this.tangData}).then(resp=>{
                    if(resp.data.returnCode){
                        this.data.output.res()
                        this.$toast({
                            content:'提交成功',
                            type:'success'
                        })  
                    }else{
                        this.$toast({
                            content:resp.data.returnMsg,
                            type:'error'
                        })
                    }
                })
            }else{
                this.$fetch.addInput({...this.data.input,...this.tangData}).then(resp=>{
                    if(resp.data.returnCode){
                        this.data.input.res()
                        this.$toast({
                            content:'提交成功',
                            type:'success'
                        })  
                    }else{
                        this.$toast({
                            content:resp.data.returnMsg,
                            type:'error'
                        })
                    }
                })
            }
        }
    }
}
</script>

<style>
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
        border:2rpx solid black;
        border-radius:0.4em;
        right:0;
        left:0;
        margin:20rpx auto 40rpx;
        z-index:1000;
        overflow: hidden;
    }
    .left,.right{
        font-size: 0.8em;
        height:calc(100% + 2rpx);
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
        left:calc(50% + 2rpx);
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

