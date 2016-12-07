var 
    React       = require("react"),

    WeatherForm     = require("WeatherForm"),
    WeatherMessage  = require("WeatherMessage"),
    OpenWeatherMap  = require("OpenWeatherMap"),
    ErrorModal      = require("ErrorModal"),
    
    end_var_def = [];

var Weather = React.createClass({
    getInitialState: function () {
        return {
            isLoading: false
        }
    },


    handleSearch: function (location) {
        // var that = this;
        this.setState({ 
            isLoading: true,
            errorMessage: undefined
        });
        
        OpenWeatherMap.getTemp(location)
            .then(results => {
                let retrievedLocation = `${results.city}, ${results.country} (${location})`;
                this.setState({
                    location: retrievedLocation,
                    temp: results.temp, 
                    isLoading: false
                });
            })
            .catch(err => {
                this.setState({ 
                    isLoading: false,
                    errorMessage: err.message
                });
            })
    },


    render: function () {
        // render: () => {
        var {isLoading, location, temp, errorMessage} = this.state;

        function renderMessage () {
            if (isLoading) {
                return <h3 className="text-center">Fetching weather...</h3>;
            } else if (location && temp) {
                return <WeatherMessage location={location} temp={temp} />;
            }
        }

        function renderError () {
            if (typeof errorMessage === "string") {
                return (
                    <ErrorModal message={errorMessage} />
                    // <ErrorModal />
                );
            }
        }

        return(
            <div className="container">
                <h1 className="text-center page-title" id="id">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch} />
                {renderMessage()}
                {renderError()}
            </div>
        )
    }
});

module.exports = Weather;