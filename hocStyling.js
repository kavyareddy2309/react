import React from "react"
const hocStyling=(InputComponent)=>{
return class StyledComponent extends React.Component{
    constructor(props)
    {
        super(props)
    }
    render(){
        const globalStyle={color:"white",fontStyle:"italic",backgroundColor:"black"}
        return(
            <div style={globalStyle}>
            <InputComponent {...this.props}></InputComponent>
            </div>
        )
    }
}
}
export default hocStyling