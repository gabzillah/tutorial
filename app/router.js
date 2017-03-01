import Ember from 'ember'; // gives acccess to ember lib as a var
import config from './config/environment'; // gives app config data as a var

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
});

export default Router; // makes the Router var available to other parts of app


/**

Ember CLI uses ECMAScript 2015

const : a way to declare read only var

**/
