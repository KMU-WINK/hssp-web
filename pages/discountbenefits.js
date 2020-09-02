import React from "react";
import {Layout} from "../components/Layout";
import {Card} from "../components/common/Card";
import {CardHeader} from "../components/common/CardHeader";
import {BenefitCard} from "../components/BenefitCard";

const DiscountBenfits = () =>{
    return <>
        <Layout>
            <CardHeader
                name = "카드 혜택"
            />
            <Card>
                <BenefitCard
                    logo = "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FBrop5%2Fbtqy0pZ3Nsp%2FZpsMQnl64Uz0WQJjXXgI7k%2Fimg.jpg"
                    cardName = "IBK 기업은행 나라사랑카드 혜택"
                    benefitSummary = "CU 5% 할인 등"
                />
            </Card>
            <Card>
                <BenefitCard
                    logo = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQBEXbjhl3KiF78tk5hxkMwcsleMGjg5JMTqw&usqp=CAU"
                    cardName = "국민은행 나라사랑카드 혜택"
                    benefitSummary = "PX 5~20% 환급, CGV 35%환급 등"
                />
            </Card>
            <CardHeader
                name = "신분 혜택"
            />
            <Card>
                <BenefitCard
                    logo = "http://placehold.it/36x36"
                    cardName = "휴양지 할인"
                    benefitSummary = "여기어때 5% 할인 등"
                />
            </Card>
            <Card>
                <BenefitCard
                    logo = "http://placehold.it/36x36"
                    cardName = "테마파크 할인"
                    benefitSummary = "에버랜드 휴가증 지참 시 50% 할인 등"
                />
            </Card>
            <Card>
                <BenefitCard
                    logo = "http://placehold.it/36x36"
                    cardName = "식당 및 레스토랑 할인"
                    benefitSummary = "아웃백 35% 할인 등"
                />
            </Card>
        </Layout>
    </>;
};
export default DiscountBenfits;