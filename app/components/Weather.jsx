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


    componentDidMount: function () {
        var city = this.props.location.query.location;

        if (city && city.length > 0) {
            this.handleSearch(city);
            window.location.hash = "#/";
        }
    },


    componentWillReceiveProps: function (newProps) {
        var city = newProps.location.query.location;

        if (city && city.length > 0) {
            this.handleSearch(city);
            window.location.hash = "#/";
        }
    },


    handleSearch: function (city) {
        this.setState({ 
            isLoading: true,
            errorMessage: undefined,
            city: undefined,
            temp: undefined,
        });

        OpenWeatherMap.getTemp(city)
            .then(results => {
                let retrievedCity = `${results.city}, ${results.country} (${city})`;
                this.setState({
                    city: retrievedCity,
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
        var {isLoading, city, temp, errorMessage} = this.state;

        function renderMessage () {
            if (isLoading) {
                return <h3 className="text-center">Fetching weather...</h3>;
            } else if (city && temp) {
                return <WeatherMessage city={city} temp={temp} />;
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