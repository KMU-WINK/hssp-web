import React from 'react';
import Link from "next/link";
import {BottomTabBarMenu} from "./BottomTabBarMenu";
import {colorSet} from "../lib/ColorSet";
import PlusIcon from 'react-svg-loader!../assets/BottomTabBar/plusBtn.svg';
import XIcon from 'react-svg-loader!../assets/BottomTabBar/xBtn.svg';
import Expend from "react-svg-loader!../assets/BottomTabBar/expend.svg";
import Health from "react-svg-loader!../assets/BottomTabBar/health.svg";
import Snack from "react-svg-loader!../assets/BottomTabBar/snack.svg";
import Vacation from "react-svg-loader!../assets/BottomTabBar/vacation.svg";
import {useRouter} from "next/router";

const menuBar1 = [
    {
        name: '지출 추가',
        icon: <Expend />,
    }
];
const menuBar2 = [
    {
        name: '운동 추가',
        icon: <Health />,
    }
];
const menuBar3 = [
    {
        name: '먹은간식추가',
        icon: <Snack />,
    }
];
const menuBar4 = [
    {
        name: '출타 추가',
        icon: <Vacation />,
    }
];
export const BottomTabBar = (props) => {
    const router = useRouter();

    return <>
        {props.isOpenModal &&
        <div style={styles.modal}>
            <div style={styles.text}>
                식단관리, 출타관리만 입력해주세요!
            </div>
            <div style={styles.text}>
                생활관 막내가 자동으로 계산해줄게요!
            </div>
            <div style={styles.container}>
                <div>
                    <BottomTabBarMenu
                        men={menuBar1}
                    />
                    <BottomTabBarMenu
                        men={menuBar2}
                    />
                </div>
                <div>
                    <BottomTabBarMenu
                        men={menuBar3}
                    />
                    <BottomTabBarMenu
                        men={menuBar4}
                    />
                </div>
            </div>
        </div>
        }
        <nav style={styles.tabBar}>
            <div style={styles.plusIcon} onClick={props.toggleModel}>
                {props.isOpenModal ? <XIcon/> : <PlusIcon/>}
            </div>
            <ul className="container" style={styles.menu}>
                {props.menus.map(menu => {
                    return <li style={styles.menuItem}>
                        <Link href={menu.link}>
                            {
                                router.pathname === menu.link ?
                                    menu.activeIcon: menu.icon
                            }
                        </Link>
                    </li>
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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',

    },
    container:{
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 100,
    },
    text: {
        color:'#ffffff',
        fontSize:12,
        fontWeight:'bold',
        letterSpacing:'0.24em',
        textShadow: '0px 1px 1px rgba(0, 0, 0, 0.25)',
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