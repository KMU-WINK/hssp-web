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
                    {props.sec}s
                </div>
            </div>
            <div style={styles.mealCount}>
                (식사집합 {props.mealCount}회)
            </div>
            <div style={styles.leaveBreak}>
                남은 출타
            </div>
            <div style={styles.dayDiv}>
                <div style={styles.inlineDiv}>
                    연가 {props.yearBreak}일
                </div>
                <div style={styles.inlineDiv}>
                    외출 {props.oneBreak}일
                </div>
                <div>
                    <div style={styles.inlineDiv}>
                        특별 {props.specialBreak}일
                    </div>
                    <div style={styles.inlineDiv}>
                        외박 {props.twoBreak}박 {props.twoBreak2}일
                    </div>
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
        margin : '0px 4px',
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
        display : 'inline-block',
        textAlign : 'center',
        backgroundColor : '#6DB724',
        color : '#FFFFFF',
        borderRadius : 4,
        width : 110,
        letterSpacing : '0.24em',
        textShadow : '1px 1px 0px rgba(0, 0, 0, 0.25)',
        fontSize : 12,
        padding : 4,
        margin : '24px 0px 15px 14px',
    },
    mealCount : {
        fontSize : 12,
        letterSpacing : '0.24em',
        color : '#333333',
        paddingBottom : 20,
    },
    leaveBreak : {
        paddingRight : 152,
        fontWeight : 'bold',
        letterSpacing : '0.24em',
    },
    dayDiv : {
        margin : 20,
    },
    inlineDiv : {
        width : '50%',
        display : 'inline-block',
        textAlign : 'left',
        fontSize : 12,
        letterSpacing : '0.24em',
    }
};
