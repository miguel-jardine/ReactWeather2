var 
    React       = require("react"),
    Nav         = require("Nav"),

    end_var_def = [];

// var Main = React.createClass({
//     render: function () {
//         return(
//             <div>
//                 <Nav />
//                 <h2>Main Component</h2>
//                 {this.props.children}
//             </div>
//         )
//     }
// });

var Main = (props) => {
    return(
        <div>
            <Nav />
            <h2>Main Component</h2>
            {props.children}
        </div>
    )
}
module.exports = Main;