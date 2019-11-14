import React from 'react';

class Element extends React.Component{
    constructor(props){
        super(props);
        this.ukey = props.ukey;
        this.state = {style: {} };
        this.mouseOver = this.mouseOver.bind(this);
        this.mouseOut = this.mouseOut.bind(this);
    }
    mouseOver(){
        var style = {color : "red", fontStyle : "italic"};
        this.setState ({ style : style });
    }

    mouseOut(){
        var style = {color : "", fontStyle : ""};
        this.setState({ style : style })
    }
    render(){
        return(
            <li
            style ={this.state.style}
            onMouseOver={this.mouseOver}
            onMouseOut={this.mouseOut}>
            {this.props.txt}</li>
        )
    }
}

export default Element;