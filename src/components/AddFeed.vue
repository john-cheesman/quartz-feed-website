<template>
    <div id="add-feed">
        <h1>Add a new feed.</h1>
        <p>Enter the feed URL below:</p>

        <form id="feed-form" @submit.prevent="getFeed(feedUrl)">
            <input type="url" name="feedUrl" v-model="feedUrl" />
            <button type="submit">Add feed</button>
        </form>
    </div>
</template>

<script>
    import config from '../config.js'

    export default {
        name: 'add-feed',
        data () {
            return {
                feedUrl: null
            }
        },
        methods: {
            getFeed(feedUrl) {
                this.$http.get(`${config.feedApiBase}getFeed?url=${feedUrl}`)
                    .then((response) => {
                        console.log(response)
                        if (response.body) {
                            this.$emit('got-feed', response.body)
                        }
                    },
                    (error) => {
                        console.warn(error)
                    })
            }
        }
    }
</script>
