import {Download} from "../components/Download";
import React from "react";

import GooglePlay from "react-svg-loader!../assets/landingPage/googlePlay.svg"
import GooglePlayActive from "react-svg-loader!../assets/landingPage/googlePlayActive.svg"
import AppStore from "react-svg-loader!../assets/landingPage/appStore.svg"
import AppStoreActive from "react-svg-loader!../assets/landingPage/appStoreActive.svg"
import WebBtn from "react-svg-loader!../assets/landingPage/WebBtn.svg"
import WebBtnActive from "react-svg-loader!../assets/landingPage/WebBtnActive.svg"
import Phone from "react-svg-loader!../assets/landingPage/phone.svg"


const downloads = [
    {
        name : "googlePlay",
        icon : <GooglePlay />,
        activeIcon : <GooglePlayActive />,
        link : '/',
    },
    {
        name: "AppStore",
        icon: <AppStore />,
        activeIcon: <AppStoreActive />,
        link: '/',
    },
    {
        name : "WebLogin",
        icon : <WebBtn />,
        activeIcon: <WebBtnActive />,
        link : '/',
    },
];
const LandingPage = () => {
    return<>
        <header>
            <div>
                <p><b>소중한 당신</b>의 군 생활을</p>
            </div>
            <p>조금 더 알차게 만들어 줄 애플리케이션</p>
            <h1>생활관 막내</h1>
        </header>
        <section>
            <Phone />
            <div>
                <p>한눈에 보는 <b>오늘의 식단</b></p>
                <p>한 끼 <b>영양분석</b>까지</p>
            </div>
            <div>
                <p><b>실시간</b>으로 줄어드는</p>
                <p>나의 <b>군생활</b></p>
            </div>
            <Download
                icons = {downloads}
            />
        </section>
        <section>
            <p>당신을 위한 <b>다양한 혜택</b>을</p>
            <p>놓치지 마세요</p>
            <p>한 눈에 모아서
                최신 소식을
                빠르게 정리해
                드릴게요</p>
        </section>
    </>;
};
export default LandingPage;