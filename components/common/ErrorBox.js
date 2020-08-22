import React from 'react';

export function ErrorBox(props) {
    return (
        <div style={styles.box}>
            <h1 style={styles.title}>{props.title}</h1>
            <p style={styles.text}>{props.text}</p>
        </div>
    );
}
const styles = {
    box : {
        background:'#FF8585',
        height : 108,
        width : '100%',
        textAlign : 'center',
    },
    title : {
        paddingTop : 10,
        fontWeight : 'bold',
        letterSpacing : '0.24em',
        color : '#FFFFFF',
        fontSize : 26,
    },
    text : {
        fontWeight : 'bold',
        letterSpacing : '0.24em',
        color : '#FFFFFF',
        fontSize : 16,
    }
}
