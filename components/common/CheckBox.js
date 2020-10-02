import React from 'react';

export function CheckBox(props){
    return (
        <div>
            <label  style={styles.checkboxmessage}>
                <input type="checkbox" checked={props.checked} onChange={props.onChange} style={styles.checkbox}/>
                {props.checkboxmessage}
            </label>
        </div>
    );
}

const styles = {
    checkbox : {
        marginRight : 10,
        width: 20,
        height: 20,
        boxShadow: '2px 2px 0px rgba(0, 0, 0, 0.16)',
        borderRadius: 2,

    },
    checkboxmessage : {
        marginTop:32,
        marginLeft : 10,
        fontSize: 12,
        display:'flex',
        alignItems: 'center',

    }

};