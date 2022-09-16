module.exports = (req: any, res: any) => {
    const realIp = req.headers["x-real-ip"];
    const result = {
        ip: realIp,
        body: req.body,
        query: req.query
    }

    res.status(200).json(result);
}
