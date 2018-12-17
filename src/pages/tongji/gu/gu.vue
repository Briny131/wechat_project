<template>
    <div style="height:100%;">
    <div>
        <div v-if="show">
            <div class="_div data-v-262c43c3 weui-cells__title">估算</div>
            <div class="_div data-v-262c43c3 weui-cells weui-cells_after-title input-margin" style="margin-bottom:1em">
                <div class="_div data-v-262c43c3 weui-cell weui-cell_input">
                    <div class="_div data-v-262c43c3 weui-cell__hd">
                        <div class="_div data-v-262c43c3 weui-label">养殖面积</div>
                    </div>
                    <div class="_div data-v-262c43c3 weui-cell__bd">
                        <input type="number" class="_input data-v-262c43c3 weui-input weui-input-s" maxlength="8" @change="empty" v-model="data.area" placeholder="请输入养殖面积(亩)" />
                        <span class="weui-s" v-if="countCheck">亩</span>
                    </div>
                </div>
                <div class="_div data-v-262c43c3 weui-cell weui-cell_input">
                    <div class="_div data-v-262c43c3 weui-cell__hd">
                        <div class="_div data-v-262c43c3 weui-label">放苗量</div>
                    </div>
                    <div class="_div data-v-262c43c3 weui-cell__bd">
                        <input type="number" class="_input data-v-262c43c3 weui-input weui-input-s" maxlength="8" @change="empty" v-model="data.count" placeholder="请输入放苗量(万尾)" />
                        <span class="weui-s" v-if="countCheck">万尾</span>
                    </div>
                </div>
                <div class="_div data-v-262c43c3 weui-cell weui-cell_input">
                    <div class="_div data-v-262c43c3 weui-cell__hd">
                        <div class="_div data-v-262c43c3 weui-label">放苗时间</div>
                    </div>
                    <div class="_div data-v-262c43c3 weui-cell__bd">
                        <picker mode="date" start="1999-01-01" end="2029-01-01" @change="inputTimeW">
                            <input class="_input data-v-262c43c3 weui-input" :disabled="true" v-model="data.inputTime" placeholder="请输入放苗时间" />
                        </picker>
                    </div>
                </div>
                <div class="_div data-v-262c43c3 weui-cell weui-cell_input">
                    <div class="_div data-v-262c43c3 weui-cell__hd">
                        <div class="_div data-v-262c43c3 weui-label">抓虾时间</div>
                    </div>
                    <div class="_div data-v-262c43c3 weui-cell__bd">
                        <picker mode="date" start="1999-01-01" end="2029-01-01" @change="outputTimeW">
                            <input class="_input data-v-262c43c3 weui-input" :disabled="true" v-model="data.outputTime" placeholder="请输入抓虾时间" />
                        </picker>
                    </div>
                </div>
                <div class="_div data-v-262c43c3 weui-cell weui-cell_input">
                    <div class="_div data-v-262c43c3 weui-cell__hd">
                        <div class="_div data-v-262c43c3 weui-label">投料量</div>
                    </div>
                    <div class="_div data-v-262c43c3 weui-cell__bd">
                        <input type="number" class="_input data-v-262c43c3 weui-input weui-input-s" maxlength="8"  @change="empty"  v-model="data.tou" placeholder="请输入投料量(斤)" />
                        <span class="weui-s" v-if="cycleCheck">斤</span>
                    </div>
                </div>
                <div class="_div data-v-262c43c3 weui-cell weui-cell_input">
                    <div class="_div data-v-262c43c3 weui-cell__hd">
                        <div class="_div data-v-262c43c3 weui-label">抓虾量</div>
                    </div>
                    <div class="_div data-v-262c43c3 weui-cell__bd">
                        <input type="number" class="_input data-v-262c43c3 weui-input weui-input-s" maxlength="8" @change="empty"  v-model="data.catch" placeholder="请输入抓虾量(斤)" />
                        <span class="weui-s" v-if="cycleCheck">斤</span>
                    </div>
                </div>
                <div class="_div data-v-262c43c3 weui-cell weui-cell_input">
                    <div class="_div data-v-262c43c3 weui-cell__hd">
                        <div class="_div data-v-262c43c3 weui-label">抓虾规格</div>
                    </div>
                    <div class="_div data-v-262c43c3 weui-cell__bd">
                        <input type="number" class="_input data-v-262c43c3 weui-input weui-input-s" maxlength="8" @change="empty"  v-model="data.size" placeholder="请输入抓虾规格(条/斤)" />
                        <span class="weui-s" v-if="cycleCheck">条/斤</span>
                    </div>
                </div>
                <div class="_div data-v-262c43c3 weui-cell weui-cell_input">
                    <div class="_div data-v-262c43c3 weui-cell__hd">
                        <div class="_div data-v-262c43c3 weui-label">单价</div>
                    </div>
                    <div class="_div data-v-262c43c3 weui-cell__bd">
                        <input type="number" class="_input data-v-262c43c3 weui-input weui-input-s" maxlength="8" @change="empty"  v-model="data.single" placeholder="请输入单价(元/斤)" />
                        <span class="weui-s" v-if="cycleCheck">元/斤</span>
                    </div>
                </div>
                <div class="_div data-v-262c43c3 weui-cell weui-cell_input">
                    <div class="_div data-v-262c43c3 weui-cell__hd">
                        <div class="_div data-v-262c43c3 weui-label">虾苗</div>
                    </div>
                    <div class="_div data-v-262c43c3 weui-cell__bd">
                        <input type="number" class="_input data-v-262c43c3 weui-input weui-input-s" maxlength="8" @change="empty"  v-model="data.miao" placeholder="请输入虾苗价钱(元)" />
                        <span class="weui-s" v-if="cycleCheck">元</span>
                    </div>
                </div>
                <div class="_div data-v-262c43c3 weui-cell weui-cell_input">
                    <div class="_div data-v-262c43c3 weui-cell__hd">
                        <div class="_div data-v-262c43c3 weui-label">饲料</div>
                    </div>
                    <div class="_div data-v-262c43c3 weui-cell__bd">
                        <input type="number" class="_input data-v-262c43c3 weui-input weui-input-s" maxlength="8" @change="empty"  v-model="data.liao" placeholder="请输入饲料(元)" />
                        <span class="weui-s" v-if="cycleCheck">元</span>
                    </div>
                </div>
                <div class="_div data-v-262c43c3 weui-cell weui-cell_input">
                    <div class="_div data-v-262c43c3 weui-cell__hd">
                        <div class="_div data-v-262c43c3 weui-label">动保</div>
                    </div>
                    <div class="_div data-v-262c43c3 weui-cell__bd">
                        <input type="number" class="_input data-v-262c43c3 weui-input weui-input-s" maxlength="8" @change="empty"  v-model="data.bao" placeholder="请输入动保(元)" />
                        <span class="weui-s" v-if="cycleCheck">元</span>
                    </div>
                </div>
                <div class="_div data-v-262c43c3 weui-cell weui-cell_input">
                    <div class="_div data-v-262c43c3 weui-cell__hd">
                        <div class="_div data-v-262c43c3 weui-label">电费</div>
                    </div>
                    <div class="_div data-v-262c43c3 weui-cell__bd">
                        <input type="number" class="_input data-v-262c43c3 weui-input weui-input-s" maxlength="8" @change="empty"  v-model="data.electric" placeholder="请输入电费(元)" />
                        <span class="weui-s" v-if="cycleCheck">元</span>
                    </div>
                </div>
                <div class="_div data-v-262c43c3 weui-cell weui-cell_input">
                    <div class="_div data-v-262c43c3 weui-cell__hd">
                        <div class="_div data-v-262c43c3 weui-label">其他成本</div>
                    </div>
                    <div class="_div data-v-262c43c3 weui-cell__bd">
                        <input type="number" class="_input data-v-262c43c3 weui-input weui-input-s" maxlength="8" @change="empty"  v-model="data.other" placeholder="请输入其他成本(元)" />
                        <span class="weui-s" v-if="cycleCheck">元</span>
                    </div>
                </div>
            </div>                      
        </div>
        <div v-else style="width:calc(100% - 0.4em);margin:0.2em;">
            <!-- <div style="height:0;opacity:0"> -->
                <canvas style="width:100%;height:100%;position:absolute;left:500px;top:0;" canvas-id="draw"></canvas>
            <!-- </div> -->
            <div style="display:block">
            <i-row i-class="three ">
                <i-col span="6" i-class="height">
                    <div class="green size font" style="height:100%;border:1px solid black;line-height:5em" >客户信息</div>
                </i-col>
                <i-col span="6" i-class="height">
                    <div class="green size font" style="height:calc(100% / 3);border:1px solid black" >客户姓名</div>
                    <div class="lightGreen size font" style="height:calc(100% / 3);border:1px solid black">地址</div>
                    <div class="size font" style="height:calc(100% / 3);border:1px solid black">养殖面积</div>
                </i-col>
                <i-col span="12" i-class="height">
                    <div class="green size font" style="height:calc(100% / 3);border:1px solid black" >{{info.userName}}</div>
                    <div class="lightGreen size font" style="height:calc(100% / 3);border:1px solid black">地址</div>
                    <div class="size font" style="height:calc(100% / 3);border:1px solid black">{{data.area}}亩</div>
                </i-col>
            </i-row>
            <i-row i-class="four ">
                <i-col span="6" i-class="height">
                    <div class="lightGreen size font" style="height:100%;border:1px solid black;line-height:18.33em" >养殖效果</div>
                </i-col>
                <i-col span="6" i-class="height">
                    <div class="lightGreen  size font" style="height:calc(100% / 11);border:1px solid black" >放苗量</div>
                    <div class=" size font" style="height:calc(100% / 11);border:1px solid black">放苗时间</div>
                    <div class="lightGreen size font" style="height:calc(100% / 11);border:1px solid black">抓虾时间</div>
                    <div class="size font" style="height:calc(100% / 11);border:1px solid black">养殖周期</div>
                    <div class="lightGreen size font" style="height:calc(100% / 11);border:1px solid black">投料量</div>
                    <div class="size font" style="height:calc(100% / 11);border:1px solid black">抓虾量</div>
                    <div class="lightGreen size font" style="height:calc(100% / 11);border:1px solid black">料比</div>
                    <div class="size font" style="height:calc(100% / 11);border:1px solid black">成活率</div>
                    <div class="lightGreen size font" style="height:calc(100% / 11);border:1px solid black">亩产</div>
                    <div class="size font" style="height:calc(100% / 11);border:1px solid black">抓虾规格</div>
                    <div class="lightGreen size font" style="height:calc(100% / 11);border:1px solid black">单价</div>
                </i-col>
                <i-col span="12" i-class="height">
                    <div class="lightGreen size font" style="height:calc(100% / 11);border:1px solid black" >{{data.count}}万尾</div>
                    <div class=" size font" style="height:calc(100% / 11);border:1px solid black">{{data.inputTime}}</div>
                    <div class="lightGreen size font" style="height:calc(100% / 11);border:1px solid black">{{data.outputTime}}</div>
                    <div class="size font" style="height:calc(100% / 11);border:1px solid black">{{data.cycle}}天</div>
                    <div class="lightGreen size font" style="height:calc(100% / 11);border:1px solid black">{{data.tou}}斤</div>
                    <div class="size font" style="height:calc(100% / 11);border:1px solid black">{{data.catch}}斤</div>
                    <div class="lightGreen size font" style="height:calc(100% / 11);border:1px solid black">{{data.liaoBi}}</div>
                    <div class="size font" style="height:calc(100% / 11);border:1px solid black">{{data.alive}}%</div>
                    <div class="lightGreen size font" style="height:calc(100% / 11);border:1px solid black">{{data.muChang}}斤/亩</div>
                    <div class="size font" style="height:calc(100% / 11);border:1px solid black">{{data.size}}条/斤</div>
                    <div class="lightGreen size font" style="height:calc(100% / 11);border:1px solid black">{{data.single}}元/斤</div>
                </i-col>
            </i-row>
            <i-row i-class="five ">
                <i-col span="6" i-class="height">
                    <div class="size font" style="height:100%;border:1px solid black;line-height:8.33em" >成本</div>
                </i-col>
                <i-col span="6" i-class="height">
                    <div class=" size font" style="height:calc(100% / 5);border:1px solid black">鱼苗</div>
                    <div class="lightGreen size font" style="height:calc(100% / 5);border:1px solid black">饲料</div>
                    <div class=" size font" style="height:calc(100% / 5);border:1px solid black">动保</div>
                    <div class="lightGreen size font" style="height:calc(100% / 5);border:1px solid black">电费</div>
                    <div class=" size font" style="height:calc(100% / 5);border:1px solid black">其他成本</div>
                </i-col>
                <i-col span="12" i-class="height">
                    <div class="size font" style="height:calc(100% / 5);border:1px solid black">{{data.miao}}元</div>
                    <div class="lightGreen size font" style="height:calc(100% / 5);border:1px solid black">{{data.liao}}元</div>
                    <div class=" size font" style="height:calc(100% / 5);border:1px solid black">{{data.bao}}元</div>
                    <div class="lightGreen size font" style="height:calc(100% / 5);border:1px solid black">{{data.electric}}元</div>
                    <div class=" size font" style="height:calc(100% / 5);border:1px solid black">{{data.other}}元</div>
                </i-col>
            </i-row>
            <i-row i-class="six ">
                <i-col span="12" i-class="height">
                    <div class="lightGreen size font" style="height:100%;border:1px solid black;line-height:1.66em" >总成本</div>
                </i-col>
                <i-col span="12" i-class="height">
                    <div class="lightGreen size font" style="height:calc(100% / 1);border:1px solid black">{{data.totalOutput}}元</div>
                </i-col>
            </i-row>
            <i-row i-class="six ">
                <i-col span="12" i-class="height">
                    <div class=" size font" style="height:100%;border:1px solid black;line-height:1.66em" >利润</div>
                </i-col>
                <i-col span="12" i-class="height">
                    <div class=" size font" style="height:calc(100% / 1);border:1px solid black">{{data.totalInput}}元</div>
                </i-col>
            </i-row>
            </div>
        </div>
        <i-toast id="toast" />
        <i-button @click="Check" type="success" shape="circle" size="small" v-if="show">估算</i-button>
        <i-button @click="Check" type="success" shape="circle" size="small" v-if="!show&&root">保存</i-button>
        <button type='primary' class='rootBtn' open-type="openSetting" @opensetting='handleSetting' v-if="!show&&!root">去授权</button>
        <!-- <i-button @click="Check" type="success" shape="circle" size="small" v-if="!show&&!root">授权</i-button> -->
        <i-button @click="Return" v-if="!show" type="default" shape="circle" size="small">返回</i-button>
    </div>
