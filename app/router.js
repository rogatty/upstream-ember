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

	this.route('posts', {
		path: 'articles'
	});

	this.route('post', {
		path: 'articles/:slug'
	});

	this.route('category', {
		path: ':slug'
	})
});

export default Router;
