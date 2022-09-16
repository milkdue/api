module.exports = (req : any, res : any) => {
    const {name = 'world'} = req.query;

    res.status(200).json(req.headers);
}
