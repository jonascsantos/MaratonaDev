import React from "react"
import ReactDOM from "react-dom"
import './index.css';

import App from "./components/App"
import Donors from "./components/Donors"


ReactDOM.render(
    <Donors />,
    document.getElementById("donors-react")
)

ReactDOM.render(
    <App />,
    document.getElementById("root")
)


