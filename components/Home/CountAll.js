import React from 'react';


class CountAll extends React.Component {
    state = {
        days: "0",
        hours: "0",
        minutes: "0",
        seconds: "0",
        h:"0",
        t:"0",
        o:"0"
    };

    intervalId;
    intervalId2;

    componentDidMount() {
        const march = new Date("2020-9-22");
        this.intervalId = setInterval(() => {
            this.countDay(march);
        }, 1000);

    }

    render() {
        const { days,h,t,o, hours, minutes, seconds, progress } = this.state;
        return (
            <div style={styles.dayCountDiv}>
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

                    <div style={styles.time}>
                        {seconds}s
                    </div>



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
                o:"0"
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

            amount = Math.floor(amount / 1000);
            days = Math.floor(amount / 86400);
            sedays = days;
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
                h,t,o,
                minutes: mins,
                seconds: secs
            });
        }
    };
}
const styles = {
      dayCountDiv:{
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
        height : 25,
        color : '#FFFFFF',
        display : 'inline-block',
        backgroundColor : '#6DB724',
        borderRadius : 4,
        textAlign : 'center',
        paddingTop:5,
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
    }
};

export default CountAll;