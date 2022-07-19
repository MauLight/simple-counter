//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import propTypes from "prop-types"; 

// include your styles into the webpack bundle
import "../styles/index.css";
import './component/icon.js'

const SimpleCounter = (props) => {
    return(
        <div className = "counter-body">
            <div className = "inner-clock">
                <i className="far fa-clock"></i>
            </div>
            <div className = "days">{props.four %10}</div>
            <div className = "hours">{props.three %10}</div>
            <div className = "minutes">{props.two %10}</div>
            <div className = "seconds">{props.one %10}</div>
        </div>
    )
}


SimpleCounter.propTypes = {
    one: propTypes.number,
    two: propTypes.number,
    three: propTypes.number,
    four: propTypes.number
};


let counter = 0;
    setInterval(function(){

        const one = Math.floor(counter/1);
        const two = Math.floor(counter/10);
        const three = Math.floor(counter/100);
        const four = Math.floor(counter/1000);

        counter++;

        ReactDOM.render(
            <SimpleCounter one= {one} two= {two} three= {three} four= {four} />, document.querySelector("#app")
        )
},1000)

//render your react application
ReactDOM.render(<SimpleCounter />, document.querySelector("#app"));
