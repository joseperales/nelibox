/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  name: require('./package.json').name,

  minifyCSS: {
    enabled: true,
    options: {}
  },

  getEnvJSON: require('./config/environment')
});

// Use this to add additional libraries to the generated output files.
app.import('vendor/ember-data/ember-data.js');
app.import('vendor/ember-i18n/lib/i18n.js');
app.import('vendor/cldr/plurals.js');
app.import('vendor/ember-validations/packages/ember-validations/ember-validations-latest.min.js');

app.import('vendor/modernizr/modernizr.js');
app.import('vendor/normalize-css/normalize.css');
app.import('vendor/semantic-ui/build/packaged/javascript/semantic.js');
app.import('vendor/semantic-ui/build/packaged/css/semantic.css');
app.import('vendor/moment/moment.js');
app.import('vendor/fullcalendar/dist/fullcalendar.css');
app.import('vendor/fullcalendar/dist/fullcalendar.print.css');
app.import('vendor/fullcalendar/dist/fullcalendar.min.js');
app.import('vendor/quicksand/jquery.quicksand.min.js');
app.import('vendor/animate.css/animate.min.css');
app.import('vendor/jquery-address/src/jquery.address.js');
app.import('vendor/ember-spin-box/dist/ember-spin-box.js');
app.import('vendor/ember-spin-box/dist/ember-spin-box.css');

// If the library that you are including contains AMD or ES6 modules that
// you would like to import into your application please specify an
// object with the list of modules as keys along with the exports of each
// module as its value.
app.import('vendor/ic-ajax/dist/named-amd/main.js', {
  'ic-ajax': [
    'default',
    'defineFixture',
    'lookupFixture',
    'raw',
    'request',
  ]
});


module.exports = app.toTree();
