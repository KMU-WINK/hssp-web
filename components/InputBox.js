import React from 'react';

export function InputBox(props){
    return (
        <div style={{margin:10}}>
            <label htmlFor="" style={styles.label}>
                {props.name}
            </label>

            <input type={props.type} placeholder={props.placeholder} style={styles.input} />
        </div>
    );
}

const styles = {
    label : {
        fontSize:16,
        fontWeight:'bold',
    },
    input : {
        height:33,
        width:200,
        borderRadius:4,
        border:'none',
        boxShadow:'0px 1px 0px rgba(0, 0, 0, 0.12)',
    },
};