import Controller from '@ember/controller';
import { inject as service } from "@ember/service";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class IndexController extends Controller {
  @service task;
  @tracked incomplete = [];
  @tracked pinned = [];
  @tracked complete = [];

  @tracked completeCount = 0;
  @tracked pinCount = 0;

  constructor(...args) {
    super(...args);
    this.incomplete = this.task.tasks.filter(task => !task.isComplete && !task.isPinned);
    this.pinned = this.task.tasks.filter(task => !task.isComplete && task.isPinned);
    this.complete = this.task.tasks.filter(task => task.isComplete);

    this.completeCount = this.complete.length;
    this.pinCount = this.pinned.length;
  }

  @action completeTask(taskId) {
    const selectedTask = this.task.getTask(taskId);
    selectedTask.isComplete = !selectedTask.isComplete;

    if (selectedTask.isComplete) {
      this.complete = this.task.addTask(this.complete, taskId);
      this.completeCount += 1;
      if (selectedTask.isPinned) {
        this.pinned = this.task.removeTask(this.pinned, taskId);
        this.pinCount -= 1;
      } else {
        this.incomplete = this.task.removeTask(this.incomplete, taskId);
      }
    } else {
      this.complete = this.task.removeTask(this.complete, taskId);
      this.completeCount -= 1;
      if (selectedTask.isPinned) {
        this.pinned = this.task.addTask(this.pinned, taskId);
        this.pinCount += 1;
      } else {
        this.incomplete = this.task.addTask(this.incomplete, taskId);
      }
    }
  }

  @action pinTask(taskId) {
    const selectedTask = this.task.getTask(taskId);
    selectedTask.isPinned = !selectedTask.isPinned;

    if(selectedTask.isPinned) {
      if(!selectedTask.isComplete){
        this.pinned = this.task.addTask(this.pinned, taskId);
        this.pinCount += 1;
        this.incomplete = this.task.removeTask(this.incomplete, taskId);
      }
    }else {
      if(!selectedTask.isComplete){
        this.pinned = this.task.removeTask(this.pinned, taskId);
        this.pinCount += 1;
        this.incomplete = this.task.addTask(this.incomplete, taskId);
      }
    }
  }
}
