import React from "react";
class SimpleAPICall extends React.Component{
    constructor(props){
        super(props)
        this.state={
            results:[]
        }
    }
    handleAPICall=(e)=>{
       
        fetch("https://jsonplaceholder.typicode.com/users").then((res)=>res.json()).then((res)=>this.setState({results:res})).catch((err)=>console.log(err))
    }
    render(){
        return(
            <>
            <button onClick={(e)=>this.handleAPICall(e)}>call API</button>
            {
                this.state.results.map((item)=>(
                    <>
                    <h1>{item.name}</h1>
                    <h2>{item.username}</h2>
                    </>
                ))
            }
</>
          
        )
    }
}
export default SimpleAPICall