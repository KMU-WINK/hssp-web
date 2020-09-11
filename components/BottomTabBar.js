import React from 'react';
import Link from "next/link";
import {colorSet} from "../lib/ColorSet";
import PlusIcon from 'react-svg-loader!../assets/BottomTabBar/plusBtn.svg';
import XIcon from 'react-svg-loader!../assets/BottomTabBar/xBtn.svg';
export const BottomTabBar = (props) => {
    return <>
        {props.isOpenModal &&
        <div style={styles.modal}>

        </div>
        }
        <nav style={styles.tabBar}>
            <div style={styles.plusIcon} onClick={props.toggleModel}>
                {props.isOpenModal ? <XIcon/> : <PlusIcon/>}
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
    modal:{
        position:'fixed',
        left:0,
        right:0,
        top:0,
        bottom:0,
        backgroundColor:'rgba(0,0,0,.5)',
        zIndex:9,
    },
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
        zIndex:10,
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