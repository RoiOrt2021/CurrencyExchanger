import React, { useEffect, useState }from 'react';
import AppInput from './AppInput';



function AppExchange(props){
    let [coins, SetCoins] = useState();
    
    const doApi = async() =>  {
        let url = "json/money.json";
        try{
            let resp = await fetch(url);
            let data = await resp.json()
            SetCoins(data.quotes);
            console.log(data);
         
            
        }
        catch(err){
            console.log(err);
           
        }
    }
    useEffect(() => {
       doApi();
    }, []);
    return(
        <div className="container">
              <h1>Currency . Exchanger</h1>
        <AppInput coins={coins}/>
        </div>
      
    )
}

export default AppExchange 