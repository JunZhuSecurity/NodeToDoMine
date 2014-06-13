define(['ember', 'ember-data', 'nvd3', 'jquery-ui'], function(Ember) {

  var App = window.App = Ember.Application.create({ LOG_TRANSITIONS: true });

  // Store
  App.Adapter = DS.RESTAdapter.extend();
  App.Store = DS.Store.extend({
    adapter: App.Adapter.create()
  });

  // Models
  App.Product = DS.Model.extend({
    name: DS.attr('string'),
    description: DS.attr('string'),
    category: DS.attr('string'),

    price: DS.attr('number'),
    rating: DS.attr('number'),
    reviews: DS.attr('number')
  });

  // Routes
  App.Router.map(function() {
    this.route('products');
  });

  App.IndexRoute = Ember.Route.extend({
    redirect: function() {
      this.transitionTo('products');
    }
  });

  App.ProductsRoute = Ember.Route.extend({
    model: function() {
      return App.Product.find({});
    }
  });

  App.ProductsController = Ember.ArrayController.extend();

  return App;
});

