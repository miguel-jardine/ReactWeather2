var 
    React       = require("react"),
    {Link}      = require("react-router"),

    end_var_def = [];

// var Nav = React.createClass({
//     render: function () {
//         return(
//             <div>
//                 <Link to="/">Get Weather</Link>
//                 <Link to="/about">About</Link>
//                 <Link to="/examples">Examples</Link>

//             <h2>Nav Component</h2>
//             </div>
//         )
//     }
// });

var Nav = () => {
    return(
        <div>
            <h2>Nav Component</h2>
            <Link to="/">Get Weather</Link>
            <Link to="/about">About</Link>
            <Link to="/examples">Examples</Link>
        </div>
    )
}
module.exports = Nav;