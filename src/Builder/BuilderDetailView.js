import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DatabaseService from '../DatabaseService'
import BuildView from '../Builds/BuildView'
import Menu from '../UI/Menu'
import BuilderBuildCreationView from './BuilderBuildCreationView'
import * as Constants from '../Constants'
import BuilderDetailInfoSection from './BuilderDetailInfoSection'
import PublishIndicator from './PublishIndicator'
import LinkView from './LinkView'
import BuilderInfoService from './BuilderInfoService'
import { pickBy, identity } from 'lodash'
import CenteredButton from '../UI/CenteredButton'
import Heading1 from '../UI/Heading1'

const BuilderDetailView = (props) => {

    let { buildId } = useParams()
    const [build, setBuild] = useState(undefined)
    const [title, setTitle] = useState(undefined)
    const [author, setAuthor] = useState(undefined)
    const [description, setDescription] = useState(undefined)
    const [difficulty, setDifficulty] = useState(undefined)
    const [attributes, setAttributes] = useState(undefined)
    const [civilization, setCivilization] = useState(undefined)
    const [image, setImage] = useState(undefined)
    const [imgURL, setImgURL] = useState(undefined)
    const [reference, setReference] = useState(undefined)
    const [availableImages, setAvailableImages] = useState([])
    const [status, setStatus] = useState(undefined)
    const [pop, setPop] = useState(undefined)
    const [uptime, setUptime] = useState(undefined)
    const [imageURL, setImageURL] = useState(undefined)
    const [publisher, setPublisher] = useState(undefined)
    const [shouldSave, setShouldSave] = useState(false)

    useEffect(() => {
        if (buildId === undefined) return

        DatabaseService.loadBuildWithId(buildId).then(b => {
            setBuild(b)
            setTitle(b.title)
            setAuthor(b.author)
            setDescription(b.description)
            setCivilization(b.civilization)
            setDifficulty(b.difficulty)
            setAttributes(b.attributes)
            setImage(b.image)
            setImageURL(b.imageURL)
            setReference(b.reference)
            setPop(b.pop)
            setPublisher(b.publisher)
            setUptime(b.uptime)
            setStatus(b.status)
            setShouldSave(false)
        })

        DatabaseService.getListOfAllAvailableImages().then(images => {
            setAvailableImages(images.map(image => ({ value: image, label: image })))
        }, (error) => {
            console.log(error)
        })
    }, [buildId])

    useEffect(() => {
        let newStatus = status
        if (shouldSave) newStatus = newStatus === Constants.PublishStatus.Draft ? Constants.PublishStatus.Draft : Constants.PublishStatus.Changed
        setStatus(newStatus)
        setShouldSave(true)
        save()
    }, [build, title, author, description, difficulty, attributes, civilization, image, reference, pop, uptime])

    const addStep = (step) => {
        let newBuild = JSON.parse(JSON.stringify(build.build))
        newBuild.push(step)
        updateBuildResourcesAndUptime(newBuild)
    }

    const removeStep = (index) => {
        let newBuild = JSON.parse(JSON.stringify(build.build))
        newBuild = newBuild.filter((item, i) => (i !== index))
        updateBuildResourcesAndUptime(newBuild)
    }

    const updateStep = (index, step) => {
        let newBuild = JSON.parse(JSON.stringify(build.build))
        newBuild[index] = step
        updateBuildResourcesAndUptime(newBuild)
    }

    const updateBuildResourcesAndUptime = (newBuild) => {
        const info = BuilderInfoService.updateBuildResourcesAndUptime(newBuild, civilization)

        build.build = info.build
        setPop(info.pop)
        setUptime(info.uptime)
        setShouldSave(true)
    }

    const getBuildObject = () => {
        if (build === undefined) return undefined

        let object = {
            id: buildId,
            build: JSON.parse(JSON.stringify(build.build)),
            title: title,
            description: description,
            civilization: civilization,
            attributes: attributes,
            difficulty: difficulty,
            author: author,
            reference: reference,
            pop: pop,
            uptime: uptime,
            image: image,
            imageURL: imageURL,
            status: status,
            publisher: publisher
        }
        return pickBy(object, identity)
    }

    const save = () => {
        if (getBuildObject() !== undefined) {
            try {
                DatabaseService.saveBuildWithId(buildId, getBuildObject())
            } catch (error) {
                console.error(error)
            }
        }
    }

    const publishBuild = () => {
        let build = getBuildObject()

        if (BuilderInfoService.checkBuildForCompleteness(build) === false) {
            alert('Not able to publish: please make sure your build is complete and has a title, a description, attributes, a difficulty, an author, and an image!')
            return
        }

        if (BuilderInfoService.checkBuildForNegativeVillagerNumbers(build) === false) {
            alert('Not able to publish: please make sure your build is valid! Villagers on a resource must not be negative.')
            return
        }

        build.status = Constants.PublishStatus.Published
        try {
            DatabaseService.publishBuildWithId(buildId, getBuildObject()).then(() => {
                DatabaseService.saveBuildWithId(buildId, build).then(() => setStatus(Constants.PublishStatus.Published))
            })
        } catch (error) {
            console.error(error)
        }
    }

    const unpublishBuild = () => {
        let build = getBuildObject()
        build.status = Constants.PublishStatus.Draft
        try {
            DatabaseService.unpublishBuildWithId(buildId).then(() => {
                DatabaseService.saveBuildWithId(buildId, build).then(() => setStatus(Constants.PublishStatus.Draft))
            })
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
            <Menu />
            <Heading1>Build Order Builder</Heading1>
            <BuilderDetailInfoSection title={title} setTitle={setTitle} author={author} setAuthor={setAuthor} description={description} setDescription={setDescription} reference={reference} setReference={setReference} civilization={civilization} setCivilization={setCivilization} attributes={attributes} setAttributes={setAttributes} image={image} setImage={setImage} availableImages={availableImages} setAvailableImages={setAvailableImages} imgURL={imgURL} setImageURL={setImageURL} difficulty={difficulty} setDifficulty={setDifficulty} />
            {build !== undefined && <BuilderBuildCreationView build={build.build} addStep={addStep} updateStep={updateStep} removeStep={removeStep} />}
            {build !== undefined && <BuildView build={build} />}
            {build !== undefined && status !== Constants.PublishStatus.Published && <CenteredButton onClick={() => publishBuild()}>Publish</CenteredButton>}
            {build !== undefined && status === Constants.PublishStatus.Published && <CenteredButton onClick={() => unpublishBuild()}>Unpublish</CenteredButton>}
            <PublishIndicator status={status} />
            <LinkView status={status} buildId={buildId}/>
        </div>
    )
}

export default BuilderDetailView