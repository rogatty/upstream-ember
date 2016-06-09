import Ember from 'ember';

const {$, Component, computed, isEmpty} = Ember;

export default Component.extend({
	tagName: 'section',
	classNameBindings: ['isFeatured:featured-header'],
	attributeBindings: ['style'],

	store: Ember.inject.service(),

	// TODO wow this is super hacky and no good for fastboot
	// need to learn how to work with async properties
	init() {
		this._super(arguments);

		this.get('model.categories').then((categories) => {
			if (!isEmpty(categories.findBy('id', '2'))) {
				this.get('media').then((media) => {
					const url = media.get('mediaDetails.sizes.full.source_url');

					this.set('style', `background-image: url(${url});`);
					this.set('isFeatured', true);
					$('.article-wrapper').addClass('featured');
				});
			}
		});
	},

	// TODO this should be handled by belongsTo relationship
	media: computed(function () {
		return this.get('store').findRecord('media', this.get('model.featuredMedia'));
	})
});
