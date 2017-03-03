<template>
    <div id="add-feed">
        <feed-form></feed-form>
    </div>
</template>

<script>
    import FeedForm from './FeedForm.vue'

    export default {
        name: 'add-feed',
        components: {
            FeedForm
        }
    }
</script>
