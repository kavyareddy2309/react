import React from "react";
import _isEqual from "lodash/isEqual"
class ArchiveComponent extends React.Component{
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
        console.log("Archieved Component")
        return(
         <>
         <h1>Archieved Tasks</h1>
         {
             this.props.prop1.map((item)=>(
                 <div>
                     <h3>{item.title}</h3>
                     <p>{item.desc}</p>
                   
                 </div>
             ))
         }
         </>
        )
     }
}
export default ArchiveComponent