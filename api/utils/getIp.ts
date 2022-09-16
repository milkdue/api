/*
 * @Author: 可以清心
 * @Description: 
 * @Date: 2022-09-16 19:57:46
 * @LastEditTime: 2022-09-16 19:58:48
 */
module.exports = function(req){
    return req.headers["x-real-ip"];
}