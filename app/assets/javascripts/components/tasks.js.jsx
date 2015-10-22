window.Tasks = React.createClass({

  handleDeleteToDoListClick: function (e) {
    setTimeout(function () {if (window.confirm("Are you sure you want to delete this to do list?")) {
      ApiUtil.deleteToDoList(this.props.todolist, this.props.project.id)

    }}.bind(this), 200)
  },

  handleDeleteTaskClick: function (task) {
    return function (e) {
    setTimeout(function () {if (window.confirm("Are you sure you want to delete this task?")) {
      console.log("Clicked 'Delete task button'")
      debugger;
      ApiUtil.deleteTask(task, this.props.project.id);
    }}.bind(this), 200)
  }.bind(this)
  },

  render: function () {
    return (
      <div>
      <ul className="ulForToDoLists">
        <li key={this.props.todolist.id} className="todolist-title">
            {this.props.todolist.title}
            <span onClick={this.handleDeleteToDoListClick}
                  className="glyphicon glyphicon-trash delete-icon">
            </span>
        </li>
        <li>
          <ul>
            {
              this.props.tasks.map(function(task){
                return (
                <li className="task-title" key={task.id}>{task.title}
                  <span onClick={this.handleDeleteTaskClick(task)}
                        className="glyphicon glyphicon-trash delete-icon">
                  </span>
                </li>
                );
              }.bind(this))
            }
          </ul>
        </li>
      </ul>
      <TaskForm projectauthorusername={this.props.projectauthorusername} project={this.props.project} todolist={this.props.todolist}/>
      </div>
    );
  }
});
