window.TaskForm = React.createClass({
  getInitialState: function () {
    return ({
      project: this.props.project,
      shared_users: [this.props.projectauthorusername].concat(this.props.project.shared_users),
      taskTitle: "",
      taskDescription: "",
      taskDueDate: "",
      taskAssignedUser: "",
      showTaskForm: "showtaskform-false"
      });
  },

  handleNewTaskClick: function (e) {
    this.setState({showTaskForm: "showtaskform-true"});
    console.log("Clicked 'Add New Task' button - will load form");
  },

  handleCancelClick: function (e) {
    this.setState({showTaskForm: "showtaskform-false"})
  },

  updateTaskTitle: function (e) {
    console.log("Task title changed - will update state");
    this.setState({taskTitle: e.target.value});
  },

  updateTaskDescription: function (e) {
    console.log("Task description changed - will update state");
    this.setState({taskDescription: e.target.value});
  },

  updateTaskDueDate: function (e) {
    console.log("Due date clicked - will update state");
    this.setState({TaskDueDate: e.target.value});
  },

  updateTaskAssignedUser: function (e) {
    console.log("Assigned User changed - will update state");
    this.setState({taskAssignedUser: e.target.value});
  },

  handleFormSubmit: function (e) {
    e.preventDefault;
    ApiUtil.createTask({
      title: this.state.taskTitle,
      description: this.state.taskDescription,
      assigned_user_id: this.state.taskAssignedUser,
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
      <div>
      <p onClick={this.handleNewTaskClick} className={this.state.showTaskForm}>Add Task</p>
      <div className={this.state.showTaskForm}>
        <form onSubmit={this.handleFormSubmit}>
          <input type="text" placeholder="Add a Task title" className="form-control" onChange={this.updateTaskTitle} value={this.state.taskTitle} />
          <br/>
          <input type="text" placeholder="Description (optional)" className="form-control" onChange={this.updateTaskDescription} value={this.state.TaskDescription} />
          <br/>
          <input  type="date" onChange={this.updateTaskDueDate} value={this.state.TaskDueDate} />
            <div className="form-group">
              <label htmlFor="assigneduser">Assign this task:</label>
              <select onChange={this.updateTaskAssignedUser} className="form-control" id="assigneduser">
                <option>{this.props.projectauthorusername}</option>
                {
                  this.state.project.shared_users.map (function (user) {
                    return (
                      <option>{user.username}</option>
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