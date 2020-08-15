import React from 'react';
import Link from "next/link";

export const BottomTabBar = (props) => {
    return <>
        <nav style={styles.tabBar}>
            <ul style={styles.menu}>
                {/*{props.menus.map(oneMenu => <li><Link href={oneMenu.link}><img src={oneMenu.iconSource} /></Link></li>)}*/}
                {/*<img src={require('../assets/BottomTabBar/food.svg')} />*/}
            </ul>
        </nav>
    </>;
};

const styles = {
    tabBar: {
        height:50,
        width:'100%',
        position:'fixed',
        bottom:0,
        left:0,
        shadowOffsetX:1,
        shadowOffsetY:1,
        shadowBlur:5,
        shadowColor:'rgba(0,0,0,.25)',
    },

    menu: {
        listStyle:'none',
        display:'grid',
        gridTemplateColumns:'repeat(4, 1fr)',
    },

};