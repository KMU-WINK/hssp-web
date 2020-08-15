import React from 'react';

export const PXCard = (props)=>{
    return <>
        <div style = {styles.div}>
            <img src={props.productImage} alt="" style = {styles.img}/>
            <div style={styles.product}>
                <label htmlFor="" style = {styles.name}>
                    {props.productName}
                </label>
                <label htmlFor="" style = {styles.manufacturer}>
                    {props.productManufacturer}
                </label>
                <label htmlFor="" style = {styles.kcal}>
                    {props.productKcal}
                </label>
            </div>

        </div>
    </>;
};

const styles = {
    div : {
        width: 240,
        height: 140,
        background: "#FFFFFF",
        borderRadius: 10,
    },
    img : {
        height: 100,
        width : 100,
        display : "inline-block",
        padding : "20px 10px 20px 20px",
        position : "relative",
    },
    product : {
        display : "inline",
        position : "absolute",
        margin : "20px 20px 20px 0",
    },
    name : {
        fontSize: 18,
        color: "#363636",
        position : "relative"
    },
    manufacturer : {
        color: "#CACACA",
        display : "inline-block",
        margin : "6px 0 0 10px",
        position : "absolute",
    },
    kcal : {
        fontSize: 14,
        color : "#000000",
        display : "inline-block",
    },
};