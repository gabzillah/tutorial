import Ember from 'ember'; // gives acccess to ember lib as a var
import config from './config/environment'; // gives app config data as a var

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('rentals');
});

export default Router; // makes the Router var available to other parts of app


/**

A route is composed of three parts:
  1. /app/router.js maps the route name to a specific url
  2. a route handler javascript file instructs which behavior should be executed when the route is loaded
     (app/router.js)
  3. a route template describing the page represented by the route

Ember CLI uses ECMAScript 2015

const : a way to declare read only var

**/
