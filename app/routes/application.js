import Ember from 'ember';

const {Route, inject} = Ember;

export default Route.extend({
	fastboot: inject.service(),

	actions: {
		didTransition() {
			if (!this.get('fastboot.isFastBoot')) {
				window.scrollTo(0, 0);
			}
			return true;
		}
	}
});
