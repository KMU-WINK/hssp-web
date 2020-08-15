import React from "react";
import Link from 'next/link';
import {Layout} from "../components/Layout";
import {InputBox} from "../components/InputBox";

const SignUp = () => {

    return <>
        <Layout>
            <InputBox
                name="아이디"
                placeholder="아이디를 입력하세요"
                type="text"
            />
            <InputBox
                name="패스워드"
                placeholder="패스워드 입력하세요"
                type="password"
            />
            <InputBox
                name="이메일 "
                placeholder="이메일 입력하세요"
                type="email"

            />
        </Layout>
    </>;
};

export default SignUp;