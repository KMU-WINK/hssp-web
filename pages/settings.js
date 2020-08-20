import React from "react";
import Link from 'next/link';
import {Layout} from "../components/Layout";
import {InputBox} from "../components/common/InputBox";
import {Card} from "../components/common/Card";
import {SwitchItem} from "../components/common/SwitchItem";

const Settings = () => {
    const [meal, setMeal] = React.useState('');
    const [day, setDay] = React.useState('');

    return <>
        <Layout>
            <div style={styles.container}>
                <h1>환경 설정</h1>
                <Card
                    title="푸쉬 알림 설정"
                >
                    <SwitchItem
                        name="식사 알림"
                        onChange={setMeal}
                        checked={meal}
                    />
                    <SwitchItem
                        name="전역일 알림"
                        onChange={setDay}
                        checked={day}
                    />
                </Card>
            </div>
        </Layout>
    </>;
};

export default Settings;

const styles = {
    container: {
        padding: 20,
    },
};