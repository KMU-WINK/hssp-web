import React, {useEffect,useState} from "react";
import axios from 'axios';
import {Layout} from "../components/Layout";
import {PXCard} from "../components/PX/PXCard";
import {PXSliderCard} from "../components/PX/PXSliderCard";
import {colorSet} from "../lib/ColorSet";
import * as server from "../lib/Server";


const PX = () =>{
    const [pxProducts, setPxProducts] = useState([]);  //setPxProducts함수 실행하면 값을 pxProducts에 저장.
    useEffect(() => {
        async function exec(){    //자바스크립트 비동기처리때무넹 기다렸다가 값을 가져오면 그때 실행되도록 async 랑 await씀(짜장묜배달생각해~)
            try {
                const pxResponse = await server.GetPxProducts();    //pxResponse에 값 저장.
                if (pxResponse.status == 200) {    //status 200이면 pxResponse.data 값을 pxProducts 에 넣어줌.
                    setPxProducts(pxResponse.data);
                } else {
                    alert("Error")
                }
            } catch(err) {
                alert("🚨오류발생🚨 빨리 고쳐볼게여 (；′⌒`)")
            }
        }
        exec();   //exec 함수 실행~
    }, ['']);

    return <>
        <Layout>
            <h2 style={styles.pxtitle}>이달의 인기 PX 상품</h2>

            {
                pxProducts.map(product => <PXCard
                    productImage = {product.thumbnail}
                    productName = {product.name}
                    productManufacturer = "농심"
                    productKcal = "75g, 320kcal"
                />)
            }
        </Layout>
    </>;

};


const styles = {
    pxtitle: {
        fontSize : 24,
        marginTop : 30,
        marginLeft : 20,
        fontWeight: 'bold',
    },
    pxsubtitle: {
        fontSize : 24,
        marginTop : 30,
        marginLeft : 20,
        fontWeight: 'bold',
    },
    pxsubment: {
        marginTop:-10,
        fontSize : 9,
        marginLeft : 20,
        color: colorSet.grey,
        marginBottom:15,
    }
};



export default PX;