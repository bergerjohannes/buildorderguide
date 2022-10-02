import * as Constants from '../Constants'

class BuildData {

    static getBuildAttributes() {
        return [{ value: 'drush', label: 'Drush' }, { value: 'fastFeudal', label: 'Fast Feudal' }, { value: 'fastCastle', label: 'Fast Castle' }, { value: 'fastImperial', label: 'Fast Imperial' }, { value: 'water', label: 'Water/Hybrid' }, { value: 'arena', label: 'Arena' }, { value: 'meme', label: 'Meme' }]
    }

    static getTaskOptions() {
        return [{ value: 'sheep', label: 'Sheep' }, { value: 'wood', label: 'Wood' }, { value: 'stone', label: 'Stone' }, { value: 'gold', label: 'Gold' }, { value: 'berries', label: 'Berries' }, { value: 'boar', label: 'Boar' }, { value: 'stragglerTree', label: 'Straggler Tree' }, { value: 'shoreFish', label: 'Shore Fish' }, { value: 'deer', label: 'Deer' }, { value: 'build', label: 'Build' }, { value: 'farm', label: 'Farm' }, { value: 'forward', label: 'Forward' }, { value: 'foodUnderTC', label: 'Food Under TC' }]
    }

    static getBuildingsOptions() {
        return [{ value: 'folwark', label: 'Folwark' }, { value: 'house', label: 'House' }, { value: 'mill', label: 'Mill' }, { value: 'lumberCamp', label: 'Lumber Camp' }, { value: 'miningCamp', label: 'Mining Camp' }, { value: 'dock', label: 'Dock' }, { value: 'barracks', label: 'Barracks' }, { value: 'market', label: 'Market' }, { value: 'blacksmith', label: 'Blacksmith' }, { value: 'archeryRange', label: 'Range' }, { value: 'stable', label: 'Stable' }, { value: 'watchTower', label: 'Tower' }, { value: 'townCenter', label: 'Town Center' }, { value: 'monastery', label: 'Monastery' }, { value: 'university', label: 'University' }, { value: 'siegeWorkshop', label: 'Siege Workshop' }, { value: 'castle', label: 'Castle' }, { value: 'krepost', label: 'Krepost' }, { value: 'feitoria', label: 'Feitoria' }, { value: 'fishTrap', label: 'Fish Trap' }, { value: 'wall', label: 'Wall' }, { value: 'donjon', label: 'Donjon' }, { value: 'wonder', label: 'Wonder' }, { value: 'caravanserai', label: 'Caravanserai' }]
    }

    static getAgeOptions() {
        return [{ value: 'feudalAge', label: 'Feudal Age' }, { value: 'castleAge', label: 'Castle Age' }, { value: 'imperialAge', label: 'Imperial Age' }]
    }

    static getAnimalOptions() {
        return [{ value: 'boar', label: 'Boar' }, { value: 'deer', label: 'Deer' }]
    }

