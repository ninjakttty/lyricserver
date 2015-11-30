define('lyrics/tests/adapters/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - adapters');
  QUnit.test('adapters/application.js should pass jshint', function (assert) {
    assert.ok(true, 'adapters/application.js should pass jshint.');
  });
});
define('lyrics/tests/adapters/artists.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - adapters');
  QUnit.test('adapters/artists.js should pass jshint', function (assert) {
    assert.ok(true, 'adapters/artists.js should pass jshint.');
  });
});
define('lyrics/tests/adapters/users.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - adapters');
  QUnit.test('adapters/users.js should pass jshint', function (assert) {
    assert.ok(true, 'adapters/users.js should pass jshint.');
  });
});
define('lyrics/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('app.js should pass jshint', function (assert) {
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('lyrics/tests/components/lyric-item.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components');
  QUnit.test('components/lyric-item.js should pass jshint', function (assert) {
    assert.ok(true, 'components/lyric-item.js should pass jshint.');
  });
});
define('lyrics/tests/controllers/artists.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers');
  QUnit.test('controllers/artists.js should pass jshint', function (assert) {
    assert.ok(true, 'controllers/artists.js should pass jshint.');
  });
});
define('lyrics/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('lyrics/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/destroy-app.js should pass jshint', function (assert) {
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('lyrics/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'lyrics/tests/helpers/start-app', 'lyrics/tests/helpers/destroy-app'], function (exports, _qunit, _lyricsTestsHelpersStartApp, _lyricsTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _lyricsTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        (0, _lyricsTestsHelpersDestroyApp['default'])(this.application);

        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }
      }
    });
  };
});
define('lyrics/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/module-for-acceptance.js should pass jshint', function (assert) {
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('lyrics/tests/helpers/resolver', ['exports', 'ember/resolver', 'lyrics/config/environment'], function (exports, _emberResolver, _lyricsConfigEnvironment) {

  var resolver = _emberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _lyricsConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _lyricsConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('lyrics/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/resolver.js should pass jshint', function (assert) {
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('lyrics/tests/helpers/start-app', ['exports', 'ember', 'lyrics/app', 'lyrics/config/environment'], function (exports, _ember, _lyricsApp, _lyricsConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _lyricsConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _lyricsApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('lyrics/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/start-app.js should pass jshint', function (assert) {
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('lyrics/tests/integration/components/lyric-item-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('lyric-item', 'Integration | Component | lyric item', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.2.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 14
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'lyric-item', ['loc', [null, [1, 0], [1, 14]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:" + EOL +
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.2.0',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.2.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'lyric-item', [], [], 0, null, ['loc', [null, [2, 4], [4, 19]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('lyrics/tests/integration/components/lyric-item-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components');
  QUnit.test('integration/components/lyric-item-test.js should pass jshint', function (assert) {
    assert.ok(true, 'integration/components/lyric-item-test.js should pass jshint.');
  });
});
define('lyrics/tests/models/artist.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/artist.js should pass jshint', function (assert) {
    assert.ok(true, 'models/artist.js should pass jshint.');
  });
});
define('lyrics/tests/models/lyric.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/lyric.js should pass jshint', function (assert) {
    assert.ok(true, 'models/lyric.js should pass jshint.');
  });
});
define('lyrics/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('router.js should pass jshint', function (assert) {
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('lyrics/tests/routes/artists.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/artists.js should pass jshint', function (assert) {
    assert.ok(true, 'routes/artists.js should pass jshint.');
  });
});
define('lyrics/tests/routes/lyrics.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/lyrics.js should pass jshint', function (assert) {
    assert.ok(true, 'routes/lyrics.js should pass jshint.');
  });
});
define('lyrics/tests/test-helper', ['exports', 'lyrics/tests/helpers/resolver', 'ember-qunit'], function (exports, _lyricsTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_lyricsTestsHelpersResolver['default']);
});
define('lyrics/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('test-helper.js should pass jshint', function (assert) {
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('lyrics/tests/unit/adapters/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('lyrics/tests/unit/adapters/application-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/adapters');
  QUnit.test('unit/adapters/application-test.js should pass jshint', function (assert) {
    assert.ok(true, 'unit/adapters/application-test.js should pass jshint.');
  });
});
define('lyrics/tests/unit/adapters/artists-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:artists', 'Unit | Adapter | artists', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('lyrics/tests/unit/adapters/artists-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/adapters');
  QUnit.test('unit/adapters/artists-test.js should pass jshint', function (assert) {
    assert.ok(true, 'unit/adapters/artists-test.js should pass jshint.');
  });
});
define('lyrics/tests/unit/adapters/users-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:users', 'Unit | Adapter | users', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('lyrics/tests/unit/adapters/users-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/adapters');
  QUnit.test('unit/adapters/users-test.js should pass jshint', function (assert) {
    assert.ok(true, 'unit/adapters/users-test.js should pass jshint.');
  });
});
define('lyrics/tests/unit/controllers/artists-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:artists', 'Unit | Controller | artists', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('lyrics/tests/unit/controllers/artists-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/controllers');
  QUnit.test('unit/controllers/artists-test.js should pass jshint', function (assert) {
    assert.ok(true, 'unit/controllers/artists-test.js should pass jshint.');
  });
});
define('lyrics/tests/unit/models/artist-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('artist', 'Unit | Model | artist', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('lyrics/tests/unit/models/artist-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/artist-test.js should pass jshint', function (assert) {
    assert.ok(true, 'unit/models/artist-test.js should pass jshint.');
  });
});
define('lyrics/tests/unit/models/lyric-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('lyric', 'Unit | Model | lyric', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('lyrics/tests/unit/models/lyric-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/lyric-test.js should pass jshint', function (assert) {
    assert.ok(true, 'unit/models/lyric-test.js should pass jshint.');
  });
});
define('lyrics/tests/unit/routes/artists-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:artists', 'Unit | Route | artists', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('lyrics/tests/unit/routes/artists-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/artists-test.js should pass jshint', function (assert) {
    assert.ok(true, 'unit/routes/artists-test.js should pass jshint.');
  });
});
define('lyrics/tests/unit/routes/lyrics-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:lyrics', 'Unit | Route | lyrics', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('lyrics/tests/unit/routes/lyrics-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/lyrics-test.js should pass jshint', function (assert) {
    assert.ok(true, 'unit/routes/lyrics-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('lyrics/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map