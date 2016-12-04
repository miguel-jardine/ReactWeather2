var 
    React       = require("react"),
    ReactDOM    = require("react-dom"),

    {Route, Router, IndexRoute, hashHistory}    = require("react-router"),

    Main        = require("Main"),
    Weather     = require("Weather"),
    About       = require("About"),
    Examples    = require("Examples"),

    end_var_def = [];

// Load foundation
require("style!css!foundation-sites/dist/foundation.min.css");
$(document).foundation();


ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main} >
            <IndexRoute component={Weather} />
            <Route path="about" component={About} />
            <Route path="examples" component={Examples} />
        </Route>
    </Router>,
    document.getElementById("app")
);
