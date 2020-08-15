import React from 'react';
import Link from "next/link";

export const Card = (props) =>{

    return <>
        <h1 style={styles.sectionTitle}>{props.title}</h1>

        <div style={styles.card}>
            {props.children}
        </div>
    </>;
};

const styles = {
    card:{
        padding:20,
        backgroundColor:'#fff',
        borderRadius:5,
    },
    sectionTitle:{
        fontSize:16,
        fontWeight:'bold',
    },
};