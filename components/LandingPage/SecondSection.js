import React from 'react';
import {colorSet} from '../../lib/ColorSet';


export function SecondSection() {
    return (
        <div style={{backgroundColor: "#E9E8E8"}}>
            <img src='../../assets/landingPage/DiscountImg.png'/>
            <div style={styles.discountIntro}>
                <p style={styles.discountIntroTop}>당신을 위한 <b>다양한 혜택</b>을</p>
                <p style={styles.discountIntroTop}>놓치지 마세요</p>
                <p style={styles.discountIntroBottom}>한 눈에 모아서
                    최신 소식을
                    빠르게 정리해
                    드릴게요</p>
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
    }

}