    static getTechOptions() {
        return [{ value: 'hussiteReforms', label: 'Hussite Reforms' }, { value: 'szlachtaPrivileges', label: 'Szlachta Privileges' }, { value: 'houfnice', label: 'Houfnice' }, { value: 'lightCavalry', label: 'Light Cavalry' }, { value: 'hussar', label: 'Hussar' }, { value: 'wingedHussar', label: 'Winged Hussar' }, { value: 'cavalier', label: 'Cavalier' }, { value: 'paladin', label: 'Paladin' }, { value: 'warGalley', label: 'War Galley' }, { value: 'chemistry', label: 'Chemistry' }, { value: 'doubleBitAxe', label: 'Double-Bit Axe' }, { value: 'horseCollar', label: 'Horse Collar' }, { value: 'loom', label: 'Loom' }, { value: 'wheelbarrow', label: 'Wheelbarrow' }, { value: 'handCart', label: 'Hand Cart' }, { value: 'bowSaw', label: 'Bow Saw' }, { value: 'TwoManSaw', label: 'Two-Man Saw' }, { value: 'heavyPlow', label: 'Heavy Plow' }, { value: 'cropRotation', label: 'Crop Rotation' }, { value: 'goldMining', label: 'Gold Mining' }, { value: 'goldShaftMining', label: 'Gold Shaft Mining' }, { value: 'stoneMining', label: 'Stone Mining' }, { value: 'stoneShaftMining', label: 'Stone Shaft Mining' }, { value: 'gillnets', label: 'Gillnets' }, { value: 'fletching', label: 'Fletching' }, { value: 'bodkinArrow', label: 'Bodkin Arrow' }, { value: 'bracer', label: 'Bracer' }, { value: 'paddedArcherArmor', label: 'Padded Archer Armor' }, { value: 'leatherArcherArmor', label: 'Leather Archer Armor' }, { value: 'ringArcherArmor', label: 'Ring Archer Armor' }, { value: 'ballistics', label: 'Ballistics' }, { value: 'thumbRing', label: 'Thumb Ring' }, { value: 'parthianTactics', label: 'Parthian Tactics' }, { value: 'supplies', label: 'Supplies' }, { value: 'forging', label: 'Forging' }, { value: 'ironCasting', label: 'Iron Casting' }, { value: 'blastFurnace', label: 'Blast Furnace' }, { value: 'scaleMailArmor', label: 'Scale Mail Armor' }, { value: 'chainMailArmor', label: 'Chain Mail Armor' }, { value: 'plateMailArmor', label: 'Plate Mail Armor' }, { value: 'bloodlines', label: 'Bloodlines' }, { value: 'husbandry', label: 'Husbandry' }, { value: 'scaleBardingArmor', label: 'Scale Barding Armor' }, { value: 'chainBardingArmor', label: 'Chain Barding Armor' }, { value: 'plateBardingArmor', label: 'Plate Barding Armor' }, { value: 'townWatch', label: 'Town Watch' }, { value: 'townPatrol', label: 'Town Patrol' }, { value: 'careening', label: 'Careening' }, { value: 'dryDock', label: 'Dry Dock' }, { value: 'shipwright', label: 'Shipwright' }, { value: 'manAtArms', label: 'Man-at-Arms' }, { value: 'crossbowman', label: 'Crossbowman' }, { value: 'pikeman', label: 'Pikeman' }, { value: 'redemption', label: 'Redemption' }, { value: 'eagleWarrior', label: 'Eagle Warrior' }, { value: 'firstCrusade', label: 'First Crusade' }, { value: 'arson', label: 'Arson' }, { value: 'siegeElephant', label: 'Siege Elephant' }, { value: 'imperialSkirmisher', label: 'Imperial Skirmisher' }, { value: 'heavyCamelRider', label: 'Heavy Camel Rider' }, { value: 'imperialCamelRider', label: 'Imperial Camel Rider' }, { value: 'grandTrunkRoad', label: 'Grand Trunk Road' }, { value: 'shatagni', label: 'Shatagni' }, { value: 'paiks', label: 'Paiks' }, { value: 'mahayana', label: 'Mahayana' }, { value: 'medicalCorps', label: 'Medical Corps' }, { value: 'wootzSteel ', label: 'Wootz Steel' }, { value: 'kshatriyas ', label: 'Kshatriyas ' }, { value: 'frontierGuards ', label: 'Frontier Guards' }]
    }

