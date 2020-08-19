import React from 'react';

export function BenefitCard(props) {
    return(
        <div style={styles.card}>
            <img style={styles.img} src={props.logo} alt="로고"/>
            <div style={styles.detailDiv}>
                <p style={styles.cardName}>{props.cardName}</p>
                <p style={styles.benefitSummary}>{props.benefitSummary}</p>
            </div>
        </div>
    );
}
const styles = {
    card : {
        height : 50,
        position : 'relative',
    },
    img : {
        position : 'absolute',
        padding : '15px 0 0 5px',
        width : 60,
        display : 'inline',
    },
    detailDiv : {
        position : 'relative',
        padding : '5px 0 0 85px',
    },
    cardName : {
        position : 'relative',
        display : 'inline-block',
        fontFamily: 'SpoqaHanSans',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 12,
        color : '#333333',
        margin : 0,
    },
    benefitSummary : {
        fontFamily: 'SpoqaHanSans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 9,
        color : '#737373',
        margin : '5px 0 0 0',
    },
}