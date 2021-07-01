module.exports = (req : any, res : any) => {
    const {name = 'world'} = req.query;

    res.send(`hello ${name}`);
}