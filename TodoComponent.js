import React from "react";
import PendingComponent from "./PendingComponent";
import CompletedComponent from "./CompletedComponent";
import ArchiveComponent from "./ArchiveComponent";
import hocStyling from "../WHOC/hocStyling";
class TodoComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            todos:[],
            count:0,
            title:"",
            desc:""
        }
    }
   /* static getDerivedStateFromProps(props,state){
        return {todos:props.data}
    }*/
    handleUname=(e)=>{
        this.setState({title:e.target.value})
    }
    handlePwd=(e)=>{
        this.setState({desc:e.target.value})
    }
    getCompletedItems=()=>{
       const completedItems= this.state.todos.filter((item)=>item.status===true&&item.active===true)
       return completedItems
    }
    getPendingItems=()=>{
        const pendingItems= this.state.todos.filter((item)=>item.status===false)
        return pendingItems
     }
     getArchiveItems=()=>{
        const archivedItems= this.state.todos.filter((item)=>item.active===false)
        return archivedItems
     }
     changeCompletionStatus=(todoId)=>{
        const temp=this.state.todos
        const obj=temp.find((item)=>item.id===todoId)
        obj.status=!obj.status
        this.setState({todos:temp})
     }
     changeActiveStatus=(todoId)=>{
        const temp=this.state.todos
        const obj=temp.find((item)=>item.id===todoId)
        obj.active=!obj.active
        this.setState({todos:temp})
     }
     addToDo=()=>{
        console.log("trigeer")
        const newItem={
           id: 4,
           title:this.state.title,
           desc:this.state.desc,
           status:false,
           active:true
        }
       
        //this.state.todos.push(newItem) ->wrong
        const temp=[...this.state.todos,newItem]
       
        this.setState({todos:temp})
       
     }
    render(){
       console.log("parent")
        return(
            
            <>
             <>
            <h1>Add Todo</h1>
            Title:<input type='text' onChange={(e)=>this.handleUname(e)}></input>
            Desc:<input type='text' onChange={(e)=>this.handlePwd(e)}></input>
            <button onClick={()=>this.addToDo()}>add todo</button>
            </>
            <PendingComponent prop1={this.getPendingItems()} prop2={this.changeCompletionStatus}></PendingComponent>
           <CompletedComponent prop1={this.getCompletedItems()} prop2={this.changeCompletionStatus} prop3={this.changeActiveStatus}></CompletedComponent>
          <ArchiveComponent prop1={this.getArchiveItems()}></ArchiveComponent>
           
            </>
        )
    }
}
export default hocStyling(TodoComponent)