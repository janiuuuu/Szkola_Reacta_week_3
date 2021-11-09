import React from "react";

const Header = ({icon}) => {
    const style = {
        position:'absolute',
        top:0,
        left:0,
        backgroundColor: '#e74c3c',
        padding: 16,
        alignItems: 'center',
        height: 20,
        width:20,
        borderRadius:50,
        textAlign: 'center',
        display:'flex',
        float:'left',
        justifyContent: 'center',
        fontSize: 25

    }
    const title = {
        height:'30px',
        width:'220px',
        margin:'0px',
        marginLeft:'70px',
        marginTop: 0,
        marginBottom:0,
        lineHeight: 2
    }
    const date = {
        color: '#d1ccc0',
        fontSize: 16,
        height: 20,
        width:220,
        marginLeft:'70px',
    }
    const iconStyle = {
        position:'absolute',
        top:0,
        right:0,
        height:20,
        width:20,
        borderRadius:50,
        padding: 16,
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: '#ecf0f1',
    }
    return(
        <>
        <div style={style}>R</div>
            <div style={title}>Shrimp and Chorizo Paella</div>
            <div style={date}>September 14, 2016</div>
            <div style= {iconStyle}>{icon}</div>
        </>
    );
}
export default Header;