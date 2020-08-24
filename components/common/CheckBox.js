import React from 'react';

export function CheckBox(props){
    return (
        <div>

            <input type="checkbox" style={styles.checkbox}/>
            <label  style={styles.checkboxmessage}>
                {props.checkboxmessage}
            </label>
        </div>
    );
}

const styles = {
    checkbox : {
        marginTop:32,
        marginLeft : 20,
        width: 20,
        height: 20,
        boxShadow: '2px 2px 0px rgba(0, 0, 0, 0.16)',
        borderRadius: 2,
    },
    checkboxmessage : {
        marginTop:32,
        marginLeft : 10,
        width: 219,
        height: 36,
        fontSize: 12,
        alignItems: 'center',
        position: "absolute",

    }

};