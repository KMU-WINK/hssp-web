import Link from "next/link";
import {Layout} from "./Layout";

export const Header = (props) =>{

    return <>
        <header>
            <ul>
                <li><Link href="/about"><a>go about</a></Link></li>
                <li><Link href="/ssr-test"><a>go ssr</a></Link></li>
            </ul>
        </header>
    </>;
};