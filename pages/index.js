import React from "react";
import Link from 'next/link';
import {Layout} from "../components/Layout";
import {Card} from "../components/common/Card";
import {MenuCard} from "../components/Home/MenuCard";
import {CardHeader} from "../components/common/CardHeader";
import {CountCard} from "../components/Home/CountCard";
// import Cal from "../components/Home/CountDay";
import CountAll from "../components/Home/CountAll"


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
            {/*<Cal/>*/}

            <CardHeader
                name = "전역일 계산"
                settingBtn = "휴가관리"
            />

            <Card>
                <CountAll/>
                <CountCard
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