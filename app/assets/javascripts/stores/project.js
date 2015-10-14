(function(root) {
  'use strict';
  var _projects = [],
      PROJECT_CHANGE_EVENT = "PROJECT_CHANGE_EVENT";

  root.ProjectStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _projects.slice();
    },

    last: function () {
      return _projects.slice(-1);
    },

    resetProjects: function (projects) {
      _projects = projects;
    },

    addNewProject: function (project) {
      _projects.push(project);
    },

    addChangeListener: function (callback) {
      this.on(PROJECT_CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(PROJECT_CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function(payload){
      switch(payload.actionType){
        case ProjectConstants.PROJECTS_RECEIVED:
          ProjectStore.resetProjects(payload.projects);
          ProjectStore.emit(PROJECT_CHANGE_EVENT);
          break;
        case ProjectConstants.NEW_PROJECT_RECEIVED:
          ProjectStore.addNewProject(payload.project);
          ProjectStore.emit(PROJECT_CHANGE_EVENT);
          break;
      }
    })
  });
}(this));
