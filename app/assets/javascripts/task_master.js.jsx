$(function () {
var root = document.getElementById("content")
var Route = ReactRouter.Route;
var Router = ReactRouter.Router;
var IndexRoute = ReactRouter.IndexRoute;

var App = React.createClass({
  render: function () {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={ProjectsIndex} />
    <Route path="projects/:projectId" component={ProjectIndexItem} />
  </Route>
);

  React.render(<Router>{routes}</Router>, root);
});
