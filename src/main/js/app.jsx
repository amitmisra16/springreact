var React           = require('react');
var ReactDOM        = require('react-dom');
var {Route,
    Router,
    IndexRoute,
    hashHistory}    = require('react-router');

var Main            = require('Main');
var Scores          = require('Scores');
var Players         = require('Players');
var Games           = require('Games');
var About           = require('About');

require('style!css!foundation-sites/dist/css/foundation.min.css');

ReactDOM.render(
    <Router history={hashHistory}>
        <Router path="/" component={Main}>
            <IndexRoute component={Scores} />
            <Route path="players" component={Players} />
            <Route path="games" component={Games} />
            <Route path="about" component={About} />
        </Router>
    </Router>,
    document.getElementById('react')
);