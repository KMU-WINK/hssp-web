import React from 'react';
import Link from "next/link";


export const Download = (props) => {
    return <>
        <ul className="container" style={styles.downloadIcons}>
            {props.icons.map(icon => {
                return <li style={styles.iconItem}><Link href={icon.link}>{icon.icon}</Link></li>
            })}
        </ul>
    </>;
};
const styles = {
    downloadIcons : {
        width : '60%',
        height:'100%',
        listStyle:'none',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        marginBottom : '250px',
    },
    iconItem : {
    },
};