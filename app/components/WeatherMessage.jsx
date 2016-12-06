// var 
//     React       = require("react"),

//     end_var_def = [];

// var WeatherMessage = React.createClass({
//     render: function () {
//         var {location, temp} = this.props;

//         return(
//             <div className="class" id="id">
//                 It is {temp} in {location}
//             </div>
//         )
//     }
// });

var React = require("react");

var WeatherMessage = ({location, temp}) => {
    return(
        <h3 className="text-center" id="id">
            It is {temp} in {location}
        </h3>
    )
    
}

module.exports = WeatherMessage;