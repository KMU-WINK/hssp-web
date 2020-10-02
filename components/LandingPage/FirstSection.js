import React from 'react';
import {colorSet} from '../../lib/ColorSet'
import Phone from "react-svg-loader!../../assets/landingPage/phone.svg";

export function FirstSection() {
    return (
        <>
            <div>
                <Phone style={styles.phone}></Phone><img src='../../assets/landingPage/mainPagePNG.png' alt=""/>
                <p style={styles.notGreenBarTopText}>한눈에 보는 <b> 오늘의 식단</b></p>
                <div style={styles.greenBar}>
                    <div style={styles.greenBarText}>
                        <p style={styles.greenBarTextp}>한 끼 <b>영양분석</b>까지</p>
                        <p style={styles.greenBarTextp}><b>실시간</b>으로 줄어드는</p>
                    </div>
                </div>
                <p style={styles.notGreenBarText}>나의 <b>군생활</b></p>
            </div>
        </>
    );
}
const styles = {
    greenBar:{
        margin : '229px 0 0 0',
        width : '100%',
        height : '223px',
        backgroundColor :colorSet.deepGreen2,
        paddingRight : '420px',
    },
    greenBarText :{
        height : '100%',
        color : colorSet.white,
        textAlign: 'right',
        display : 'flex',
        flexDirection : 'column',
        justifyContent: 'space-between',
        paddingRight :'420px',
        fontSize : '36px',
    },
    greenBarTextp :{
        marginTop :'25px',
        marginBottom : '25px',
    },
    notGreenBarTopText:{
        marginTop : '176px',
        float : 'right',
        marginRight : '420px',
    },
    notGreenBarText:{
        position : 'absolute',
        textAlign : 'right',
    },
    phone: {
        float :'right',
        right : 0,
        margin : '39px 73px 0 0',
        filter: 'drop-shadow(0px 4px 45px rgba(0, 0, 0, 0.2))',
        position : 'absolute',
    }
}