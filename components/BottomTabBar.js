import React from 'react';
import Link from "next/link";
import {colorSet} from "../lib/ColorSet";
import PlusIcon from 'react-svg-loader!../assets/BottomTabBar/plusBtn.svg';
export const BottomTabBar = (props) => {
    return <>
        <nav style={styles.tabBar}>
            <div style={styles.plusIcon}>
                <PlusIcon/>
            </div>
            <ul className="container" style={styles.menu}>
                {props.menus.map(menu => {
                    return <li style={styles.menuItem}><Link href={menu.link}>{menu.icon}</Link></li>
                })}
            </ul>
        </nav>
    </>;
};

const styles = {
    tabBar: {
        height:50,
        width:'100%',
        position:'fixed',
        backgroundColor:colorSet.white,
        bottom:0,
        left:0,
        shadowOffsetX:1,
        shadowOffsetY:1,
        shadowBlur:5,
        shadowColor:'rgba(0,0,0,.25)',
    },

    menu: {
        height:'100%',
        listStyle:'none',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    menuItem:{
        textAlign:'center',
    },
    plusIcon:{
        position: 'absolute',
        top: -26.5,
        left: '50%',
        marginLeft: -26.5,
    },

};