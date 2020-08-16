import React from "react";
import Link from 'next/link';
import {Layout} from "../components/Layout";
import {Card} from "../components/Card";
import {MenuCard} from "../components/MenuCard";

// import '../css/default.css';

const Index = () => {
    return <>
        <Layout>
            <Card>
                <MenuCard
                    name ="점심"
                    calory ="781.55"
                    todayMenu ={['보리비빔밥', '돼김복', '소세지야채볶음', '감자양파찌개', '배추김치']}
                    protein = '132'
                    fat = '242'
                    calbohydrate = '252'
                />
            </Card>
        </Layout>
    </>;
};

export default Index;