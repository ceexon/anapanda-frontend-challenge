import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default
  class SingleTaskComponent extends Component {
  @service task;

  getCompData(e) {
    const element = e.target;
    const id = element.getAttribute('data-task');

    return {id}
  }

  @action toggleCompleteTask(e){
    const {id} = this.getCompData(e);
    this.task.completeToggle(id);
    const parent = document.querySelector(`#check-${id}`).closest(".list-group-item.task-item");
    parent.classList.add('d-none');
    console.log(this.task.completed);
  }

  @action togglePinTask(e){
    console.log(e);
  }
}
