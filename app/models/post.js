import attr from 'ember-data/attr';
import {belongsTo} from 'ember-data/relationships';
import PostModel from 'ember-wordpress/models/post';

export default PostModel.extend({
	// TODO should be a relation
	author: belongsTo('user'),
	title: attr('html'),
	content: attr('html'),
	excerpt: attr('html'),
	// TODO doesn't work and is done manually in component instead
	// featuredMedia: belongsTo('media', {
	// 	async: true
	// })
	featuredMedia: attr('number')
});
