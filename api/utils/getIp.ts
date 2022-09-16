module.exports = function(req){
    return req.headers["x-real-ip"];
}