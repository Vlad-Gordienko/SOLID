// Interface segregation principle


class Animal {
	constructor(name) {
		this.name = name
	}
}

const walker = {
	walk() {
		console.log(`${this.name} can walk`)
	}
}

const flier = {
	fly() {
		console.log(`${this.name} can fly`)
	}
}

const swimmer = {
	swim() {
		console.log(`${this.name} can swim`)
	}
}

class Dog extends Animal {}
Object.assign(Dog.prototype, swimmer, walker)

class Eagle extends Animal {}
Object.assign(Eagle.prototype, flier, walker)

class Whale extends Animal {}
Object.assign(Whale.prototype, swimmer)


const dog = new Dog('Reks')
dog.walk()
dog.swim()

const eagle = new Eagle('Sena')
eagle.walk()
eagle.fly()

const whale = new Whale('Blue big friend')
whale.swim()