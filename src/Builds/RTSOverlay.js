import BuildData from './BuildData'
import * as Constants from '../Constants'

/** Get the images conversion dictionary.
 * 
 * @returns    dictionary to convert 'Build Order Guide' names to 'RTS Overlay' names
 */
function getImagesDictionary() {
    return {
        'Sheep': 'animal/Sheep_aoe2DE.png',
        'Shore Fish': 'animal/AoE2_DE_shore_fish_icon.png',
        'Boar': 'animal/Boar_aoe2DE.png',
        'Deer': 'animal/Deer_aoe2DE.png',
        'Farm': 'mill/FarmDE.png',
        'Farms': 'mill/FarmDE.png',

        'Wood': 'resrouce/Aoe2de_wood.png',
        'Stone': 'resource/Aoe2de_stone.png',
        'Gold': 'resource/Aoe2de_gold.png',
        'Berries': 'resource/BerryBushDE.png',
        'Food': 'resource/Aoe2de_food.png',
        'Build': 'resource/Aoe2de_hammer.png',

        'Folwark': 'mill/Aoe2-icon--folwark.png',
        'House': 'other/House_aoe2DE.png',
        'Houses': 'other/House_aoe2DE.png',
        'Mill': 'mill/Mill_aoe2de.png',
        'Lumber Camp': 'lumber_camp/Lumber_camp_aoe2de.png',
        'Mining Camp': 'mining_camp/Mining_camp_aoe2de.png',
        'Dock': 'dock/Dock_aoe2de.png',
        'Barracks': 'barracks/Barracks_aoe2DE.png',
        'Market': 'market/Market_aoe2DE.png',
        'Blacksmith': 'blacksmith/Blacksmith_aoe2de.png',
        'Range': 'archery_range/Archery_range_aoe2DE.png',
        'Stable': 'stable/Stable_aoe2DE.png',
        'Tower': 'defensive_structures/Tower_aoe2de.png',
        'Town Center': 'town_center/Towncenter_aoe2DE.png',
        'TC': 'town_center/Towncenter_aoe2DE.png',
        'Monastery': 'monastery/MonasteryAoe2DE.png',
        'University': 'university/University_AoE2_DE.png',
        'Siege Workshop': 'siege_workshop/Siege_workshop_aoe2DE.png',
        'Castle': 'castle/Castle_aoe2DE.png',
        'Krepost': 'defensive_structures/Krepost_aoe2de.png',
        'Feitoria': 'other/Feitoria_aoe2DE.png',
        'Fish Trap': 'dock/Fish_trap_aoe2DE.png',
        'Wall': 'defensive_structures/Palisade_wall_aoe2de.png',
        'Donjon': 'defensive_structures/Donjon_aoe2DE.png',
        'Wonder': 'other/Wonder_aoe2DE.png',
        'Caravanserai': 'other/Ao2de_caravanserai_icon.png',

        'Dark Age': 'age/DarkAgeIconDE_alpha.png',
        'Feudal Age': 'age/FeudalAgeIconDE_alpha.png',
        'Castle Age': 'age/CastleAgeIconDE_alpha.png',
        'Imperial Age': 'age/ImperialAgeIconDE_alpha.png',

        'Houfnice': 'unique_unit/Aoe2-icon--houfnice.png',
        'Light Cavalry': 'stable/Light-cavalry-research.jpg',
        'Hussar': 'stable/Hussar_upgrade_aoe2de.png',
        'Winged Hussar': 'stable/Winged-hussar_upgrade.png',
        'Cavalier': 'stable/Cavalier-research.jpg',
        'Paladin': 'stable/Paladin-research.jpg',
        'War Galley': 'dock/War_galley_aoe2DE.png',
        'Chemistry': 'university/ChemistryDE.png',
        'Double-Bit Axe': 'lumber_camp/DoubleBitAxe_aoe2DE.png',
        'Horse Collar': 'mill/HorseCollarDE.png',
        'Loom': 'town_center/LoomDE.png',
        'Wheelbarrow': 'town_center/WheelbarrowDE.png',
        'Hand Cart': 'town_center/HandcartDE.png',
        'Bow Saw': 'lumber_camp/BowSawDE.png',
        'Two-Man Saw': 'lumber_camp/TwoManSawDE.png',
        'Heavy Plow': 'mill/HeavyPlowDE.png',
        'Crop Rotation': 'mill/CropRotationDE.png',
        'Gold Mining': 'mining_camp/GoldMiningDE.png',
        'Gold Shaft Mining': 'mining_camp/GoldShaftMiningDE.png',
        'Stone Mining': 'mining_camp/StoneMiningDE.png',
        'Stone Shaft Mining': 'mining_camp/StoneShaftMiningDE.png',
        'Gillnets': 'dock/GillnetsDE.png',
        'Fletching': 'blacksmith/FletchingDE.png',
        'Bodkin Arrow': 'blacksmith/BodkinArrowDE.png',
        'Bracer': 'blacksmith/BracerDE.png',
        'Padded Archer Armor': 'blacksmith/PaddedArcherArmorDE.png',
        'Leather Archer Armor': 'blacksmith/LeatherArcherArmorDE.png',
        'Ring Archer Armor': 'blacksmith/RingArcherArmorDE.png',
        'Ballistics': 'university/BallisticsDE.png',
        'Thumb Ring': 'archery_range/ThumbRingDE.png',
        'Parthian Tactics': 'archery_range/ParthianTacticsDE.png',
        'Supplies': 'barracks/Suplliesicon.png',
        'Forging': 'blacksmith/Forging_aoe2de.png',
        'Iron Casting': 'blacksmith/IronCastingDE.png',
        'Blast Furnace': 'blacksmith/BlastFurnaceDE.png',
        'Scale Mail Armor': 'blacksmith/ScaleMailArmorDE.png',
        'Chain Mail Armor': 'blacksmith/ChainMailArmorDE.png',
        'Plate Mail Armor': 'blacksmith/PlateMailArmorDE.png',
        'Bloodlines': 'stable/BloodlinesDE.png',
        'Husbandry': 'stable/HusbandryDE.png',
        'Scale Barding Armor': 'blacksmith/ScaleBardingArmorDE.png',
        'Chain Barding Armor': 'blacksmith/ChainBardingDE.png',
        'Plate Barding Armor': 'blacksmith/PlateBardingArmorDE.png',
        'Town Watch': 'town_center/TownWatchDE.png',
        'Town Patrol': 'town_center/TownPatrolDE.png',
        'Careening': 'dock/CareeningDE.png',
        'Dry Dock': 'dock/DryDockDE.png',
        'Shipwright': 'dock/ShipwrightDE.png',
        'Man-at-Arms': 'barracks/ManAtArmsUpgDE.png',
        'Crossbowman': 'archery_range/Crossbowman_aoe2DE.png',
        'Pikeman': 'barracks/PikemanUpDE.png',
        'Redemption': 'monastery/RedemptionDE.png',
        'Eagle Warrior': 'barracks/EagleWarriorUpgDE.png',
        'Arson': 'barracks/ArsonDE.png',
        'Siege Elephant': 'siege_workshop/AoE2DE_Siege_Elephant_icon.png',
        'Imperial Skirmisher': 'archery_range/ImperialSkirmisherUpgDE.png',
        'Heavy Camel Rider': 'stable/HeavyCamelUpgDE.png',
        'Imperial Camel Rider': 'unique_unit/ImperialCamelRiderIcon-DE.png',

        'Villager': 'resource/MaleVillDE.jpg',
        'Villagers': 'resource/MaleVillDE.jpg',
        'Petard': 'castle/Petard_aoe2DE.png',
        'Bombard Cannon': 'siege_workshop/Bombard_cannon_aoe2DE.png',
        'Hand Cannoneer': 'archery_range/Hand_cannoneer_aoe2DE.png',
        'Militia': 'barracks/MilitiaDE.png',
        'Scout': 'stable/Scoutcavalry_aoe2DE.png',
        'Archer': 'archery_range/Archer_aoe2DE.png',
        'Skirmisher': 'archery_range/Skirmisher_aoe2DE.png',
        'Spearman': 'barracks/Spearman_aoe2DE.png',
        'Eagle Scout': 'barracks/Eaglescout_aoe2DE.png',
        'Knight': 'stable/Knight_aoe2DE.png',
        'Battle Elephant': 'stable/Battle_elephant_aoe2DE.png',
        'Battering Ram': 'siege_workshop/Battering_ram_aoe2DE.png',
        'Scorpion': 'siege_workshop/Scorpion_aoe2DE.png',
        'Mangonel': 'siege_workshop/Mangonel_aoe2DE.png',
        'Siege Tower': 'siege_workshop/Siegetower_aoe2DE.png',
        'Monk': 'monastery/Monk_aoe2DE.png',
        'Fishing Ship': 'dock/FishingShipDE.png',
        'Galley': 'dock/Galley_aoe2DE.png',
        'Fire Galley': 'dock/Fire_galley_aoe2DE.png',
        'Elephant Archer': 'archery_range/ElephantArcherIcon-DE.png',
        'Armored Elephant': 'siege_workshop/AoE2DE_Armored_Elephant_icon.png',
        'Steppe Lancer': 'stable/Steppelancericon.png',

        'JaguarWarrior': 'unique_unit/JaguarWarriorIcon-DE.png',
        'Ratha': 'unique_unit/Aoe2de_ratha_ranged.png',
        'CamelArcher': 'unique_unit/CamelArcherIcon-DE.png',
        'Genitour': 'unique_unit/GenitourIcon-DE.png',
        'HussiteWagon': 'unique_unit/Aoe2-icon-hussite-wagon.png',
        'Houfnice': 'unique_unit/Aoe2-icon--houfnice.png',
        'Longbowman': 'unique_unit/LongbowmanIcon-DE.png',
        'Konnik': 'unique_unit/Konnikicon.png',
        'Coustillier': 'unique_unit/Aoe2-icon-coustillier.png',
        'FlemishMilitia': 'unique_unit/Aoe2-icon-flemish-militia.png',
        'Arambai': 'unique_unit/Arambaiicon-DE.png',
        'Cataphract': 'unique_unit/CataphractIcon-DE.png',
        'WoadRaider': 'unique_unit/WoadRaiderIcon-DE.png',
        'ChuKoNu': 'unique_unit/ChukoNuIcon-DE.png',
        'Kipchak': 'unique_unit/Kipchakicon.png',
        'UrumiSwordsman': 'unique_unit/Aoe2de_Urumi.png',
        'Thirisadai': 'unique_unit/Aoe2de_Thirisadai.png',
        'ShotelWarrior': 'unique_unit/Shotelwarrioricon-DE.png',
        'ThrowingAxeman': 'unique_unit/ThrowingAxemanIcon-DE.png',
        'Huskarl': 'unique_unit/HuskarlIcon-DE.png',
        'ChakramThrower': 'unique_unit/Aoe2de_Chakram.png',
        'ShrivamshaRider': 'unique_unit/Aoe2de_shrivamsha_rider.png',
        'CamelScout': 'unique_unit/Aoe2de_camel_scout.png',
        'Ghulam': 'unique_unit/Aoe2de_Ghulam.png',
        'ImperialCamelRider': 'unique_unit/ImperialCamelRiderIcon-DE.png',
        'Tarkan': 'unique_unit/TarkanIcon-DE.png',
        'Kamayuk': 'unique_unit/KamayukIcon-DE.png',
        'Slinger': 'unique_unit/SlingerIcon-DE.png',
        'GenoeseCrossbowman': 'unique_unit/GenoeseCrossbowmanIcon-DE.png',
        'Condottiero': 'unique_unit/CondottieroIcon-DE.png',
        'Samurai': 'unique_unit/SamuraiIcon-DE.png',
        'BallistaElephant': 'unique_unit/Ballistaelephanticon-DE.png',
        'WarWagon': 'unique_unit/WarWagonIcon-DE.png',
        'TurtleShip': 'unique_unit/TurtleShipIcon-DE.png',
        'Leitis': 'unique_unit/Leitisicon.png',
        'WingedHussar': 'stable/Winged-hussar_upgrade.png',
        'MagyarHuszar': 'unique_unit/MagyarHuszarIcon-DE.png',
        'KarambitWarrior': 'unique_unit/Karambitwarrioricon-DE.png',
        'Gbeto': 'unique_unit/GbetoIcon-DE.png',
        'PlumedArcher': 'unique_unit/PlumedArcherIcon-DE.png',
        'Mangudai': 'unique_unit/MangudaiIcon-DE.png',
        'WarElephant': 'unique_unit/WarElephantIcon-DE.png',
        'Obuch': 'unique_unit/Aoe2-icon--obuch.png',
        'OrganGun': 'unique_unit/OrganGunIcon-DE.png',
        'Caravel': 'unique_unit/CaravelIcon-DE.png',
        'Mameluke': 'unique_unit/MamelukeIcon-DE.png',
        'Serjeant': 'unique_unit/Aoe2-icon-serjeant.png',
        'Boyar': 'unique_unit/BoyarIcon-DE.png',
        'Conquistador': 'unique_unit/ConquistadorIcon-DE.png',
        'Missionary': 'unique_unit/MissionaryIcon-DE.png',
        'Keshik': 'unique_unit/Keshikicon.png',
        'FlamingCamel': 'unique_unit/Flaming_camel_icon.png',
        'TeutonicKnight': 'unique_unit/TeutonicKnightIcon-DE.png',
        'Janissary': 'unique_unit/JanissaryIcon-DE.png',
        'RattanArcher': 'unique_unit/Rattanarchericon-DE.png',
        'Berserk': 'unique_unit/BerserkIcon-DE.png',
        'Longboat': 'unique_unit/LongboatIcon-DE.png',
        'Hussite Wagon': 'unique_unit/Aoe2-icon-hussite-wagon.png',
        'Flemish Militia': 'unique_unit/Aoe2-icon-flemish-militia.png',
        'Flaming Camel': 'unique_unit/Flaming_camel_icon.png',
        'Camel Scout': 'unique_unit/Aoe2de_camel_scout.png',
        'Urumi Swordsman': 'unique_unit/Aoe2de_Urumi.png',
        'Chakram Thrower': 'unique_unit/Aoe2de_Chakram.png',
        'Shrivamsha Rider': 'unique_unit/Aoe2de_shrivamsha_rider.png'
    };
}

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

