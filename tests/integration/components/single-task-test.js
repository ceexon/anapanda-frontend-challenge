import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | single-task', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders a single task', async function(assert) {
    this.setProperties({
      task: {
        id: 1,
        name: 'Solve all github issues',
        description: 'Solve the world\'s Github issues.',
        isComplete: true,
        creator: 2,
        isPinned: false
      }
    });

    await render(hbs`<SingleTask @task={{this.task}} />`);

    assert.dom('.list-group-item').exists();
    assert.dom('h5').hasText(this.task.name);
    assert.dom('.task-description').hasText(this.task.description);
    assert.dom('svg').exists();
    assert.dom('button.task-toggle-button.task-completed').hasText("Completed");

    this.setProperties({
      task: {
        ...this.task,
        isComplete: false
      }
    });
    assert.dom('button.task-toggle-button').hasText("Done");
  });
});
