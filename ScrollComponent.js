import React from "react";
class Chat extends React.Component {
    listRef = React.createRef();
  
    getSnapshotBeforeUpdate(prevProps, prevState) {
      if (prevProps.messages.length < this.props.messages.length) {
        const list = this.listRef.current;
        console.log(list.scrollHeight - list.scrollTop)
        return list.scrollHeight - list.scrollTop;
      }
      return null;
    }
  
    componentDidUpdate(prevProps, prevState, snapshot) {
      if (snapshot !== null) {
        const list = this.listRef.current;
        list.scrollTop = list.scrollHeight - snapshot;
      }
    }
  
    render() {
      return (
        <div ref={this.listRef} style={{maxHeight:"150px",overflowY:"scroll",border:"solid"}}>
          {this.props.messages.map((message, index) => (
            <div key={index}>{message}</div>
          ))}
        </div>
      );
    }
  }
   export default Chat