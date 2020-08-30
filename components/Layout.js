import {BottomTabBar} from "./BottomTabBar";
import {Header} from "./Header";
import React from "react";

import CalcIcon from 'react-svg-loader!../assets/BottomTabBar/calculator.svg';
import CalcActiveIcon from 'react-svg-loader!../assets/BottomTabBar/calculator_active.svg';
import SaleIcon from 'react-svg-loader!../assets/BottomTabBar/sale.svg';
import SaleActiveIcon from 'react-svg-loader!../assets/BottomTabBar/sale_active.svg';
import FoodIcon from 'react-svg-loader!../assets/BottomTabBar/food.svg';
import FoodActiveIcon from 'react-svg-loader!../assets/BottomTabBar/food_active.svg';
import SettingIcon from 'react-svg-loader!../assets/BottomTabBar/settings.svg';
import SettingActiveIcon from 'react-svg-loader!../assets/BottomTabBar/settings_active.svg';

const GlobalCSS = () => {
    return <style jsx global>{`
        body {
            margin:0;
            padding:0;
            background-color:#FAFAFA;
        }
        ul {
            padding:0;
            margin:0;
        }
        
        .container {
            width:420px;
            margin:0 auto;
        }
        
        `}
    </style>;
};


const bottomMenus = [
    {
        name: 'main',
        icon: <CalcIcon />,
        activeIcon: <CalcActiveIcon />,
        link: '/',
    },
    {
        name: 'sale',
        icon: <SaleIcon />,
        activeIcon: <SaleActiveIcon />,
        link: '/discountbenefits',
    },
    {
        name: 'food',
        icon: <FoodIcon />,
        activeIcon: <FoodActiveIcon />,
        link: '/px',
    },
    {
        name: 'settings',
        icon: <SettingIcon />,
        activeIcon: <SettingActiveIcon />,
        link: '/settings',
    },
];

export const Layout = ({children}) => {
    return <>
        <Header />
        <div>
            <div className="container">
                {children}
            </div>
        </div>
        <BottomTabBar
            menus={bottomMenus}
        />
        <GlobalCSS />
    </>;
};