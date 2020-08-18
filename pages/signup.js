import sReact from "react";
import Link from 'next/link';

import {Layout} from "../components/Layout";
import {InputBox} from "../components/InputBox";
import {CheckBox} from "../components/CheckBox";




const SignUp = () => {


    return <>
        <Layout>
            <h1 id="signinm" style={styles.signinm}>이미 회원인데요?!</h1>
            <h1 id="signupm" style={styles.signupm}>회원가입</h1>
            <InputBox
                name="전화번호"
                placeholder="전화번호 입력하세요"
                type="text"
                detailmessage="고속상황전파체계는 아이디 대신 전화번호로 로그인해요!"
            />
            <InputBox
                name="패스워드"
                placeholder="패스워드 입력하세요"
                type="password"
            />
            <InputBox
                name="이름"
                placeholder="이름을 입력하세요"
                type="text"
            />
            <h1 id="menu" style={styles.menu}>군 분류</h1>

            <select style={styles.dropdown}>
                <option value="육군">육군</option>
                <option value="해군">해군</option>
                <option value="공군">공군</option>
                <option value="해병대">해병대</option>
                <option value="의무경찰">의무경찰</option>
                <option value="의무소방원">의무소방원</option>
                <option value="사회복무요원">사회복무요원</option>
                <option value="대체복무">대체복무</option>
            </select>

            <InputBox
                name="생년월일"
                placeholder=""
            />

            <CheckBox
                checkboxmessage="고속상황전파체계 서비스 이용 약관동의 (필수)"
            />
            <CheckBox
                checkboxmessage="개인정보취급방침 동의 (필수)"
            />
        </Layout>
    </>;
};

const styles = {
    signinm : {
        fontSize : 24,
        marginTop : 90,
        marginLeft : 21,
        fontWeight: 'bold',
    },
    signupm : {
        fontSize : 24,
        marginTop : 90,
        marginLeft : 20,
        fontWeight: 'bold',
    },
    menu : {
        width:70,
        height:30,
        fontSize:16,
        fontWeight:'bold',
        marginLeft:30,
        marginTop: 30,
        textAlign:'right',
        position: 'absolute',

    },
    dropdown : {
        height:33,
        width:205,
        borderRadius:4,
        border:'none',
        boxShadow:'0px 1px 0px rgba(0, 0, 0, 0.12)',
        marginLeft:110,
        marginTop: 25,

    }
}

export default SignUp;