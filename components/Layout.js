import {Header} from './Header';

export const Layout = ({children}) => {
    return <>
        <Header />

        {children}
    </>;
};