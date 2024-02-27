/*
 * @Author: 可以清心
 * @Description: 
 * @Date: 2024-02-19 18:58:11
 * @LastEditTime: 2024-02-27 20:21:27
 */
module.exports = function(res){
    res.status(200).json({
        code: "ok",
        data: {
            content: [
                {
                    name: "张三",
                    age: 18,
                    sex: "男",
                    id: "1"
                },
                {
                    name: "里斯",
                    age: 19,
                    sex: "男",
                    id: "2"
                },
                {
                    name: "王武",
                    age: 19,
                    sex: "男",
                    id: "3"
                }
            ]
        }
    });
}