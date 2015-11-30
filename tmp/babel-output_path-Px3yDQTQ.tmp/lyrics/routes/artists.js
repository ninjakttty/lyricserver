define('lyrics/routes/artists', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Route.extend({
        model: function model() {
            return this.store.findAll('artist');
        },
        actions: {
            changeFavorite: function changeFavorite(model) {
                model.toggleProperty('favorite');
                model.save();
            }
        }
    });
});