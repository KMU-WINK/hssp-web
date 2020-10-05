import React from "react";
import {Layout} from "../components/Layout";
import {InputBox} from "../components/common/InputBox";
import {Button} from "../components/Button";
import {dateInput} from "../lib/Server";
import {useRouter} from "next/router";
import {Loading} from "../components/common/Loading";
import {ErrorBox} from "../components/common/ErrorBox";

const Date=()=>{
    const router = useRouter();
    const [errorMsg, setErrorMsg] = React.useState('');
    const [start_date, setStartDate] = React.useState('')
    const [end_date, setEndDate] = React.useState('')
    const [isLoading, setLoading] = React.useState(false);

    const onDateInput = async () => {
        let checkedField = 0;
        const fields = [start_date, end_date];
        fields.forEach(field => checkedField += !(!field)); // 비어있는 필드 카운트
        if (checkedField === fields.length)
        {
            setLoading(true);
            const dateResponse = await dateInput({start_date, end_date});
            console.log(dateResponse);
            setLoading(false);
            if(!dateResponse)
            {
                setErrorMsg('서버 요청 실패!');

            }else if (dateResponse.status >= 200 && dateResponse.status < 300)
            {
                alert('전역일이 입력되었습니다!');
                router.push('/');
            }
            else if (dateResponse.status >= 400 && dateResponse.status <= 500)
            {
                setErrorMsg(dateResponse.data.error);
            }
            else
            {
                setErrorMsg('알 수 없는 오류');

            }
        }
        else
        {
            setErrorMsg('모든 필드를 입력하세요');
        }
    };
    return<>
        <Layout>
            <ErrorBox
                title="띠로리~!"
                text={errorMsg}
                setText={setErrorMsg}
            />
            <h1 id="pageTitle" style={styles.pageTitle}>정보입력</h1>
            <h1 id="enlistmentDay" style={styles.pageSubTitle}>입대일</h1>
            <InputBox
                name="입대 날짜"
                type = "date"
                onChange={setStartDate}
                value={start_date}
            />
            <h1 id="dischargeDay" style={styles.pageSubTitle}>전역일</h1>
            <InputBox
                name="전역 날짜"
                type="date"
                onChange={setEndDate}
                value={end_date}
            />
            <div style={styles.Emptybox}> </div>
            <Button
                buttonname="입력완료"
                onClick={onDateInput}
            />
        </Layout>
        <Loading
            isLoading={isLoading}
        />
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