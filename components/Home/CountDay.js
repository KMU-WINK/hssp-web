import React from 'react';
import Moment from "react-moment";
import CountAll from "./CountAll"
import {CountCard} from "./CountCard";

class CountDay extends React.Component{
    state = {
        startDay: 100,
    }
    getStartDay(){
        const day = document.getElementById("enlistmentDay").value;
        this.setState((state, props)=> {
            return {startDay : day}
        });
    }
    render() {
        return (
            <div>
                <input type="date" id="enlistmentDay" onChange={()=>this.getStartDay()}/>
                <Cal startDay = {this.state.startDay}/>
            </div>

        )
    }
}

export default React.memo(CountDay);

class Cal extends React.Component{
    state = {
        forday:0,
    }
    calDday(){
        const endday = <Moment format="YYYY-MM-DD" add={{month:13}}>{this.props.startDay}</Moment>
        const forday = <Moment diff={endday} unit="days">{this.props.startDay}</Moment> //전역일까지 날짜수
        this.setState((state, props)=>{
            return {forday:forday}
        })
    }



    render() {

        return (
            <div>
                <button onClick={()=>{this.calDday()}}>확인하기</button>
                 {this.state.forday}일남음
            </div>
        );

    }

}






