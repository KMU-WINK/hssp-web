import {Layout} from "../components/Layout";

const About = ({url}) => {
    return <>
        <Layout>
            <h2>test</h2>
            {url.query.keyword}
        </Layout>
    </>;
};

export default About;