<template>
    <div id="home">
        <h1>Fill Quartz Feed with your essential content.</h1>
        <router-link to="/add-feed">Add feed</router-link>

        <h2>Feeds</h2>

        <div v-for="feed in $parent.feeds">
            <feed :feed-data="feed"></feed>
        </div>

        <h2>Feed Items</h2>

        <div v-for="item in $parent.feedItems">
            <feed-item :item-data="item"></feed-item>
        </div>
    </div>
</template>

<script>
    import Feed from './Feed.vue'
    import FeedItem from './FeedItem.vue'

    export default {
        name: 'home',
        components: {
            Feed,
            FeedItem
        }
    }
</script>
