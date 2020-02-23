import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | pin-icon', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders the pin icon when not pinned', async function(assert) {
    this.setProperties({
      pinned: false
    });

    await render(hbs`<PinIcon @pinned={{this.pinned}} />`);

    assert.dom('svg').exists();
    assert.dom('rect.a').exists();
    assert.dom('path.b').exists();
  });

  test('it renders the pin icon when pinned', async function(assert) {
    this.setProperties({
      pinned: true
    });

    await render(hbs`<PinIcon @pinned={{this.pinned}} />`);

    assert.dom('svg').exists();
    assert.dom('rect.c').exists();
    assert.dom('path.d').exists();
  });
});
