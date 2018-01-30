import HTTPS from 'https'
import { URL } from 'url'

class InstapagoRestClient {
    constructor (apiKey, publicKey) {
        this._apiKey = apiKey
        this._publicKey = publicKey
    }

    get apiKey () {
        return this._apiKey
    }

    get publicKey () {
        return this._publicKey
    }

    set apiKey (apiKey) {
        this._apiKey = apiKey
    }

    set publicKey (publicKey) {
        this._publicKey = publicKey
    }
}
