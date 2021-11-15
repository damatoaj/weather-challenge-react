import react, {useEffect, useState} from 'react'
import Header from './Header';
import Icon from './Icon';
import High from './High';
import Low from './Low';

export default function Card ({response, index}) {
    console.log(index, response)
    const [first, setFirst] = useState(false);
    useEffect(() => {
        if(index === 0) {
            setFirst(true);
            console.log(first)
        }
    },[])

    return (
        <div className={first ? 'card first' : 'card' }>
            <Header dt_txt={response.dt_txt} />
            <Icon icon={response.weather[0].icon} />
            <div className='temps'>
                <High max={response.main.temp_max} />
                <Low min={response.main.temp_min} />
            </div>
        </div>
    )
}