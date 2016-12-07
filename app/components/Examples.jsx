var 
    React       = require("react"),
    {Link}      = require("react-router"),

    end_var_def = [];


var Examples = () => {
    return(
        <div>
            <h1 className="text-center page-title">Examples</h1>
            <p>Here are a few example locations to try out:</p>
            <ol>
                <li>
                    <Link to="/?location=Philadelphia" >Philadelphia, PA (USA)</Link>
                </li>
                <li>
                    <Link to="/?location=Rio" >Rio de Janiero, Brazil</Link>
                </li>
            </ol>
        </div>
    )
};

module.exports = Examples;