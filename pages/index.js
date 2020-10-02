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
                    const menuSlider = document.querySelector("#menuSlider");
                    menuSlider.scrollLeft = 420;
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
            <CardHeader
                name = "오늘의 식단"
                settingBtn = "식단관리"
            />
            <div style={styles.sliderView} id="menuSlider">
                <div style={styles.cont}>
                    {foodData.map(food => <Card style={styles.cardItem}><MenuCard
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
                </div>
            </div>

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
const styles = {
    sliderView: {
        overflowY:'hidden',
        overflowX: 'scroll',
    },
    cont : {
        display:'flex',
        width:'300%',
        height:'100%',
    },

    cardItem: {
        margin:15,
    },

}

export default Index;