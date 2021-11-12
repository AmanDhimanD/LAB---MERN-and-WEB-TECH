import React from 'react';
import { Component } from 'react';

export class Classcomp extends Component{
    constructor(){
        super()
        this.state={
            message:"Welcome"
        }
    }
    changeMessage(){
        this.setState({
            message:"Thankyou"
        })
    }
    render(){
        return (
            <div>
                <p>From class components : {this.state.message}</p>
                <button onClick={()=>this.changeMessage()}>Sub</button>
            </div>
        )
    }
}
export default Classcomp;
