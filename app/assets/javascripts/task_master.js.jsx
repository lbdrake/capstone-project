$(function () {
var Route = ReactRouter.Route;
var Router = ReactRouter.Router;
var IndexRoute = ReactRouter.IndexRoute;

var App = React.createClass({
  render: function () {
    return (
      <div>
        <NavBar history={this.props.history}/>
        {this.props.children}
      </div>
    );
  }
});

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={ProjectsIndex} />
    <Route path="projects/new" component={ProjectForm} />
    <Route path="projects/:projectId" component={ProjectShow} />
    <Route path="projects/:projectId/edit" component={ProjectEditForm} />
    <Route path="my-tasks" component={MyTasks} />
  </Route>
);

window.renderReact = function () {
  React.render(<Router>{routes}</Router>, document.getElementById("content"));
};
  // React.render(<Router>{routes}</Router>, document.getElementById("content"));
});
