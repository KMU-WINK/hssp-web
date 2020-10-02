import React from 'react';
import Logo from 'react-svg-loader!../assets/header/soldier_mini.svg';
import {colorSet} from "../lib/ColorSet";

export function Header(props){
    return <>
        <div style={{...styles.header, ...props.style}}>
            <div className="container" style={styles.headerContainer}>
                <h1 style={styles.logoText}>생활관 막내</h1>
                <div style={styles.logo}>
                    <Logo />
                </div>
            </div>
        </div>
    </>;
}

const styles = {
    header: {
        width:'100%',
        height:70,
        backgroundColor:colorSet.white,
        boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.07)',
    },
    headerContainer: {
        display:'flex',
        height:'100%',
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logoText: {
        padding:0,
        margin:0,
        color:colorSet.deepGreen,
        fontSize: 26,
        letterSpacing: '0.24em',
    },
    logo: {
        width:40,
        height:40,
        borderRadius:20,
        boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.09)',
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
};