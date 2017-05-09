var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({

    render: function() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">Score Keeper App</li>
                        <li>
                            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Scores</IndexLink>
                        </li>
                        <li>
                            <Link to="/players" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Players</Link>
                        </li>
                        <li>
                            <Link to="/games" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Games</Link>
                        </li>
                        <li>
                            <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
});

module.exports = Nav;