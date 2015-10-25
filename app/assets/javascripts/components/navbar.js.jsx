window.NavBar = React.createClass({

  getInitialState: function () {
    return ({
      my_tasks_notifications: ""
    })
  },

  componentDidMount: function () {
    TaskStore.addChangeListener(this.updateTaskNotification);
    ProjectStore.addChangeListener(this.updateTaskNotification);
    ApiUtil.fetchMyTasks();
  },

  componentWillUnmount: function () {
    TaskStore.removeChangeListener(this.updateTaskNotification);
    ProjectStore.removeChangeListener(this.updateTaskNotification);
  },

  updateTaskNotification: function () {
    var incomplete_overdue_tasks = 0;

    TaskStore.all().forEach(function (task) {
      if (task.duedate && (new Date(task.duedate) < new Date()) && (task.completed == false)) {
        incomplete_overdue_tasks += 1
      }
    })
    if (incomplete_overdue_tasks > 0) {
      this.setState({
        my_tasks_notifications: incomplete_overdue_tasks
      })
    } else {
      this.setState({
        my_tasks_notifications: ""
      })
    }
  },

  logoutUser: function (e) {
    e.preventDefault();
    ApiUtil.logoutUser();
  },

  goToMyTasksPage: function () {
      this.props.history.pushState(null, "/my-tasks");
  },

  render: function (){
    return (

      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#navbar-collapse-1"
                    aria-expanded="false" >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a href="#"><img className="navbar-brand" src="/assets/TaskMaster-logo.png" alt="TaskMaster Logo" /></a>
          </div>

      <div className="collapse navbar-collapse" id="navbar-collapse-1">
        <ul className="nav navbar-nav nav-bling-container">
          <li className="nav-bling"><a href="#">Projects</a></li>
          <li className="nav-bling"><a onClick={this.goToMyTasksPage}>Me <span className="label label-danger label-as-badge">{this.state.my_tasks_notifications}</span></a></li>
        </ul>

        <ul className="nav navbar-nav navbar-right">
          <li className="navbar-text nav-username">{"Signed in as " + window.CURRENT_USERNAME}</li>
          <li><a href="#logout" className="nav-logout" onClick={this.logoutUser}>Logout</a></li>
        </ul>
      </div>
  </div>
</nav>
    );
  }
});
