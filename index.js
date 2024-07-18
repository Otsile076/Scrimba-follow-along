import React from "react";
import ReactDOM from "react-dom";
import About from "./About"

function Product() {
    return(
    <div>
        <ul>
            <li>About me</li>
            <li>Instructions</li>
            <About/>
        </ul>
    </div>
    );
}

ReactDOM.render(<Product />, document.getElementById("root")
   
   
)