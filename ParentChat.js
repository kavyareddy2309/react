import React from "react";
import Chat from "./ScrollComponent";
class ParentChat extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[],
            input:""
        }
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
       return prevState.data.length
      }
    
      componentDidUpdate(prevProps, prevState, snapshot) {
        if (snapshot !== null) {
         console.log("the length of prev msg",snapshot+1)
        }
    }
    handleChange=(e)=>{
        this.setState({input:e.target.value})
      
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const newdata=[...this.state.data,this.state.input]
        this.setState({data:newdata})
    }
    render()
    {
        return(
            <form>
                Message:<input type='text' onChange={(e)=>this.handleChange(e,'msg')}></input>
                <button onClick={(e)=>this.handleSubmit(e)}>send</button>
                <Chat messages={this.state.data}></Chat>
                </form>
        )
    }
}

export default ParentChat