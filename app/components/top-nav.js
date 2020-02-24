import Component from '@glimmer/component';
import {inject as service} from '@ember/service';
import {tracked} from "@glimmer/tracking";

export default class TopNavComponent extends Component {
  @service task;
  @tracked completed = this.task.completed;

}
