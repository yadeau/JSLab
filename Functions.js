
function initialize() {
    var queue = [];
    var position = 0;
    return {
        save: function (input) {
            if(queue.length == 5) {
                queue.shift();
            }
            queue.push(input);
            if(position < 5){
                position++;
            }
        },
        undo: function () {
            if(position != 0) {
                position--;
                var toReturn = queue[position];
                return toReturn;
            }
            return "Invalid use of undo"
        },
        redo: function () {
            if(position < 5) {
                var toReturn = queue[position];
                if(position != 5){
                    position++;
                }
                return toReturn;
            }
            return "Invalid use of redo"
        },
        getQueue: function (input) {
            return queue[input];
        },
        getPosition: function () {
            return position;
        }
    }
}

module.exports.initialize = initialize;