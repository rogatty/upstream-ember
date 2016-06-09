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
	}),

	excerptFormatted: computed(function () {
		let excerpt = this.get('model.excerpt');

		// unwrap from <p></p> which breaks styling
		// TODO should be returned nicely from API
		excerpt = excerpt.string.replace(/(<p[^>]+?>|<p>|<\/p>)/img, '');
		excerpt = Ember.String.w(excerpt).slice(0, 20).join(' ') + '…';
		excerpt = Ember.String.htmlSafe(excerpt);

		return excerpt;
	})
});
