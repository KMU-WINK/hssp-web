import React from 'react';
import {Button} from "../Button";
import {useRouter} from "next/router";


class CountAll extends React.Component {
    state = {
        days: "0",
        hours: "0",
        minutes: "0",
        seconds: "0",
        h:"0",
        t:"0",
        o:"0",
        mealCount:"0"
    };

    intervalId;
    intervalId2;

    componentDidMount() {
        const march = new Date(this.props.marchDate); //전역일값받아오기
        this.intervalId = setInterval(() => {
            this.countDay(march);
        }, 1000);

    }

    render() {
        const { days,h,t,o,mealCount, hours, minutes, seconds, progress } = this.state;

        return (

            <div style={styles.dayCountDiv}>
                <div style={!this.props.marchDate ? {...styles.postDateModal} : {display:'none'}}>
                    <h3>전역일을 등록하고 카운팅 기능을 활용 해보세요!</h3>
                    <Button buttonname="등록" style={{margin:0}} onClick={this.props.onClickDateBtn} />
                </div>
                <div>
                    <div style={styles.dayCount}>
                        {h}
                    </div>
                    <div style={styles.dayCount}>
                        {t}
                    </div>
                    <div style={styles.dayCount}>
                        {o}
                    </div>
                    <div style={styles.inlineBlock}>
                        일
                    </div>
                </div>
                <div>
                    <div style={styles.time}>
                        {hours}
                    </div>
                    <div style={styles.comma}>
                        :
                    </div>
                    <div style={styles.time}>
                        {minutes}
                    </div>
                    <div style={styles.sec}>
                        {seconds}s
                    </div>
                </div>
                <div style={styles.mealCount}>
                    (식사집합 {mealCount}회)
                </div>
            </div>


        );
    }

    countDay = toDate => {
        const now = new Date();
        let amount = toDate.getTime() - now.getTime();

        if (amount < 0) {
            this.setState({
                ...this.state,
                day: "0",
                hours: "0",
                minutes: "0",
                seconds: "0",
                h:"0",
                t:"0",
                o:"0",
                mealCount:"0",
            });
            clearInterval(this.intervalId);
        } else {
            let days = 0;
            let h =0;
            let t =0;
            let o =0;
            let hours = 0;
            let mins = 0;
            let secs = 0;
            let sedays = 0;
            let meadays = 0;
            let mealCount="0";

            amount = Math.floor(amount / 1000);
            days = Math.floor(amount / 86400);
            sedays = days;
            meadays = days;
            mealCount = Math.floor(meadays*3);
            h = Math.floor(sedays / 100);
            sedays = sedays%100;
            t = Math.floor(sedays / 10);
            sedays = sedays%10;

            o = sedays;
            amount = amount % 86400;
            hours = Math.floor(amount / 3600);
            amount = amount % 3600;
            mins = Math.floor(amount / 60);
            amount = amount % 60;
            secs = Math.floor(amount);
            this.setState({
                ...this.state,
                days,
                hours,
                h,t,o,mealCount,
                minutes: mins,
                seconds: secs
            });
        }
    };
}
const styles = {
      dayCountDiv:{
          position:'relative',
          textAlign : 'center',
      },
    dayCount : {
        display : 'inline-block',
        backgroundColor : '#6DB724',
        borderRadius : 8,
        width : 40,
        height : 50,
        textAlign : 'center',
        fontWight : 'normal',
        fontSize : '34px',
        latterSpacing : '0.24em',
        color : '#FFFFFF',
        textShadow : '1px 1px 0px rgba(0, 0, 0, 0.15)',
        margin : 5,
        padding : '5px',
        },
    inlineBlock : {
        display : 'inline-block',
        verticalAlign : 'bottom',
        paddingBottom : 5,
        fontStyle : 'normal',
        fontWeight : 'bold',
        color : '#333333',
    },
    time : {
        width : 40,
        height : 40,
        color : '#FFFFFF',
        display : 'inline-block',
        backgroundColor : '#6DB724',
        borderRadius : 4,
        textAlign : 'center',
        paddingTop:5,
        fontSize:25,
        fontWight : 'normal',
        textShadow : '1px 1px 0px rgba(0, 0, 0, 0.15)',
        margin : '0px 4px',
    },
    sec : {
        width : 50,
        height : 40,
        color : '#FFFFFF',
        display : 'inline-block',
        backgroundColor : '#6DB724',
        borderRadius : 4,
        textAlign : 'center',
        paddingTop:5,
        fontSize:25,
        fontWight : 'normal',
        textShadow : '1px 1px 0px rgba(0, 0, 0, 0.15)',
        margin : '0px 4px',
    },
    comma : {
        display : 'inline-block',
        // fontStyle: 'italic',
        fontWeight: 'normal',
        fontSize : 24,
        textAlign : 'center',
        color : '#6DB724',
    },
    mealCount : {
          marginTop:10,
        fontSize : 12,
        letterSpacing : '0.24em',
        color : '#333333',
        paddingBottom : 20,
    },
    postDateModal: {
        position:'absolute',
        textShadow:'1px 1px 30px rgba(0,0,0, .3)',
        left:0,
        right:0,
        top:0,
        bottom:0,
        backgroundColor:'rgba(255, 255, 255, .5)',
    },
};

export default CountAll;