    static getTrainUnitOptions() {
        return [{ value: 'hussiteWagon', label: 'Hussite Wagon' }, { value: 'obuch', label: 'Obuch' }, { value: 'petard', label: 'Petard' }, { value: 'bombardCannon', label: 'Bombard Cannon' }, { value: 'handCannoneer', label: 'Hand Cannoneer' }, { value: 'militia', label: 'Militia' }, { value: 'scout', label: 'Scout' }, { value: 'archer', label: 'Archer' }, { value: 'skirmisher', label: 'Skirmisher' }, { value: 'spearman', label: 'Spearman' }, { value: 'eagleScout', label: 'Eagle Scout' }, { value: 'knight', label: 'Knight' }, { value: 'battleElephant', label: 'Battle Elephant' }, { value: 'batteringRam', label: 'Battering Ram' }, { value: 'scorpion', label: 'Scorpion' }, { value: 'mangonel', label: 'Mangonel' }, { value: 'siegeTower', label: 'Siege Tower' }, { value: 'monk', label: 'Monk' }, { value: 'fishingShip', label: 'Fishing Ship' }, { value: 'galley', label: 'Galley' }, { value: 'fireGalley', label: 'Fire Galley' }, { value: 'serjeant', label: 'Serjeant' }, { value: 'longboat', label: 'Longboat' }, { value: 'coustillier', label: 'Coustillier' }, { value: 'flemishMilitia', label: 'Flemish Militia' }, { value: 'flamingCamel', label: 'Flaming Camel' }, { value: 'condottiero', label: 'Condottiero' }, { value: 'elephantArcher', label: 'Elephant Archer' }, { value: 'armoredElephant', label: 'Armored Elephant' }, { value: 'ghulam', label: 'Ghulam' }, { value: 'camelScout', label: 'Camel Scout' }, { value: 'ratha', label: 'Ratha' }, { value: 'thirisadai', label: 'Thirisadai' }, { value: 'urumiSwordsman', label: 'Urumi Swordsman' }, { value: 'chakramThrower', label: 'Chakram Thrower' }, { value: 'shrivamshaRider', label: 'Shrivamsha Rider' }]
    }

    static getMarketOptions() {
        return [{ value: 'buy', label: 'Buy' }, { value: 'sell', label: 'Sell' }]
    }

    static getTradableResourceOptions() {
        return [{ value: 'wood', label: 'Wood' }, { value: 'stone', label: 'Stone' }, { value: 'food', label: 'Food' }]
    }

    static getGoldCollectionOptions() {
        return [{ value: 'collect10GoldWithNewVillager', label: '1 Collects 10 Gold' }, { value: 'collect40GoldWithTwoNewVillagers', label: '2 Collect 40 Gold' }, { value: 'collect30GoldWithNewVillager', label: '1 Collects 30 Gold' }, { value: 'collect10GoldAfterBarracksIsBuilt', label: 'Collect 10 Gold After Barracks Is Built' }]
    }

