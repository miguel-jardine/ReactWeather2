var 
    React           = require("react"),
    ReactDOM        = require("react-dom"),
    ReactDOMServer  = require("react-dom/server"),

    end_var_def = [];

var ErrorModal = React.createClass({

    getDefaultProps: function () {
        return {
            title: "Error"
        }
    },


    propTypes: {
        title: React.PropTypes.string,
        message: React.PropTypes.string.isRequired
    },


    componentDidMount: function () {
        var {title, message} = this.props;

        var dialog = (
            <div className="reveal tiny text-center" id="error-modal" data-reveal="">
                <h4>{title}</h4>
                <p>{message}</p>
                <p>
                    <button className="button hollow" data-close="">
                        OK
                    </button>
                </p>
            </div>
        )

        var $modal = $(ReactDOMServer.renderToString(dialog));
        $(ReactDOM.findDOMNode(this)).html($modal);
        
        var modal = new Foundation.Reveal($("#error-modal"));
        modal.open();
    },


    render: function () {
        return <div></div>;
    }
});

module.exports = ErrorModal;