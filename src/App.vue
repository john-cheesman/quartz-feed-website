<template>
    <main id="app">
        <router-view @got-feed="addFeed($event)"></router-view>
    </main>
</template>

<script>
    import config from './config.js'

    export default {
        name: 'app',
        data: () => {
            return {
                feeds: [],
                feedItems: []
            }
        },
        computed: {
            feedUrls() {
                return this.feeds.map(feed => feed.feedUrl)
            }
        },
        methods: {
            addFeed(feed) {
                console.log(feed)
                this.feeds.push(feed)
                this.getFeedItems()
            },
            getFeedItems() {
                this.$http.get(`${config.feedApiBase}getAggregatedFeedItems?urls=${this.feedUrls.join(',')}`)
                    .then((response) => {
                        console.log(response)

                        if (response.body) {
                            this.feedItems = response.body
                        }
                    },
                    (error) => {
                        console.warn(error)
                    })
            }
        }
    }
</script>

<style lang="sass">
    @import 'scss/main';
</style>