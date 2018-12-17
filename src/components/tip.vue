<template>
    <div class="tip" v-if="iShow">
        <div class="content">
            <div class="head">{{title}}</div>
            <div class="body">{{content}}</div>
            <div class="foot">
                <i-row i-class="height">
                    <i-col i-class="btn b" span="12" @click="sureCom">{{sure}}</i-col>
                    <i-col i-class="btn" span="12" @click="hide">{{refuse}}</i-col>
                </i-row>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['title','content','sure','refuse','show','sureCom'],
    data(){
        return{
            iShow:false
        }
    },
    watch:{
        show(value){
            this.iShow=value;
        }
    },
    methods:{
        hide(){
            this.iShow=false;
            this.$emit('close')
        },
    }
}

</script>

<style scoped>
    .tip{
        background:rgba(90, 93, 97,0.4);
        z-index:2000;
    }
    .content{
        text-align: center;
    }
    .content{
        width:80%;
        height:500rpx;
        margin:auto;
        background:white;
        z-index:2001;
    }
    .tip,.content{
        position: absolute;
        top:0;
        right:0;
        left:0;
        bottom:0;
    }
    .head{
        height:100rpx;
        line-height:100rpx;
        color:rgb(63, 177, 112);
        border-bottom: 1px solid rgb(201, 200, 200)
    }
    .body{
        height:300rpx;
        line-height: 300rpx;
        font-size:80%;
        color:rgba(0,0,0,0.9)
    }
    .foot{
        border-top: 1px solid rgb(201,200,200);
        height:100rpx;
        font-size:80%
    }
    
</style>


