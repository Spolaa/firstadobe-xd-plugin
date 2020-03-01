/**
 * First Adobe XD Plugin
 * Convert selected item to Raleway font
 * @see https://www.youtube.com/watch?v=hwxuJ1eqfxc
 * @author Stefano Gagliardi <stefano.gagliardi@sitisrl.it>
 *  
 * To register an action must be declarate in manifest as "commandId".
 * The same value must be the function name in main.js.
 * In the end function must be exported 
 */

const commands = require("commands");

function quickRaleway(selection) {
    console.log(selection);
}

module.exports = {
    commands: {
        quickRaleway
    }
};