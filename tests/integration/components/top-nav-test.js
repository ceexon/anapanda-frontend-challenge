import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | top-nav', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<TopNav />`);

    assert.dom('.top-nav-tabs').exists();
    assert.dom('.task-title ').exists();
    assert.dom('.nav-item:nth-child(1) .nav-link').hasText('All Tasks');
    assert.dom('.nav-item:nth-child(2) .nav-link').hasText('Completed Tasks 1');
    assert.dom('.task-title .col-9').hasText('Task');
    assert.dom('.task-title  .col-3').hasText('Action');
  });
});
