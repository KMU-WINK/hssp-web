import React from "react";
import {Layout} from "../components/Layout";
import {PXCard} from "../components/PX/PXCard";
import {PXCard2} from "../components/PX/PXCard2";

const PX = () =>{
    return <>
        <Layout>
            <h2 style={styles.pxtitle}>이달의 인기 PX 상품</h2>
            <PXCard
                productImage = "https://images.unsplash.com/photo-1597399400523-c84fe107928b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2389&q=80"
                productName ="바나나킥"
                productManufacturer = "농심"
                productKcal = "75g, 320kcal"
            />
            <h2 style={styles.pxsubtitle}>PX 꿀조합</h2>
            <h4 style={styles.pxsubment}>근무 끝나고 먹으면 개꿀맛 ㅎ</h4>
            <PXCard2
                productImage = "https://images.unsplash.com/photo-1597399400523-c84fe107928b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2389&q=80"
                productName ="뽀글이와 빅 소시지의 만남"
                productKcal = "98g, 460kcal"
                productRate = "★ ★ ★ ★ ★"
            />
            <PXCard2
                productImage = "https://images.unsplash.com/photo-1597399400523-c84fe107928b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2389&q=80"
                productName ="건빵 초코 퐁듀"
                productKcal = "98g, 460kcal"
                productRate = "★ ★ ★ ★ ★"
            />
            <PXCard2
                productImage = "https://images.unsplash.com/photo-1597399400523-c84fe107928b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2389&q=80"
                productName ="건빵 초코 퐁듀"
                productKcal = "98g, 460kcal"
                productRate = "★ ★ ★ ★ ★"
            />
        </Layout>
    </>;

};


const styles = {
    pxcardd:{
        display:"inline",
    },

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
        color: "#737373",
        marginBottom:15,

    }

};



export default PX;