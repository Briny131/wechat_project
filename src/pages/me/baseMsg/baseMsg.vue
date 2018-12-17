<template>
    <div>
        <div class="_div data-v-262c43c3 weui-cells__title">个人信息</div>
        <div class="_div data-v-262c43c3 weui-cells weui-cells_after-title input-margin" style="margin-bottom:2em" >
            <div class="_div data-v-262c43c3 weui-cell weui-cell_input">
                <div class="_div data-v-262c43c3 weui-cell__hd">
                    <div class="_div data-v-262c43c3 weui-label">姓名</div>
                </div>
                <div class="_div data-v-262c43c3 weui-cell__bd">
                    <input class="_input data-v-262c43c3 weui-input"  v-model="data.userName" :placeholder="modifyOrNot?'请输入姓名':''" />
                </div>
            </div>
            <div class="_div data-v-262c43c3 weui-cell weui-cell_input" :class="{'weui-cell_warn':!checkPhone}">
                <div class="_div data-v-262c43c3 weui-cell__hd">
                    <div class="_div data-v-262c43c3 weui-label">手机号</div>
                </div>
                <div class="_div data-v-262c43c3 weui-cell__bd">
                    <input class="_input data-v-262c43c3 weui-input" @change="phoneCheck"  v-model="data.phoneNumber" :placeholder="modifyOrNot?'请输入手机号':''" />
                </div>
                <div class="_div data-v-262c43c3 weui-cell__ft" v-if="!checkPhone">
                    <icon type="warn" size="18" color="#E64340" class="_icon data-v-262c43c3"></icon>
                </div>
            </div>
        </div>
        <!-- <i-button @click="modify" type="success" shape="circle" size="small" v-if="!modifyOrNot">修改</i-button> -->
        <i-button @click="save" type="success" shape="circle" size="small"  :loading="L">保存</i-button>
        <i-toast id="toast" />
    </div>

</template>

<script>
// import Btn from '../../../components/button'
import { setTimeout } from 'timers';
export default {
    data(){
        return {
            // data:{
            //     username:'',
            //     phoneNumber:''
            // },
            modifyOrNot:false,
            L:false,
            checkPhone:true
        }
    },
    computed:{
        data:function(){
            return this.$store.state.baseData
        }
    },
    methods:{
        modify(){
            this.modifyOrNot=true;
        },
        save(){
            if(this.checkPhone){
                this.L=true
                console.log(this.data)
                this.$fetch.modifyInfo(this.data).then(resp=>{
                    this.L=false
                    this.$toast({
                        content:'保存成功',
                        type:'success'
                    })
                    setTimeout(() => {
                        wx.navigateBack({
                            delta: 1,
                        })
                    }, 1500);
                    
                })
            }else{
                this.$toast({
                    content:'请核对信息',
                    type:'error'
                })
            }
            
        },
        phoneCheck(){
            if(/^1[345789]\d{9}$/.test(this.data.phoneNumber)){
                this.checkPhone=true;
                console.log('success')
            }else{
                this.checkPhone=false
            }
        }
    },
    components:{
        // Btn
    },
    onShow(){
        console.log(this.$store.state.baseData)
        // wx.setNavigationBarTitle({
        //     title: '我的'
        // })
    },
    onUnload(){
        this.modifyOrNot=false;
        this.L=false
        this.checkPhone=true
    }
}
</script>