    static getTitleForStep(step) {
        if (step.type === Constants.StepType.NewAge) BuildData.currentGroup = null

        let title = ''
        if (step.type === Constants.StepType.Custom) {
            title += step.text
        }
        else if (step.type === Constants.StepType.Decision) {
            title += 'Choice'
        } else if (step.type === Constants.StepType.NewVillagers) {
            if (step.task === Constants.Task.Build) {
                title += step.count + ' Build'
                if (step.count === 1) title += 's'
                title += ' '
                if (step.buildings !== undefined) title += BuildData.getBuildingsText(step)
            } else {
                if (step.buildings !== undefined) title += BuildData.getBuildingsText(step)
                if (step.task === Constants.Task.Boar) {
                    title += '1 Lures Boar'
                    if (step.count > 1) title += ' + ' + (step.count - 1) + ' More on Boar'
                } else {
                    title += step.count + ' on ' + BuildData.getTaskOptions().filter(x => x.value === step.task)[0].label
                    if (step.task === Constants.Task.StragglerTree) title += 's'
                    if (step.task === Constants.Task.Farm && step.count > 1) title += 's'
                }
            }
        } else if (step.type === Constants.StepType.MoveVillagers) {
            if (step.to === Constants.Task.Farm) {
                title += 'Seed ' + step.count + ' Farm'
                if (step.count > 1) title += 's'
                if (step.from !== Constants.Task.Sheep && step.from !== Constants.Task.Boar) {
                    title += ' with '
                    if (step.count === 1) title += 'a '
                    if (step.from === Constants.Task.Berries) title += 'Forager'
                    else if (step.from === Constants.Task.Wood) title += 'Lumberjack'
                    else if (step.from === Constants.Task.Forward) title += 'Forward Villager'
                    else if (step.from === Constants.Task.StragglerTree || step.from === Constants.Task.FoodUnderTC) title += 'Villager'
                    else if (step.from === Constants.Task.ShoreFish) title += 'Fisher'
                    else if (step.from === Constants.Task.Deer) title += 'Hunter'
                    else if (step.from === Constants.Task.Build) title += 'Builder'
                    else if (step.from === Constants.Task.Gold) title += 'Gold Miner'
                    else if (step.from === Constants.Task.Stone) title += 'Stone Miner'
                    if (step.count > 1) title += 's'
                    if (step.from === Constants.Task.StragglerTree) title += ' on Straggler Trees'
                    else if (step.from === Constants.Task.FoodUnderTC) title += 'under TC'
                }
            } else {
                let from = BuildData.getTaskOptions().filter(x => x.value === step.from)[0].label
                let to = BuildData.getTaskOptions().filter(x => x.value === step.to)[0].label
                if (from === 'Build') {
                    from += 'er'
                    if (step.count > 1) from += 's'
                }
                if (to === 'Build') {
                    to += 'er'
                    if (step.count > 1) to += 's'
                }
                title += step.count + ' ' + from + ' → ' + step.count + ' ' + to
                if (step.buildings !== undefined && step.buildings.length > 0) title += ' + ' + BuildData.getBuildingsText(step)
            }
        } else if (step.type === Constants.StepType.AgeUp || step.type === Constants.StepType.NewAge) {
            title = ' '
            if (step.type === Constants.StepType.AgeUp) title += 'Research '
            if (step.age === Constants.Age.FeudalAge) {
                title += (step.loom !== undefined && step.loom === true) ? 'Loom + ' : ''
                title += (step.resources.food + step.resources.wood + step.resources.stone + step.resources.gold + step.resources.build + 1) + ' Pop '
            }
            title += BuildData.getAgeText(step.age)
            if (step.type === Constants.StepType.NewAge) title = title.toUpperCase()
        } else if (step.type === Constants.StepType.Lure) {
            if (step.animal === Constants.Task.Boar) {
                title += 'Lure Boar With Villager Under TC'
            } else if (step.animal === Constants.Task.Deer) {
                title += 'Push ' + step.count + ' Deer'
            }
        } else if (step.type === Constants.StepType.Build) {
            title += BuildData.getBuildingsText(step)
        } else if (step.type === Constants.StepType.Research) {
            title += BuildData.getResearchText(step)
        } else if (step.type === Constants.StepType.TrainUnit) {
            if (step.count === '∞') {
                title += 'Start Training ' + BuildData.getTrainUnitOptions().filter(x => x.value === step.unit)[0].label
            } else {
                title += 'Train ' + step.count + ' ' + BuildData.getTrainUnitOptions().filter(x => x.value === step.unit)[0].label
            }
            if (step.count > 1 || step.count === '∞') {
                if (step.unit.substring(step.unit.length - 3) === 'man') {
                    title = title.substring(0, title.length - 3) + 'men'
                } else {
                    title += 's'
                }
            }
        } else if (step.type === Constants.StepType.CollectGold) {
            title += BuildData.getGoldCollectionOptions().filter(x => x.value === step.task)[0].label
        } else if (step.type === Constants.StepType.Trade) {
            if (step.action === Constants.Action.Sell) {
                title += 'Sell '
            } else if (step.action === Constants.Action.Buy) {
                title += 'Buy '
            }
            title += step.count + ' ' + step.resource.charAt(0).toUpperCase() + step.resource.slice(1)
        }

        return title
    }

