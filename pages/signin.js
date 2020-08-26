import {Layout} from "../components/Layout";
import {InputBox} from "../components/common/InputBox";
import {Button} from "../components/Button";
import {ErrorBox} from "../components/common/ErrorBox";
import {TextBox} from "../components/common/TextBox";
const Signin = () => {
    return <>
            <Layout>
                <ErrorBox
                    title="띠로리~!"
                    text="회원이 아니거나 회원정보가 틀렸어요"
                />
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
                <Button
                    buttonname ="로 그 인"
                />
                <TextBox
                    text="허걱쓰.. Hoxy 아이디나 패스워드를 잊어버리셨어요?"
                    link="계정 정보 찾기"
                />
            </Layout>
        </>
}

export default Signin;