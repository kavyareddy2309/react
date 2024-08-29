import React from "react";
class SimpleState extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:"initial",
            loginTime:"0263872",
            interest:{
                programming:"react js",
                backend:"nodejs"
            },
            connects:[
                {
                    username:"john",
                    email:"john@gmail.com"
                },
                {
                    username:"peter",
                    email:"peter@gmail.com"
                },

            ]
        }
    }
    changeData=()=>{
        console.log("change data is called")
        //this.state.data="final" -> wrong way of changing states
        this.setState({data:"final",
            loginTime:"872398273"
        })
     
    }
   
    render() {
        return (
          <div> 
          {
              this.props.list.map((item)=>(
                  <>
                  <h2>{item.name}</h2>
                  <h2>{item.username}</h2>
                  <p>{item.email}</p>
                  </>
              ))
      }</div>
        );
      }    
    
    
}
export default SimpleState