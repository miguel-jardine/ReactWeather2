// var 
//     React       = require("react"),

//     end_var_def = [];

// var About = React.createClass({
//     render: function () {
//         return(
//             <h2>About Component</h2>
//         )
//     }
// });

var React = require("react");

var About = () => {
    return(
        <div>
            <h1 className="page-title">About Component</h1>
            <p>Technologies I'm learning to make my application:</p>
            <ol>
                <li> 
                    <a href="">React</a>
                </li>
                <li>
                    <a href="">React Native</a>
                </li>
                <li>
                    <a href="">Github</a>
                </li>
                <li>
                    <a href="">Bootstrap</a> vs. <a href="">Foundation</a>
                </li>
                <li>
                    <a href="">JavaScript</a>
                </li>
                <li>
                    <a href="">Node.js</a>
                </li>
                <li>
                    <a href="">MongoDB</a>
                </li>
            </ol>

        </div>
        

    )
}

module.exports = About;