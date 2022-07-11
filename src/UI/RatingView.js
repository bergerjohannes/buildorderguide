import Star from './Star'

const RatingView = (props) => {
    return (
        <div class='relative'>
            <div class='absolute top-0 right-0 z-10 flex flex-row space-x-0.5 text-sm w-100'>
                <Star color={false} full={true} />
                <Star color={false} full={true} />
                <Star color={false} full={true} />
                <Star color={false} full={true} />
                <Star color={false} full={true} />
            </div>
            {props.rating !== undefined && props.rating > 0 && <div class='absolute top-0 right-0 z-20 flex flex-row space-x-0.5 text-sm w-100'>
                <Star color={true} full={true} />
                <Star color={props.rating > 1.25 ? true : false} full={props.rating > 1.75} />
                <Star color={props.rating > 2.25 ? true : false} full={props.rating > 2.75} />
                <Star color={props.rating > 3.25 ? true : false} full={props.rating > 3.75} />
                <Star color={props.rating > 4.25 ? true : false} full={props.rating > 4.75} />
            </div>}
        </div>
    )
}
export default RatingView