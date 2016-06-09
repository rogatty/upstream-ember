import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'article',

	// TODO make some of these dynamic
	classNames: ['grid-content', 'post', 'type-post', 'status-publish', 'format-standard',
		'has-post-thumbnail', 'hentry', 'category-movies']
});
