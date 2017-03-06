<template>
    <main id="app">
        <router-view @got-feed="addFeed($event.feed)"></router-view>
    </main>
</template>

<script>
    export default {
        name: 'app',
        data: () => {
            return {
                feeds: [],
                feedItems: []
            }
        },
        methods: {
            addFeed(feed) {
                this.feeds.push(feed)
            }
        }
    }
</script>

<style lang="sass">
    @import 'scss/main';
</style>