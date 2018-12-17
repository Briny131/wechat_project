<template>
    <div>
        <div v-if="!resister">
            <i-panel>
                <i-input @change="getId" title="账号" placeholder="请输入账号" maxlength='-1'></i-input>
                <i-input @change="getpsw" title="密码" placeholder="请输入密码" maxlength='-1' type="password"></i-input>
            </i-panel>
            <i-raw>
                <i-col offset="18" span="6" style="font-size:0.8em;color:rgb(74, 164, 238)" @click="resister=true">注册新账号</i-col>
            </i-raw>
            <i-button i-class="ceshi" type="success">登入</i-button>
        </div>
        <div v-else>
            <i-panel title="注册">
                <i-input @change="resId"></i-input>
                <i-input @change="res"></i-input>
            </i-panel>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            userInfo:{
                userId:'asdf',
                userPassword:''
            },
            resister:false
        }
    },
    methods:{
        shuchu(){
            console.log(this.userInfo.userId)
        },
        getId(e){
            this.userInfo.userId=e.target.detail.value
        },
        getpsw(e){
            this.userInfo.userPassword=e.target.detail.value
        }
    },
    onShow(){
        console.log(this.$store.state)
    }
}
</script>

<style scoped>
    .ui{
        color:rgb(74, 164, 238)
    }
    .ceshi{
        top:3em
    }
</style>


