window.SingleTask = React.createClass({
  getInitialState: function () {
      return ({ completed: this.props.task.completed || false })
  },

  handleDeleteTaskClick: function (task) {
    setTimeout(function () {if (window.confirm("Are you sure you want to delete this task?")) {
      console.log("Clicked 'Delete task button'")
      debugger;
      ApiUtil.deleteTask(this.props.task, this.props.project.id);
    }}.bind(this), 200)
  },

  render: function () {
    return (
      <div>
        <li className="task-title" key={this.props.task.id}>
          <input type="checkbox" value="1" className="taskcheckbox" defaultChecked={this.state.completed}>
              <span>{this.props.task.title}</span>
              <span onClick={this.handleDeleteTaskClick}
                    className="glyphicon glyphicon-trash delete-icon"></span>
              <ul>
                <li className="task-description">{this.props.task.description}</li>
              </ul>
            </input>
          </li>
      </div>
    )
  }
});
