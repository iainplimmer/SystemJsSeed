var $ = require('jq');

var events = module.exports = {
    BindEm: function() {    
        $("#clicker").click(function(){
            alert('clicked clicker')
        });   
    }
};