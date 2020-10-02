import React from 'react';
import {colorSet} from '../../lib/ColorSet'

export function LandingHeader() {
    return (
        <>
            <div style={styles.intro}>
                <p style={styles.introp}><b>소중한 당신</b>의 군 생활을</p>
                <p style={styles.introp}>조금 더 알차게 만들어 줄 애플리케이션</p>
            </div>
            <h1 style={styles.Title}>생활관 막내</h1>
        </>
    );
}
const styles = {
    intro :{
        display: 'flex',
        flexDirection : 'column',
        justifyContent :'center',
        textAlign:'center',
        fontSize: 29,
        margin : '122px 0 0 0',
    },
    introp:{
        margin : 0,
    },
    Title :{
        fontSize: 80,
        textAlign: 'center',
        color : colorSet.deepGreen,
        margin : 0,
    }
}