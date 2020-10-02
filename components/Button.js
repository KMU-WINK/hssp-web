import React from 'react';

export function Button(props){
    return (
        <div style={{margin:10}}>
           <button onClick={props.onClick} style={styles.button}>
               <label style={styles.btext}>{props.buttonname}</label>
           </button>
        </div>
    );
}

const styles = {
    button : {
        width: '100%',
        height: 42,
        left: 20,
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
        left: 20,
        top: 156,
    }
};