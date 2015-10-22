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

    find: function (id) {
      var index = "";
      _projects.forEach(function (project, idx) {
        if (project.id === id) {
          index = idx;
        }
        return index;
      });
    },

    deleteProject: function (project) {
      var index = this.find(project.id);
      if (index) {
        _projects.splice(index, 1);
      }
    },

    editProject: function (project) {
      var index = this.find(project.id);
      if (index) {
        _projects.splice(index, 1);
        _projects.push(project);
      } else {
        _projects.push(project);
      }
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
        case ProjectConstants.DELETED_PROJECT:
          ProjectStore.deleteProject(payload.project);
          ProjectStore.emit(PROJECT_CHANGE_EVENT);
          break;
        case ProjectConstants.EDITED_PROJECT:
          ProjectStore.editProject(payload.project);
          ProjectStore.emit(PROJECT_CHANGE_EVENT);
          break;
        case ProjectConstants.PROJECT_SHARES_RECEIVED:
          ProjectStore.resetProjects(payload.projects);
          ProjectStore.emit(PROJECT_CHANGE_EVENT);
          break;
        case ProjectConstants.SINGLE_PROJECT_RECEIVED:
          ProjectStore.editProject(payload.project);
          ProjectStore.emit(PROJECT_CHANGE_EVENT);
          break;

      }
    })
  });
}(this));
