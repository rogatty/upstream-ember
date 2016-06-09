import Ember from 'ember';
import DS from 'ember-data';

export default DS.Transform.extend({
	deserialize(serialized) {
		return Ember.String.htmlSafe(serialized);
	},
	serialize(deserialized) {
		return deserialized.string;
	}
});
