import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | side-nav', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders the side nav', async function(assert) {
    await render(hbs`<SideNav />`);

    await render(hbs`<SideNav />`);

    assert.dom('.nav').exists();
    assert.dom('.nav-link.active span').hasText('Tasks');
    assert.dom('.home-tab a span').hasText('Home');
  });
});
