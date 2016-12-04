var 
    React       = require("react"),

    end_var_def = [];

var WeatherForm = React.createClass({
    onFormSubmit: function (e) {
        var location = this.refs.location.value;
        this.refs.location.value = "";

        if (location.length > 0) this.props.onSearch(location);
    },


    render: function () {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" placeholder="Enter city name" ref="location" /><br/>
                    <button>Get Weather</button>
                </form>
            </div>
        )
    }
});

module.exports = WeatherForm;