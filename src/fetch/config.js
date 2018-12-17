import baseUrl from './host'

const getUserInfo=baseUrl.hostIp+'/superadmin/getareabyid'//查询用户信息 get
const modifyInfo=baseUrl.hostIp+'/superadmin/addarea'//添加修改用户信息 post
const modifyTang=baseUrl.hostIp+'/yutangbazhu/addarea' //添加修改塘口 post
const getTang=baseUrl.hostIp+'/yutangbazhu/getareabyopenId' //查询鱼塘信息 get
const addInput=baseUrl.hostIp+'/input/addinput' //添加修改收入信息 post
const addOutput=baseUrl.hostIp+'/output/addoutput' //添加修改支出信息 post
const getInput=baseUrl.hostIp+'/input/getinputbyid' //查询收入 get
const getInputD=baseUrl.hostIp+'/input/getshourubyid'//查询收入明细 get
const getOutput=baseUrl.hostIp+'/output/getoutputbyid' //查询支出 //get
const getOutputD=baseUrl.hostIp+'/output/getzhichubyid' //查询支出明细 get
const drawOutput=baseUrl.hostIp+'/output/getoutputbytime' //绘图数据out     get
const getTotal=baseUrl.hostIp+'/output/getbyopenId' //获取过去总支出 get
const drawInput=baseUrl.hostIp+'/input/getinputbytime' //绘图数据in get
const getMonthIn=baseUrl.hostIp+'/input/getinputbymonth' //30天收入
const getMonthOut=baseUrl.hostIp+'/output/getoutputbymonth' //30天支出
const login=baseUrl.hostIp+'/superadmin/getopenId' //login
const delInDetail=baseUrl.hostIp+'/input/deleteinput' //删除收入明细
const delOutDetail=baseUrl.hostIp+'/output/deleteoutput' //删除支出明细
const delAll=baseUrl.hostIp+'/output/deleteall' //删除全部记录

export default{
    getUserInfo,
    modifyInfo,
    modifyTang,
    getTang,
    addInput,
    addOutput,
    getInputD,
    getInput,
    getOutputD,
    getOutput,
    drawOutput,
    getTotal,
    drawInput,
    getMonthIn,
    getMonthOut,
    login,
    delInDetail,
    delOutDetail,
    delAll
}