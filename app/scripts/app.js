/// <reference path="../../public/bower_components/ember/ember.js" />
var Nmap = window.Nmap = Ember.Application.create();


/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/views/*');
require('scripts/router');
