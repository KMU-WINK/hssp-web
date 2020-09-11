import React from 'react';
import {colorSet} from "../../lib/ColorSet";

export const PXCard = (props)=>{
    return <>
        <div style = {styles.boxx}>
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
        </div>

</>;
};

const styles = {
    div : {
        marginLeft:40,
        width: 240,
        height: 130,
        background: colorSet.white,
        borderRadius: 10,
        boxShadow: "1px 1px 3px rgba(0, 0, 0, 0.17)",
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
        color: colorSet.deepblack,
        position : "relative",
        marginTop: 5,
    },
    manufacturer : {
        color: "#CACACA",
        display : "block",
        marginTop: 10,
        position : "relative",
        fontWeight:"normal",
        fontSize:14,
    },
    kcal : {
        fontWeight: "normal",
        fontSize: 12,
        color : colorSet.black,
        display : "block",
        margin : "14px 0 0 0",
        position : "relative"
    },
};