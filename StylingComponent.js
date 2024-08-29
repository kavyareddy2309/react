import React from "react";
import './StylingComponent.css'
class StylingComponent extends React.Component{
    constructor(props){
        super(props)
        this.fname="inital"
    }
    changeName=()=>{
        this.fname="final"
        console.log("inside func",this.fname)
        this.render()
       
    }
    render(){
        {console.log("render")}
        return(
            <>
            <h1>Demo</h1>
            <h2 className="heading2">Hello {this.fname}</h2>
            <button onClick={this.changeName}>change</button>
            </>
        )
    }
}
export default StylingComponent
