window.ProjectEditForm = React.createClass({
  getInitialState: function () {
    var projectId = this.props.params.projectId;
    var project = this._findProjectById(projectId) || {};
    return ({
      id: projectId,
      title: project.title,
      description: project.description,
      shared_users: []
    });  },

  _findProjectById: function () {
    var foundProject;
    ProjectStore.all().forEach(function(project) {
      if (project.id === parseInt(this.props.params.projectId)) {
        foundProject = project;
      }
    }.bind(this));
    return foundProject;
  },

  componentDidMount: function (){
    ProjectStore.addChangeListener(this.goToProjectPage);
  },

  componentWillUnmount: function (){
    ProjectStore.removeChangeListener(this.goToProjectPage);
  },

  handleFormSubmit: function (e) {
    e.preventDefault();
    ApiUtil.editProject({
      id: this.state.id,
      title: this.state.title,
      description: this.state.description
    });
  },

  goToProjectPage: function () {
    var projectUrl = "/projects/" + this.state.id;
    this.props.history.pushState(null, projectUrl);
  },

  handleCancelClick: function (e) {
    e.preventDefault();
    history.back();
  },

  updateTitle: function (e){
    this.setState({title: e.target.value});
  },

  updateDescription: function (e){
    this.setState({description: e.target.value});
  },

  handleRemoveUserClick: function (e) {
    console.log("Remove user button clicked - will remove 'ProjectShare', and flash alert success");
  },

  render: function () {
    return (
      <div>
        <h1>Update TaskMaster Project:</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input type="text"
                 name="project[title]"
                 placeholder="Name the project"
                 onChange={this.updateTitle}
                 value={this.state.title} />
          <input type="text"
                 name="project[description]"
                 placeholder="Add a project description with more info for the team (optional)"
                 onChange={this.updateDescription}
                 value={this.state.description} />
               <br/>
          <label>Invite Team Members:</label>
          <ul>
          {
            this.state.shared_users.map(function (shared_user) {
              return(
                <li>{shared_user.username}<input type="button" onClick={this.handleRemoveUserClick} value="Remove from project" /></li>
              );
            })
          }
          </ul>
          <input type="text" name="project[shared_user]" placeholder="Please add a username" />
          <input type="submit" value="Save Project" />

        </form>
        <p onClick={this.handleCancelClick}>or Cancel</p>
      </div>
    );
  }
});
