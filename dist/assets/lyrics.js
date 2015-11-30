"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('lyrics/adapters/application', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].RESTAdapter.extend({
    host: 'http://96.126.100.101:3000'
    // host: 'http://localhost:3000',
  });
});
define('lyrics/adapters/artists', ['exports', 'lyrics/adapters/application'], function (exports, _lyricsAdaptersApplication) {
  exports['default'] = _lyricsAdaptersApplication['default'].extend({});
});
define('lyrics/adapters/users', ['exports', 'lyrics/adapters/application'], function (exports, _lyricsAdaptersApplication) {
  exports['default'] = _lyricsAdaptersApplication['default'].extend({});
});
define('lyrics/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'lyrics/config/environment'], function (exports, _ember, _emberResolver, _emberLoadInitializers, _lyricsConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _lyricsConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _lyricsConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _lyricsConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('lyrics/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'lyrics/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _lyricsConfigEnvironment) {

  var name = _lyricsConfigEnvironment['default'].APP.name;
  var version = _lyricsConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('lyrics/components/artist-item', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'li',
    actions: {
      changeFavorite: function changeFavorite(model) {
        model.toggleProperty('favorite');
        model.save();
      }
    }
  });
});
define('lyrics/components/fa-icon', ['exports', 'ember-cli-font-awesome/components/fa-icon'], function (exports, _emberCliFontAwesomeComponentsFaIcon) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFontAwesomeComponentsFaIcon['default'];
    }
  });
});
define('lyrics/components/fa-list-icon', ['exports', 'ember-cli-font-awesome/components/fa-list-icon'], function (exports, _emberCliFontAwesomeComponentsFaListIcon) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFontAwesomeComponentsFaListIcon['default'];
    }
  });
});
define('lyrics/components/fa-list', ['exports', 'ember-cli-font-awesome/components/fa-list'], function (exports, _emberCliFontAwesomeComponentsFaList) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFontAwesomeComponentsFaList['default'];
    }
  });
});
define('lyrics/components/fa-stack', ['exports', 'ember-cli-font-awesome/components/fa-stack'], function (exports, _emberCliFontAwesomeComponentsFaStack) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFontAwesomeComponentsFaStack['default'];
    }
  });
});
define('lyrics/components/lyric-item', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		tagName: 'li'
	});
});
define('lyrics/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('lyrics/controllers/artists', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({});
});
define('lyrics/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('lyrics/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'lyrics/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _lyricsConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_lyricsConfigEnvironment['default'].APP.name, _lyricsConfigEnvironment['default'].APP.version)
  };
});
define('lyrics/initializers/export-application-global', ['exports', 'ember', 'lyrics/config/environment'], function (exports, _ember, _lyricsConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_lyricsConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _lyricsConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_lyricsConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('lyrics/models/artist', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    name: _emberData['default'].attr('string'),
    favorite: _emberData['default'].attr('boolean'),
    lyrics: _emberData['default'].hasMany('lyric')
  });
});
define('lyrics/models/lyric', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    text: _emberData['default'].attr('string'),
    song_title: _emberData['default'].attr('string'),
    artist: _emberData['default'].belongsTo('artist')
  });
});
define('lyrics/router', ['exports', 'ember', 'lyrics/config/environment'], function (exports, _ember, _lyricsConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _lyricsConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('artists');
    this.route('lyrics');
    this.route('random');
    // this.route('random', {path: '/'});
  });

  exports['default'] = Router;
});
define('lyrics/routes/artists', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.store.findAll('artist');
    }
  });
});
define('lyrics/routes/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      //fetch one random lyric from the server that the user has favorited
      return _ember['default'].RSVP.hash({
        lyrics: this.store.query('lyric', { filter: { favorite: true, limit: 1 } }),
        artists: this.store.findAll('artist')
      });
    }
  });
});
define('lyrics/routes/lyrics', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      //fetch all lyrics
      return _ember['default'].RSVP.hash({
        lyrics: this.store.findAll('lyric'),
        artists: this.store.findAll('artist')
      });
    }
  });
});
define("lyrics/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 18,
              "column": 3
            },
            "end": {
              "line": 18,
              "column": 27
            }
          },
          "moduleName": "lyrics/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Home");
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
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 19,
              "column": 3
            },
            "end": {
              "line": 19,
              "column": 46
            }
          },
          "moduleName": "lyrics/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Pick Favorite Artists");
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
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 20,
              "column": 3
            },
            "end": {
              "line": 20,
              "column": 34
            }
          },
          "moduleName": "lyrics/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("See Lyrics");
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
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 24,
            "column": 0
          }
        },
        "moduleName": "lyrics/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("row");
        dom.setAttribute(el1, "centered", "");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("column");
        dom.setAttribute(el2, "cols", "6");
        dom.setAttribute(el2, "class", "header");
        var el3 = dom.createTextNode("\n    	");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h2");
        dom.setAttribute(el3, "id", "title");
        var el4 = dom.createTextNode("Welcome to the Jungle of Lyrics");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("row");
        dom.setAttribute(el1, "centered", "");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("column");
        dom.setAttribute(el2, "cols", "6");
        dom.setAttribute(el2, "class", "body");
        var el3 = dom.createTextNode("\n    	\n    	");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n \n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("row");
        dom.setAttribute(el1, "centered", "");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("column");
        dom.setAttribute(el2, "cols", "6");
        dom.setAttribute(el2, "class", "footer");
        var el3 = dom.createTextNode("\n        	");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("footer");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [4, 1, 1]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [2, 1]), 1, 1);
        morphs[1] = dom.createMorphAt(element0, 1, 1);
        morphs[2] = dom.createMorphAt(element0, 3, 3);
        morphs[3] = dom.createMorphAt(element0, 5, 5);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [10, 5], [10, 15]]]], ["block", "link-to", ["index"], [], 0, null, ["loc", [null, [18, 3], [18, 39]]]], ["block", "link-to", ["artists"], [], 1, null, ["loc", [null, [19, 3], [19, 58]]]], ["block", "link-to", ["lyrics"], [], 2, null, ["loc", [null, [20, 3], [20, 46]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("lyrics/templates/artists", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 4
            },
            "end": {
              "line": 4,
              "column": 4
            }
          },
          "moduleName": "lyrics/templates/artists.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "artist-item", [], ["artist", ["subexpr", "@mut", [["get", "artist", ["loc", [null, [3, 27], [3, 33]]]]], [], []]], ["loc", [null, [3, 6], [3, 35]]]]],
        locals: ["artist"],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 0
          }
        },
        "moduleName": "lyrics/templates/artists.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("ul");
        var el2 = dom.createTextNode("  \n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("  \n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["block", "each", [["get", "model", ["loc", [null, [2, 12], [2, 17]]]]], [], 0, null, ["loc", [null, [2, 4], [4, 13]]]], ["content", "outlet", ["loc", [null, [6, 0], [6, 10]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("lyrics/templates/components/artist-item", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 3
            },
            "end": {
              "line": 4,
              "column": 2
            }
          },
          "moduleName": "lyrics/templates/components/artist-item.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("		  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "fa-icon", [], ["icon", "heart", "class", "req", "click", ["subexpr", "action", ["changeFavorite", ["get", "artist", ["loc", [null, [3, 71], [3, 77]]]]], [], ["loc", [null, [3, 46], [3, 78]]]]], ["loc", [null, [3, 4], [3, 80]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 2
            },
            "end": {
              "line": 6,
              "column": 1
            }
          },
          "moduleName": "lyrics/templates/components/artist-item.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("			");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "fa-icon", [], ["icon", "heart-o", "class", "req", "click", ["subexpr", "action", ["changeFavorite", ["get", "artist", ["loc", [null, [5, 72], [5, 78]]]]], [], ["loc", [null, [5, 47], [5, 79]]]]], ["loc", [null, [5, 3], [5, 81]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 10,
            "column": 0
          }
        },
        "moduleName": "lyrics/templates/components/artist-item.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("li");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(4);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createMorphAt(element0, 1, 1);
        morphs[2] = dom.createMorphAt(element0, 3, 3);
        morphs[3] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["attribute", "class", ["concat", [["subexpr", "if", [["get", "artist.favorite", ["loc", [null, [1, 16], [1, 31]]]], "favorite"], [], ["loc", [null, [1, 11], [1, 45]]]]]]], ["block", "if", [["get", "artist.favorite", ["loc", [null, [2, 9], [2, 24]]]]], [], 0, 1, ["loc", [null, [2, 3], [6, 8]]]], ["content", "artist.name", ["loc", [null, [7, 1], [7, 16]]]], ["content", "yield", ["loc", [null, [9, 0], [9, 9]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("lyrics/templates/components/lyric-item", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 0
          }
        },
        "moduleName": "lyrics/templates/components/lyric-item.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("article");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h4");
        dom.setAttribute(el2, "class", "song-title");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "lyric-text");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "artist-name bold");
        var el3 = dom.createTextNode("—  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" \n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 0, 0);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]), 0, 0);
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [5]), 1, 1);
        morphs[3] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["content", "lyric.song_title", ["loc", [null, [2, 24], [2, 44]]]], ["content", "lyric.text", ["loc", [null, [3, 25], [3, 39]]]], ["content", "lyric.artist.name", ["loc", [null, [4, 40], [4, 62]]]], ["content", "yield", ["loc", [null, [6, 0], [6, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("lyrics/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 4
            },
            "end": {
              "line": 4,
              "column": 4
            }
          },
          "moduleName": "lyrics/templates/index.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("		");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "lyric-item", [], ["lyric", ["subexpr", "@mut", [["get", "lyric", ["loc", [null, [3, 21], [3, 26]]]]], [], []]], ["loc", [null, [3, 2], [3, 28]]]]],
        locals: ["lyric"],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 0
          }
        },
        "moduleName": "lyrics/templates/index.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("ul");
        dom.setAttribute(el1, "class", "random-lyrics");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["block", "each", [["get", "model.lyrics", ["loc", [null, [2, 12], [2, 24]]]]], [], 0, null, ["loc", [null, [2, 4], [4, 13]]]], ["content", "outlet", ["loc", [null, [6, 0], [6, 10]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("lyrics/templates/lyrics", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 4
            },
            "end": {
              "line": 4,
              "column": 4
            }
          },
          "moduleName": "lyrics/templates/lyrics.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("		");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "lyric-item", [], ["lyric", ["subexpr", "@mut", [["get", "lyric", ["loc", [null, [3, 21], [3, 26]]]]], [], []]], ["loc", [null, [3, 2], [3, 28]]]]],
        locals: ["lyric"],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 0
          }
        },
        "moduleName": "lyrics/templates/lyrics.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("ul");
        dom.setAttribute(el1, "class", "lyric-list");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["block", "each", [["get", "model.lyrics", ["loc", [null, [2, 12], [2, 24]]]]], [], 0, null, ["loc", [null, [2, 4], [4, 13]]]], ["content", "outlet", ["loc", [null, [6, 0], [6, 10]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('lyrics/config/environment', ['ember'], function(Ember) {
  var prefix = 'lyrics';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (!runningTests) {
  require("lyrics/app")["default"].create({"LOG_ACTIVE_GENERATION":true,"LOG_TRANSITIONS":true,"LOG_TRANSITIONS_INTERNAL":true,"LOG_VIEW_LOOKUPS":true,"name":"lyrics","version":"0.0.0+d100c625"});
}

/* jshint ignore:end */
//# sourceMappingURL=lyrics.map