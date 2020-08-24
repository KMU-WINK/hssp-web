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
        height: 130,
        background: "#FFFFFF",
        borderRadius: 10,
    },
    img : {
        height: 100,
        width : 85,
        display : "inline-block",
        marginTop : 15,
        marginLeft : 12,
        position : "relative",
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
        fontSize: 18,
        color: "#363636",
        position : "relative",
        marginTop: 5,
    },
    manufacturer : {
        color: "#CACACA",
        display : "block",
        marginTop: 10,
        position : "relative",
    },
    kcal : {
        fontWeight: "normal",
        fontSize: 14,
        color : "#000000",
        display : "block",
        margin : "14px 0 0 0",
        position : "relative"
    },
};