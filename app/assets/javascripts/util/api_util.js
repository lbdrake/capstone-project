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

  createProject: function(projectinfo, new_shared_users) {
    $.ajax({
      url: "api/projects",
      type: "post",
      data: {project: projectinfo},
      success: function (response) {
          ApiActions.receiveNewProject(response);
          ApiUtil.createProjectShares(response.id, new_shared_users);
      },
      error: function (response) {
        console.log("Failure in post to projects");
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
  },

  createProjectShares: function (project_id, new_shared_users){
    new_shared_users.forEach(function(new_shared_user){
      var projectshare = {shared_user_id: new_shared_user.id, project_id: project_id}
      $.ajax({
        url: "api/project_shares/",
        type: "post",
        data: {projectshare: projectshare},
        success: function (response) {
          ApiActions.receiveNewProjectShare(response);
        }
      });

    })
  }
};
