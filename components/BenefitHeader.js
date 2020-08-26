import React from 'react';

export function BenefitHeader(props) {
    return(
        <div>
            <img style ={styles.logo} src={props.logo} alt="로고"/>
            <p style={styles.cardName}>{props.cardName}</p>
            <p style={styles.recentUpdateDate}>업데이트 : {props.recentUpdateDate}</p>
        </div>
    );
}

const styles = {
    logo : {
        width : 100,
        display : 'block',
        margin : '30px auto 30px auto',
    },
    cardName : {
        fontFamily: 'SpoqaHanSans',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 24,
        color : '#333333',
        textAlign : 'center',
        margin : '0 auto 0 auto',
    },
    recentUpdateDate : {
        margin: '5px auto 0 auto',
        fontFamily: 'SpoqaHanSans',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 11,
        color : '#737373',
        textAlign : 'center',
    },
}