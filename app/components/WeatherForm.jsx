var 
    React       = require("react"),

    end_var_def = [];

var WeatherForm = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();
        var city = this.refs.city.value;
        this.refs.city.value = "";

        if (city.length > 0) this.props.onSearch(city);
    },


    render: function () {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="search" placeholder="Search weather by city" ref="city" />
                    <input type="submit" className="button expanded hollow" value="Get Weather" />
                </form>
            </div>
        )
    }
});

module.exports = WeatherForm;