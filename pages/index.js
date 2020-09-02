import React from "react";
import Link from 'next/link';
import {Layout} from "../components/Layout";
import {Card} from "../components/common/Card";
import {MenuCard} from "../components/Home/MenuCard";
import {CardHeader} from "../components/common/CardHeader";
import {CountCard} from "../components/Home/CountCard";

// import '../css/default.css';

const Index = () => {
    return <>
        <Layout>
            <CardHeader
                name = "오늘의 식단"
                settingBtn = "식단관리"
            />
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
            <CardHeader
                name = "전역일 계산"
                settingBtn = "휴가관리"
            />
            <Card>
                <CountCard
                    hundred ="1"
                    ten = '3'
                    one = '9'
                    min1 = '1'
                    min2 = '1'
                    min3 = '1'
                    min4 = '1'
                    sec = '58.55356'
                    mealCount = '1547'
                    yearBreak='13'
                    oneBreak='1'
                    twoBreak='2'
                    twoBreak2='3'
                    specialBreak='4'
                />
            </Card>
        </Layout>
    </>;
};

export default Index;