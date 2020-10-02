import {Download} from "../components/LandingPage/Download";
import React from "react";
import GooglePlay from "react-svg-loader!../assets/landingPage/googlePlay.svg"
import GooglePlayActive from "react-svg-loader!../assets/landingPage/googlePlayActive.svg"
import AppStore from "react-svg-loader!../assets/landingPage/appStore.svg"
import AppStoreActive from "react-svg-loader!../assets/landingPage/appStoreActive.svg"
import WebBtn from "react-svg-loader!../assets/landingPage/WebBtn.svg"
import WebBtnActive from "react-svg-loader!../assets/landingPage/WebBtnActive.svg"
import {LandingHeader} from "../components/LandingPage/LandingHeader"
import {Landingfooter} from "../components/LandingPage/Landingfooter"

import {FirstSection} from "../components/LandingPage/FirstSection"
import {SecondSection} from "../components/LandingPage/SecondSection"
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
            letter-spacing: 0.24em;
        }
        `}
    </style>;
};
const LandingPage = () => {
    return<>
        <LandingHeader/>
        <FirstSection/>

        <Download
            icons = {downloads}
        />
        <SecondSection/>
        <section style={styles.footer}>
            <Landingfooter/>
        </section>
        <GlobalCSS/>
    </>;
};
const styles = {
    footer: {
        height: 800,
        position:'relative'
    }
}

export default LandingPage;