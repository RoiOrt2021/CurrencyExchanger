import React,{Component} from "react";
import "./css/header.css"

class Header extends Component{
  state = {h2Color:"orange"}
  changeH2Color = () => {
    // this.setState({h2Color:"aqua"})
    this.setState({
      h2Color:(this.state.h2Color == "orange") ? "aqua" : "orange"
    })
  }
// 14:46
  render(){
    return(
      <header className="container bg-dark">
        <h2 onClick={this.changeH2Color} style={{color:this.state.h2Color,border:"4px solid red"}} >Counter app</h2>
      </header>
    )
  }
}

export default Header;