import Ember from 'ember';

const {$, Component, computed, isEmpty} = Ember;

export default Component.extend({
	tagName: 'section',
	classNames: ['featured-header'],
	attributeBindings: ['style'],

	store: Ember.inject.service(),

	// TODO wow this is super hacky and no good for fastboot
	init() {
		this._super(arguments);

		this.get('model.categories').then((categories) => {
			if (!isEmpty(categories.findBy('id', '2'))) {
				this.get('media').then((media) => {
					const url = media.get('mediaDetails.sizes.full.source_url');

					this.set('style', `background-image: url(${url});`);
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
