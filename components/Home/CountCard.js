import React from 'react';
import CountAll from "./CountAll";
export function CountCard(props){
    return (
        <div style={styles.dayCountDiv}>

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
        marginTop:10,
    },
    leaveBreak : {
        paddingRight : 280,
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
