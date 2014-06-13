require.config({

  baseUrl: 'javascripts',
  paths: {
    'jquery': '../bower_components/jquery/dist/jquery.min',
    'jquery-ui': 'vendor/jquery-ui',
    'd3': 'vendor/d3',
    'nvd3': 'vendor/nv.d3',
    'hbs': '../bower_components/handlebars/handlebars.min',
    'ember': '../bower_components/ember/ember.min',
    'ember-data': '../bower_components/ember-data/ember-data.min'
  },

  shim: {
    'ember': {
      deps: ['jquery', 'hbs'],
      exports: 'Ember'
    },
    'ember-data': ['ember'],
    'nvd3': ['d3'],
    'jquery-ui': ['jquery'],
    'd3': {
      exports: 'd3'
    }
  }

});

// Initial require to load the app
require([
  'app',

  // Views
  'ProductByRatingChartView'
]);

