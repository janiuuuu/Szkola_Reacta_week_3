import React, { useState }  from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareAlt, faHeart, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

const ShowMore = () => {
    const [click, setClicked] = useState(false);
    const style = {
        margin: 10,
        display: 'flex'
    }
    const style2 = {
        marginRight: "auto",
    }
    const styleHeart = {
        marginLeft: 10,
        marginRight: 10
    }
    const heart = <FontAwesomeIcon icon={faHeart}/>
    const share = <FontAwesomeIcon icon={faShareAlt}/>
    return(
        <>
        <div style={style}>
            <div style={styleHeart}>{heart}</div> <div style={style2}>{share}</div> <FontAwesomeIcon onClick={() => setClicked(!click)} icon={click ? faAngleUp : faAngleDown} />
        </div>
            <div>
                {click && <p>
                    Method:<br/>
                    <br/>
                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.<br/><br/>

                    Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.<br/><br/>

                    Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that don’t open.)<br/><br/>

                    Set aside off of the heat to let rest for 10 minutes, and then serve.
                </p>}
            </div>
        </>
    );
}

export default ShowMore;