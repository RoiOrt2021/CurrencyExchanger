import React, { useRef, useState } from 'react';
import AppScore from './AppScore';

function AppInput(props){
    let coins = props.coins;
    let [value, SetValue] = useState();
    let [Input, setInput] = useState();
    let [From, setFrom] = useState();
    let [To, setTo] = useState();
    let InputRef = useRef();
    let FromRef = useRef();
    let ToRef = useRef();
    const convert = () =>{
        setInput(InputRef.current.value);
        setFrom(FromRef.current.value.substr(3));
        setTo(ToRef.current.value.substr(3));
        SetValue(((InputRef.current.value / coins[FromRef.current.value]) * coins[ToRef.current.value]).toFixed(3))
        document.querySelector(".answer").style.display = "block";
        
    }
   
    const swapCurrency = () => {
        let temp;
        temp = FromRef.current.value;
        FromRef.current.value = ToRef.current.value;
        ToRef.current.value = temp;
    }
       
    return(
        <React.Fragment>
        <div>
         
     
            <h4>Amount</h4>
            <input  ref={InputRef} className="amount form-control" type="number" defaultValue={"USDUSD"}/>
<div className="selectbox d-flex">
    <div>
           <h4>From</h4>
            <select ref={FromRef} className="select form-control">
                <option value={"USDUSD"}>USD</option>
                <option value={"USDEUR"}>EUR</option>
                <option value={"USDILS"}>ILS</option>
                <option value={"USDBTC"}>BTC</option>
                <option value={"USDTHB"}>THB</option>
                </select> 
    </div>
                <i onClick={swapCurrency} className="fa fa-retweet" aria-hidden="true"></i>
<div>
               <h4>To</h4>
            <select ref={ToRef} className="select form-control">
                <option value={"USDUSD"}>USD</option>
                <option value={"USDEUR"}>EUR</option>
                <option value={"USDILS"}>ILS</option>
                <option value={"USDBTC"}>BTC</option>
                <option value={"USDTHB"}>THB</option>
                </select> 
</div>
</div>
                <AppScore value = {value} Input = {Input} From = {From} To = {To} convert = {convert}/> 

        </div>
        </React.Fragment>
    )
}

export default AppInput