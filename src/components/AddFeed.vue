<template>
    <div id="add-feed">
        <h1>Add a new feed.</h1>
        <p>Enter the feed URL below:</p>

        <form id="feed-form" @submit.prevent="addFeed()">
            <input type="url" name="feedUrl" v-model="feedUrl" />
            <button type="submit">Add feed</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'add-feed',
        data () {
            return {
                feedUrl: null
            }
        },
        methods: {
            addFeed() {
                this.$emit('feed-added', { feedUrl: this.feedUrl })
            }
        }
    }
</script>
