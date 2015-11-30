export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 5,
            "column": 1
          },
          "end": {
            "line": 5,
            "column": 25
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
      buildRenderNodes: function buildRenderNodes() { return []; },
      statements: [

      ],
      locals: [],
      templates: []
    };
  }());
  var child1 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 6,
            "column": 1
          },
          "end": {
            "line": 6,
            "column": 30
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
        var el1 = dom.createTextNode("Artists");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() { return []; },
      statements: [

      ],
      locals: [],
      templates: []
    };
  }());
  var child2 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 7,
            "column": 1
          },
          "end": {
            "line": 7,
            "column": 28
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
        var el1 = dom.createTextNode("Lyrics");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() { return []; },
      statements: [

      ],
      locals: [],
      templates: []
    };
  }());
  return {
    meta: {
      "fragmentReason": {
        "name": "missing-wrapper",
        "problems": [
          "multiple-nodes",
          "wrong-type"
        ]
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
      "moduleName": "lyrics/templates/application.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("h2");
      dom.setAttribute(el1,"id","title");
      var el2 = dom.createTextNode("Welcome to the Jungle");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("footer");
      var el2 = dom.createTextNode("\n	");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n	");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n	");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n \n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [4]);
      var morphs = new Array(4);
      morphs[0] = dom.createMorphAt(fragment,2,2,contextualElement);
      morphs[1] = dom.createMorphAt(element0,1,1);
      morphs[2] = dom.createMorphAt(element0,3,3);
      morphs[3] = dom.createMorphAt(element0,5,5);
      return morphs;
    },
    statements: [
      ["content","outlet",["loc",[null,[2,0],[2,10]]]],
      ["block","link-to",["index"],[],0,null,["loc",[null,[5,1],[5,37]]]],
      ["block","link-to",["artists"],[],1,null,["loc",[null,[6,1],[6,42]]]],
      ["block","link-to",["lyrics"],[],2,null,["loc",[null,[7,1],[7,40]]]]
    ],
    locals: [],
    templates: [child0, child1, child2]
  };
}()));