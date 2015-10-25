window.MyTasks = React.createClass({
  getInitialState: function () {
    return ({
      my_tasks: TaskStore.all(),
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
    this.setState({my_tasks: TaskStore.all()})
  },

  render: function () {
    if (this.state.my_tasks.length === 0) {
      debugger;
      var congratsnotasks = "congrats-no-tasks-true"
    } else {
      var congratsnotasks = "congrats-no-tasks-false"
    }
    return (
      <div className="general-show-panel">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h1>My Tasks</h1>
          </div>
          <div className="panel-body">
            <h3 className={congratsnotasks}>Congrats, you finished all your tasks!</h3>
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
