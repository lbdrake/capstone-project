window.SingleTask = React.createClass({
  getInitialState: function () {
      return ({
        completed: this.props.task.completed || false
       })
  },

  componentDidMount: function () {
    UserStore.addChangeListener(this.updateAssignedUsers);
    ApiUtil.fetchUsers();
  },

  componentWillUnmount: function () {
    UserStore.removeChangeListener(this.updateAssignedUsers);
  },

  updateAssignedUsers: function () {
    this.setState({})
  },

  handleDeleteTaskClick: function (task) {
    setTimeout(function () {if (window.confirm("Are you sure you want to delete this task?")) {
      ApiUtil.deleteTask(this.props.task, this.props.project.id);
    }}.bind(this), 200)
  },

  handleTaskCheckboxClick: function (e) {
    ApiUtil.updateTaskCompletedStatus(this.props.task, !this.state.completed, this.props.project.id);
    this.setState({completed: this.props.task.completed})
  },

  render: function () {
    var date = "";
    if (this.props.task.duedate) {
      date = "due " + new Date(this.props.task.duedate).toDateString()
    }
    var assigned_user = "";
    if (this.props.task.assigned_user_id) {
      assigned_user = "assigned to " + UserStore.findbyid(this.props.task.assigned_user_id)
    }
    return (
      <div className="single-task-item">
        <li className="task-title" key={this.props.task.id}>
          <input type="checkbox"
                 value="1"
                 className="taskcheckbox"
                 defaultChecked={this.state.completed}
                 onChange={this.handleTaskCheckboxClick}>
              <span>{this.props.task.title}</span>
              <span onClick={this.handleDeleteTaskClick}
                    className="glyphicon glyphicon-trash delete-icon"></span>
              <ul>
                <li className="task-description">{this.props.task.description}</li>
                <li className="assigned-user-and-due-date">{assigned_user} {date}</li>
              </ul>
            </input>
          </li>
      </div>
    )
  }
});
