import React from 'react';

export function MenuCard(props){
    return (
        <div>
            <div style={styles.h1}>
                {props.name}
            </div>
            <div style={styles.h3}>
                {props.calory}kcal
            </div>
            <div>
                <ul style={styles.ul}>
                    {
                        props.todayMenu.map(one => <li>{one}</li>)
                    }
                </ul>
                <ul style ={styles.ul1}>
                    <li>단백질 {props.protein}g</li>
                    <li>지방 {props.fat}g</li>
                    <li>탄수화물 {props.calbohydrate}g</li>
                </ul>
            </div>
        </div>
    );
}

const styles = {
    h1 : {
        color:'#52CB64',
        paddingBottom:15,
        fontSize:24,
        fontWeight: 'bold',
        letterSpacing:'0.14em',
        display:'inline-block',
    },
    h3 : {
        paddingLeft: 140,
        display:'inline-block',
        fontSize: 18,
        fontStyle:'normal',
        fontWeight:'normal',
    },
    ul : {
        display:'inline-block',
        listStyle: 'none',
        verticalAlign:'bottom',
        fontSize:18,
        fontStyle:'normal',
        fontWeight:'normal',
        lineHeight: 1.5,
    },
    ul1 : {
        paddingLeft: 42,
        display:'inline-block',
        textAlign:'right',
        listStyle:'none',
    },
};
