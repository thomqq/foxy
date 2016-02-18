module.exports = {
    simple: function(req, res) {
        LDAPService.getAllUsers();
        return res.send("all allowed");
    },
    
    restricted: function(req, res) {
        return res.send("token restricted page");
    },
    
    adminOnly: function(req, res) {
        return res.send("token admin restricted page");
    }
}