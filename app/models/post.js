import attr from 'ember-data/attr';
import PostModel from 'ember-wordpress/models/post';

export default PostModel.extend({
	// TODO should be a relation
	author: attr('number'),
	title: attr('html'),
	content: attr('html'),
	excerpt: attr('html'),
	// TODO doesn't work and is done manually in component instead
	// featuredMedia: belongsTo('media', {
	// 	async: true
	// })
	featuredMedia: attr('number')
});
