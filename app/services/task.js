import Service from '@ember/service';
import {inject as service} from "@ember/service";
import { A } from '@ember/array';

export default class TaskService extends Service {
  @service store;
  tasks = A([
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
  completed = this.tasks.filter(task => task.isComplete).length;

  pinToggle(id) {
    const task = this.getTask(id);
    task.isPinned = !task.isPinned;
  }

  completeToggle(id) {
    const task = this.getTask(id);
    task.isComplete = !task.isComplete;
    if(task.isComplete)
      this.completed += 1;
    else
      this.completed -= 1;
  }

  getTask(id) {
    return this.tasks.findBy('id', id);
  }
}
