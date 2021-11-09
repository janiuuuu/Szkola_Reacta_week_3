import React from 'react';
import Header from './Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV} from '@fortawesome/free-solid-svg-icons'
import Image from './Image';
import ShortDescription from './ShortDescription';
import ShowMore from './ShowMore';

const Card = ({ title, intro }) =>{
    const ellipsis = <FontAwesomeIcon icon={faEllipsisV} />
    const main = {
        position:'relative',
        width:345,
        minWidth:315,
        height: "auto",
        border: '1px solid #000',
        backgroundColor: '#ecf0f1',
        marginRight: 3

    };
    return(
        <div style={main}>
            <Header icon= {ellipsis}/>
            <Image/>
            <ShortDescription/>
            <ShowMore />
        </div>
    );
}

export default Card;