import DS from 'ember-data';
import PostModel from 'ember-wordpress/models/post';

const {attr} = DS;

export default PostModel.extend({
	// TODO should be a relation
	author: attr('number'),
	title: attr('html'),
	content: attr('html'),
	excerpt: attr('html')
});
