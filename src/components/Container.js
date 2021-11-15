import react from 'react';
import Card from './Card'

const Container = ({list}) => {
    if({list}) {
        return (
            <ul>
                {
                list.map((item, key) => {
                    return (
                        <li>
                            <Card response={item} index={key}/>
                        </li>
                    )
                })
            }
            </ul>
        )
    } else {
        return "";
    };
};

export default Container;