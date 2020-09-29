// Liskov substitution principle


class Person {
	constructor() {
		this.name = 'amonim'
	}
}

class Member extends Person {
	constructor() {
		super()
		this.role = 'member'
	}
	access() {
		console.log('You have access')
	}
}

class Guest extends Person {
	constructor() {
		super()
		this.role = 'guest'
	}
}

class Frontend extends Member {
	constructor() {
		super()
		this.name = 'frontend'
	}
	createFrontend() {}
}

class Backend extends Member {
	constructor() {
		super()
		this.name = 'backend'
	}
	createBackend() {}
}

class Stranger extends Guest {
	constructor() {
		super()
		this.name = 'stranger'
	}
	doStrangersStuff() {}
}

function openSecretDoor(member) {
	console.log('------------------------------')
	console.log(`${member.name} try to open secret door:`)
	if (member.role === 'member') {
		member.access()
	} else {
		console.error(`${member.role} has not access!!!`)
	}
	console.log('------------------------------')
	console.log()
}


openSecretDoor(new Frontend())
openSecretDoor(new Backend())
openSecretDoor(new Stranger())