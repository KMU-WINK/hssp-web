// import React from "react";
import React, {useEffect,useState} from "react";
import axios from 'axios';
import {Layout} from "../components/Layout";
import {Card} from "../components/common/Card";
import {CardHeader} from "../components/common/CardHeader";
import {BenefitCard} from "../components/BenefitCard";
import * as server from "../lib/Server";

const DiscountBenfits = () =>{
    const [cardBenefit, setCardBenefit] = useState([]);
    const [statusBenefit, setStatusBenefit] = useState([]);

    useEffect(()=>{
        async function exec(){
            try{
                const discountResponse = await server.GetDiscountbenefits();
                if(discountResponse.status == 200){
                    setCardBenefit(discountResponse.data.cardBenefit);
                    setStatusBenefit(discountResponse.data.statusBenefit);
                }else{
                    alert("Error")
                }
            } catch (err){
                alert("🚨오류오류🚨")
            }
        }
        exec();

    }, ['']);


    return <>
        <Layout>
            <CardHeader
                name = "카드 혜택"
            />
            {cardBenefit.map(cardBenefit =>
                <Card>
                    <BenefitCard
                    logo = {cardBenefit.img}
                    cardName = {cardBenefit.name}
                    benefitSummary = {cardBenefit.detail}

                    />
                </Card>
                )}

            <CardHeader
                name = "신분 혜택"
            />
            {statusBenefit.map(statusBenefit =>
                <Card>
                    <BenefitCard
                        logo = {statusBenefit.img}
                        cardName = {statusBenefit.name}
                        benefitSummary = {statusBenefit.detail}

                    />
                </Card>
            )}
        </Layout>
    </>;
};
export default DiscountBenfits;