(function(root) {
  'use strict';
  var _tasks = [],
      TASK_CHANGE_EVENT = "TASK_CHANGE_EVENT";

  root.TaskStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _tasks.slice();
    },

    resetTasks: function(tasks) {
      _tasks = tasks
    },

    addChangeListener: function (callback) {
      this.on(TASK_CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(TASK_CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function(payload){
      switch(payload.actionType){
        case ProjectConstants.TASKS_RECEIVED:
          TaskStore.resetTasks(payload.tasks);
          TaskStore.emit(TASK_CHANGE_EVENT);
          break;
        }
      })
    });
}(this));
