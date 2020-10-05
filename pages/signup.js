import React from "react";

import {Layout} from "../components/Layout";
import {InputBox} from "../components/common/InputBox";
import {CheckBox} from "../components/common/CheckBox";
import {Button} from "../components/Button";
import {useRouter} from "next/router";
import {ErrorBox} from "../components/common/ErrorBox";
import {Loading} from "../components/common/Loading";
import {signUp} from "../lib/Server";

const SignUp = () => {
    const router = useRouter();
    const [errorMsg, setErrorMsg] = React.useState('');

    const [phone, setPhone] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [name, setName] = React.useState('');
    const [army, setArmy] = React.useState('육군');
    const [terms, setTerms] = React.useState(false);
    const [privacy, setPrivacy] = React.useState(false);
    const [isLoading, setLoading] = React.useState(false);

    const onSignUp = async () => {
        let checkedField = 0;
        const fields = [phone, password, name, army];
        fields.forEach(field => checkedField += !(!field)); // 비어있는 필드 카운트
        if (checkedField === fields.length)
        {
            // 약관 체크 후 가입
            if(terms && privacy)
            {
                setLoading(true);
                const signUpResponse = await signUp({phone, password, name, army});
                setLoading(false);
                if(!signUpResponse)
                {
                    setErrorMsg('서버 요청 실패!');

                }else if (signUpResponse.status >= 200 && signUpResponse.status < 300)
                {
                    alert('회원가입을 환영합니다!');
                    router.push('/signin');
                }
                else if (signUpResponse.status >= 400 && signUpResponse.status <= 500)
                {
                    setErrorMsg(signUpResponse.data.error);
                }
                else
                {
                    setErrorMsg('알 수 없는 오류');

                }
            }
            else
            {
                setErrorMsg('모든 약관에 동의하세요.');
            }
        }
        else
        {
            setErrorMsg('모든 필드를 입력하세요');
        }
    };
    return <>
        <Layout>
            <ErrorBox
                title="띠로리~!"
                text={errorMsg}
                setText={setErrorMsg}
            />
            <h1 id="signinm" style={styles.signinm}>이미 회원인데요?!</h1>
            <Button
                buttonname ="로그인"
                onClick={()=>router.push('/signin')}
            />
            <h1 id="signupm" style={styles.signupm}>회원가입</h1>
            <InputBox
                name="전화번호"
                placeholder="전화번호 입력하세요"
                type="text"
                detailmessage="고속상황전파체계는 아이디 대신 전화번호로 로그인해요!"
                onChange={setPhone}
                value={phone}
            />
            <InputBox
                name="패스워드"
                placeholder="패스워드 입력하세요"
                type="password"
                onChange={setPassword}
                value={password}
            />
            <InputBox
                name="이름"
                placeholder="이름을 입력하세요"
                type="text"
                onChange={setName}
                value={name}
            />
            <h1 id="menu" style={styles.menu}>군 분류</h1>

            <select style={styles.dropdown} value={army} onChange={(e)=>setArmy(e.target.value)}>
                <option value="육군">육군</option>
                <option value="해군">해군</option>
                <option value="공군">공군</option>
                <option value="해병대">해병대</option>
                <option value="의무경찰">의무경찰</option>
                <option value="의무소방원">의무소방원</option>
                <option value="사회복무요원">사회복무요원</option>
                <option value="대체복무">대체복무</option>
            </select>

            <CheckBox
                checkboxmessage="고속상황전파체계 서비스 이용 약관동의 (필수)"
                checked={terms}
                onChange={()=>setTerms(!terms)}

            />
            <CheckBox
                checkboxmessage="개인정보취급방침 동의 (필수)"
                checked={privacy}
                onChange={()=>setPrivacy(!privacy)}
            />
            <Button
                buttonname ="회원가입"
                onClick={onSignUp}
            />
        </Layout>
        <Loading
            isLoading={isLoading}
        />
    </>;
};

const styles = {
    signinm : {
        fontSize : 24,
        marginLeft : 21,
        fontWeight: 'bold',
        letterSpacing : '0.24em',
    },
    signupm : {
        fontSize : 24,
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