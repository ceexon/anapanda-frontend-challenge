import Service from '@ember/service';
import {inject as service} from "@ember/service";
import { A } from '@ember/array';
import { tracked } from "@glimmer/tracking";

export default class TaskService extends Service {
  @service store;
  @tracked tasks = A([
    this.store.createRecord('task', {
        id: 1,
        name: 'Solve all github issues',
        description: 'Solve the world\'s Github issues.',
        isComplete: true,
        creator: 2,
        isPinned: false
      }),
      this.store.createRecord('task', {
        id: 2,
        name: 'A task',
        description: 'This is a task.',
        isComplete: false,
        creator: 2,
        isPinned: false
      }),
      this.store.createRecord('task', {
        id: 3,
        name: 'Clean the kitchen',
        description: 'It\'s filthy!',
        isComplete: false,
        creator: 2,
        isPinned: false
      }),
      this.store.createRecord('task', {
        id: 4,
        name: 'Start the Anapanda challenge',
        description: 'Do the anapanda frontend challenge task 1',
        isComplete: false,
        creator: 2,
        isPinned: false
      }),
      this.store.createRecord('task', {
        id: 5,
        name: 'Sleep',
        description: 'Go to bed at 12:00 a.m',
        isComplete: false,
        creator: 2,
        isPinned: true
      }),
  ]);

  pinToggle(id) {
    const task = this.getTask(id);
    task.isPinned = !task.isPinned;
  }

  completeToggle(id) {
    const task = this.getTask(id);
    task.isComplete = !task.isComplete;
  }

  getTask(id) {
    return this.tasks.findBy('id', id);
  }

  removeTask(tasksList, taskId) {
    const task = tasksList.findBy('id', taskId);
    const i = tasksList.indexOf(task);
    tasksList.splice(i, 1);
    return tasksList;
  }

  addTask(tasksList, taskId) {
    const task = this.getTask(taskId);
    tasksList.push(task);
    return tasksList;
  }
}
