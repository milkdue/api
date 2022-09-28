/*
 * @Author: 可以清心
 * @Description: 
 * @Date: 2022-09-28 15:57:09
 * @LastEditTime: 2022-09-28 16:17:15
 */
module.exports = function(): string{
    const vertify: string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code: string = '';
    for (let i = 0; i < 6; i++) {
        let random: number = Math.floor( Math.random() * (vertify.length));
        code += vertify[random];
    }

    return code;
}