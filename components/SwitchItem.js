import React from 'react';
import Switch from "react-switch";

export const SwitchItem = (props) =>{
    return <>
        <div style={styles.item}>
            <span style={styles.itemName}>{props.name}</span>
            <Switch
            onChange={props.onChange}
            checked={props.checked}
            checkedIcon={false}
            uncheckedIcon={false}
            onColor='#6DB724'
            offColor='#C4C4C4'
            />
        </div>
    </>;
};

const styles = {
    item:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingTop:10,
        paddingBottom:10,
    },
    card:{
        padding:20,
        backgroundColor:'#fff',
        borderRadius:5,
    },
    itemName:{
        fontSize:16,
    },

    sectionTitle:{
        fontSize:16,
        fontWeight:'bold',
    }
};
