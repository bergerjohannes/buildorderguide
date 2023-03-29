/** Convert JSON string to text output
 *
 * @param input - JSON string input to convert
 *
 * @returns converted text content
 */
export const htmlDecode = (input) => {
    var doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
}

/** Copy build order to clipboard for RTS Overlay
 *
 * https://github.com/CraftySalamander/RTS_Overlay
 *
 */
const exportForRTSOverlay = () => {

    // start JSON Obj
    var jsonObj = {
        name: "Straight archers",
        civilization: "Any",
        author: "unknown",
        source: "unknown",
        build_order: []
    };

    // new step element for the JSON format
    var newStepJson = {
        villager_count: -1, // unknown
        age: -1 // unknown
    };

    // resources
    newStepJson["resources"] = {
        wood: 0,
        food: 6,
        gold: 0,
        stone: 0
    };

    // notes
    var notes = []
    notes.push("Build 2 @other/House_aoe2DE.png@.")
    notes.push("Send the first 6 @resource/MaleVillDE.jpg@ to @animal/Sheep_aoe2DE.png@.")
    
    newStepJson["notes"] = notes;

    // add new step
    jsonObj["build_order"].push(newStepJson);

    var str = JSON.stringify(jsonObj, null, 4); // JSON to output string

    navigator.clipboard.writeText(htmlDecode(str)).then(function() {
    }, function(err) {
        console.error("Could not copy text: ", err);
    });
}
export default exportForRTSOverlay
