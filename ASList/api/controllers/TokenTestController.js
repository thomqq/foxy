module.exports = {
    simple: function(req, res) {
        return res.send("all allowed");
    },
    
    restricted: function(req, res) {
        return res.send("token restricted page");
    }
}