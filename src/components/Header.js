import react from 'react';

export default function Header({dt_txt}) {
    let dayNames = [
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thur',
        'Fri',
        'Sat'
    ]
    let date = new Date(dt_txt.slice(0, 10));
    let day = date.getDay();

    return(
        <h1>{dayNames[day]}</h1>
    )
}