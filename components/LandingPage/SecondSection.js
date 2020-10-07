import React from 'react';
import Phone from "react-svg-loader!../../assets/landingPage/phone.svg";
// import alarm from "react-svg-loader!../../assets/landingPage/alarmMessage1.svg";
// import alarm2 from "react-svg-loader!../../assets/landingPage/alarmMessage2.svg";

export function SecondSection() {
    return (
        <div style={{backgroundColor: "#E9E8E8"}}>
            <img src='../../assets/landingPage/DiscountImg.png'/>
            <div style={styles.discountIntro}>
                <p style={styles.discountIntroTop}>당신을 위한 <b>다양한 혜택</b>을</p>
                <p style={styles.discountIntroTop}>놓치지 마세요</p>
                <p style={styles.discountIntroBottom}>
                    한 눈에 모아서<br/>
                    최신 소식을<br/>
                    빠르게 정리해<br/>
                    드릴게요</p>
            </div>
            <Phone width={450} height={444} viewBox="0 0 325 330" style={styles.phone}/>
            <div style={styles.alarmDiv}>
                <div style={styles.alarm}/>
                <div style={styles.alarm2}/>
            </div>
        </div>
    );
}
const styles={
    discountIntro:{
        textAlign : 'right',
        fontSize : '36px',
        padding : '107px 111px 0 0',
    },
    discountIntroTop : {
        margin : 0,
    },
    discountIntroBottom :{
        fontSize : '24px',
        margin : '61px, 0 0 0',
    },
    phone : {
        position:"absolute",
        float: 'right',
        display: 'block',
        right: 73,
    },
    alarmDiv :{
        float: 'right',
        position : 'relative',
        display : 'flex',
        flexFlow: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width : '372px',
        height : '260px',
        backgroundColor:'#fff',
        top: '133px',
        right: '113px',
        overflow : 'hidden',
    },
    alarm :{
        background :'#000',
        width: '359px',
        height : '112px',
        marginBottom : '14px',
    },
    alarm2 :{
        background :'#000',
        width: '359px',
        height : '112px',
    },
};