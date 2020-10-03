import React from "react";
import {Layout} from "../components/Layout";
import {Card} from "../components/common/Card";
import {BenefitCard} from "../components/BenefitCard";
import {BenefitHeader} from "../components/BenefitHeader";

const DiscountDetail = () =>{
    return <>
        <Layout>
            <BenefitHeader
                logo = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQBEXbjhl3KiF78tk5hxkMwcsleMGjg5JMTqw&usqp=CAU"
                cardName = "국민은행 나사카 혜택"
                recentUpdateDate = "2017-05-05 22:00:00"
            />
            <Card>
                <BenefitCard
                    logo = "http://placehold.it/36x36"
                    cardName = "군마트"
                    benefitSummary = "5~20% 환급 할인"
                />
            </Card>
            <Card>
                <BenefitCard
                    logo = "http://placehold.it/36x36"
                    cardName = "교통"
                    benefitSummary = "20% 청구할인"
                />
            </Card>
            <Card>
                <BenefitCard
                    logo = "http://placehold.it/36x36"
                    cardName = "영화"
                    benefitSummary = "CGV 35% 할인"
                />
            </Card>
            <Card>
                <BenefitCard
                    logo = "http://placehold.it/36x36"
                    cardName = "커피"
                    benefitSummary = "스타벅스 20% 할인"
                />
            </Card>
            <Card>
                <BenefitCard
                    logo = "http://placehold.it/36x36"
                    cardName = "놀이공원"
                    benefitSummary = "에버랜드/롯데월드 50% 환급 할인"
                />
            </Card>
        </Layout>
    </>;
};
export default DiscountDetail;