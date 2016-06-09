import Ember from 'ember';

const {Component, computed} = Ember;

export default Component.extend({
	// TODO should be div
	tagName: 'li',
	classNames: ['post', 'grid-block', 'small-12'],

	store: Ember.inject.service(),

	// TODO this should be handled by belongsTo relationship
	media: computed(function () {
		return this.get('store').findRecord('media', this.get('model.featuredMedia'));
	})
});
