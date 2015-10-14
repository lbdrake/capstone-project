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
  }
};
