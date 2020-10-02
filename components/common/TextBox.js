import React from 'react';

export function TextBox(props) {
    return (
        <div style={styles.box}>
            {props.text}
            <a style={styles.link}>{props.link}</a>
        </div>
    );
}
const styles = {
    box : {
        width : '100%',
        height : 36,
        fontSize : 10,
        textAlign :'center',
        color : '#000000',
        letterSpacing : '0.1em',
        marginLeft : 70,
    },
    link : {
        textDecoration : 'underline',
        color : '#1D5F9C',
    }
}
