import React from 'react';
import {colorSet} from '../../lib/ColorSet'
// import winklogo from "react-svg-loader!../../assets/landingPage/winklogo.svg"
// import dormitorybaby from "react-svg-loader!../../assets/landingPage/dormitorybaby.svg"


export function Landingfooter() {
    return (
        <>
            <div style={styles.footer}>
                <img src='../../assets/landingPage/dormitorybaby.png' alt=""/>
            </div>
            <div>
                <p style={styles.footerp}>생활관 막내는 국민대학교 소프트웨어융합대학 웹 전공 학술동아리<br/><b>윙크</b>에서 제작했습니다.</p>
            </div>

        </>
    );
}
const styles = {
    footer :{
        textAlign:'Center'

    },
    footerp:{
        position:'absolute',
        bottom:0,
        left:'20%',
        fontSize: 32,
        LineHeight:47.36,
        textAlign:'Center',




    }
}