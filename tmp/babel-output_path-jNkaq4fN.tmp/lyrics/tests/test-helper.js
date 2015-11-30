define('lyrics/tests/test-helper', ['exports', 'lyrics/tests/helpers/resolver', 'ember-qunit'], function (exports, _lyricsTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_lyricsTestsHelpersResolver['default']);
});