/** Trim the white spaces at the beginning of string.
 *  Note: re-implemented to be compatible with old browsers.
 * 
 * @param x     input string
 *
 * @returns    string with initial spaces trimmed
 */
function ltrim(x) {
    return x.replace(/^\s+/gm, '');
}

/** Convert a note written as only TXT to a note with illustrated format, looking initially for
 *  patterns of maximal size, and then decreasing progressively the size of the checked patterns. 
 * 
 * @param note              note in raw TXT
 * @param convert_dict      dictionary for conversions
 * @param max_size          maximal size of the split note pattern, less than 1 to take the full split length
 * @param ignore_in_dict    list of symbols to ignore when checking if it is in the dictionary
 * @param to_lower          true to look in the dictionary with key set in lower case
 *
 * @returns    note updated (potentially with illustration)
 */
export const convertTxtToIllustrated = (note, convert_dict, max_size = -1, ignore_in_dict = [], to_lower = false) => {

    let note_split = note.split(' ');  // note split based on spaces
    let split_count = note_split.length;  // number of elements in the split

    if (split_count < 1) {  // safety if no element
        return '';
    }

    // initial gather count size
    let init_gather_count = (max_size < 1) ? split_count : max_size;

    for (let gather_count = init_gather_count; gather_count > 0; gather_count--) {  // number of elements to gather for dictionary check

        let set_count = split_count - gather_count + 1;  // number of gather sets that can be made
        
        for (let first_id = 0; first_id < set_count; first_id++) {  // ID of the first element

            let check_note = note_split[first_id];
            for (let next_elem_id = first_id + 1; next_elem_id < first_id + gather_count; next_elem_id++) {  // gather the next elements
                check_note += ' ' + note_split[next_elem_id];
            }

            let updated_check_note = check_note;  // update based on requests

            for (const ignore_elem of ignore_in_dict) {  // ignore parts in dictionary
                updated_check_note = updated_check_note.replace(ignore_elem, '');
            }

            if (to_lower) {  // to lower case
                updated_check_note = updated_check_note.toLowerCase();
            }

            if (updated_check_note in convert_dict) {  // note to check if available in dictionary

                // get back ignored parts (before dictionary replace)
                let check_note_len = check_note.length;
                let ignore_before = '';
                for (let character_id = 0; character_id < check_note_len; character_id++) {
                    if (ignore_in_dict.includes(check_note[character_id])) {
                        ignore_before += check_note[character_id];
                    }
                    else {
                        break;
                    }
                }

                // get back ignored parts (after dictionary replace)
                let ignore_after = '';
                for (let character_id = check_note_len - 1; character_id >=0; character_id--) {
                    if (ignore_in_dict.includes(check_note[character_id])) {
                        ignore_after += check_note[character_id]
                    }
                    else {
                        break;
                    }
                }
                if (ignore_after != '') {  // reverse order
                    ignore_after = ignore_after.split('').reverse().join('');
                }

                let before_note = '';  // gather note parts before the found sub-note
                for (let before_id = 0; before_id < first_id; before_id++) {
                    before_note += ' ' + note_split[before_id];
                }
                before_note = ltrim(before_note);

                let after_note = '';  // gather note parts after the found sub-note
                for (let after_id = first_id + gather_count; after_id < split_count; after_id++) {
                    after_note += ' ' + note_split[after_id];
                }
                after_note = ltrim(after_note);

                // compose final note with part before, sub-note found and part after
                let final_note = '';
                if (before_note != '') {
                    final_note += convertTxtToIllustrated(before_note, convert_dict, max_size, ignore_in_dict, to_lower) + ' ';
                }

                final_note += ignore_before + '@' + convert_dict[updated_check_note] + '@' + ignore_after;

                if (after_note != '') {
                    final_note += ' ' + convertTxtToIllustrated(after_note, convert_dict, max_size, ignore_in_dict, to_lower);
                }

                return final_note;
            }
        }
    }

    // note (and sub-notes parts) not found, returning the initial TXT note
    return note;
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

    // get the conversion dictionary
    let convert_dict = getImagesDictionary();

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
            jsonObj['build_order'][previousID].notes.push(convertTxtToIllustrated(trim(BuildData.getTitleForStep(step)), convert_dict));
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
                notes: [convertTxtToIllustrated(trim(BuildData.getTitleForStep(step)), convert_dict)]
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
