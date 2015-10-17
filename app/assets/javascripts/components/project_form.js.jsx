window.ProjectForm = React.createClass({
  getInitialState: function () {
    return ({
      title: "",
      description: "",
      new_shared_user: "",
      shared_users: [{username: "Eleanora"}]
    });
  },

  componentDidMount: function (){
    ProjectStore.addChangeListener(this.goToProjectPage);
  },

  componentWillUnmount: function (){
    ProjectStore.removeChangeListener(this.goToProjectPage);
  },

  handleFormSubmit: function (e) {
    e.preventDefault();
    ApiUtil.createProject({
      title: this.state.title,
      description: this.state.description
    });
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
    console.log("Remove user button clicked - will remove 'ProjectShare', and flash alert success");
  },

  handleAddUserClick: function (e) {
    this.state.shared_users.push(this.state.new_shared_user);
    this.setState({new_shared_user: ""});
    console.log("Add user button clicked - will add 'ProjectShare', and flash alert success");
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
            <label>Invite Team Members:</label>
            <ul>
            {
              this.state.shared_users.map(function (shared_user) {
                return(
                  <li>{shared_user.username}  <input type="button"
                                             onClick={this.handleRemoveUserClick}
                                             value="Remove" /></li>
                );
              })
            }
            </ul>
            <input type="text" name="project[shared_user]"
                               onChange={this.updateNewSharedUser}
                               placeholder="Please add a username" />
            <input type="button" onClick={this.handleAddUserClick} value="Add" />
          </div>
          <input type="submit" value="Save Project"/><span onClick={this.handleCancelClick}> or <u>Cancel</u></span>

        </form>
      </div>
    );
  }
});
