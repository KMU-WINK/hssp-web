import React from 'react';

export function Card(props) {
    return (
      <div style={{...styles.Card, ...props.style}}>
          <div style={styles.CardView}>
              {props.children}
          </div>
      </div>
    );
}
const styles = {
    Card : {
        background:'#FFFFFF',
        boxShadow: '1px 1px 3px rgba(0, 0, 0.17)',
        marginTop:20,
        marginBottom:30,
        width : '100%',
        borderRadius:10,
    },
    CardView: {
        padding:15,
    },
}
