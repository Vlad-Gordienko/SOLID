// Dependency inversion principle


class Fetch {
	request(url) {
		return Promise.resolve('data from db')
	}
}

class LocalStorage {
	get(key) {
		const localStorageData = 'data from LocalStorage'
		return localStorageData
	}
}

class FetchClient {
	constructor() {
		this.fetch = new Fetch
	}

	getClient(url) {
		return this.fetch.request(url)
	}
}

class LocalStorageClient {
	constructor() {
		this.localStorage = new LocalStorage
	}

	getClient(key) {
		return this.localStorage.get(key)
	}
}

class Database {
	constructor(client) {
		this.client = client
	}

	getData(src) {
		return this.client.getClient(src)
	}
}


console.log(new Database(new FetchClient).getData('src'))
console.log(new Database(new LocalStorageClient).getData('src'))