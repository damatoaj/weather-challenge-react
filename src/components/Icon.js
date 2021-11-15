import react from 'react'

export default function Icon({icon}) {
    return(
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}></img>
    )
}