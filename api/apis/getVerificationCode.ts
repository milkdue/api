/*
 * @Author: 可以清心
 * @Description: 
 * @Date: 2022-09-28 10:57:56
 * @LastEditTime: 2022-09-28 16:53:26
 */
const nodemailer = require('nodemailer');
const generateVerticelCode = require('../utils/generateVerticelCode');
const generateEMailTemplate = require('../utils/generateEMailTemplate');

const host: string = process.env["HOST"];
const user: string = process.env["E_MAIL"];
const pass: string = process.env["PASS_CODE"];

const mailTransport = nodemailer.createTransport({
    host,
    port: 465,
    secure: true,	//安全方式发送,建议都加上
    auth: {
        user,
        pass
    }
})

module.exports = function(req, res){
    const code = generateVerticelCode();
    const options = {
        from: `"张思" <${user}>`,
        to: `<${req.body.mail}>`,
        bcc: '密送',
        subject: '验证码',
        text: '',
        html: generateEMailTemplate(code)
    }


    mailTransport.sendMail(options,function(err, msg) {
        if(err) {
            res.status(500).json({code: 'error', message: msg})
        } else {
            res.status(200).json({code: 'ok', data: {
                time: new Date().getTime(),
                code: code,
            }})
        }
    })
}
