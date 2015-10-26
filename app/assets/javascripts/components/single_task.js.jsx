window.SingleTask = React.createClass({
  getInitialState: function () {
    return ({null});
  },

  handleDeleteTaskClick: function (task) {
    setTimeout(function () {if (window.confirm("Are you sure you want to delete this task?")) {
      ApiUtil.deleteTask(this.props.task, this.props.project.id);
    }}.bind(this), 200);
  },

  handleEditTaskClick: function (e) {
    console.log("clicked edit task icon");
  },

  handleTaskCheckboxClick: function (e) {
    var projectId;
    if (this.props.project) {
      projectId = this.props.project.id;
    }
    ApiUtil.updateTaskCompletedStatus(this.props.task, !this.props.task.completed, projectId);
    this.setState({});
  },

  render: function () {
    var date = "";
    if (this.props.task.duedate) {
      date = "due " + new Date(this.props.task.duedate).toDateString();
    }

    var assigned_username = "";
    var assigned_user_message = "";
    if (this.props.task.assigned_user_id) {
      if (this.props.task.assigned_user_id === window.CURRENT_USER) {
        assigned_username = window.CURRENT_USERNAME;
        assigned_user_message = "assigned to Me";
      } else {
        assigned_username = UserStore.findbyid(this.props.task.assigned_user_id);
        assigned_user_message = "assigned to " + assigned_username;
      }
    }

    var overduetask = "";
    if (this.props.task.duedate && (new Date(this.props.task.duedate) < new Date())) {
      overduetask = "overdue-task-true"
    }

    return (
      <div className="single-task-item" key={this.props.task.id}>
        <li className="task-title">
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
                <li className="assigned-user-and-due-date"><span className="label label-default">{assigned_user_message}</span> <span className="label label-default">{date}</span></li>
              </ul>
            </input>
          </li>
      </div>
    );
  }
});

        // <span onClick={this.handleEditTaskClick}
        //       className="glyphicon glyphicon-pencil edit-icon"></span>
        // <TaskForm showtaskform={this.state.showtaskform} task={this.props.task} shared_users={this.props.shared_users} assigned_user={assigned_username} projectauthorusername={this.props.projectauthorusername} project={this.props.project} todolist={this.props.todolist}/>
