import React from 'react';

export function MenuCard(props){
    return (
        <div style={styles.container}>
            <div style={styles.menu}>
                <div style={styles.name}>
                    {props.name}
                </div>
                <div style={styles.kcal}>
                    {props.calory}kcal
                </div>
            </div>
            <div style={styles.menu}>
                <div>
                    <ul>
                        {props.todayMenu.map(one => <li style={styles.menuLi}>{one}</li>)}
                    </ul>
                </div>
                <div style={styles.margintop}>
                    <ul>
                        <li style={styles.li}>
                            <div style={styles.div}>단백질</div><div style={styles.div}>{props.protein}g</div>
                        </li>
                        <li style={styles.li}>
                            <div style={styles.div}>탄수화물</div><div style={styles.div}>{props.carbohydrate}g</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

const styles = {
    container : {
        display:'flex',
        flexDirection:'column',
        justifyContent: 'space-between',
    },
    menu : {
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
    },
    name : {
        color:'#52CB64',
        fontSize:24,
        fontWeight: 'bold',
        letterSpacing:'0.14em',
    },
    kcal : {
        fontSize: 18,
        fontStyle:'normal',
        fontWeight:'normal',
        marginTop:'7px',
    },
    li : {
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    menuLi : {
        listStyle:'none',
        lineHeight:'1.5',
    },
    div : {
        margin: '5px',
    },
    margintop : {
        marginTop: 16,
    }
};
