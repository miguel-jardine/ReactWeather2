var 
    React       = require("react"),

    WeatherForm     = require("WeatherForm"),
    WeatherMessage  = require("WeatherMessage"),
    OpenWeatherMap  = require("OpenWeatherMap"),

    end_var_def = [];

var Weather = React.createClass({
    getInitialState: function () {
        return {
            isLoading: false
        }
    },


    handleSearch: function (location) {
        // var that = this;
        this.setState({ isLoading: true});
        
        OpenWeatherMap.getTemp(location)
            .then(results => {
                let retrievedLocation = `${results.city}, ${results.country} (${location})`;
                this.setState({
                    location: retrievedLocation,
                    temp: results.temp, 
                    isLoading: false
                });
            },
            err => {
                alert(err);
                this.setState({ isLoading: false});
            })
    },


    render: function () {
        // render: () => {
        var {isLoading, location, temp} = this.state;

        function renderMessage () {
            if (isLoading) {
                return <h3>Fetching weather...</h3>;
            } else if (location && temp) {
                return <WeatherMessage location={location} temp={temp} />;
            }
        }
        return(
            <div className="container">
                <div className="class" id="id">Get Weather</div>
                <WeatherForm onSearch={this.handleSearch} />
                {renderMessage()}
            </div>
        )
    }
});

module.exports = Weather;