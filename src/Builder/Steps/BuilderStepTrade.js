import BuilderInfoService from '../BuilderInfoService'
import BuilderSelect from '../UI/BuilderSelect'
import * as Constants from '../../Constants'

const BuilderStepTrade = (props) => {

    const handleClickOnAction = (event) => {
        update(event.value, props.step.count, props.step.resource)
    }

    const handleClickOnCount = (event) => {
        update(props.step.action, event.value, props.step.resource)
    }

    const handleClickOnResource = (event) => {
        update(props.step.action, props.step.count, event.value)
    }

    const update = (action, count, resource) => {
        props.update(props.index, {
            type: Constants.StepType.Trade,
            action: action,
            count: count,
            resource: resource
        })
    }

    return (
        <div class='flex space-x-1'>
            <BuilderSelect selected={props.step.action} options={BuilderInfoService.getMarketOptions()} onChange={handleClickOnAction} />
            <BuilderSelect selected={props.step.count} options={BuilderInfoService.getNumericTradeOptions()} onChange={handleClickOnCount} />
            <BuilderSelect selected={props.step.resource} options={BuilderInfoService.getTradableResourceOptions()} onChange={handleClickOnResource} />
        </div>
    )
}

export default BuilderStepTrade