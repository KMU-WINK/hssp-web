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

            {pxProducts.map(product => <PXCard
                productImage = {product.thumbnail}
                productName = {product.name}
                productManufacturer = "농심"
                productKcal = "75g, 320kcal"
            />)}


            <PXCard
                productImage = "https://images.unsplash.com/photo-1597399400523-c84fe107928b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2389&q=80"
                productName ="바나나킥"
                productManufacturer = "농심"
                productKcal = "75g, 320kcal"
            />

            <h2 style={styles.pxsubtitle}>PX 꿀조합</h2>
            <h4 style={styles.pxsubment}>근무 끝나고 먹으면 개꿀맛 ㅎ</h4>
            <PXSliderCard
                productImage = "https://images.unsplash.com/photo-1597399400523-c84fe107928b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2389&q=80"
                productName ="뽀글이와 빅 소시지의 만남"
                productKcal = "98g, 460kcal"
                productRate = "★ ★ ★ ★ ★"
            />
            <PXSliderCard
                productImage = "https://images.unsplash.com/photo-1597399400523-c84fe107928b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2389&q=80"
                productName ="건빵 초코 퐁듀"
                productKcal = "98g, 460kcal"
                productRate = "★ ★ ★ ★ ★"
            />
            <PXSliderCard
                productImage = "https://images.unsplash.com/photo-1597399400523-c84fe107928b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2389&q=80"
                productName ="건빵 초코 퐁듀"
                productKcal = "98g, 460kcal"
                productRate = "★ ★ ★ ★ ★"
            />
            <PXSliderCard
                productImage = "https://images.unsplash.com/photo-1597399400523-c84fe107928b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2389&q=80"
                productName ="건빵 초코 퐁듀"
                productKcal = "98g, 460kcal"
                productRate = "★ ★ ★ ★ ★"
            />
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