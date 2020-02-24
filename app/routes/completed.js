import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  @service task;
  @service store;


  model() {
    return this.task.tasks.filter(task => task.isComplete);
  }
}
