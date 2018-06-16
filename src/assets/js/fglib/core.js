/**
 * @author Fernando Gabrieli
 * @version 1.0
 */

(function() {
    // no needed for node
    if (typeof module !== 'undefined') 
        return;
        
    function namespace(name) {
        var spaces = name.split(/\./);

        var currSpace = window;
        for (var i = 0; i < spaces.length; i++) {
            currSpace[spaces[i]] = currSpace[spaces[i]] ? currSpace[spaces[i]] : {};
            currSpace = currSpace[spaces[i]];
        }
    }

    window.fg = window.fg ? window.fg : {};
    
    window.fg.namespace = namespace;
})();