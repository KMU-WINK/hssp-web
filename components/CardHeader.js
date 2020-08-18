import React from 'react';

export function CardHeader(props){
    return (
        <div style={styles.header}>
            <div style={styles.name}>
                {props.name}
            </div>
            <div style={styles.settingBtn}>
                {props.settingBtn}
            </div>
        </div>
    );
}

const styles = {
    header : {
        width : 310,
        margin : 20,
    },
    name : {
        display : 'inline-block',
        fontStyle : 'normal',
        fontWeight : 'bold',
        fontSize : 24,
        color : '#333333',
    },
    settingBtn : {
        float : 'right',
        display : 'inline-block',
        width : 68,
        height : 20,
        paddingTop : 5,
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize : 10,
        textAlign : 'center',
        letterSpacing : '0.24em',
        marginTop : 5,
        color: '#FFFFFF',
        borderRadius: 8,
        backgroundColor : '#737373',
        textShadow : '1px 1px 0px rgba(0, 0, 0, 0.14)',
    },
};
