export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
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
        morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
        return morphs;
      },
      statements: [
        ["inline","lyric-item",[],["lyric",["subexpr","@mut",[["get","lyric",["loc",[null,[3,21],[3,26]]]]],[],[]]],["loc",[null,[3,2],[3,28]]]]
      ],
      locals: ["lyric"],
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
      morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]),1,1);
      morphs[1] = dom.createMorphAt(fragment,2,2,contextualElement);
      return morphs;
    },
    statements: [
      ["block","each",[["get","model.lyrics",["loc",[null,[2,12],[2,24]]]]],[],0,null,["loc",[null,[2,4],[4,13]]]],
      ["content","outlet",["loc",[null,[6,0],[6,10]]]]
    ],
    locals: [],
    templates: [child0]
  };
}()));