ApiUtil = {
  fetchProjects: function() {
    $.ajax({
      url: "api/projects",
      action: "get",
      success: function (response) {
        ApiActions.receiveAll(response);
      },
      error: function (response) {
        console.log(response);
      }
    });
  },

  fetchSingleProject: function(projectId) {
    $.ajax({
      url: "api/projects/" + projectId,
      type: "get",
      success: function (response){
        ApiActions.receiveSingleProject(response)
      },
      error: function (response){
        console.log(response)
      }

    });
  },

  createProject: function(projectinfo, new_shared_users) {
    $.ajax({
      url: "api/projects",
      type: "post",
      data: projectinfo,
      success: function (response) {
          ApiActions.receiveNewProject(response);
          ApiUtil.createProjectShares(response.id, new_shared_users);
      },
      error: function (response) {
        console.log(response + "Failure in post to projects");
      }
    });
  },

  deleteProject: function(project) {
    var projectUrl = "api/projects/" + project.id;
    $.ajax({
      url: projectUrl,
      type: "delete",
      success: function (response) {
        ApiActions.deleteProject(response);
      }
    });
  },

  editProject: function(projectinfo, shared_users_to_add, shared_users_to_remove) {
    var projectUrl = "api/projects/" + projectinfo.id;
    $.ajax({
      url: projectUrl,
      type: "patch",
      data: {project: projectinfo},
      success: function (response) {
        ApiActions.editProject(response);
        ApiUtil.createProjectShares(projectinfo.id, shared_users_to_add);
        ApiUtil.deleteProjectShares(projectinfo.id, shared_users_to_remove);
      },
      error: function (response) {
        console.log(response);
      }
    });
  },

  logoutUser: function () {
    $.ajax({
      url: "/session",
      type: "delete",
      success: function (response){
        window.location = window.location.pathname
      },
      error: function (response) {
        window.location = window.location.pathname
      }
    });
  },

  fetchUsers: function () {
    $.ajax({
      url: "/users",
      type: "get",
      success: function (response){
        ApiActions.receiveAllUsers(response);
      },
      error: function (response) {
        console.log(response);
      }
    });
  },

  createProjectShares: function (project_id, new_shared_users){
    new_shared_users.forEach(function(new_shared_user){
      var projectshare = {shared_user_id: new_shared_user.id, project_id: project_id}
      $.ajax({
        url: "api/project_shares/",
        type: "post",
        data: {projectshare: projectshare},
        success: function (response) {
          ApiUtil.fetchProjects();
        },
        error: function (response) {
          console.log(response);
        }
      });
    })
  },

  deleteProjectShares: function (project_id, shared_users_to_remove){
    shared_users_to_remove.forEach(function(shared_user) {
      var ps_id = shared_user.project_share_id
      $.ajax({
        url: "api/project_shares/" + ps_id,
        type: "delete",
        success: function (response){
          ApiUtil.fetchProjects();
        },
        error: function (response) {
          console.log(response);
        }
      });
    })
  },

  createToDoList: function (todolistinfo) {
    $.ajax({
      url: "api/todolists",
      type: "post",
      data: {todolist: todolistinfo},
      success: function (response){
        ApiUtil.fetchProjects();
      },
      error: function (response) {
        console.log(response);
      }
    });
  },

  deleteToDoList: function(todolist, projectId) {
    var toDoListUrl = "api/todolists/" + todolist.id;
    $.ajax({
      url: toDoListUrl,
      type: "delete",
      success: function (response) {
        ApiUtil.fetchSingleProject(projectId);
      }
    });
  },

  createTask: function (taskinfo, projectId) {
    $.ajax({
      url: "api/tasks",
      type: "post",
      data: {task: taskinfo},
      success: function (response) {
        ApiUtil.fetchSingleProject(projectId);
      },
      error: function (response) {
        console.log(response);
      }
    });
  },

  deleteTask: function(task, projectId) {
    var taskUrl = "api/tasks/" + task.id;
    $.ajax({
      url: taskUrl,
      type: "delete",
      success: function (response) {
        ApiUtil.fetchSingleProject(projectId);
      },
      error: function (response) {
        console.log(response);
      }
    });
  },

  updateTaskCompletedStatus: function(task, completionStatus, projectId) {
    $.ajax({
      url: "api/tasks/" + task.id,
      type: "patch",
      data: {task: {completed: completionStatus}},
      success: function (response) {
        if (projectId) {
          ApiUtil.fetchSingleProject(projectId);
          ApiUtil.fetchMyTasks();
        } else {
          ApiUtil.fetchMyTasks();
        }
      },
      error: function (response) {
        console.log(response);
      }
    });
  },

  fetchMyTasks: function () {
    $.ajax({
      url: "api/tasks",
      type: "get",
      success: function (response) {
        ApiActions.receiveMyTasks(response)
      },
      error: function (response) {
        console.log(response)
      }
    });
  }
};
