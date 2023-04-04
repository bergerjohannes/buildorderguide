import BuildData from './BuildData'
import * as Constants from '../Constants'

/** Convert JSON string to text output.
 *
 * @param input    JSON string input to convert
 *
 * @returns    converted text content
 */
export const htmlDecode = (input) => {
    var doc = new DOMParser().parseFromString(input, 'text/html');
    return doc.documentElement.textContent;
}

/** Trim the white spaces at the beginning and end of string.
 *  Note: re-implemented to be compatible with old browsers.
 * 
 * @param x     input string
 *
 * @returns    string with initial and last spaces trimmed
 */
function trim(x) {
    return x.replace(/^\s+|\s+$/gm, '');
}

/** Get an object element, checking if it exists (and providing a default value if it does not exist).
 * 
 * @param item             item object to check
 * @param name             name of the requested property of the item object 
 * @param default_value    default value to return in case the requested name is not found
 *
 * @returns    value of the requested item, defaut value if not found
 */
const getElemSafe = (item, name, default_value) => {
    return item.hasOwnProperty(name) ? item[name] : default_value;
}

/** Compute the contribution of a requested resource, even if it does not exist.
 * 
 * @param resources    object with the different resources
 * @param name         name of the property to look for
 *
 * @returns    requested resource contribution value
 */
const resourceContribution = (resources, name) => {
    if (resources.hasOwnProperty(name)){ // resource value stored
        return resources[name] >= 0 ? resources[name] : 0;
    }
    else { // resource not stored, return 0
        return 0;
    }
}

/** Update the age ID (1:Dark, 2:Feudal, 3:Castle, 4:Imperial).
 * 
 * @param currentAge    current age ID
 * @param step          current BO step
 *
 * @returns    updated age ID
 */
const updateAge = (currentAge, step) => {
    if (step.hasOwnProperty('age')) {
        var age = step.age;

        if (age === Constants.Age.DarkAge) return 1;
        if (age === Constants.Age.FeudalAge) return 2;
        if (age === Constants.Age.CastleAge) return 3;
        if (age === Constants.Age.ImperialAge) return 4;
        else return currentAge;
    }
    else { // no age update
        return currentAge;
    }
}

/** Check if 2 sets of resources are identical.
 * 
 * @param resourcesA    first set of resources to compare
 * @param resourcesB    second set of resources to compare
 *
 * @returns    true if identical resources
 */
const isIdenticalResources = (resourcesA, resourcesB) => {
    return (resourcesA.wood == resourcesB.wood) &&
        (resourcesA.food == resourcesB.food) &&
        (resourcesA.gold == resourcesB.gold) &&
        (resourcesA.stone == resourcesB.stone) &&
        (resourcesA.builder == resourcesB.builder);
}

/** Copy build order to clipboard for RTS Overlay.
 * https://github.com/CraftySalamander/RTS_Overlay
 * 
 * @param build - build object with the build order information
 *
 */
const exportForRTSOverlay = (build) => {

    // start JSON Obj
    var jsonObj = {
        name: getElemSafe(build, 'title', 'Unkown title'),
        civilization: getElemSafe(build, 'civilization', 'Any'),
        author: getElemSafe(build, 'author', 'Build Order Guide'),
        source: getElemSafe(build, 'reference', 'https://buildorderguide.com'),
        build_order: []
    };

    // obtain the BO steps
    var steps = build.build;
    var stepsCount = steps.length;

    var currentAge = 1; // start in first Age (Dark Age)

    // store previous resources
    var previousResources = {
        wood: -1,
        food: -1,
        gold: -1,
        stone: -1,
        builder: -1
    };

    // loop on all the steps
    for (var i = 0; i < stepsCount; i++) {
        var step = steps[i];

        // update current age
        currentAge = updateAge(currentAge, step);

        // resources
        var resources = step.hasOwnProperty('resources') ? step.resources : {
            wood: -1,
            food: -1,
            gold: -1,
            stone: -1,
            builder: -1
        };
        
        // store resources
        var newResources = {
            wood: getElemSafe(resources, 'wood', -1),
            food: getElemSafe(resources, 'food', -1),
            gold: getElemSafe(resources, 'gold', -1),
            stone: getElemSafe(resources, 'stone', -1),
            builder: getElemSafe(resources, 'build', -1)
        };
        // do not display builder if no builder for this step
        if (newResources['builder'] == 0) {
            newResources['builder'] = -1;
        }

        // check if we should still use the previous step (i.e. no resource count change)
        var usePreviousStep = ((jsonObj['build_order'].length >= 1) &&
            isIdenticalResources(newResources, previousResources));

        if (usePreviousStep) {
            var previousID = jsonObj['build_order'].length - 1; // ID of the previous BO step

            jsonObj['build_order'][previousID].age = currentAge;
            jsonObj['build_order'][previousID].notes.push(trim(BuildData.getTitleForStep(step)));
        }
        else { // new BO step
            // new step element for the JSON format
            var newStepJson = {
                villager_count:
                    resourceContribution(resources, 'wood') +
                    resourceContribution(resources, 'food') +
                    resourceContribution(resources, 'gold') +
                    resourceContribution(resources, 'stone') +
                    resourceContribution(resources, 'builder'),
                age: currentAge,
                resources: newResources,
                notes: [trim(BuildData.getTitleForStep(step))]
            };

            // add new step
            jsonObj['build_order'].push(newStepJson);

            // store previous resources
            previousResources = newResources;
        }
    }

    var str = JSON.stringify(jsonObj, null, 4); // JSON to output string

    // save to clipboard
    navigator.clipboard.writeText(htmlDecode(str)).then(function() {
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
}
export default exportForRTSOverlay
