import React, { Component } from "react";
import Gallery from "./gallery";

class AppProto extends Component {
    state = { showInfo: false }
    pics_ar = ["images/pic1.jpg", "images/pic2.jpg", "images/pic3.jpg"]


    toggleShow = () => {
        // TOGGLE של בוליאן בקלות
        this.setState({ showInfo: !this.state.showInfo })
    }

    // פונקציה שמחזירה 
    // JSX לפעמים הרבה יותר נוח לחלק לפונקציות את הקומפנינטה
    showPara = () => {
        return ( <
            p style = {
                { color: "blue" } }
            className = "lead" >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a galley of type etting, remaining essentially unchanged. It was pop </p>
        )
    }

    render() {
 return( <div className="container text-center">
            <h1>My protfolio</h1><img src="images/pic4.jpg"
            className="w-25 rounded-circle my-3"
            alt="koko"/>
            <h2>My Name is: Koko akof!</h2><p className="lead">
            my Name is koko and i love Chips and bananas!!!
            </p> {
                /* בודק אם המשתנה אמת או שקר ולפי זה עובד
                 */
            } {
                (this.state.showInfo) ? this.showPara(): "" }

            <button onClick={ this.toggleShow }
            className="btn btn-info">More info</button><hr/>
            <Gallery ar={this.pics_ar}/></div>
        )
    }
}

export default AppProto;