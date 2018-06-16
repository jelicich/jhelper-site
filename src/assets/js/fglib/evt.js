/**
 * @author Fernando Gabrieli
 * @version 1.0
 */

(function($) {
    var isNodeModule = (typeof module !== 'undefined');

    if (isNodeModule) {
        $ = require('jquery');
    }

    var Event = {
        handlers : {},

        /**
         * Register observer to event
         * 
         * @param evtName
         * @param id
         *            identifier for this event handler (callback)
         * @param cb
         */
        on : function(evtName, id, cb) {
            if (typeof this.handlers[evtName] === 'undefined') {
                this.handlers[evtName] = [];
            }

            this.handlers[evtName].push({
                id : id ? id : false,
                cb : cb
            });
        },

        off : function(evtName, id) {
            for (var i = 0; i < this.handlers[evtName].length; i++) {
                var handler = this.handlers[evtName][i];
                if (handler && handler.id === id) {
                    this.handlers[evtName].splice(i, 1);
                    break;
                }
            }
        },

        fire : function(evtName, data) {
            for (var i = 0; i < this.handlers[evtName].length; i++) {
                this.handlers[evtName][i].cb(data);
            }
        }
    }

    if (isNodeModule) {
        module.exports = Event;
    } else {
        window.fg.evt = Event; 
    }
})(jQuery);