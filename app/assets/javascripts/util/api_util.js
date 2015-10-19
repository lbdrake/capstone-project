ApiUtil = {
  fetchProjects: function() {
    $.ajax({
      url: "api/projects",
      action: "get",
      success: function (response) {
        ApiActions.receiveAll(response);
      }
    });
  },

  createProject: function(projectinfo) {
    $.ajax({
      url: "api/projects",
      type: "post",
      data: {project: projectinfo},
      success: function (response) {
          ApiActions.receiveNewProject(response);
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

  editProject: function(project) {
    var projectUrl = "api/projects/" + project.id;
    $.ajax({
      url: projectUrl,
      type: "patch",
      data: {project: project},
      success: function (response) {
        ApiActions.editProject(response);
      }
    });
  },

  logoutUser: function () {
    $.ajax({
      url: "/session",
      type: "delete",
      success: function (response){
        ApiActions.logoutUser();
        window.location.reload(true);
      },
      error: function (response) {
        window.location.reload(true);
      }
    });
  },

  fetchUsers: function () {
    $.ajax({
      url: "/users",
      type: "get",
      success: function (response){
        ApiActions.receiveAllUsers(response);
      }
    });
  }
};