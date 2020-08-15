import React from "react";
import Link from 'next/link';
import {Layout} from "../components/Layout";
import {MenuCard} from "../components/MenuCard";

// import '../css/default.css';

const Index = () => {
    return <>
        <Layout>
            <MenuCard
                name ="점심"
                calory ="781.55"
            />
        </Layout>
    </>;
};

export default Index;