window.MyTasks = React.createClass({
  getInitialState: function () {
    return ({
      my_tasks: TaskStore.all()
    })
  },

  componentDidMount: function () {
    TaskStore.addChangeListener(this.updateTaskList);
    ApiUtil.fetchMyTasks();
  },

  componentWillUnmount: function () {
    TaskStore.removeChangeListener(this.updateTaskList)
  },

  updateTaskList: function () {
    this.setState({my_tasks: TaskStore.all().sort})
  },

  render: function () {
    return (
      <div className="general-show-panel">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h1>My Tasks</h1>
          </div>
          <div className="panel-body">
            {
              this.state.my_tasks.map(function (task) {
                return (
                  <div>
                    <SingleTask task={task} />
                  </div>
                )
              })
            }
          </div>
          <div className="panel-footer">
          </div>
        </div>
      </div>
    )
  }
});
