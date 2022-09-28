/*
 * @Author: 可以清心
 * @Description: 
 * @Date: 2022-09-28 10:57:56
 * @LastEditTime: 2022-09-28 10:58:22
 */
module.exports = function(req, res){
    const data = process.env

    res.status(200).json(data);
}