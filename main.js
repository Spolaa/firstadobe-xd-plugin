/**
 * First Adobe XD Plugin
 * Convert selected item to Raleway font
 * @see https://www.youtube.com/watch?v=hwxuJ1eqfxc
 * @author Stefano Gagliardi <stefano.gagliardi@sitisrl.it>
 * 
 * 
 *  
 * To register an action must be declarate in manifest as "commandId".
 * The same value must be the function name in main.js.
 * In the end function must be exported 
 */

const commands = require("commands");
const { Rectangle, Color } = require("scenegraph");

function quickRaleway(selection) {
    console.log("Selection item:", selection.items);

    // [3]
    const newElement = new Rectangle();
    newElement.width = 100;
    newElement.height = 50;
    newElement.fill = new Color("Purple");

    // [4]
    selection.insertionParent.addChild(newElement);
    // [5]
    newElement.moveInParentCoordinates(100, 100);

    /*----------------TEST 1 - CHANGE FONT FAMILY---------------------*/
    // Set height items
    // Not work on text element
    // selection.items[0].width = 600;
    // selection.items[0].height = 600;

    /* If there is just one element
    if(selection.items.length !== 0) {
        selection.items.forEach((node) => {
            node.styleRanges = [{
                fontFamily: "Raleway"
            }];
        });
    }
    */
}

module.exports = {
    commands: {
        quickRaleway
    }
};