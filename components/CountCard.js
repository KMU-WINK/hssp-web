import React from 'react';

export function CountCard(props){
    return (
        <div style={styles.dayCountDiv}>
            <div>
                <div style={styles.dayCount}>
                    {props.hundred}
                </div>
                <div style={styles.dayCount}>
                    {props.ten}
                </div>
                <div style={styles.dayCount}>
                    {props.one}
                </div>
                <div style={styles.inlineBlock}>
                    일
                </div>
            </div>
            <div>
                <div style={styles.time}>
                    {props.min1}
                </div>
                <div style={styles.time}>
                    {props.min2}
                </div>
                <div style={styles.comma}>
                    :
                </div>
                <div style={styles.time}>
                    {props.min3}
                </div>
                <div style={styles.time}>
                    {props.min4}
                </div>
                <div style={styles.sec}>

                </div>
            </div>
        </div>
    );
}

const styles = {
    dayCountDiv : {
        textAlign : 'center',
    },
    dayCount : {
        display : 'inline-block',
        backgroundColor : '#6DB724',
        borderRadius : 8,
        width : 40,
        height : 50,
        textAlign : 'center',
        // fontStyle : 'italic',
        fontWight : 'normal',
        fontSize : '34px',
        latterSpacing : '0.24em',
        color : '#FFFFFF',
        textShadow : '1px 1px 0px rgba(0, 0, 0, 0.15)',
        margin : 5,
        padding : '5px',
    },
    inlineBlock : {
        display : 'inline-block',
        verticalAlign : 'bottom',
        paddingBottom : 5,
        fontStyle : 'normal',
        fontWeight : 'bold',
        color : '#333333',
    },
    time : {
        width : 20,
        height : 25,
        color : '#FFFFFF',
        display : 'inline-block',
        backgroundColor : '#6DB724',
        borderRadius : 4,
        textAlign : 'center',
        // fontStyle : 'italic',
        fontWight : 'normal',
        textShadow : '1px 1px 0px rgba(0, 0, 0, 0.15)',

    },
    comma : {
        display : 'inline-block',
        // fontStyle: 'italic',
        fontWeight: 'normal',
        fontSize : 24,
        textAlign : 'center',
        color : '#6DB724',
    },
    sec : {
    },
};
