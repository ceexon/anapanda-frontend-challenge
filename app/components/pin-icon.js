import Component from '@glimmer/component';
import {inject as service} from '@ember/service';
import { action } from '@ember/object';

export default class PinIconComponent extends Component {
  @service task;

  @action togglePin(e) {
    const element = e.target;
    const id = element.getAttribute('data-task');
    this.task.pinToggle(id);
  }

}
