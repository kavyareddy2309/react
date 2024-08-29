import React from "react";
import _isEqual from "lodash/isEqual"
class PendingComponent extends React.Component{
    constructor(props){
        super(props)
    }
    shouldComponentUpdate(nextProps){
        
        if(_isEqual(nextProps.prop1,this.props.prop1)){
            return false
        }
        else{
            return true
        }
    }
    render(){
       console.log("pending")
       return(
        <>
        <h1>Pending Tasks</h1>
        {
            this.props.prop1.map((item)=>(
                <div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                    <button onClick={()=>this.props.prop2(item.id)}>done</button>
                </div>
            ))
        }
        </>
       )
    }
}
export default PendingComponent