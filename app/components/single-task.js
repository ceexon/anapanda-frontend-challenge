import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default
  class SingleTaskComponent extends Component {
  @service task;

  @action togglePinTask(taskId){
    const task = this.task.getTask(taskId);
    task.isPinned = !task.isPinned;
  }
}
