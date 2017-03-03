<template>
    <form id="feed-form">
        <input type="url" name="feedUrl" v-bind="feedUrl" />
        <button type="submit">Add feed</button>
    </form>
</template>

<script>
export default {
    name: 'feed-form',
    data () {
        return {
            feedUrl: null
        }
    }
}
</script>

<style scoped>

</style>