    static getBuildingsText(step) {
        if (step.buildings.length === 2 && ((step.buildings[0].type === Constants.Building.House && step.buildings[0].count > 1 && step.buildings[1].type === Constants.Building.Dock) || (step.buildings[1].type === Constants.Building.House && step.buildings[1].count > 1 && step.buildings[0].type === Constants.Building.Dock))) {
            // Cover special house + dock + house order for hybrid builds
            const housesStep = step.buildings.find(building => building.type === Constants.Building.House)
            if (housesStep.count > 2) return 'House + Dock + ' + (housesStep.count - 1) + ' Houses'
            return 'House + Dock + House'
        }
        let title = ''
        step.buildings.forEach((building, index) => {
            if (building.count > 1) title += building.count + ' '
            title += BuildData.getBuildingsOptions().filter(x => x.value === building.type)[0].label
            if (building.count > 1 && building.type !== Constants.Building.Barracks) title += 's'
            if (index < step.buildings.length - 1 || (step.type === Constants.StepType.NewVillagers && step.task !== Constants.Task.Build)) title += ' + '
        })
        return title
    }

    static getResearchText(step) {
        let title = 'Research '
        step.tech.forEach((tech, index) => {
            title += BuildData.getTechOptions().filter(x => x.value === tech)[0].label
            if (index < step.tech.length - 1) title += ' + '
        })
        return title
    }

    static getAgeText(age) {
        if (age === Constants.Age.DarkAge) return 'Dark Age'
        if (age === Constants.Age.FeudalAge) return 'Feudal Age'
        if (age === Constants.Age.CastleAge) return 'Castle Age'
        if (age === Constants.Age.ImperialAge) return 'Imperial Age'
    }

    static showBuilderInBuild(build) {
        const stepsWithRes = build.filter(step => step.resources.build !== 0)
        return stepsWithRes.length > 0
    }

    static showGoldInBuild(build) {
        const stepsWithRes = build.filter(step => step.resources.gold !== 0)
        return stepsWithRes.length > 0
    }

    static showStoneInBuild(build) {
        const stepsWithRes = build.filter(step => step.resources.stone !== 0)
        return stepsWithRes.length > 0
    }

    static getNavigationText(step, build) {
        const decisionSteps = BuildData.getIndicesOfChoicesForBuild(build)
        let startingPoint = 0
        for (let decision in decisionSteps) {
            if (step <= decisionSteps[decision]) {
                // In first decision tree
                if (startingPoint === 0) return `${step - startingPoint + 1}/${decisionSteps[decision] - startingPoint + 1}`
                // In a decision tree in the middle
                return `${step - startingPoint + 1}/${decisionSteps[decision] - startingPoint}`
            }
            startingPoint = decisionSteps[decision] + 1
        }

        // In last decision tree
        if (decisionSteps !== undefined) return `${step - startingPoint + 1}/${build.length - startingPoint}`

        // No decisions in build -> simple navigation text
        return `${step + 1}/${build.length}`
    }

    static getIndicesOfChoicesForBuild(build) {
        let b = JSON.parse(JSON.stringify(build))
        b.forEach((item, index) => item.step = index)
        return b.filter(item => item.type === Constants.StepType.Decision).map(item => item.step)
    }

    static getListOfChoicesForBuild(build) {
        let b = JSON.parse(JSON.stringify(build))
        b.forEach((item, index) => item.step = index)
        return b.filter(step => step.type === Constants.StepType.Decision)
    }

    static getShortTitleForDecisionStep(title) {
        if (title.includes('→')) return '→ ' + title.split('→')[1]
        if (title.includes('+')) return '+ ' + title.split('+')[1]
    }

