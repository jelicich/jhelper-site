/**
 * @author Fernando Gabrieli
 * @version 1.0
 */

(function() {
    var isNodeModule = (typeof module !== 'undefined');

    $ = isNodeModule ? require('jquery') : jQuery;
    
    /**
     * @param constructor
     *            to extend from
     * @return new class constructor with inherited methods
     */
    var Util = {
        extend : function(C, F) {
            var f = F ? F : function() {
                C.apply(this, arguments);
            }

            f.prototype = Object.create(C.prototype);

            f.prototype.constructor = f;
            
            return f;
        },
        
        htmlEntityDecode : function(html) {
            return $('<div>').append(html).html();
        },
        
        isEmail : function(email) {
            var regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
            
            return regex.test(email);
        }
    }

    if (isNodeModule) {
        module.exports = Util;
    } else {
        window.fg.util = Util;
    }    
})();