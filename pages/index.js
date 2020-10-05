import React, {useEffect,useState} from "react";
import {Layout} from "../components/Layout";
import {Card} from "../components/common/Card";
import {MenuCard} from "../components/Home/MenuCard";
import {CardHeader} from "../components/common/CardHeader";
import {CountCard} from "../components/Home/CountCard";
import CountAll from "../components/Home/CountAll"
import * as server from "../lib/Server";
import axios from 'axios';
import {PXCard} from "../components/PX/PXCard";


const Index = () => {
    const [foodData, setFood] = useState([]);
    useEffect(() => {
        async function exec(){
            try {
                const foodResponse = await server.GetFoods();    //pxResponse에 값 저장.
                if (foodResponse.status == 200) {    //status 200이면 pxResponse.data 값을 pxProducts 에 넣어줌.
                    setFood(foodResponse.data);
                } else {
                    alert("Error")
                }
            } catch(err) {
                alert("🚨오류발생🚨 빨리 고쳐볼게여 (；′⌒`)")
            }
        }
        exec();

    }, ['']);
    return <>
        <Layout>
            {console.log(foodData)}
            <CardHeader
                name = "오늘의 식단"
                settingBtn = "식단관리"
            />
            {foodData.map(food => <Card><MenuCard
                    name={
                        food.type === 'breakfast' ? '아침' :
                            food.type === 'lunch' ? '점심' :
                                food.type === 'dinner' ? '저녁' :
                                    '밤참'
                    }
                    calory = {(food.menu.map(item => item.kcal)).reduce((a, b) => a + b, 0)}
                    todayMenu = {food.menu.map(item => item.name)}
                    protein = {(food.menu.map(item => item.protein)).reduce((a, b) => a + b, 0)}
                    carbohydrate = {(food.menu.map(item => item.carbohydrate)).reduce((a, b) => a + b, 0)}
                    /></Card>
                )
            }
            <CardHeader
                name = "전역일 계산"
                settingBtn = "휴가관리"
            />
            <Card>
                <CountAll
                    marchDate="2022-5-22" // 전역일을 서버에서 받아서 props로 내려주기
                />
            </Card>
        </Layout>
    </>;
};

export default Index;