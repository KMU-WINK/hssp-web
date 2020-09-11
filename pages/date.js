import sReact from "react";
import Link from 'next/link';

import {Layout} from "../components/Layout";
import {InputBox} from "../components/common/InputBox";
import {Button} from "../components/Button";



const Date=()=>{

    return<>
        <Layout>
            <h1 id="pageTitle" style={styles.pageTitle}>정보입력</h1>
            <h1 id="enlistmentDay" style={styles.pageSubTitle}>입대일</h1>
            <InputBox
                name="입대 날짜"
                type = "date"
            />
            <h1 id="dischargeDay" style={styles.pageSubTitle}>전역일</h1>
            <InputBox
                name="전역 날짜"
                type="date"
            />
            <div style={styles.Emptybox}> </div>
            <Button
                buttonname="입력완료"
            />
        </Layout>
    </>;
};
const styles = {
    pageTitle : {
        fontSize : 24,
        marginLeft : 20,
        fontWeight: 'bold',
    },
    pageSubTitle : {
        fontSize : 24,
        marginLeft : 20,
        fontWeight: 'bold',
        color : '#6DB724',
        marginBottom : 0,
    },
    Emptybox : {
        height : 40,
    },
};

export default Date;