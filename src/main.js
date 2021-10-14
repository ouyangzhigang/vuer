import gallery from './gallery'
import VueScroller from 'vue-scroller'
(function(global) {
	global.gallery = gallery
	global.VueScroller = VueScroller
	return {
		gallery: gallery,
		VueScroller: VueScroller
	}
})(window)
