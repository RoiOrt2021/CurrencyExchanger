import React,{Component} from "react";

class Gallery extends Component{
 

  render(){
    return(
      <div className="container">
        <h1>Gallery of pics</h1>
        {/* לולאה על מאפיין שמגיע מקומפ אבא  */}
        { this.props.ar.map(itemImg => {
          return(
            <img src={itemImg} className="w-25" />
          )
        })}
      </div>
    )
  }
}

export default Gallery;