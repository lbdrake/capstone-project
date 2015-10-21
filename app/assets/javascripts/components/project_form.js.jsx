window.ProjectForm = React.createClass({
  getInitialState: function () {
    return ({
      noUsersFound: "defaultMessageUsersFound",
      title: "",
      description: "",
      new_shared_user: "",
      shared_users: []
    });
  },

  componentDidMount: function (){
    ProjectStore.addChangeListener(this.goToProjectPage);
    ApiUtil.fetchUsers();
  },

  componentWillUnmount: function (){
    ProjectStore.removeChangeListener(this.goToProjectPage);
  },

  handleFormSubmit: function (e) {
    e.preventDefault();
    ApiUtil.createProject({ project: {
      title: this.state.title,
      description: this.state.description }}, this.state.shared_users);
  },

  goToProjectPage: function () {
    var projectUrl = "/projects/" + ProjectStore.last()[0].id;
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

  updateNewSharedUser : function (e){
    this.setState({new_shared_user: e.target.value});
  },

  handleRemoveUserClick: function (e) {
    debugger;
    if (e.target.className === "remove-shared-user glyphicon glyphicon-remove-circle") {
      this.state.shared_users.forEach(function(user,idx){
        var index = "";
        if (user.id === UserStore.find(e.target.previousSibling.innerHTML).id) {
          index = idx;
        }
        this.state.shared_users.splice(index, 1)
        this.setState({shared_users: this.state.shared_users})
      }.bind(this))
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
        <h1>Create TaskMaster Project:</h1>
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="title" className="sr-only">Add Project Title</label>
            <input type="text"
                   className="form-control"
                   name="project[title]"
                   id="title"
                   placeholder="Name the project"
                   onChange={this.updateTitle}
                   value={this.state.title} />
         </div>
         <div className="form-group">
           <label htmlFor="description" className="sr-only">Add Project Description</label>
          <input type="text"
                 className="form-control"
                 name="project[description]"
                 id="description"
                 placeholder="Add a project description with more info for the team (optional)"
                 onChange={this.updateDescription}
                 value={this.state.description} />
               <br/>
         </div>
         <div className="form-group">
            <ul onClick={this.handleRemoveUserClick} >
              <li className="invite-users-header">These team members are already shared:</li>
            {
              this.state.shared_users.map(function (shared_user) {
                return(
                  <li key={shared_user.username}
                      className="already-shared">
                    {shared_user.username}
                    <div
                          className="remove-shared-user glyphicon glyphicon-remove-circle">
                    </div>
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
