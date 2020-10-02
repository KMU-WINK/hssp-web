import React from 'react';

export function BenefitCard(props) {
    return(
        <div style={styles.card}>
            <div style={styles.imgbox}>
                <img style={styles.img} src={props.logo} alt="로고"/>
            </div>
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
    imgbox : {
        position:'absolute',
        maxWidth: 65,
        Height : 50,
        display : 'inline',
        textAlign :'center',
        lineHeight : '50px',
    },
    img : {
        position : 'relative',
        maxWidth : '100%',
        maxHeight: '100%',
        width : 'auto',
        height :60,
        margin : 'auto',
        verticalAlign : 'middle',
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