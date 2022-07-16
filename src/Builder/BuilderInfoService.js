import * as Constants from '../Constants'
import BuildData from '../Builds/BuildData'
import CivInfoService from '../Uptime/CivInfoService'

class BuilderInfoService {
    static getNumericOptions = () => {
        let numericOptions = []
        for (var i = 1; i <= 20; i++) numericOptions.push({ value: i, label: i })
        return numericOptions
    }

    static getNumericOptionsIncludingUnlimited = () => {
        let options = BuilderInfoService.getNumericOptions()
        options.splice(0, 0, { value: '∞', label: '∞' })
        return options
    }

    static getNumericTradeOptions = () => {
        let numericTradeOptions = []
        for (var i = 100; i <= 1000; i += 100) numericTradeOptions.push({ value: i, label: i })
        return numericTradeOptions
    }

    static getTaskOptions = () => {
        return BuildData.getTaskOptions()
    }

    static getBuildingsOptions = () => {
        return BuildData.getBuildingsOptions()
    }

    static getAgeOptions = () => {
        return BuildData.getAgeOptions()
    }

    static getAnimalOptions = () => {
        return BuildData.getAnimalOptions()
    }

    static getTechOptions = () => {
        return BuildData.getTechOptions()
    }

    static getTrainUnitOptions = () => {
        return BuildData.getTrainUnitOptions()
    }

    static getMarketOptions = () => {
        return BuildData.getMarketOptions()
    }

    static getTradableResourceOptions = () => {
        return BuildData.getTradableResourceOptions()
    }

    static getGoldCollectionOptions = () => {
        return BuildData.getGoldCollectionOptions()
    }

    static getResourceForTask = (task) => {
        if (task === Constants.Task.Sheep || task === Constants.Task.Boar || task === Constants.Task.Berries || task === Constants.Task.Farm || task === Constants.Task.Deer || task === Constants.Task.ShoreFish) {
            return 'food'
        } else if (task === Constants.Task.Wood || task === Constants.Task.StragglerTree) {
            return 'wood'
        } else if (task === Constants.Task.Forward) {
            return 'build'
        } else if (task === Constants.Task.Collect10GoldWithNewVillager || task === Constants.Task.Collect40GoldWithTwoNewVillagers || task === Constants.Task.Collect30GoldWithNewVillager) {
            return 'gold'
        } else {
            return task // standard gold, stone, or build
        }
    }

    static updateBuildResourcesAndUptime = (newBuild, civilization) => {
        let newBuildWithResources = []
        let pop = {}
        let uptime = {}
        let loom = false
        let noMorePopBecauseOfDecision = false
        let resourcesBeforeDecision = null
        let resources = { food: 0, wood: 0, gold: 0, stone: 0, build: 0 }
        newBuild.forEach((step, index) => {
            if (step.type === Constants.StepType.NewVillagers || step.type === Constants.StepType.CollectGold && step.subType === Constants.StepType.NewVillagers) {
                let resource = BuilderInfoService.getResourceForTask(step.task)
                resources[resource] += step.count
            } else if (step.type === Constants.StepType.MoveVillagers || step.type === Constants.StepType.CollectGold && step.subType === Constants.StepType.MoveVillagers) {
                let resource = BuilderInfoService.getResourceForTask(step.from)
                resources[resource] -= step.count
                resource = BuilderInfoService.getResourceForTask(step.to)
                resources[resource] += step.count
            } else if (step.type === Constants.StepType.Decision) {
                // Take only resources into account that we had before the first decision
                if (resourcesBeforeDecision === null) {
                    resourcesBeforeDecision = JSON.parse(JSON.stringify(resources))
                } else {
                    resources = JSON.parse(JSON.stringify(resourcesBeforeDecision))
                }
            } else if (step.type === Constants.StepType.Research) {
                if (step.tech.includes(Constants.Tech.Loom)) {
                    let feudalStep = newBuild.find(step => step.type === Constants.StepType.AgeUp && step.age === Constants.Age.FeudalAge)
                    if (feudalStep !== undefined) {
                        if (newBuild.indexOf(step) < newBuild.indexOf(feudalStep)) {
                            loom = true
                        }
                    }
                }
            } else if (step.type === Constants.StepType.AgeUp) {
                let popAtStep = 0
                Object.keys(resources).forEach((key) => {
                    popAtStep += resources[key]
                })
                if (step.age === Constants.Age.FeudalAge) {
                    if (pop.feudalAge !== undefined || noMorePopBecauseOfDecision === true) {
                        delete pop.feudalAge
                        noMorePopBecauseOfDecision = true
                    } else {
                        popAtStep += 1 // Scout
                        pop.feudalAge = popAtStep
                    }
                    pop.feudalAge = popAtStep
                } else if (step.age === Constants.Age.CastleAge) {
                    if (pop.castleAge !== undefined || noMorePopBecauseOfDecision === true) {
                        delete pop.castleAge
                        noMorePopBecauseOfDecision = true
                    } else {
                        popAtStep -= pop.feudalAge - 1 // Scout
                        pop.castleAge = popAtStep
                    }
                } else if (step.age === Constants.Age.ImperialAge) {
                    if (pop.imperialAge !== undefined || noMorePopBecauseOfDecision === true) {
                        delete pop.imperialAge
                        noMorePopBecauseOfDecision = true
                    } else {
                        popAtStep -= pop.feudalAge - 1 // Scout
                        popAtStep -= pop.castleAge
                        pop.imperialAge = popAtStep
                    }
                }
            }
            let data = JSON.parse(JSON.stringify(step))
            data.resources = JSON.parse(JSON.stringify(resources))
            newBuildWithResources[index] = data
        })

        if (Object.keys(pop).length === 0 && pop.constructor === Object) {
            pop.feudalAge = '?' //If build ends before Feudal or has a decision before feudal
        } else {
            let civ = civilization === undefined ? Constants.Civ.Generic : civilization
            let times = CivInfoService.getUptime(civ, pop.feudalAge, loom, pop.castleAge, pop.imperialAge)
            uptime = { feudalAge: times.feudalAge }
            if (times.castleAge !== undefined && !times.castleAge.includes('NaN')) uptime.castleAge = times.castleAge
            if (times.imperialAge !== undefined && !times.imperialAge.includes('NaN')) uptime.imperialAge = times.imperialAge
        }

        return {
            build: newBuildWithResources,
            pop: pop,
            uptime: uptime
        }
    }

    static checkBuildForCompleteness = (build) => {
        return build.build !== undefined && build.build.length > 0
            && build.title !== undefined && build.title.length > 0 && build.title.toUpperCase() !== 'NEW BUILD'
            && build.description !== undefined && build.description.length > 0
            && build.attributes !== undefined && build.attributes.length > 0
            && build.difficulty !== undefined && build.difficulty !== null && build.difficulty !== ''
            && build.author !== undefined && build.author.length > 0
            && build.image !== undefined && build.image.length > 0
            && build.imageURL !== undefined && build.imageURL !== null
    }

    static checkBuildForNegativeVillagerNumbers = (build) => {
        for (var i = 0; i < build.build.length; i++) {
            for (let res in build.build[i].resources) {
                if (build.build[i].resources[res] < 0) {
                    return false
                }
            }
        }
        return true
    }

    static checkBuildForCorrectUsageOfAgeUp = (build) => {
        for (const [key, value] of Object.entries(build.uptime)) {
            if (value.includes('NaN')) return false
          }
        return true
    }
}

export default BuilderInfoService