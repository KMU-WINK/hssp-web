import {Header} from './Header';
import {BottomTabBar} from "./BottomTabBar";

const GlobalCSS = () => {
    return <style jsx global>{`
        body {
            margin:0;
            padding:0;
        }
        ul {
            padding:0;
            margin:0;
        }
        `}
    </style>;
};


export const Layout = ({children}) => {
    return <>
        <Header />
        {children}
        <BottomTabBar

        />
        <GlobalCSS />
    </>;
};