// ./lib/index.js

/**
 * Displays a Hacker Name in the console
 * 
 *  @param {name} String string to show in the console
 */

var get_hacker_name = function(name) {
    name = name.replace(/a|o|e|t|i|s/g, char =>{
        if (char == 'a' || char == 'A')
            return "4";
        else if (char == 'o' || char == 'O')
            return "0";
        else if (char == 'e' || char == 'E')
            return "3";
        else if (char == 't' || char == 'T')
            return "7";
        else if (char == 'i' || char == 'I')
            return "1";
        else if (char == 's' || char == 'S')
            return "5";
    });
    return name;
};

// Allows us to call this function from outside of the library file.
// Without this, the function would be private to this file.
exports.get_hacker_name = get_hacker_name;