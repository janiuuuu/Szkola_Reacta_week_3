import React from 'react';
import getHexColor from '../colorPalette';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

    const Button = ({color, bgColor, children}) => {
    const user = <FontAwesomeIcon icon={faUser} />
    const style ={
        border: 0,
        lineHeight: 2.5,
        padding: '0 20',
        fontSize: 20,
        textAlign: 'center',
        color: getHexColor(color),
        textShadow: '1 1 1 #000',
        borderRadius: 10,
        backgroundColor: getHexColor(bgColor)
    };
    return(
        <>
            <button style = {style}>{user} { children }</button>
        </>
    );
}

Button.defaultProps = {
    label: 'Defaul',
    color: 'carrot',
    bgColor:'wisteria'
  };

export default Button;
