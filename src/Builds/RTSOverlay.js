import BuildData from './BuildData'
import * as Constants from '../Constants'

/** Get the images conversion dictionary.
 * 
 * @returns    dictionary to convert 'Build Order Guide' names to 'RTS Overlay' names
 */
function getImagesDictionary() {
    return {
        'sheep': 'animal/Sheep_aoe2DE.png',
        'sheeps': 'animal/Sheep_aoe2DE.png',
        'shore fish': 'animal/AoE2_DE_shore_fish_icon.png',
        'boar': 'animal/Boar_aoe2DE.png',
        'boars': 'animal/Boar_aoe2DE.png',
        'deer': 'animal/Deer_aoe2DE.png',
        'deers': 'animal/Deer_aoe2DE.png',
        'farm': 'mill/FarmDE.png',
        'farms': 'mill/FarmDE.png',

        'wood': 'resource/Aoe2de_wood.png',
        'stone': 'resource/Aoe2de_stone.png',
        'gold': 'resource/Aoe2de_gold.png',
        'berry': 'resource/BerryBushDE.png',
        'berries': 'resource/BerryBushDE.png',
        'food': 'resource/Aoe2de_food.png',
        'build': 'resource/Aoe2de_hammer.png',

        'folwark': 'mill/Aoe2-icon--folwark.png',
        'folwarks': 'mill/Aoe2-icon--folwark.png',
        'house': 'other/House_aoe2DE.png',
        'houses': 'other/House_aoe2DE.png',
        'mill': 'mill/Mill_aoe2de.png',
        'mills': 'mill/Mill_aoe2de.png',
        'lumber camp': 'lumber_camp/Lumber_camp_aoe2de.png',
        'lumber camps': 'lumber_camp/Lumber_camp_aoe2de.png',
        'mining camp': 'mining_camp/Mining_camp_aoe2de.png',
        'mining camps': 'mining_camp/Mining_camp_aoe2de.png',
        'dock': 'dock/Dock_aoe2de.png',
        'docks': 'dock/Dock_aoe2de.png',
        'barracks': 'barracks/Barracks_aoe2DE.png',
        'market': 'market/Market_aoe2DE.png',
        'markets': 'market/Market_aoe2DE.png',
        'blacksmith': 'blacksmith/Blacksmith_aoe2de.png',
        'blacksmiths': 'blacksmith/Blacksmith_aoe2de.png',
        'range': 'archery_range/Archery_range_aoe2DE.png',
        'ranges': 'archery_range/Archery_range_aoe2DE.png',
        'archery range': 'archery_range/Archery_range_aoe2DE.png',
        'archery ranges': 'archery_range/Archery_range_aoe2DE.png',
        'stable': 'stable/Stable_aoe2DE.png',
        'stables': 'stable/Stable_aoe2DE.png',
        'tower': 'defensive_structures/Tower_aoe2de.png',
        'towers': 'defensive_structures/Tower_aoe2de.png',
        'town center': 'town_center/Towncenter_aoe2DE.png',
        'town centers': 'town_center/Towncenter_aoe2DE.png',
        'tc': 'town_center/Towncenter_aoe2DE.png',
        'monastery': 'monastery/MonasteryAoe2DE.png',
        'monasteries': 'monastery/MonasteryAoe2DE.png',
        'university': 'university/University_AoE2_DE.png',
        'universities': 'university/University_AoE2_DE.png',
        'siege workshop': 'siege_workshop/Siege_workshop_aoe2DE.png',
        'siege workshops': 'siege_workshop/Siege_workshop_aoe2DE.png',
        'castle': 'castle/Castle_aoe2DE.png',
        'castles': 'castle/Castle_aoe2DE.png',
        'krepost': 'defensive_structures/Krepost_aoe2de.png',
        'kreposts': 'defensive_structures/Krepost_aoe2de.png',
        'feitoria': 'other/Feitoria_aoe2DE.png',
        'fish trap': 'dock/Fish_trap_aoe2DE.png',
        'fish traps': 'dock/Fish_trap_aoe2DE.png',
        'palisade': 'defensive_structures/Palisade_wall_aoe2de.png',
        'palisades': 'defensive_structures/Palisade_wall_aoe2de.png',
        'wall': 'defensive_structures/Palisade_wall_aoe2de.png',
        'walls': 'defensive_structures/Palisade_wall_aoe2de.png',
        'stone wall': 'defensive_structures/Stone_wall_aoe2de.png',
        'stone walls': 'defensive_structures/Stone_wall_aoe2de.png',
        'donjon': 'defensive_structures/Donjon_aoe2DE.png',
        'donjons': 'defensive_structures/Donjon_aoe2DE.png',
        'wonder': 'other/Wonder_aoe2DE.png',
        'wonders': 'other/Wonder_aoe2DE.png',
        'caravanserai': 'other/Ao2de_caravanserai_icon.png',
        'caravanserais': 'other/Ao2de_caravanserai_icon.png',
        'mule cart': 'other/MuleCart.png',
        'mule carts': 'other/MuleCart.png',

        'dark age': 'age/DarkAgeIconDE_alpha.png',
        'feudal age': 'age/FeudalAgeIconDE_alpha.png',
        'castle age': 'age/CastleAgeIconDE_alpha.png',
        'imperial age': 'age/ImperialAgeIconDE_alpha.png',

        'chemistry': 'university/ChemistryDE.png',
        'double-bit axe': 'lumber_camp/DoubleBitAxe_aoe2DE.png',
        'horse collar': 'mill/HorseCollarDE.png',
        'loom': 'town_center/LoomDE.png',
        'wheelbarrow': 'town_center/WheelbarrowDE.png',
        'hand cart': 'town_center/HandcartDE.png',
        'bow saw': 'lumber_camp/BowSawDE.png',
        'two-man saw': 'lumber_camp/TwoManSawDE.png',
        'heavy plow': 'mill/HeavyPlowDE.png',
        'crop rotation': 'mill/CropRotationDE.png',
        'gold mining': 'mining_camp/GoldMiningDE.png',
        'gold shaft mining': 'mining_camp/GoldShaftMiningDE.png',
        'stone mining': 'mining_camp/StoneMiningDE.png',
        'stone shaft mining': 'mining_camp/StoneShaftMiningDE.png',
        'gillnets': 'dock/GillnetsDE.png',
        'fletching': 'blacksmith/FletchingDE.png',
        'bodkin arrow': 'blacksmith/BodkinArrowDE.png',
        'bracer': 'blacksmith/BracerDE.png',
        'padded archer armor': 'blacksmith/PaddedArcherArmorDE.png',
        'leather archer armor': 'blacksmith/LeatherArcherArmorDE.png',
        'ring archer armor': 'blacksmith/RingArcherArmorDE.png',
        'ballistics': 'university/BallisticsDE.png',
        'thumb ring': 'archery_range/ThumbRingDE.png',
        'parthian tactics': 'archery_range/ParthianTacticsDE.png',
        'supplies': 'barracks/Suplliesicon.png',
        'forging': 'blacksmith/Forging_aoe2de.png',
        'iron casting': 'blacksmith/IronCastingDE.png',
        'blast furnace': 'blacksmith/BlastFurnaceDE.png',
        'scale mail armor': 'blacksmith/ScaleMailArmorDE.png',
        'chain mail armor': 'blacksmith/ChainMailArmorDE.png',
        'plate mail armor': 'blacksmith/PlateMailArmorDE.png',
        'bloodlines': 'stable/BloodlinesDE.png',
        'husbandry': 'stable/HusbandryDE.png',
        'scale barding armor': 'blacksmith/ScaleBardingArmorDE.png',
        'chain barding armor': 'blacksmith/ChainBardingDE.png',
        'plate barding armor': 'blacksmith/PlateBardingArmorDE.png',
        'town watch': 'town_center/TownWatchDE.png',
        'town patrol': 'town_center/TownPatrolDE.png',
        'careening': 'dock/CareeningDE.png',
        'dry dock': 'dock/DryDockDE.png',
        'shipwright': 'dock/ShipwrightDE.png',
        'man-at-arms': 'barracks/ManAtArmsUpgDE.png',
        'pikeman': 'barracks/PikemanUpDE.png',
        'redemption': 'monastery/RedemptionDE.png',
        'arson': 'barracks/ArsonDE.png',
        'gambeson': 'barracks/GambesonsDE.png',
        'gambesons': 'barracks/GambesonsDE.png',
        'siege elephant': 'siege_workshop/AoE2DE_Siege_Elephant_icon.png',
        'heavy camel rider': 'stable/HeavyCamelUpgDE.png',

        'vill': 'resource/MaleVillDE.jpg',
        'vills': 'resource/MaleVillDE.jpg',
        'villager': 'resource/MaleVillDE.jpg',
        'villagers': 'resource/MaleVillDE.jpg',   
        'militia': 'barracks/MilitiaDE.png',
        'militias': 'barracks/MilitiaDE.png',
        'man at arms': 'barracks/Manatarms_aoe2DE.png',
        'man-at arms': 'barracks/Manatarms_aoe2DE.png',
        'men at arms': 'barracks/Manatarms_aoe2DE.png',
        'men-at arms': 'barracks/Manatarms_aoe2DE.png',
        'men-at-arms': 'barracks/Manatarms_aoe2DE.png',
        'longswordsman': 'barracks/Longswordsman_aoe2DE.png',
        'longswordsmen': 'barracks/Longswordsman_aoe2DE.png',
        'two-handed swordsman': 'barracks/Twohanded_aoe2DE.png',
        'two-handed swordsmen': 'barracks/Twohanded_aoe2DE.png',
        'champion': 'barracks/Champion_aoe2DE.png',
        'champions': 'barracks/Champion_aoe2DE.png',
        'spearman': 'barracks/Spearman_aoe2DE.png',
        'spearmans': 'barracks/Spearman_aoe2DE.png',
        'halberdier': 'barracks/Halberdier_aoe2DE.png',
        'halberdiers': 'barracks/Halberdier_aoe2DE.png',
        'eagle scout': 'barracks/Eaglescout_aoe2DE.png',
        'eagle scouts': 'barracks/Eaglescout_aoe2DE.png',
        'eagle warrior': 'barracks/Eaglewarrior_aoe2DE.png',
        'eagle warriors': 'barracks/Eaglewarrior_aoe2DE.png',
        'elite eagle warrior': 'barracks/EliteEaglewarrior_aoe2DE.png',
        'elite eagle warriors': 'barracks/EliteEaglewarrior_aoe2DE.png',
        'fire lancer': 'barracks/Fire_Lancer.png',
        'fire lancers': 'barracks/Fire_Lancer.png',
        'archer': 'archery_range/Archer_aoe2DE.png',
        'archers': 'archery_range/Archer_aoe2DE.png',
        'crossbowman': 'archery_range/Crossbowman_aoe2DE.png',
        'crossbowmen': 'archery_range/Crossbowman_aoe2DE.png',
        'arbalester': 'archery_range/Arbalester_aoe2DE.png',
        'arbalesters': 'archery_range/Arbalester_aoe2DE.png',
        'skirmisher': 'archery_range/Skirmisher_aoe2DE.png',
        'skirmishers': 'archery_range/Skirmisher_aoe2DE.png',
        'elite skirmisher': 'archery_range/Elite_skirmisher_aoe2DE.png',
        'elite skirmishers': 'archery_range/Elite_skirmisher_aoe2DE.png',
        'imperial skirmisher': 'archery_range/ImperialSkirmisherUpgDE.png',
        'imperial skirmishers': 'archery_range/ImperialSkirmisherUpgDE.png',
        'cavalry archer': 'archery_range/Cavalryarcher_aoe2DE.png',
        'cavalry archers': 'archery_range/Cavalryarcher_aoe2DE.png',
        'heavy cavalry archer': 'archery_range/Heavycavalryarcher_aoe2de.png',
        'heavy cavalry archers': 'archery_range/Heavycavalryarcher_aoe2de.png',
        'elephant archer': 'archery_range/ElephantArcherIcon-DE.png',
        'elephant archers': 'archery_range/ElephantArcherIcon-DE.png',
        'elite elephant archer': 'archery_range/ElephantArcherIcon-DE.png',
        'elite elephant archers': 'archery_range/ElephantArcherIcon-DE.png',
        'hand cannoneer': 'archery_range/Hand_cannoneer_aoe2DE.png',
        'hand cannoneers': 'archery_range/Hand_cannoneer_aoe2DE.png',
        
        'scout': 'stable/Scoutcavalry_aoe2DE.png',
        'scouts': 'stable/Scoutcavalry_aoe2DE.png',
        'light cavalry': 'stable/Lightcavalry_aoe2DE.png',
        'hussar': 'stable/Hussar_aoe2DE.png',
        'hussars': 'stable/Hussar_aoe2DE.png',
        'knight': 'stable/Knight_aoe2DE.png',
        'knights': 'stable/Knight_aoe2DE.png',
        'cavalier': 'stable/Cavalier_aoe2DE.png',
        'cavaliers': 'stable/Cavalier_aoe2DE.png',
        'paladin': 'stable/Paladin_aoe2DE.png',
        'paladins': 'stable/Paladin_aoe2DE.png',
        'battle elephant': 'stable/Battle_elephant_aoe2DE.png',
        'battle elephants': 'stable/Battle_elephant_aoe2DE.png',
        'elite battle elephant': 'stable/EliteBattleElephantUpg.png',
        'elite battle elephants': 'stable/EliteBattleElephantUpg.png',
        'steppe lancer': 'stable/Steppelancericon.png',
        'steppe lancers': 'stable/Steppelancericon.png',
        'elite steppe lancer': 'stable/Elitesteppelancericon.png',
        'elite steppe lancers': 'stable/Elitesteppelancericon.png',
        'camel rider': 'stable/Camelrider_aoe2DE.png',
        'camel riders': 'stable/Camelrider_aoe2DE.png',

        'petard': 'castle/Petard_aoe2DE.png',
        'petards': 'castle/Petard_aoe2DE.png',
        'bombard cannon': 'siege_workshop/Bombard_cannon_aoe2DE.png',
        'bombard cannons': 'siege_workshop/Bombard_cannon_aoe2DE.png',
        'ram': 'siege_workshop/Battering_ram_aoe2DE.png',
        'rams': 'siege_workshop/Battering_ram_aoe2DE.png',
        'battering ram': 'siege_workshop/Battering_ram_aoe2DE.png',
        'battering rams': 'siege_workshop/Battering_ram_aoe2DE.png',
        'scorpion': 'siege_workshop/Scorpion_aoe2DE.png',
        'scorpions': 'siege_workshop/Scorpion_aoe2DE.png',
        'mangonel': 'siege_workshop/Mangonel_aoe2DE.png',
        'mangonels': 'siege_workshop/Mangonel_aoe2DE.png',
        'siege tower': 'siege_workshop/Siegetower_aoe2DE.png',
        'siege towers': 'siege_workshop/Siegetower_aoe2DE.png',
        'armored elephant': 'siege_workshop/AoE2DE_Armored_Elephant_icon.png',
        'armored elephants': 'siege_workshop/AoE2DE_Armored_Elephant_icon.png',
        'traction trebuchet': 'siege_workshop/Traction_Trebuchet.png',
        'traction trebuchets': 'siege_workshop/Traction_Trebuchet.png',
        'monk': 'monastery/Monk_aoe2DE.png',
        'monks': 'monastery/Monk_aoe2DE.png',
        'fishing ship': 'dock/FishingShipDE.png',
        'fishing ships': 'dock/FishingShipDE.png',
        'galley': 'dock/Galley_aoe2DE.png',
        'galleys': 'dock/Galley_aoe2DE.png',
        'fire galley': 'dock/Fire_galley_aoe2DE.png',
        'fire galleys': 'dock/Fire_galley_aoe2DE.png',
        'war galley': 'dock/War_galley_aoe2DE.png',
        'war galleys': 'dock/War_galley_aoe2DE.png',
        'lou chuan': 'dock/Lou_Chuan.png',
        
        'jaguarwarrior': 'unique_unit/JaguarWarriorIcon-DE.png',
        'jaguar warrior': 'unique_unit/JaguarWarriorIcon-DE.png',
        'jaguar warriors': 'unique_unit/JaguarWarriorIcon-DE.png',
        'ratha': 'unique_unit/Aoe2de_ratha_ranged.png',
        'camelarcher': 'unique_unit/CamelArcherIcon-DE.png',
        'camel archer': 'unique_unit/CamelArcherIcon-DE.png',
        'camel archers': 'unique_unit/CamelArcherIcon-DE.png',
        'genitour': 'unique_unit/GenitourIcon-DE.png',
        'genitours': 'unique_unit/GenitourIcon-DE.png',
        'hussitewagon': 'unique_unit/Aoe2-icon-hussite-wagon.png',
        'hussite wagon': 'unique_unit/Aoe2-icon-hussite-wagon.png',
        'hussite wagons': 'unique_unit/Aoe2-icon-hussite-wagon.png',
        'houfnice': 'unique_unit/Aoe2-icon--houfnice.png',
        'longbowman': 'unique_unit/LongbowmanIcon-DE.png',
        'longbowmen': 'unique_unit/LongbowmanIcon-DE.png',
        'konnik': 'unique_unit/Konnikicon.png',
        'konniks': 'unique_unit/Konnikicon.png',
        'coustillier': 'unique_unit/Aoe2-icon-coustillier.png',
        'coustilliers': 'unique_unit/Aoe2-icon-coustillier.png',
        'flemishmilitia': 'unique_unit/Aoe2-icon-flemish-militia.png',
        'flemish militia': 'unique_unit/Aoe2-icon-flemish-militia.png',
        'flemish militias': 'unique_unit/Aoe2-icon-flemish-militia.png',
        'arambai': 'unique_unit/Arambaiicon-DE.png',
        'arambais': 'unique_unit/Arambaiicon-DE.png',
        'cataphract': 'unique_unit/CataphractIcon-DE.png',
        'cataphracts': 'unique_unit/CataphractIcon-DE.png',
        'woadraider': 'unique_unit/WoadRaiderIcon-DE.png',
        'woad raider': 'unique_unit/WoadRaiderIcon-DE.png',
        'woad raiders': 'unique_unit/WoadRaiderIcon-DE.png',
        'chukonu': 'unique_unit/ChukoNuIcon-DE.png',
        'chu ko nu': 'unique_unit/ChukoNuIcon-DE.png',
        'kipchak': 'unique_unit/Kipchakicon.png',
        'kipchaks': 'unique_unit/Kipchakicon.png',
        'urumiswordsman': 'unique_unit/Aoe2de_Urumi.png',
        'urumi swordsman': 'unique_unit/Aoe2de_Urumi.png',
        'urumi swordsmen': 'unique_unit/Aoe2de_Urumi.png',
        'thirisadai': 'unique_unit/Aoe2de_Thirisadai.png',
        'thirisadais': 'unique_unit/Aoe2de_Thirisadai.png',
        'shotelwarrior': 'unique_unit/Shotelwarrioricon-DE.png',
        'shotel warrior': 'unique_unit/Shotelwarrioricon-DE.png',
        'shotel warriors': 'unique_unit/Shotelwarrioricon-DE.png',
        'throwingaxeman': 'unique_unit/ThrowingAxemanIcon-DE.png',
        'throwing axeman': 'unique_unit/ThrowingAxemanIcon-DE.png',
        'throwing axemen': 'unique_unit/ThrowingAxemanIcon-DE.png',
        'huskarl': 'unique_unit/HuskarlIcon-DE.png',
        'huskarls': 'unique_unit/HuskarlIcon-DE.png',
        'chakramthrower': 'unique_unit/Aoe2de_Chakram.png',
        'chakram thrower': 'unique_unit/Aoe2de_Chakram.png',
        'chakram throwers': 'unique_unit/Aoe2de_Chakram.png',
        'shrivamsharider': 'unique_unit/Aoe2de_shrivamsha_rider.png',
        'shrivamsha rider': 'unique_unit/Aoe2de_shrivamsha_rider.png',
        'shrivamsha riders': 'unique_unit/Aoe2de_shrivamsha_rider.png',
        'camelscout': 'unique_unit/Aoe2de_camel_scout.png',
        'camel scout': 'unique_unit/Aoe2de_camel_scout.png',
        'camel scouts': 'unique_unit/Aoe2de_camel_scout.png',
        'ghulam': 'unique_unit/Aoe2de_Ghulam.png',
        'ghulams': 'unique_unit/Aoe2de_Ghulam.png',
        'imperialcamelrider': 'unique_unit/ImperialCamelRiderIcon-DE.png',
        'imperial camel rider': 'unique_unit/ImperialCamelRiderIcon-DE.png',
        'imperial camel riders': 'unique_unit/ImperialCamelRiderIcon-DE.png',
        'tarkan': 'unique_unit/TarkanIcon-DE.png',
        'tarkans': 'unique_unit/TarkanIcon-DE.png',
        'kamayuk': 'unique_unit/KamayukIcon-DE.png',
        'kamayuks': 'unique_unit/KamayukIcon-DE.png',
        'slinger': 'unique_unit/SlingerIcon-DE.png',
        'slingers': 'unique_unit/SlingerIcon-DE.png',
        'genoesecrossbowman': 'unique_unit/GenoeseCrossbowmanIcon-DE.png',
        'genoese crossbowman': 'unique_unit/GenoeseCrossbowmanIcon-DE.png',
        'genoese crossbowmen': 'unique_unit/GenoeseCrossbowmanIcon-DE.png',
        'condottiero': 'unique_unit/CondottieroIcon-DE.png',
        'samurai': 'unique_unit/SamuraiIcon-DE.png',
        'samurais': 'unique_unit/SamuraiIcon-DE.png',
        'ballistaelephant': 'unique_unit/Ballistaelephanticon-DE.png',
        'ballista elephant': 'unique_unit/Ballistaelephanticon-DE.png',
        'ballista elephants': 'unique_unit/Ballistaelephanticon-DE.png',
        'warwagon': 'unique_unit/WarWagonIcon-DE.png',
        'war wagon': 'unique_unit/WarWagonIcon-DE.png',
        'war wagons': 'unique_unit/WarWagonIcon-DE.png',
        'turtleship': 'unique_unit/TurtleShipIcon-DE.png',
        'turtle ship': 'unique_unit/TurtleShipIcon-DE.png',
        'turtle ships': 'unique_unit/TurtleShipIcon-DE.png',
        'leitis': 'unique_unit/Leitisicon.png',
        'wingedhussar': 'stable/Winged-hussar_upgrade.png',
        'winged hussar': 'stable/Winged-hussar_upgrade.png',
        'winged hussars': 'stable/Winged-hussar_upgrade.png',
        'hei guang': 'stable/Hei_Guang_Cavalry.png',
        'heavy hei guang': 'stable/Heavy_Hei_Guang_Cavalry.png',
        'magyarhuszar': 'unique_unit/MagyarHuszarIcon-DE.png',
        'magyar huszar': 'unique_unit/MagyarHuszarIcon-DE.png',
        'magyar huszars': 'unique_unit/MagyarHuszarIcon-DE.png',
        'karambitwarrior': 'unique_unit/Karambitwarrioricon-DE.png',
        'karambit warrior': 'unique_unit/Karambitwarrioricon-DE.png',
        'karambit warriors': 'unique_unit/Karambitwarrioricon-DE.png',
        'gbeto': 'unique_unit/GbetoIcon-DE.png',
        'plumedarcher': 'unique_unit/PlumedArcherIcon-DE.png',
        'plumed archer': 'unique_unit/PlumedArcherIcon-DE.png',
        'plumed archers': 'unique_unit/PlumedArcherIcon-DE.png',
        'mangudai': 'unique_unit/MangudaiIcon-DE.png',
        'mangudais': 'unique_unit/MangudaiIcon-DE.png',
        'warelephant': 'unique_unit/WarElephantIcon-DE.png',
        'war elephant': 'unique_unit/WarElephantIcon-DE.png',
        'war elephants': 'unique_unit/WarElephantIcon-DE.png',
        'obuch': 'unique_unit/Aoe2-icon--obuch.png',
        'organgun': 'unique_unit/OrganGunIcon-DE.png',
        'organ gun': 'unique_unit/OrganGunIcon-DE.png',
        'organ guns': 'unique_unit/OrganGunIcon-DE.png',
        'caravel': 'unique_unit/CaravelIcon-DE.png',
        'caravels': 'unique_unit/CaravelIcon-DE.png',
        'mameluke': 'unique_unit/MamelukeIcon-DE.png',
        'mamelukes': 'unique_unit/MamelukeIcon-DE.png',
        'serjeant': 'unique_unit/Aoe2-icon-serjeant.png',
        'serjeants': 'unique_unit/Aoe2-icon-serjeant.png',
        'boyar': 'unique_unit/BoyarIcon-DE.png',
        'boyars': 'unique_unit/BoyarIcon-DE.png',
        'conq': 'unique_unit/ConquistadorIcon-DE.png',
        'conqs': 'unique_unit/ConquistadorIcon-DE.png',
        'conquistador': 'unique_unit/ConquistadorIcon-DE.png',
        'conquistadors': 'unique_unit/ConquistadorIcon-DE.png',
        'centurion': 'unique_unit/Centurion-DE.png',
        'centurions': 'unique_unit/Centurion-DE.png',
        'legionary': 'unique_unit/Legionary-DE.png',
        'legionaries': 'unique_unit/Legionary-DE.png',
        'missionary': 'unique_unit/MissionaryIcon-DE.png',
        'missionaries': 'unique_unit/MissionaryIcon-DE.png',
        'keshik': 'unique_unit/Keshikicon.png',
        'keshiks': 'unique_unit/Keshikicon.png',
        'flamingcamel': 'unique_unit/Flaming_camel_icon.png',
        'flaming camel': 'unique_unit/Flaming_camel_icon.png',
        'flaming camels': 'unique_unit/Flaming_camel_icon.png',
        'teutonicknight': 'unique_unit/TeutonicKnightIcon-DE.png',
        'teutonic knight': 'unique_unit/TeutonicKnightIcon-DE.png',
        'teutonic knights': 'unique_unit/TeutonicKnightIcon-DE.png',
        'janissary': 'unique_unit/JanissaryIcon-DE.png',
        'janissaries': 'unique_unit/JanissaryIcon-DE.png',
        'rattanarcher': 'unique_unit/Rattanarchericon-DE.png',
        'rattan archer': 'unique_unit/Rattanarchericon-DE.png',
        'rattan archers': 'unique_unit/Rattanarchericon-DE.png',
        'berserk': 'unique_unit/BerserkIcon-DE.png',
        'berserks': 'unique_unit/BerserkIcon-DE.png',
        'longboat': 'unique_unit/LongboatIcon-DE.png',
        'longboats': 'unique_unit/LongboatIcon-DE.png',
        'composite bowman': '/unique_unit/CompositeBowman.png',
        'composite bowmans': '/unique_unit/CompositeBowman.png',
        'dromon': '/unique_unit/Dromon-DE.png',
        'dromons': '/unique_unit/Dromon-DE.png',
        'fire archer': '/unique_unit/Fire_Archer.png',
        'fire archers': '/unique_unit/Fire_Archer.png',
        'grenadier': '/unique_unit/Grenadier.png',
        'grenadiers': '/unique_unit/Grenadier.png',
        'iron pagoda': '/unique_unit/Iron_Pagoda.png',
        'iron pagodas': '/unique_unit/Iron_Pagoda.png',
        'jian swordsman': '/unique_unit/Jian_Swordsman_strong.png',
        'jian swordsmen': '/unique_unit/Jian_Swordsman_strong.png',
        'liao dao': '/unique_unit/Liao_Dao.png',
        'monaspa': '/unique_unit/Monaspa.jpg',
        'monaspas': '/unique_unit/Monaspa.jpg',
        'mounted trebuchet': '/unique_unit/Mounted_Trebuchet.png',
        'mounted trebuchets': '/unique_unit/Mounted_Trebuchet.png',
        'tiger cavalry': '/unique_unit/Tiger_Cavalry.png',
        'tiger cavalries': '/unique_unit/Tiger_Cavalry.png',
        'war chariot': '/unique_unit/War_Chariot.png',
        'war chariots': '/unique_unit/War_Chariot.png',
        'warrior priest': '/unique_unit/WarriorPriest.jpg',
        'warrior priests': '/unique_unit/WarriorPriest.jpg',
        'white feather guard': '/unique_unit/White_Feather_Guard.png',
        'white feather guards': '/unique_unit/White_Feather_Guard.png',
        'xianbei raider': '/unique_unit/Xianbei_Raider.png',
        'xianbei raiders': '/unique_unit/Xianbei_Raider.png',

        'cao cao': 'hero/Cao_Cao.png',
        'liu bei': 'hero/Liu_Bei.png',
        'sun jian': 'hero/Sun_Jian.png'
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
 * @param note            note in raw TXT
 * @param convertDict     dictionary for conversions
 * @param toLower         true to look in the dictionary with key set in lower case
 * @param maxSize         maximal size of the split note pattern, less than 1 to take the full split length
 * @param ignoreInDict    list of symbols to ignore when checking if it is in the dictionary
 *
 * @returns    note updated (potentially with illustration)
 */
export const convertTxtToIllustrated = (note, convertDict, toLower = false, maxSize = -1, ignoreInDict = []) => {

    let noteSplit = note.split(' ');  // note split based on spaces
    let splitCount = noteSplit.length;  // number of elements in the split

    if (splitCount < 1) {  // safety if no element
        return '';
    }

    // initial gather count size
    let initGatherCount = (maxSize < 1) ? splitCount : maxSize;

    for (let gatherCount = initGatherCount; gatherCount > 0; gatherCount--) {  // number of elements to gather for dictionary check

        let setCount = splitCount - gatherCount + 1;  // number of gather sets that can be made
        
        for (let firstID = 0; firstID < setCount; firstID++) {  // ID of the first element

            let checkNote = noteSplit[firstID];
            for (let nextElemID = firstID + 1; nextElemID < firstID + gatherCount; nextElemID++) {  // gather the next elements
                checkNote += ' ' + noteSplit[nextElemID];
            }

            let updatedCheckNote = checkNote;  // update based on requests

            for (const ignoreElem of ignoreInDict) {  // ignore parts in dictionary
                updatedCheckNote = updatedCheckNote.replace(ignoreElem, '');
            }

            if (toLower) {  // to lower case
                updatedCheckNote = updatedCheckNote.toLowerCase();
            }

            if (updatedCheckNote in convertDict) {  // note to check is available in dictionary

                // used to retrieve ignored parts
                let ignoreBefore = '';
                let ignoreAfter = '';

                if (ignoreInDict.length > 0) {
                    let checkNoteLen = checkNote.length;

                    // get back ignored parts (before dictionary replace)
                    for (let characterID = 0; characterID < checkNoteLen; characterID++) {
                        if (ignoreInDict.includes(checkNote[characterID])) {
                            ignoreBefore += checkNote[characterID];
                        }
                        else {
                            break;
                        }
                    }

                    // get back ignored parts (after dictionary replace)
                    for (let characterID = checkNoteLen - 1; characterID >=0; characterID--) {
                        if (ignoreInDict.includes(checkNote[characterID])) {
                            ignoreAfter += checkNote[characterID]
                        }
                        else {
                            break;
                        }
                    }
                    if (ignoreAfter !== '') {  // reverse order
                        ignoreAfter = ignoreAfter.split('').reverse().join('');
                    }
                }

                let beforeNote = '';  // gather note parts before the found sub-note
                for (let beforeID = 0; beforeID < firstID; beforeID++) {
                    beforeNote += ' ' + noteSplit[beforeID];
                }
                beforeNote = ltrim(beforeNote);

                let afterNote = '';  // gather note parts after the found sub-note
                for (let afterID = firstID + gatherCount; afterID < splitCount; afterID++) {
                    afterNote += ' ' + noteSplit[afterID];
                }
                afterNote = ltrim(afterNote);

                // compose final note with part before, sub-note found and part after
                let finalNote = '';
                if (beforeNote !== '') {
                    finalNote += convertTxtToIllustrated(beforeNote, convertDict, toLower, maxSize, ignoreInDict) + ' ';
                }

                finalNote += ignoreBefore + '@' + convertDict[updatedCheckNote] + '@' + ignoreAfter;

                if (afterNote !== '') {
                    finalNote += ' ' + convertTxtToIllustrated(afterNote, convertDict, toLower, maxSize, ignoreInDict);
                }

                return finalNote;
            }
        }
    }

    // note (and sub-notes parts) not found, returning the initial TXT note
    return note;
}

/** Get an object element, checking if it exists (and providing a default value if it does not exist).
 * 
 * @param item            item object to check
 * @param name            name of the requested property of the item object 
 * @param defaultValue    default value to return in case the requested name is not found
 *
 * @returns    value of the requested item, defaut value if not found
 */
const getElemSafe = (item, name, defaultValue) => {
    return item.hasOwnProperty(name) ? item[name] : defaultValue;
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
        else if (age === Constants.Age.FeudalAge) return 2;
        else if (age === Constants.Age.CastleAge) return 3;
        else if (age === Constants.Age.ImperialAge) return 4;
        else return currentAge;
    }
    else { // no age update
        return currentAge;
    }
}

/** Get the age icon string sequence for each age ID
 * 
 * @param ageID    age ID (1:Dark, 2:Feudal, 3:Castle, 4:Imperial)
 *
 * @returns    string to add image of age ('Unknown age' if wrong ID)
 */
const getAgeIcon = (ageID) => {
    if (ageID === 1) return '@age/DarkAgeIconDE_alpha.png@';
    else if (ageID === 2) return '@age/FeudalAgeIconDE_alpha.png@';
    else if (ageID === 3) return '@age/CastleAgeIconDE_alpha.png@';
    else if (ageID === 4) return '@age/ImperialAgeIconDE_alpha.png@';
    else return 'Unknown age';
}

/** Check if 2 sets of resources are identical.
 * 
 * @param resourcesA    first set of resources to compare
 * @param resourcesB    second set of resources to compare
 *
 * @returns    true if identical resources
 */
const isIdenticalResources = (resourcesA, resourcesB) => {
    return (resourcesA.wood === resourcesB.wood) &&
        (resourcesA.food === resourcesB.food) &&
        (resourcesA.gold === resourcesB.gold) &&
        (resourcesA.stone === resourcesB.stone) &&
        (resourcesA.builder === resourcesB.builder);
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
        description: getElemSafe(build, 'description', ''),
        build_order: []
    };

    // update civilizations for RTS Overlay
    if (jsonObj['civilization'] === 'Generic') {
        jsonObj['civilization'] = 'Any';
    }
    else if (jsonObj['civilization'] === 'Meso') {
        jsonObj['civilization'] = ['Aztecs', 'Incas', 'Mayans'];
    }

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
    let convertDict = getImagesDictionary();

    let ageUpFlag = false; // true when step type is 'ageUp' (starting next step, until 'newAge')
    let newAgeFlag = false; // true when step type is 'newAge' (only used for next step)
    let newStepAge = false; // true to use a new step following 'ageUp' or 'newAge'

    // loop on all the steps
    for (var i = 0; i < stepsCount; i++) {
        var step = steps[i];

        // resources
        var resources = step.hasOwnProperty('resources') ? step.resources : {
            wood: -1,
            food: -1,
            gold: -1,
            stone: -1,
            builder: -1
        };
        
        // store new resources
        var newResources = {
            wood: getElemSafe(resources, 'wood', -1),
            food: getElemSafe(resources, 'food', -1),
            gold: getElemSafe(resources, 'gold', -1),
            stone: getElemSafe(resources, 'stone', -1),
            builder: getElemSafe(resources, 'build', -1)
        };
        // do not display builder if no builder for this step
        if (newResources['builder'] === 0) {
            newResources['builder'] = -1;
        }

        // count the number of villagers
        let newVillagerCount =
            resourceContribution(newResources, 'wood') +
            resourceContribution(newResources, 'food') +
            resourceContribution(newResources, 'gold') +
            resourceContribution(newResources, 'stone') +
            resourceContribution(newResources, 'builder');

        // naw age started
        if (getElemSafe(step, 'type', 'noNewAge') === 'newAge') {
            ageUpFlag = false;
            newAgeFlag = true;
            newStepAge = true;
            continue; // skip (nothing to add)
        }

        // convert note to Overlay format
        let rawNote = trim(BuildData.getTitleForStep(step));
        if (rawNote === 'Choice') { // special case for choice
            rawNote = getElemSafe(step, 'text', 'Choice');
        }
        let newNote = convertTxtToIllustrated(rawNote, convertDict, true, 3, []);

        // check if we should still use the previous step
        let usePreviousStep = false;

        let ageUpNote = '';
        if (ageUpFlag || newAgeFlag) { // going to next age or reaching it
            usePreviousStep =  (jsonObj['build_order'].length >= 1) && !newStepAge;
            ageUpNote = (ageUpFlag ? 'Before ' : 'In ') + getAgeIcon(currentAge);
            newStepAge = false;
        }
        else { // normal step
            usePreviousStep = ((jsonObj['build_order'].length >= 1) &&
                isIdenticalResources(newResources, previousResources)); // no resource count change
        }

        // copy the resources for storing
        let storeResources = Object.assign({}, newResources);
        if (storeResources['builder'] === -1) { // remove builder if not set
            delete storeResources['builder'];
        }

        if (usePreviousStep) { // use previous BO step
            var previousID = jsonObj['build_order'].length - 1; // ID of the previous BO step

            jsonObj['build_order'][previousID].villager_count = newVillagerCount;
            jsonObj['build_order'][previousID].age = currentAge;
            jsonObj['build_order'][previousID].resources = storeResources;
            jsonObj['build_order'][previousID].notes.push(newNote);
        }
        else { // new BO step
            // new step element for the JSON format
            var newStepJson = {
                villager_count: newVillagerCount,
                age: currentAge,
                resources: storeResources,
                notes: []
            };
            if (ageUpNote !== '') {
                newStepJson['notes'].push(ageUpNote);
            }
            if (newNote !== '') {
                newStepJson['notes'].push(newNote);
            }

            // add new step
            jsonObj['build_order'].push(newStepJson);
        }

        // store previous resources
        previousResources = newResources;

        // check if age up flag (to use from next step until 'newAge')
        if (getElemSafe(step, 'type', 'noAgeUp') === 'ageUp') {
            ageUpFlag = true;
            newAgeFlag = false;
            newStepAge = true;

            // update current age (starting next step)
            currentAge = updateAge(currentAge, step);
        }

        // new age flag disappears at the end of the step following its rise
        newAgeFlag = false;
    }

    var str = JSON.stringify(jsonObj, null, 4); // JSON to output string

    // save to clipboard
    navigator.clipboard.writeText(htmlDecode(str)).then(function() {
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
}
export default exportForRTSOverlay
