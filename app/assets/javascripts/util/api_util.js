ApiUtil = {
  fetchProjects: function() {
    $.ajax({
      url: "api/projects",
      action: "get",
      success: function (response) {
        ApiActions.receiveAll(response);
      }
    });
  }
};
