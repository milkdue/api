module.exports = (req, res) => {
    const {name = 'world'} = req.query;

    res.send(`hello ${name}`);
}