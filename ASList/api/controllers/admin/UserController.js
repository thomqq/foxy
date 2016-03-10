'use strict';

/**
 * UserController.js for admin
 * 
 * @module      :: Controller
 * @description :: Provides the base user
 *                 actions used to make waterlock work.
 *                 
 * @docs        :: http://waterlock.ninja/documentation
 */

module.exports = require('waterlock').actions.user({
    
    find: function(req, res) {
        UserService.getSystemUsers(function(result){
            res.send(result);
        });
    }
    
});

