import React from 'react';
import {colorSet} from "../../lib/ColorSet";

export function Loading(props) {
    console.log(props.isLoading);
    return props.isLoading ? <div style={styles.loadingView}>
        Loading...
    </div> :
        <></>;
}
const styles = {
    loadingView: {
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgba(0,0,0,.5)',
        position:'fixed',
        left:0,
        top:0,
        right:0,
        bottom:0,
        fontSize:100,
        color:colorSet.white,
    },
}
