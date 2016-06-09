import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
	location: config.locationType
});

Router.map(function () {
	// home page
	this.route('index', {
		path: '/'
	});

	// e.g. /about
	this.route('page', {
		path: ':slug'
	});

	this.route('posts', {
		path: 'articles'
	});

	this.route('post', {
		path: 'articles/:slug'
	});
});

export default Router;
