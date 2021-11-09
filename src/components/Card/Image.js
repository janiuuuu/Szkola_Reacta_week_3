import React from "react";
import imageDinner from "../../images/image/paella.jpg";
const Image = () => {
    const style = {
        marginTop:20,
    }
    return(
        <div>
            <img style={style} src={imageDinner} alt="zdjecie"></img>
        </div>
    );
}

export default Image;