import React from "react"
import DashBoard from "./ChildComponents/DashBoard"
import SignInComponent from "./ChildComponents/SignInComponent"
class RootComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isLogged:true,
            user:{
                username:"peter",
                role:"admin"
            }
        }
    }
   /* login=()=>{
        console.log("inside login")
        this.setState({isLogged:true})
    }
    logout=()=>{
        console.log("inside logout")
        this.setState({isLogged:false})
    }*/
   toggleUser=()=>{
  /* if(this.state.isLogged){
    this.setState({isLogged:false})
   }
   else{
    this.setState({isLogged:true})
   }*/
  this.setState({isLogged:!(this.state.isLogged)})
 
   }
    render(){
        {console.log("parent")}
        return(
            <>
            {
                this.state.isLogged?
                <>
               <DashBoard userdata={this.state.user} toggleFunc={this.toggleUser}></DashBoard>
                </>:<>
               <SignInComponent></SignInComponent>
                </>
            }
            </>
        )
    }
}
export default RootComponent