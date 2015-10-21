window.ProjectEditForm = React.createClass({
  getInitialState: function () {
    var projectId = this.props.params.projectId;
    var project = this._findProjectById(projectId) || {};
    return ({
      project: project,
      id: projectId,
      title: project.title,
      description: project.description,
      author_username: UserStore.findbyid(project.author_id),
      new_shared_user: "",
      original_shared_users: project.shared_users,
      shared_users: [],
      noUsersFound: "defaultMessageUsersFound"
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

  componentDidMount: function (){
    ProjectStore.addChangeListener(this.goToProjectPage);
    this.setState({shared_users: this.state.original_shared_users.slice(),
                   author_id: this.state.project.author_id});
    ApiUtil.fetchUsers();
  },

  componentWillUnmount: function (){
    ProjectStore.removeChangeListener(this.goToProjectPage);
  },

  handleFormSubmit: function (e) {
    e.preventDefault();

    var shared_users_to_add = [];
    var shared_users_to_remove = [];

    this.state.original_shared_users.forEach(function(original_shared_user) {
      if (this.state.shared_users.indexOf(original_shared_user.username) === -1) {
      shared_users_to_remove.push(original_shared_user);
      }
    }.bind(this));

    this.state.shared_users.forEach(function(shared_user) {
      if (this.state.original_shared_users.indexOf(shared_user) === -1) {
        shared_users_to_add.push(shared_user);
      }
    }.bind(this))
    ApiUtil.editProject({
      id: this.state.id,
      title: this.state.title,
      description: this.state.description
    }, shared_users_to_add, shared_users_to_remove);
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

  updateNewSharedUser: function (e){
    this.setState({new_shared_user: e.target.value});
  },

  handleRemoveUserClick: function (e) {
      if (e.target.className === "remove-shared-user glyphicon glyphicon-remove-circle") {
        this.state.shared_users.forEach(function(user, idx) {
        var index = "";
        if (user.id === UserStore.find(e.target.previousSibling.innerHTML).id) {
          index = idx;
        }
        this.state.shared_users.splice(index, 1)
        this.setState({shared_users: this.state.shared_users});
      }.bind(this));
    }
  },

  handleAddUserClick: function (e) {
    this.state.noUsersFound = "defaultMessageUsersFound";
    foundUser = UserStore.find(this.state.new_shared_user)
      if (foundUser) {
        this.state.shared_users.push(foundUser);
        this.setState({ new_shared_user: "" });
      } else {
        this.setState({new_shared_user: "", noUsersFound: "noUsersFound"});
      }
  },

  render: function () {
    return (
      <div>
        <h1>Update TaskMaster Project:</h1>
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="title" className="sr-only">Edit Project Title</label>
            <input type="text"
                   name="project[title]"
                   placeholder="Name the project"
                   onChange={this.updateTitle}
                   value={this.state.title} />
        </div>
        <div className="form-group">
          <input type="text"
                 name="project[description]"
                 placeholder="Add a project description with more info for the team (optional)"
                 onChange={this.updateDescription}
                 value={this.state.description} />
         <br/>
       </div>
       <div className="form-group">
          <ul onClick={this.handleRemoveUserClick}>
            <li className="invite-users-header">These team members are already shared:</li>
            <li>{this.state.author_username} (owner)</li>
          {
            this.state.shared_users.map(function (shared_user) {
              return(
                <li key={shared_user.username}
                    className="already-shared">
                  {shared_user.username}
                  <span className="remove-shared-user glyphicon glyphicon-remove-circle">
                  </span>
                </li>
              );
            })
          }
          <li className="invite-users-header">Invite more people:</li>
          </ul>
          <input type="text" name="project[shared_user]"
                             onChange={this.updateNewSharedUser}
                             placeholder="Please add a username"
                             value={this.state.new_shared_user}/>
          <input type="button" onClick={this.handleAddUserClick} value="Add" />
          <p className={this.state.noUsersFound} >Sorry, we couldn't find a user with that username, please try again</p>
        </div>
        <input type="submit" value="Save Project"/><span onClick={this.handleCancelClick}> or <u>Cancel</u></span>

      </form>
    </div>
    );
  }
});
