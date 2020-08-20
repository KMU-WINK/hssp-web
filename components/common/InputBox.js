import React from 'react';

export function InputBox(props){
    return (
        <div style={{margin:10}}>
            <label style={styles.label}>
                {props.name}
            </label>

            <input type={props.type} placeholder={props.placeholder} style={styles.input} />
            <div  style={styles.detailmessage}>
                {props.detailmessage}
            </div>
        </div>
    );
}

const styles = {
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
        width:200,
        borderRadius:4,
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