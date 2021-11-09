import React from "react";
import getHexColor from '../colorPalette';

const Textarea = ({color, bgColor,borderSize, borderRadius, borderColor}) => {
    const style ={
        borderSize: borderSize,
        borderRadius: borderRadius,
        borderColor: getHexColor(borderColor),
        border: 0,
        lineHeight: 2.5,
        padding: '0 20',
        fontSize: 20,
        textAlign: 'center',
        color: getHexColor(color),
        textShadow: '1 1 1 #000',
        borderWidth: borderSize,
        borderStyle: "solid",
        backgroundColor: getHexColor(bgColor)
    };
    return(
        <>
            <textarea style={style}></textarea>
        </>
    );

}

export default Textarea;