import Vue from "vue"

Vue.filter('upperCase', (value) => {
	return value.toString().toUpperCase()
})

Vue.filter('lowerCase', (value) => {
	return value.toString().toLowerCase()
})

Vue.filter('capitalize', function (value) {
	if (!value) return ''
	value = value.toString()
	return value.charAt(0).toUpperCase() + value.slice(1)
})


Vue.filter('truncate', (text, length, suffix) => {

    if (text.length > length) {
        return text.substring(0, length) + suffix;
    } else {
        return text;
    }
});
