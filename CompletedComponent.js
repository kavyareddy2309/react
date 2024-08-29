import React from "react";
import _isEqual from "lodash/isEqual"
class CompletedComponent extends React.Component{
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
        console.log("completed")
        return(
         <>
         <h1>Completed Tasks</h1>
         {
             this.props.prop1.map((item)=>(
                 <div>
                     <h3>{item.title}</h3>
                     <p>{item.desc}</p>
                     <button onClick={()=>this.props.prop2(item.id)}>undone</button>
                     <button  onClick={()=>this.props.prop3(item.id)}>delete</button>
                 </div>
             ))
         }
         </>
        )
     }
}
export default CompletedComponent