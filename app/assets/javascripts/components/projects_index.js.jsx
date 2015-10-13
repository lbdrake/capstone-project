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

  render: function () {
    return (
      <div className="projectindex">
        <ul>
          {this.state.projects.map(function(project) {
            return [
              <li className="projectitem" key={project.id}>{project.title}</li>,
                <ul>
                  <li className="projectitemdescription" key={"description" + project.id}>{project.description}</li>
                  <li className="projectitemupdated" key={"updated" + project.id}>project updated about {jQuery.timeago(new Date(project.updated_at))}</li>
                </ul>
          ];
          })}
        </ul>
      </div>
    );
  }
});
