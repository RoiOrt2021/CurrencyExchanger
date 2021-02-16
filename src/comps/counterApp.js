import React,{Component} from "react";
import Card from "./card";
import Header from "./header";
// import "../bootstrap5.min.css"

class CounterApp extends Component{
  // counter = 2;
  state = {counter:3 ,user:"jack"}
  // מיטודות/פונקציות שאנחנו מייצרים תמיד יהיו פונקציות חץ
  add1Counter = () => {
    // מעדכן את המאפיין בסטייט שנרצה
    // ובנוסף מרנדר רק את האזור שקשור למאפיין של הסטייט שעודכן
    this.setState({counter:this.state.counter+1})
  }

  render(){
    return(
      <div>
        <Header />
        <div className="container">
          <h2>{this.state.user} Counter: {this.state.counter}</h2>
          <button onClick={this.add1Counter} className="btn btn-dark">add 1</button>
          <div className="row">
            {/* מייצר את הקופנינטה ומעביר לה מאפיין
             בשם טייטל שכדי שהקומפנינטה תכיר אותו בתוכה
             נשתמש במאפיין פרופס */}

             {/* צרו מאפיין בשם PARA 
             שמכיל את התיאור של העובד */}
            <Card para="good worker" title="Moshe cohen" pic="images/pic2.jpg" />
            <Card para="bad worker" title="Jack black"  pic="images/pic3.jpg"/>
          </div>
        </div>
      </div>
    )
  }
}

export default CounterApp;