window.SingleTask = React.createClass({
  handleDeleteTaskClick: function (task) {
    setTimeout(function () {if (window.confirm("Are you sure you want to delete this task?")) {
      ApiUtil.deleteTask(this.props.task, this.props.project.id);
    }}.bind(this), 200)
  },

  handleTaskCheckboxClick: function (e) {
    var projectId;
    if (this.props.project) {
      projectId = this.props.project.id
    }
    ApiUtil.updateTaskCompletedStatus(this.props.task, !this.props.task.completed, projectId);
    this.setState({});
  },

  render: function () {
    var date = "";
    if (this.props.task.duedate) {
      date = "due " + new Date(this.props.task.duedate).toDateString()
    }

    var assigned_user = "";
    if (this.props.task.assigned_user_id) {
      if (this.props.task.assigned_user_id === window.CURRENT_USER) {
        assigned_user = "assigned to Me"
      } else {
        assigned_user = "assigned to " + UserStore.findbyid(this.props.task.assigned_user_id)
      }
    }

    var overduetask = "";
    if (this.props.task.duedate && (new Date(this.props.task.duedate) < new Date())) {
      overduetask = "overdue-task-true"
    }



    return (
      <div className="single-task-item" key={this.props.task.id}>
        <li className="task-title" key={this.props.task.id}>
          <input type="checkbox"
                 value="1"
                 className="taskcheckbox"
                 defaultChecked={this.props.task.completed}
                 onChange={this.handleTaskCheckboxClick}>
              <span className={overduetask}>{this.props.task.title}</span>
              <span onClick={this.handleDeleteTaskClick}
                    className="glyphicon glyphicon-trash delete-icon"></span>
              <ul>
                <li className="task-description">{this.props.task.description}</li>
                <li className="assigned-user-and-due-date"><span className="label label-default">{assigned_user}</span> <span className="label label-default">{date}</span></li>
              </ul>
            </input>
          </li>
      </div>
    )
  }
});
