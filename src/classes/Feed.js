export default class Feed {
    constructor(feedData) {
        this._feedData = feedData
    }

    get id() {
        return this._feedData.id
    }

    get feedUrl() {
        return this._feedData.feedUrl
    }

    get siteUrl() {
        return this._feedData.siteUrl
    }

    get title() {
        return this._feedData.title
    }

    get description() {
        return this._feedData.description
    }
}
