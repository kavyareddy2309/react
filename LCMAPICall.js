import React from "react";
import axios from "axios"
class LCMAPICall extends React.Component{
    constructor(props){
        super(props)
        this.state={
            results:[]
        }
    }
    componentDidMount(){
       
       /* fetch("https://jsonplaceholder.typicode.com/users").then((res)=>res.json()).then((res)=>this.setState({results:res})).catch((err)=>console.log(err))*/
       axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>console.log(res)).catch((err)=>console.log(err))
    }
    render(){
        return(
            <>
           
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
export default LCMAPICall