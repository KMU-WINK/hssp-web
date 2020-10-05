import React from 'react';

export function Button(props){
    return (
       <button onClick={props.onClick} style={{...styles.button, ...props.style}}>
           <label style={styles.btext}>{props.buttonname}</label>
       </button>
    );
}

const styles = {
    button : {
        width: '100%',
        height: 42,
        backgroundColor:'#64A321',
        borderRadius:35,
        border:'none',
        color:'white',
        margin : 20,
        outline: 'none',
    },
    btext : {
        fontWeight:'bold',
        fontSize: 20,
        alignItems: 'center',
        textAlign: 'center',
        letterSpacing: 5,
    }
};