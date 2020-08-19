import React from "react";
import {Layout} from "../components/Layout";
import {Card} from "../components/Card";
import {CardHeader} from "../components/CardHeader";
import {BenefitCard} from "../components/BenefitCard";

const DiscountBenfits = () =>{
    return <>
        <Layout>
            <CardHeader
                name = "카드혜택"
            />
            <Card>
                <BenefitCard
                    logo = "https://lh3.googleusercontent.com/proxy/0AANyxtBCrigzdnafin1qZ9QYsuaVOakfdeD4PctbyMoxPnkG9ljwODY6Arep0RSaPHfQoDkR7DtPUaOFEbIbM25EFk6v7oR4O527u-2kDK3CU3e46W5nZEb9LZPo_gOt4a8f-Yo9k1FgPgvaY49AgZFQtMW1tkCULzRUOEu9tAdF9sOCLQFblKs8K8"
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