import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default
  class SingleTaskComponent extends Component {
  @tracked isComplete = false;

  @action submit(){
    this.isComplete = !this.isComplete;
  }
}
