import React from 'react';

export function MenuCard(props){
    return (
        <div>
            <h1 style={styles.h1}>
                {props.name}
            </h1>
            <h3 style={styles.h3}>
                {props.calory}
            </h3>
        </div>
    );
}

const styles = {
    h1 : {
        color:'#52CB64',
        fontSize:24,
        display:'inline-block',
    },
    h3 : {
        display:'inline-block',
        float:'right',
        fontSize: 18,
    },
};