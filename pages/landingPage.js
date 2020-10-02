import {Download} from "../components/LandingPage/Download";
import React from "react";
import GooglePlay from "react-svg-loader!../assets/landingPage/googlePlay.svg"
import GooglePlayActive from "react-svg-loader!../assets/landingPage/googlePlayActive.svg"
import AppStore from "react-svg-loader!../assets/landingPage/appStore.svg"
import AppStoreActive from "react-svg-loader!../assets/landingPage/appStoreActive.svg"
import WebBtn from "react-svg-loader!../assets/landingPage/WebBtn.svg"
import WebBtnActive from "react-svg-loader!../assets/landingPage/WebBtnActive.svg"
import {LandingHeader} from "../components/LandingPage/LandingHeader"
import {FirstSection} from "../components/LandingPage/FirstSection"

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
const GlobalCSS = () => {
    return <style jsx global>{`
        body {
            margin:0;
            padding:0;
            background-color:#F7F7F7;
            font-family: SpoqaHanSans;
            font-weight : lighter;
        }
        `}
    </style>;
};
const LandingPage = () => {
    return<>
        <LandingHeader/>
        <section>
            <FirstSection/>

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
        <GlobalCSS/>
    </>;
};
export default LandingPage;