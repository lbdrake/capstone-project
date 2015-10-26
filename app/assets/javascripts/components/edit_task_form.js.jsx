window.EditTaskForm = React.createClass({
  getInitialState: function () {
    return ({
      project: this.props.project,
      shared_users: [this.props.projectauthorusername].concat(this.props.project.shared_users),
      taskTitle: this.props.task.title,
      taskDescription: this.props.task.description,
      taskDueDate: this.props.task.duedate,
      taskAssignedUser: this.props.assigned_user,
      showTaskForm: this.props.showtaskform
      });
  },

  componentWillReceiveProps: function (newprops) {
    this.setState({
      taskAssignedUser: this.props.assigned_user,
      showtaskform: this.props.showtaskform
    });
  },

  handleNewTaskClick: function (e) {
    this.setState({showTaskForm: "showtaskform-true"});
  },

  handleCancelClick: function (e) {
    this.setState({showTaskForm: "showtaskform-false"});
  },

  updateTaskTitle: function (e) {
    this.setState({taskTitle: e.target.value});
  },

  updateTaskDescription: function (e) {
    this.setState({taskDescription: e.target.value});
  },

  updateTaskDueDate: function (e) {
    this.setState({taskDueDate: e.target.value});
  },

  updateTaskAssignedUser: function (e) {
    this.setState({taskAssignedUser: e.target.value});
  },

  handleFormSubmit: function (e) {
    e.preventDefault();
    var assigned_user_id = UserStore.find(this.state.taskAssignedUser).id;
    ApiUtil.createTask({
      title: this.state.taskTitle,
      description: this.state.taskDescription,
      assigned_user_id: assigned_user_id,
      todolist_id: parseInt(this.props.todolist.id),
      duedate: this.state.taskDueDate
      }, this.props.project.id);
    this.setState({
      showTaskForm: "showtaskform-false",
      taskTitle: "",
      taskDescription: "",
      taskDueDate: "",
      taskAssignedUser: ""
    });
  },

  render: function () {
    return (
      <div key={this.props.todolist.id}>
      <p onClick={this.handleNewTaskClick} className={this.state.showTaskForm}>Add Task</p>
        <div className={this.state.showTaskForm}>
          <form onSubmit={this.handleFormSubmit}>
            <input type="text"
                   placeholder="Add a Task title"
                   className="form-control"
                   onChange={this.updateTaskTitle}
                   value={this.state.taskTitle} />
            <input type="text"
                   placeholder="Description (optional)"
                   className="form-control"
                   onChange={this.updateTaskDescription}
                   value={this.state.taskDescription} />
            <input  type="date" onChange={this.updateTaskDueDate} value={this.state.taskDueDate} />
              <div className="form-group">
                <label htmlFor="assigneduser">Assign this task:</label>
                <select onChange={this.updateTaskAssignedUser}
                        className="form-control"
                        id="assigneduser"
                        value={this.state.taskAssignedUser}>
                  <option></option>
                  <option value={this.props.projectauthorusername} >Me</option>
                  {
                    this.state.project.shared_users.map (function (user) {
                      return (
                        <option value={user.username}>{user.username}</option>
                      )
                    })
                  }
                </select>
              </div>
              <input type="submit" value="Save Task" /><p className="form-cancel-element" onClick={this.handleCancelClick}>or Cancel</p>
          </form>
        </div>
      </div>
    )
  }
});
