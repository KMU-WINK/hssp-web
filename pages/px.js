import React from "react";
import {Layout} from "../components/Layout";
import {PXCard} from "../components/PX/PXCard";

const PX = () =>{
    return <>
        <Layout>
            <PXCard
                productImage = "https://images.unsplash.com/photo-1597399400523-c84fe107928b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2389&q=80"
                productName ="바나나킥"
                productManufacturer = "농심"
                productKcal = "75g, 320kcal"
            />
        </Layout>
    </>;
};
export default PX;