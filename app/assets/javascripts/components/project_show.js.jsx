window.ProjectShow = React.createClass({
  getInitialState: function () {
    var projectId = parseInt(this.props.params.projectId);
    var project = this._findProjectById(projectId) || {};
    return ({
      project: project,
      authorusername: UserStore.findbyid(parseInt(this.props.params.projectId))
      });

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
    UserStore.addChangeListener(this._updateAuthorInfo);
    ApiUtil.fetchSingleProject(parseInt(this.props.params.projectId));
    ApiUtil.fetchUsers();
  },

  componentWillUnmount: function () {
    ProjectStore.removeChangeListener(this._updateProjectInfo);
    UserStore.removeChangeListener(this._updateAuthorInfo);
  },

  _updateProjectInfo: function () {
    var projectId = parseInt(this.props.params.projectId);
    var project = this._findProjectById(projectId);
    this.setState({ project: project });
  },

  _updateAuthorInfo: function () {
    this.setState({
      authorusername: UserStore.findbyid(parseInt(this.props.params.projectId))
    })
  },

  handleEditProjectClick: function (e) {
    e.preventDefault();
    var projectUrl = "/projects/" + this.state.project.id + "/edit";
    this.props.history.pushState(null, projectUrl);
  },

  handleDeleteProjectClick: function (e) {
    if (window.confirm("Are you sure you want to delete this project?")) {
        ApiUtil.deleteProject(this.state.project);
        this.props.history.pushState(null, "/");
        }
  },

  render: function () {
    return (
      <div className="general-show-panel">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h2>{this.state.project.title} <button onClick={this.handleEditProjectClick} className="btn btn-default btn-xs invite-users-button">Invite more users</button></h2>
            <h3>{this.state.project.description}</h3>
          </div>
          <div className="panel-body">
            <ToDoLists authorusername={this.state.authorusername} project={this.state.project} todolists={this.state.project.todolists || []} />
          </div>
          <div className="panel-footer">
            <p className="delete-this-project-link" onClick={this.handleDeleteProjectClick}>Delete this project</p>
          </div>
        </div>
      </div>
    );
  }
});
