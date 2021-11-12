import React,{Component} from 'react'

const events = () => {
    const clickMe= () => {
        alert("Alert");
    }
    return (
        <div>
            {/* <p onClick={}>Click me</p> */}
            <button onClick={clickMe} >Click Me</button>
        </div>
    )
}

export default events
