window.ProjectShow = React.createClass({
  getInitialState: function () {
    var projectId = parseInt(this.props.params.projectId);
    var project = this._findProjectById(projectId) || {};
    return ({ project: project });

  },
  _findProjectById: function () {
    var foundProject;
    ProjectStore.all().forEach(function(project) {
      if (project.id === parseInt(this.props.params.projectId)) {
        foundProject = project;
      }

    }.bind(this));
    return foundProject;
  },

  componentDidMount: function () {
    ProjectStore.addChangeListener(this._updateProjectInfo);
    ApiUtil.fetchProjects();
  },

  componentWillUnmount: function () {
    ProjectStore.removeChangeListener(this._updateProjectInfo);
  },

  _updateProjectInfo: function () {
    var projectId = parseInt(this.props.params.projectId);
    var project = this._findProjectById(projectId);
    this.setState({ project: project });
  },

  handleEditProjectClick: function (e) {
    e.preventDefault();
    var projectUrl = "/projects/" + this.state.project.id + "/edit";
    this.props.history.pushState(null, projectUrl, this.state.project);
  },

  handleDeleteProjectClick: function (e) {
    window.confirm("Are you sure you want to delete this project? This action is permanent and cannot be undone");
    ApiUtil.deleteProject(this.state.project);
    this.props.history.pushState(null, "/");
  },

  render: function () {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h1>Title: {this.state.project.title} <button onClick={this.handleEditProjectClick} className="btn btn-default btn-xs">edit</button></h1>
          <h2>Descr: {this.state.project.description}</h2>
        </div>
        <div className="panel-body">
          panel content
        </div>
        <div className="panel-footer">
          <p onClick={this.handleDeleteProjectClick}><u>Delete this project</u></p>
        </div>
      </div>
    );
  }
});
