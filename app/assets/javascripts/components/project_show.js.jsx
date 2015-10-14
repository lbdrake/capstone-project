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
    console.log("Project Edit button clicked - will load Edit form");

  },

  render: function () {
    return (
      <div>
        <p>We are in ProjectShow</p>
        <h1>{this.state.project.title}</h1>
        <h2>{this.state.project.description}</h2>
        <p onClick={this.handleEditProjectClick}>Edit Project</p>
      </div>
    );
  }
});
