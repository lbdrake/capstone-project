window.ProjectsIndex = React.createClass({
  getInitialState: function () {
    return ({
      projects: ProjectStore.all()
    });
  },

  componentDidMount: function () {
    ProjectStore.addChangeListener(this.updateProjects);
    ApiUtil.fetchProjects();
  },

  componentWillUnmount: function () {
    ProjectStore.removeChangeListener(this.updateProjects);
  },

  updateProjects: function () {
    this.setState({ projects: ProjectStore.all() });
  },

  goToProjectPage: function (e) {
    var projectId = e.currentTarget.id;
    var link = "projects/" + projectId;
    this.props.history.pushState(null, link);
  },

  goToNewProjectForm: function (e) {
    this.props.history.pushState(null, "projects/new");
  },

  render: function () {
    return (
      <div className="projectindex">
        <ul>
          {this.state.projects.map(function(project) {
            return [
              <div id={project.id} onClick={this.goToProjectPage}>
              <li className="projectitem" key={project.id}>{project.title}</li>
                <ul>
                  <li className="projectitemdescription"
                      key={"description" + project.id}>{project.description}</li>
                  <li className="projectitemupdated" key={"updated" + project.id}>
                      Last updated {jQuery.timeago(new Date(project.updated_at))}
                  </li>
                </ul>
              </div>
          ];
        }.bind(this))}
        </ul>
        <p onClick={this.goToNewProjectForm}>Add New Project</p>
      </div>
    );
  }
});
