import React from 'react';

export const PXCard2 = (props)=>{
    return <>
        <div style = {styles.div}>
            <img src={props.productImage} alt="" style = {styles.img}/>
            <div style={styles.product}>
                <label htmlFor="" style = {styles.name}>
                    {props.productName}
                </label>

                <label htmlFor="" style = {styles.kcal}>
                    {props.productKcal}
                </label>
                <label htmlFor="" style = {styles.rates}>
                    {props.productRate}
                </label>
            </div>

        </div>
    </>;
};


const styles = {
    div : {
        marginTop:15,
        width: 280,
        height: 130,
        marginLeft:20,
        background: "#FFFFFF",
        borderRadius: 10,
        boxShadow: "1px 1px 3px rgba(0, 0, 0, 0.17)",
    },
    img : {
        height: 100,
        width : 85,
        display : "inline-block",
        marginTop : 15,
        marginLeft : 12,
    },
    product : {
        fontWeight: "bold",
        fontSize: 16,
        width: 120,
        height: 24,
        marginLeft: 8,
        marginTop : 15,
        display : "inline",
        position : "absolute",
    },
    name : {
        height:140,
        fontSize: 14,
        fontWeight: "bold",
        color: "#363636",
        position : "relative",
        marginTop: 5,
    },
    kcal : {
        marginTop:30,
        color: "#737373",
        fontWeight: "normal",
        fontSize: 12,
        display : "block",
    },
    rates : {
        fontWeight: "normal",
        fontSize: 14,
        marginTop : 10,
    }
};