</div>
</template>

<script>

// import WxCanvas from '../../../node_modules/mpvue-ss/src/wx-canvas';

export default {
    data () {//ccz
      return {
        data:{
            area:'',//面积
            count:'',//放苗量
            inputTime:'',//放苗时间
            outputTime:'',//抓虾时间
            tou:'',//投料量
            catch:'',//抓虾量
            size:'',//抓虾规格
            single:'',//单价
            liao:'',//饲料
            bao:'',//动保
            electric:'',//电费
            other:'',//其他
            totalOutput:'',
            cycle:'',
            miao:'',
            liaoBi:'',
            alive:'',
            muChang:'',
            totalInput:''
        },
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
        root:true
      }
    },
    computed:{
        info:function(){
            return this.$store.state.baseData
        }
    },
    methods:{
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
                }
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
                }
            }
        },
        handleSetting(e){
            console.log(e)
            if(e.mp.detail.authSetting['scope.writePhotosAlbum']){
                this.root=true
            }else{
                this.$toast({
                    content:'不打开授权无法保存图片',
                    type:'warning'
                })
            }
        },
        Check(){
            if(this.show){
                this.emp=true;
                this.data.totalOutput=(+this.data.liao)+(+this.data.bao)+(+this.data.electric)+(+this.data.other)+(+this.data.miao)
                let inputTime=new Date(this.data.inputTime),outputTime=new Date(this.data.outputTime)
                this.data.cycle=(outputTime.getTime()-inputTime.getTime())/1000/60/60/24
                this.data.liaoBi=(this.data.tou/this.data.catch).toFixed(2)
                this.data.alive=(this.data.catch*this.data.size/this.data.count/10000*100).toFixed(2)
                this.data.muChang=(this.data.catch/this.data.area).toFixed(0)
                this.data.totalInput=this.data.catch*this.data.single-this.data.totalOutput
                for(let i in this.data){
                    if(this.data[i]===''){
                        this.$toast({
                            content:'请填写完整信息',
                            type:'warning'
                        })
                        this.emp=false
                        break;
                    }
                }
                if(this.emp){
                    this.show=false
                }
            }else{
                const ctx=wx.createCanvasContext('draw')
                var width=wx.getSystemInfoSync().windowWidth,height=wx.getSystemInfoSync().windowHeight
                var wid1=(width-10)/4,he1=(height-50)/21
                ctx.setFillStyle('#fff')
                ctx.fillRect(0,0,width,height)
                ctx.setFillStyle('rgb(73, 185, 139)')
                ctx.fillRect(5,45,wid1,3*he1)
                ctx.fillRect(wid1+5,45,wid1*3,he1)
                ctx.setFillStyle('rgb(189, 223, 208)')
                for(let i of this.make(9)){
                    ctx.fillRect(wid1+5,45+he1*(2*i-1),3*wid1,he1)
                }
                ctx.fillRect(5,45+he1*(2*10-1),4*wid1,he1)
                // ctx.fillRect(wid1,45+he1,304,33)
                ctx.fillRect(5,45+3*he1,wid1,11*he1)
                // ctx.fillRect(wid1,45+he1*3,304,33)
                // ctx.fillRect(wid1,45+he1*5,304,33)
                // ctx.fillRect(wid1,45+he1*5,304,33)
                // ctx.fillRect(wid1,45+he1*5,304,33)
                // ctx.fillRect(wid1,45+he1*5,304,33)
                // ctx.fillRect(wid1,493,304,33)
                // ctx.fillRect(wid1,563,304,33)
                // ctx.fillRect(wid1,632,304,33)
                ctx.fillRect(5,700,405,33)

                ctx.setFontSize(18)
                ctx.setFillStyle('black')
                ctx.setLineWidth(2)
                ctx.rect(5,5,width-10,height-10)
                ctx.moveTo(5,45)
                ctx.lineTo(width-5,45)
                ctx.moveTo(5,45+he1*3)
                ctx.lineTo(width-5,45+he1*3)
                ctx.moveTo(5,45+14*he1)
                ctx.lineTo(width-5,45+14*he1)
                ctx.moveTo(5,45+20*he1)
                ctx.lineTo(width-5,45+20*he1)
                ctx.moveTo(5,45+19*he1)
                ctx.lineTo(width-5,45+19*he1)
                ctx.moveTo(5+wid1,45)
                ctx.lineTo(5+wid1,height-5-2*he1)
                ctx.moveTo(5+wid1*2,45)
                ctx.lineTo(5+wid1*2,height-5)

                for(let i of this.make(18)){
                    ctx.moveTo(5+wid1,45+i*he1)
                    ctx.lineTo(width-5,45+i*he1)
                }

                // ctx.moveTo(106,79)
                // ctx.lineTo(409,79)
                // ctx.moveTo(106,113)
                // ctx.lineTo(409,113)
                
                // ctx.moveTo(106,181)
                // ctx.lineTo(409,181)
                // ctx.moveTo(106,216)
                // ctx.lineTo(409,216)
                // ctx.moveTo(106,250)
                // ctx.lineTo(409,250)
                // ctx.moveTo(106,285)
                // ctx.lineTo(409,284)
                // ctx.moveTo(106,319)
                // ctx.lineTo(409,319)
                // ctx.moveTo(106,354)
                // ctx.lineTo(409,354)
                // ctx.moveTo(106,389)
                // ctx.lineTo(409,389)
                // ctx.moveTo(106,423)
                // ctx.lineTo(409,423)
                // ctx.moveTo(106,457)
                // ctx.lineTo(409,457)
                // ctx.moveTo(106,491)
                // ctx.lineTo(409,491)
                // ctx.moveTo(106,561)
                // ctx.lineTo(409,561)
                // ctx.moveTo(106,596)
                // ctx.lineTo(409,596)
                // ctx.moveTo(106,630)
                // ctx.lineTo(409,630)
                // ctx.moveTo(106,664)
                // ctx.lineTo(409,664)
                // ctx.moveTo(5,698)
                // ctx.lineTo(409,698)
                // ctx.moveTo(106,45)
                // ctx.lineTo(106,699)
                // ctx.moveTo(207,45)
                // ctx.lineTo(207,733)


                ctx.stroke()
                ctx.fillText('客户信息', 10, 40+2*he1);
                ctx.fillText('客户名字', 10+wid1, 40+he1);ctx.fillText(this.info.userName, 10+2*wid1, 40+he1);
                ctx.fillText('地址',10+wid1,40+he1*2);ctx.fillText('地址', 10+2*wid1, 40+he1*2);
                ctx.fillText('养殖面积',10+wid1,40+he1*3);ctx.fillText(this.data.area+'亩',10+2*wid1,40+he1*3);
                ctx.fillText('养殖效果', 10, 40+he1*8);
                ctx.fillText('放苗量', 10+wid1, 40+he1*4);ctx.fillText(this.data.count+'万尾', 10+2*wid1, 40+he1*4);
                ctx.fillText('放苗时间',10+wid1,40+he1*5);ctx.fillText(this.data.inputTime, 10+2*wid1, 40+he1*5);
                ctx.fillText('抓虾时间',10+wid1,40+he1*6);ctx.fillText(this.data.outputTime,10+2*wid1,40+he1*6);
                ctx.fillText('养殖周期',10+wid1,40+he1*7);ctx.fillText(this.data.cycle+'天',10+2*wid1,40+he1*7);
                ctx.fillText('投料量',10+wid1,40+he1*8);ctx.fillText(this.data.tou+'斤',10+2*wid1,40+he1*8);
                ctx.fillText('抓虾量',10+wid1,40+he1*9);ctx.fillText(this.data.catch+'斤',10+2*wid1,40+he1*9);
                ctx.fillText('料比',10+wid1,40+he1*10);ctx.fillText(this.data.liaoBi,10+2*wid1,40+he1*10);
                ctx.fillText('成活率',10+wid1,40+he1*11);ctx.fillText(this.data.alive+'%',10+2*wid1,40+he1*11);
                ctx.fillText('亩产',10+wid1,40+he1*12);ctx.fillText(this.data.muChang+'斤/亩',10+2*wid1,40+he1*12);
                ctx.fillText('抓虾规格',10+wid1,40+he1*13);ctx.fillText(this.data.size+'条/斤',10+2*wid1,40+he1*13);
                ctx.fillText('单价',10+wid1,40+he1*14);ctx.fillText(this.data.single+'元/斤',10+2*wid1,40+he1*14);
                ctx.fillText('成本', 10, he1*17+40);
                ctx.fillText('虾苗', 10+wid1, 40+he1*15);ctx.fillText(this.data.liao+'元', 10+2*wid1, 40+he1*15);
                ctx.fillText('饲料', 10+wid1, 40+he1*16);ctx.fillText(this.data.liao+'元', 10+2*wid1, 40+he1*16);
                ctx.fillText('动保',10+wid1,40+he1*17);ctx.fillText(this.data.bao+'元', 10+2*wid1, 40+he1*17);
                ctx.fillText('电费',10+wid1,40+he1*18);ctx.fillText(this.data.electric+'元',10+2*wid1,40+he1*18);
                ctx.fillText('其他成本',10+wid1,40+he1*19);ctx.fillText(this.data.other+'元',10+2*wid1,40+he1*19);
                ctx.fillText('总成本',10,40+he1*20);ctx.fillText(this.data.totalOutput+'元',10+2*wid1,40+he1*20);
                ctx.fillText('利润', 10, 40+he1*21);ctx.fillText(this.data.totalInput+'元', 10+2*wid1, 40+he1*21);
                
                ctx.setFontSize(25)
                ctx.fillText('养殖效益数据表',(width-175)/2,35)

                ctx.draw()
                setTimeout(()=>{
                    var that=this
                    wx.canvasToTempFilePath({
                        canvasId: 'draw',
                        destWidth:wx.getSystemInfoSync().windowWidth-40,
                        destHeight:wx.getSystemInfoSync().windowHeight,
                        width:wx.getSystemInfoSync().windowWidth,
                        height:wx.getSystemInfoSync().windowHeight,
                        x:0,
                        y:0,
                        quality:1,
                        success(res) {
                            wx.saveImageToPhotosAlbum({
                                filePath: res.tempFilePath,
                                success(res){
                                    that.$toast({
                                        content:'保存成功',
                                        type:'success'
                                    })
                                },
                                fail(res){
                                    wx.getSetting({
                                        success(res){
                                            if(!res.authSetting['scope.writePhotosAlbum']){
                                                that.root=false
                                            }
                                        }
                                    })
                                }
                            })
                        },
                        fail(e){
                            console.log(e,'fail')
                        }
                    })
                },500)
                
            }
        },
        Return(){
            if(this.show){
                this.data.res()
            }else{
                this.show=true
            }
        },
        make(x){
            let a=new Array(x)
            for(let i=1;i<=a.length;i++){
                a[i-1]=i
            }
            return a
        }
    },
    onShow(){
    },
    onLoad(){
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
    .rootBtn{
        border-radius:40px;
        height:40px;
        line-height: 40px;
        text-align:center;
        vertical-align: center;
        cursor: pointer;
        white-space:nowrap;
        font-size: 80%;
        position:relative;
        box-shadow: inset 0 0 0 1px rgba(0,0,0,.1);
        background:#19be6b!important;
        padding:0 14px;
        margin:10px;
    }
</style>

