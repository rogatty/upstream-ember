import Ember from 'ember';
import WordpressSerializer from 'ember-wordpress/serializers/wordpress';

export default WordpressSerializer.extend({
	modelNameFromPayloadKey(payloadKey) {
		if (payloadKey === 'media') {
			return 'media';
		} else {
			return this._super(payloadKey);
		}
	},

	keyForAttribute(attr) {
		return Ember.String.underscore(attr);
	}
});
