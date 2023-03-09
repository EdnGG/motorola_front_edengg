export default function log(message, item = null, allow_enviroment = ['local', 'dev']) {
	
	if(allow_enviroment.includes(CONFIG.env)) {
		if(item === null) {
			console.log(message)
		}
		else {
			console.log(message, item)
		}
	}

    return null
}