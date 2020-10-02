import {Layout} from "../components/Layout";
import {InputBox} from "../components/common/InputBox";
import {Button} from "../components/Button";
import {ErrorBox} from "../components/common/ErrorBox";
import {TextBox} from "../components/common/TextBox";

import {login} from "../lib/Server";
import React from "react";
import {Loading} from "../components/common/Loading";
import {useRouter} from "next/router";

const Signin = () => {
    const router = useRouter();
    const [phone, setPhone] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [errorMsg, setErrorMsg] = React.useState('');
    const [isLoading, setLoading] = React.useState(false);

    const onLoginClick = async ({phone, password, setErrorMsg}) => {
        if(!phone || !password) setErrorMsg("모든 필드를 입력해주세요.");
        else
        {
            setLoading(true);
            const loginResponse = await login({phone, password});
            setLoading(false);
            console.log(loginResponse);
            if (loginResponse.status !== 200)
            {
                setErrorMsg(loginResponse.data.error);
            }
            else
            {
                router.push('/');
            }
        }
    };


    const fields = [
        {
            name: "전화번호",
            placeholder: "전화번호 입력하세요",
            type: "text",
            detailMessage: "고속상황전파체계는 아이디 대신 전화번호로 로그인해요!",
            value: phone,
            onChange: setPhone,
        },
        {
            name: "패스워드",
            placeholder: "패스워드 입력하세요",
            type: "password",
            value: password,
            onChange: setPassword,

        }
    ];


    return <>
            <Layout>
                <ErrorBox
                    title="띠로리~!"
                    text={errorMsg}
                    setText={setErrorMsg}
                />

                {fields.map(field => React.createElement(InputBox, field))}

                <Button
                    buttonname ="로 그 인"
                    onClick={()=>onLoginClick({phone, password, setErrorMsg})}
                />
                <TextBox
                    text="허걱쓰.. Hoxy 아이디나 패스워드를 잊어버리셨어요?"
                    link="계정 정보 찾기"
                />
            </Layout>
            <Loading
                isLoading={isLoading}
            />
        </>
}

export default Signin;