/*
 * @Author: 可以清心
 * @Description: 
 * @Date: 2022-09-16 19:57:46
 * @LastEditTime: 2022-09-16 20:05:36
 */
module.exports = function(req, res){
    const ip = req.headers["x-real-ip"];

    res.status(200).json({ip});
}