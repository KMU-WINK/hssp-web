import React from 'react';

export function BottomTabBarMenu(props){
    return (
        <div>
            {props.men.map(menu => {
                return <div style={styles.menuBars}>
                    <div style={styles.icon}>{menu.icon}</div>
                    <div>{menu.name}</div>
                </div>
            })}
        </div>
    );
}

const styles = {
    menuBars : {
        display: 'flex',
        width:130,
        height:30,
        borderRadius:15,
        backgroundColor: 'white',
        textAlign: 'center',
        letterSpacing:'0.24em',
        fontSize: 12,
        alignItems : 'center',
        justifyContent: 'space-evenly',
        margin: '20px 10px 20px 10px',
    },
    icon : {
        marginTop: 5,
    },
};