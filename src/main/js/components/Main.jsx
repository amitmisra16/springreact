var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
    return(
        <div>
            <Nav />
            <div className="medium-6 large-4 columns small-centered">
                {props.children}
            </div>
        </div>
    );
}

module.exports = Main;