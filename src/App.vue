<template>
    <main id="app">
        <router-view></router-view>
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
            addFeed: (feed) => {
                this.feeds.push(feed)
            }
        }
    }
</script>
