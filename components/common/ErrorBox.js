import React from 'react';

export function ErrorBox(props) {
    React.useEffect(() => {
        setTimeout(() => { // 3초 뒤 창을 닫음
            props.setText('');
        }, 3000);
    });


    return (
        <div style={{...styles.box, ...(props.text) ? styles.boxVisible : {}}}>
            <h1 style={styles.title}>{props.title}</h1>
            <p style={styles.text}>{props.text}</p>
        </div>
    );
}
const styles = {
    box : {
        position:'fixed',
        top:0,
        left:0,
        zIndex:99,
        background:'#FF8585',
        height : 108,
        width : '100%',
        textAlign : 'center',
        visibility: 'hidden',
        opacity: 0,
        transition:'.5s',
    },

    boxVisible: {
        visibility: 'visible',
        opacity: 1,
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
        wordWrap : 'break-word',
    }
}
