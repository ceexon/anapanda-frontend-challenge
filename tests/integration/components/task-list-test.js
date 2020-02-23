import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | task-list', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.setProperties({
      tasks:[{
        id: 1,
        name: 'Solve all github issues',
        description: 'Solve the world\'s Github issues.',
        isComplete: true,
        creator: 2,
        isPinned: false
      }]
    });

    await render(hbs`<TaskList @tasks={{this.tasks}} />`);

    assert.dom( '.list-group.list-group-flush').exists();
    assert.dom( '.list-group-item').exists();
  });
});
