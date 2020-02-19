import React from "react"
import ReactDOM from "react-dom"

function Mylist (){
    return (
        <div>
            <h1>Jonas dos Santos</h1>
            <p>Lorem ipsum dolor</p>
            <ol>
                <li>US</li>
                <li>Germany</li>
                <li>UK</li>
            </ol>
        </div>
    );
}

class Test extends React.Component{
    render () {
        return (
            <div>
                <Mylist />
            </div>
        );
    }
}


ReactDOM.render(
    <Test />,
    document.getElementById("root")
)


