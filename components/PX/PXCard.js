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
                        알 수 없음
                    </label>
                    <label htmlFor="" style = {styles.kcal}>
                        알 수 없음
                    </label>
                </div>

            </div>
        </div>

</>;
};

const styles = {
    div : {
        marginBottom:30,
        height: 130,
        background: colorSet.white,
        borderRadius: 10,
        boxShadow: "1px 1px 3px rgba(0, 0, 0, 0.17)",
    },
    img : {
        height: 100,
        width : 100,
        borderRadius: 6,
        display : "inline-block",
        marginTop : 15,
        marginLeft : 12,
        position : "relative",
    },
    product : {
        fontWeight: "bold",
        fontSize: 16,
        height: 24,
        marginLeft: 20,
        marginRight: 20,
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
        position : "relative"
    },
};