/// <reference path="../../../public/bower_components/ember/ember.js" />
/// <reference path="../../../public/bower_components/jquery/jquery.js" />
Nmap.ApplicationRoute = Ember.Route.extend({
    // admittedly, this should be in IndexRoute and not in the
    // top level ApplicationRoute; we're in transition... :-)
    model: function () {
        return ['Dinesh', 'Janu', 'blue'];
    }
});


