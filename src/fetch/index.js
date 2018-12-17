import './host'
import config from './config'

var Fly=require("flyio/dist/npm/wx")
var fly=new Fly

function doPost(url,params){
    return new Promise((resolve,reject)=>{
        fly.post(url,params).then((resp)=>{
            resolve(resp)
        }).catch(e=>{
            reject(e)
        })
    })
    
}

function doGet(url,params){
    // url=url+'?areaId='+params
    return new Promise((resolve,reject)=>{
        fly.get(url,params).then(resp=>{
            resolve(resp)
        }).catch(e=>{
            reject(e)
        })
    })
}

export default {
    getUserInfo(params){
        return doGet(config.getUserInfo,params) 
    },
    modifyInfo(params){
        return doPost(config.modifyInfo,params)
    },
    modifyTang(params){
        return doPost(config.modifyTang,params)
    },
    getTang(params){
        return doGet(config.getTang,params)
    },
    addInput(params){
        return doPost(config.addInput,params)
    },
    addOutput(params){
        return doPost(config.addOutput,params)
    },
    getInputD(params){
        return doGet(config.getInputD,params)
    },
    getInput(params){
        return doGet(config.getInput,params)
    },
    getOutputD(params){
        return doGet(config.getOutputD,params)
    },
    getOutput(params){
        return doGet(config.getOutput,params)
    },
    drawOutput(params){
        return doGet(config.drawOutput,params)
    },
    drawInput(params){
        return doGet(config.drawInput,params)
    },
    getTotal(params){
        return doGet(config.getTotal,params)
    },
    getMonthIn(params){
        return doGet(config.getMonthIn,params)
    },
    getMonthOut(params){
        return doGet(config.getMonthOut,params)
    },
    login(params){
        return doGet(config.login,params)
    },
    delInDetail(params){
        return doGet(config.delInDetail,params)
    },
    delOutDetail(params){
        return doGet(config.delOutDetail,params)
    },
    delAll(params){
        return doGet(config.delAll,params)
    }
}
