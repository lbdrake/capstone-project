window.ToDoLists = React.createClass({
  getInitialState: function () {
    return ({
      form_open: "form_closed",
      todolist_title: ""
    });
  },

  handleAddNewToDoListClick: function () {
    this.setState({form_open: "form_open"})
  },

  updateToDoListTitle: function (e) {
    this.setState({todolist_title: e.target.value})
  },

  handleFormSubmit: function (e) {
    e.preventDefault();
    ApiUtil.createToDoList({title: this.state.todolist_title, project_id: this.props.project.id});
    this.setState({form_open: "form_closed", todolist_title: ""});
  },

  handleCancelClick: function (e) {
    this.setState({form_open: "form_closed", todolist_title: ""});
  },

  render: function () {
    var todolists = this.props.todolists;
    return (
      <div>
        <h1 className="toDoListHeader">To Do Lists<button onClick={this.handleAddNewToDoListClick} className="btn btn-default btn-xs addToDoListButton ">Add a To Do List</button></h1>
          <div className={this.state.form_open}>
            <form onSubmit={this.handleFormSubmit}>
              <label htmlFor="title" className="sr-only">Add a To Do List Title:</label>
              <input id="title" type="text" value={this.state.todolist_title} onChange={this.updateToDoListTitle} placeholder="Add a To Do List title"/>
              <br/>
              <input type="submit" value="Save and start adding Tasks" /><span onClick={this.handleCancelClick}> or <u>Cancel</u></span>
            </form>
          </div>
        {
          todolists.map (function(todolist) {
            return (
                <Tasks key={todolist.id}
                  todolist={todolist}
                  tasks={todolist.tasks}
                  project={this.props.project}
                  projectauthorusername={this.props.authorusername}/>
            );
          }.bind(this))
        }
    </div>
    );
  }
});
