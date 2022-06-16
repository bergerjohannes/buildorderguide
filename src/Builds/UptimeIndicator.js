const UptimeIndicator = (props) => {
    return (
        <div class='text-main-dark'>
            {props.uptime !== undefined && props.uptime.feudalAge && <span>FEUDAL: {props.uptime.feudalAge}</span>}
            {props.uptime !== undefined && props.uptime.castleAge && <span> | CASTLE: {props.uptime.castleAge}</span>}
            {props.uptime !== undefined && props.uptime.imperialAge && <span> | IMPERIAL: {props.uptime.imperialAge}</span>}
        </div>
    )
}

export default UptimeIndicator