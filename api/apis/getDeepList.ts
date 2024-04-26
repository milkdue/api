/*
 * @Author: 可以清心
 * @Description: 
 * @Date: 2024-02-19 18:58:11
 * @LastEditTime: 2024-02-27 20:21:27
 */
module.exports = function(res) {
    res.status(200).json({
        code: "ok",
        data: [
            {
                id: "67",
                name: "090手动线",
                boList: [
                    {
                        boCode: "2112248KG8AF8FA8",
                        label: "090-G2"
                    },
                    {
                        boCode: "2112248KG8AF8FA9",
                        label: "090-G3"
                    },
                    {
                        boCode: "2112248KG8AF8F10",
                        label: "090-G4"
                    },
                    {
                        boCode: "2112248KG8AF8F11",
                        label: "090-G5"
                    }
                ]
            },
            {
                id: "68",
                name: "091手动线",
                boList: [
                    {
                        boCode: "2112248KG8AF8FC8",
                        label: "091-G2"
                    },
                    {
                        boCode: "2112248KG8AF8FC9",
                        label: "091-G3"
                    },
                    {
                        boCode: "2112248KG8AF8C10",
                        label: "091-G4"
                    },
                    {
                        boCode: "2112248KG8AF8C11",
                        label: "091-G5"
                    }
                ]
            }
        ]
    });
}