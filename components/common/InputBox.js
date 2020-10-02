import React from 'react';

export function InputBox(props){
    return <>
        <div style={styles.inputView}>
            <label style={styles.label}>
                {props.name}
            </label>

            <input
                type={props.type}
                placeholder={props.placeholder}
                style={styles.input}
                value={props.value}
                onChange={(e)=>props.onChange(e.target.value)}
            />

        </div>
        <div style={styles.detailMessage}>
            {props.detailmessage}
        </div>
    </>;


}

const styles = {
    inputView:{
        margin:10,
        display:'flex',
    },
    label : {
        width:70,
        height:30,
        fontSize:16,
        fontWeight:'bold',
        marginLeft:20,
        marginTop: 30,
        textAlign:'right',
        // alignItems:'center',
        position: 'absolute',

    },
    input : {
        height:33,
        borderRadius:4,
        flex:1,
        border:'none',
        boxShadow:'0px 1px 0px rgba(0, 0, 0, 0.12)',
        marginLeft:100,
        marginTop: 25,

    },
    detailmessage : {
        fontSize: 9,
        marginTop: 10,
        flexDirection : 'column',
        marginLeft:42,


    }
};