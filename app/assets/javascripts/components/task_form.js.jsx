window.TaskForm = React.createClass({
  getInitialState: function () {
    return ({
      project: this.props.project,
      shared_users: [this.props.author_username].concat(this.props.project.shared_users),
      taskTitle: "",
      taskDescription: "",
      taskDueDate: "",
      taskAssignedUser: ""
    });
  },

  updateTaskTitle: function () {
    console.log("Task title changed - will update state");
  },

  updateTaskDescription: function () {
    console.log("Task description changed - will update state");
  },

  updateTaskDueDate: function () {
    console.log("Due date clicked - will update state");
  },

  updateTaskAssignedUser: function () {
    console.log("Assigned User changed - will update state");
  },

  handleCancelClick: function () {
    console.log("Cancel Task button clicked - will close form");
  },

  handleFormSubmit: function (e) {
    e.preventDefault;
    console.log("Form Submit button clicked - will create task and close form")
  },

  render: function () {
    return (
      <div>
      <p onClick={this.handleCancelClick}>This is a task form!!!!!!!</p>
      <form onSubmit={this.handleFormSubmit}>
        <input type="text" placeholder="Add a Task title" onChange={this.updateTaskTitle} value={this.state.TaskTitle} />
        <br/>
        <input type="text" placeholder="Description (optional)" onChange={this.updateTaskDescription} value={this.state.TaskDescription} />
        <br/>
        <input  type="date" onChange={this.updateTaskDueDate} value={this.state.TaskDueDate} />
          <div className="form-group">
            <label htmlFor="assigneduser">Select list:</label>
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
          <input type="submit" value="Save Task" /><p>or Cancel</p>
        </form>
      </div>
    )
  }
});
