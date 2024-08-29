import React from "react";
class FormComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            title:"",
            desc:""
        }
    }
    handleUname=(e)=>{
        this.setState({title:e.target.value})
    }
    handlePwd=(e)=>{
        this.setState({desc:e.target.value})
    }
    
    render(){

        return(
            <>
            <h1>Login Form</h1>
            Username:<input type='text' onChange={(e)=>this.handleUname(e)}></input>
            Password:<input type='text' onChange={(e)=>this.handlePwd(e)}></input>
            <button onClick={()=>this.handleLogin()}>login</button>
            </>
        )
    }
}
export default FormComponent