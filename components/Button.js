import React from 'react';

export function Button(props){
    return (
        <div style={{margin:10}}>
           <button onClick={function() {alert('Click!')}} style={styles.button}>
               <label style={styles.btext}>{props.buttonname}</label>
           </button>
        </div>
    );
}

const styles = {
    button : {
        width: 280,
        height: 42,
        left: 20,
        top: 140,
        backgroundColor:'#64A321',
        borderRadius:35,
        border:'none',
        color:'white',
        margin : 20,
    },
    btext : {
        fontWeight:'bold',
        fontSize: 20,
        alignItems: 'center',
        textAlign: 'center',
        letterSpacing: 0.24,
        left: 20,
        top: 156,
    }
};