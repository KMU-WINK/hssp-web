import React from 'react';

export function Card(props) {
    return (
      <div style={styles.Card}>
          {props.children}
      </div>
    );
}
const styles = {
    Card : {
        background:'#FFFFFF',
        boxShadow: '1px 1px 3px rgba(0, 0, 0.17)',
        padding:15,
        margin : '20px 20px 30px 20px',
        width : 280,
        borderRadius:10,
    }
}