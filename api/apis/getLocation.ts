/*
 * @Author: 可以清心
 * @Description: 
 * @Date: 2022-09-16 19:48:30
 * @LastEditTime: 2022-09-16 20:18:40
 */
const getIp = require("../utils/getIp");

module.exports = function(req, res){
    const ip = getIp(req);

    sendLocation(ip, res);
}


async function sendLocation(ip, res){
    const res = await new Promise(resolve => {
        http.get(`http://whois.pconline.com.cn/ipJson.jsp?ip=${ip}`, resolve);
    })
    
    let data = await new Promise((resolve, reject) => {
        let data = '';
    
        res.on('data', chunk => data += new TextDecoder('gbk').decode(chunk));
        res.on('error', err => reject(err));
        res.on('end', () => resolve(data));
    })
    
    let json = data.slice(39, -7);
    res.status(200).json(JSON.parse(json));
}