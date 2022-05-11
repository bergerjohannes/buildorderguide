const UptimeIndicator = (props) => {
    return (
        <div class='text-gray-600'>
            {props.uptime !== undefined && props.uptime.feudalAge && <span>FEUDAL: {props.uptime.feudalAge}</span>}
            {props.uptime !== undefined && props.uptime.castleAge && <span> | CASTLE: {props.uptime.castleAge}</span>}
            {props.uptime !== undefined && props.uptime.imperialAge && <span> | IMPERIAL: {props.uptime.imperialAge}</span>}
        </div>
    )
}

export default UptimeIndicator