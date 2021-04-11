import React, { useEffect, useState} from 'react';
import './AppInput'

function AppScore(props){
    let [date, setDate] = useState(new Date());
    useEffect( () => { 
        let timerID = setInterval( () => setDate(new Date()), 1000);
        return function cleanup(){
            clearInterval(timerID);
        }
   
    })
    return(
        <div>
            <button onClick = {props.convert} className="btn btn-primary">CONVERT!</button>
            <div className="answer" style={{display:'none'}}>
           <h2>{props.Input} {props.From} in {props.To} is:</h2> 
           <span className="display-6">🥁</span>
            <h3 className="mt-3">{props.value} {props.To} !</h3>
            <div>
                <h4>{date.toLocaleDateString()}</h4>
                <h4>{date.toLocaleTimeString()}</h4>
            </div>
            </div>
        </div>
    )
}

export default AppScore