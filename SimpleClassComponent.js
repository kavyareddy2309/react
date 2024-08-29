import React from "react";
class SimpleClassComponent extends React.Component{
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
            <h2>Hello {this.fname}</h2>
            <button onClick={this.changeName}>change</button>
            </>
        )
    }
}
export default SimpleClassComponent
//btn1.addEventListner("click",()=>{})