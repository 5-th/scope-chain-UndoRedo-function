
    function scopeChain() { //scope-chain function
        var max = 0;
        return function(move) {
            var last = document.getElementById('input').value;
            if (last.length>max || last[last.length-1]!=max[last.length-1]) max = last;
                if (move == 'undo') {
                    return max.substring(0, last.length - 1);
                }
                if (move == 'redo') {
                    return max.substring(0, last.length + 1);
                }
        }
    }
    
    var memory = scopeChain(); //scope-chain, 1-st stage
    document.getElementById('undo').onclick = function() {
        document.getElementById('input').value = memory('undo'); //scope-chain, 2-nd stage
    }
    document.getElementById('redo').onclick = function() {
        document.getElementById('input').value = memory('redo'); //scope-chain, 2-nd stage
    }