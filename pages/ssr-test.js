import {Layout} from '../components/Layout';

const getServerContent = async () =>{
    const response = await fetch("http://localhost:3500/",{
        method:'GET',
        headers:{
            'Content-Type': 'application/json',
        },
    });
    return response.json();
};

class SSRTest extends React.Component{
    static async getInitialProps({req}){
        return req
            ? {from : await getServerContent()}
            : {from : await getServerContent()}
    };

    render(){
        console.log(this.props.from);
        return <>
            <Layout>
                {this.props.from.map(oneData => {
                    return <ul>
                        <li>{oneData.thumbnailSource}</li>
                        <li>{oneData.name}</li>
                        <li>{oneData.datetime}</li>
                    </ul>;
                })}
            </Layout>
        </>;
    }
}
export default SSRTest;