    static getDemoBuildForUser(userId) {
        const steps = [
            {
                type: Constants.StepType.NewVillagers,
                task: Constants.Task.Sheep,
                count: 6,
                buildings: [
                    {
                        type: Constants.Building.House,
                        count: 2
                    }
                ],
                resources: {
                    food: 6,
                    wood: 0,
                    stone: 0,
                    gold: 0,
                    build: 0
                }
            },
            {
                type: Constants.StepType.NewVillagers,
                task: Constants.Task.Wood,
                count: 3,
                resources: {
                    food: 6,
                    wood: 3,
                    stone: 0,
                    gold: 0,
                    build: 0
                }
            },
            {
                type: Constants.StepType.NewVillagers,
                task: Constants.Task.Boar,
                count: 1,
                resources: {
                    food: 7,
                    wood: 3,
                    stone: 0,
                    gold: 0,
                    build: 0
                }
            },
            {
                type: Constants.StepType.NewVillagers,
                task: Constants.Task.Berries,
                count: 4,
                buildings: [
                    {
                        type: Constants.Building.House,
                        count: 2
                    }, {
                        type: Constants.Building.Mill,
                        count: 1
                    }
                ],
                resources: {
                    food: 11,
                    wood: 3,
                    stone: 0,
                    gold: 0,
                    build: 0
                }
            },
            {
                type: Constants.StepType.Lure,
                animal: Constants.Animal.Boar,
                resources: {
                    food: 14,
                    wood: 3,
                    stone: 0,
                    gold: 0,
                    build: 0
                }
            },
            {
                type: Constants.StepType.NewVillagers,
                task: Constants.Task.Berries,
                count: 3,
                buildings: [
                    {
                        type: Constants.Building.LumberCamp,
                        count: 1
                    }
                ],
                resources: {
                    food: 14,
                    wood: 6,
                    stone: 0,
                    gold: 0,
                    build: 0
                }
            },
            {
                type: Constants.StepType.Research,
                tech: [Constants.Tech.Loom],
                resources: {
                    food: 14,
                    wood: 6,
                    stone: 0,
                    gold: 0,
                    build: 0
                }
            },
            {
                type: Constants.StepType.AgeUp,
                age: Constants.Age.FeudalAge,
                resources: {
                    food: 14,
                    wood: 6,
                    stone: 0,
                    gold: 0,
                    build: 0
                }
            },
            {
                type: Constants.StepType.MoveVillagers,
                from: Constants.Task.Sheep,
                to: Constants.Task.Wood,
                count: 4,
                resources: {
                    food: 10,
                    wood: 10,
                    stone: 0,
                    gold: 0,
                    build: 0
                }
            },
            {
                type: Constants.StepType.Build,
                buildings: [
                    {
                        type: Constants.Building.Barracks,
                        count: 1
                    }
                ],
                resources: {
                    food: 10,
                    wood: 10,
                    stone: 0,
                    gold: 0,
                    build: 0
                }
            },
            {
                type: Constants.StepType.NewAge,
                age: Constants.Age.FeudalAge,
                resources: {
                    food: 14,
                    wood: 6,
                    stone: 0,
                    gold: 0,
                    build: 0
                }
            },
            {
                type: Constants.StepType.Research,
                tech: [Constants.Tech.DoubleBitAxe, Constants.Tech.HorseCollar],
                resources: {
                    food: 10,
                    wood: 10,
                    stone: 0,
                    gold: 0,
                    build: 0
                }
            },
            {
                type: Constants.StepType.Build,
                buildings: [
                    {
                        type: Constants.Building.Stable,
                        count: 1
                    }
                ],
                resources: {
                    food: 10,
                    wood: 10,
                    stone: 0,
                    gold: 0,
                    build: 0
                }
            },
            {
                type: Constants.StepType.TrainUnit,
                unit: Constants.Unit.Scout,
                count: 3,
                resources: {
                    food: 10,
                    wood: 10,
                    stone: 0,
                    gold: 0,
                    build: 0
                }
            }
        ]

        const data = {
            title: 'New Build',
            civilization: Constants.Civ.Generic,
            publisher: userId,
            status: Constants.PublishStatus.Draft,
            build: steps,
            pop: { 'feudalAge': 21 },
            uptime: { 'feudalAge': '09:40' }
        }

        return data
    }
}

export default BuildData