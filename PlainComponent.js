import React from "react";
import hocStyling from "./hocStyling";
import PropTypes from 'prop-types'
class PlainComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){

        return(
            <>
            <h1>hello{this.props.fname}</h1></>
        )
    }
   
}
PlainComponent.propTypes={
fname:PropTypes.string,
tech:PropTypes.array
}
PlainComponent.defaultProps={
    fname:"XYZUser"
}
/**
 * PropTypes.string
 * PropTypes.array
 * PropTypes.number
 * PropTypes.bool
 * PropTypes.func
 */
export default hocStyling(PlainComponent)