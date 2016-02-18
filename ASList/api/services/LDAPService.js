'use strict';
module.exports = {

    getAllUsers: function() {
        
        var ldap = require('ldapjs');
        var client = ldap.createClient({
          url: 'ldap://192.168.51.2:389'
        });
        
        client.bind('uid=etdouser2,ou=people,dc=firma,dc=itsoft,dc=pl', 'etdouser2', function(err) {
            console.log(err);
          });
        
        
        var opts = {
        //filter: '(&(l=Seattle)(email=*@foo.com))',
        //scope: 'base',
        attributes: ['dn', 'uid', 'cn', 'mail']
        };

        client.search('ou=people, dc=firma,dc=itsoft,dc=pl', opts, function(err, res) {
            console.log(err);

            res.on('searchEntry', function(entry) {
              console.log('entry: ' + JSON.stringify(entry.object));
            });
            res.on('searchReference', function(referral) {
              console.log('referral: ' + referral.uris.join());
            });
            res.on('error', function(err) {
              console.error('error: ' + err.message);
            });
            res.on('end', function(result) {
              console.log('status: ' + result.status);
            });
        });
        
        console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
        
        var ret = [];
        return ret;
    }
};