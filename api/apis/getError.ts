/*
 * @Author: 可以清心
 * @Description: 
 * @Date: 2024-02-19 18:58:11
 * @LastEditTime: 2024-02-19 18:59:01
 */
module.exports = function(res){
    res.status(200).json({
        code: "error",
        message: "是接口返回的异常"
    });
}