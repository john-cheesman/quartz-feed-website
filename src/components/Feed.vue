<template>
    <article class="feed">
        <h3>{{ title }}</h3>
        <div>{{ description }}</div>
    </article>
</template>

<script>
    export default {
        name: 'feed',
        props: [
            'feedData'
        ],
        data() {
            return {
                title: this.feedData.title,
                description: this.feedData.description
            }
        }
    }
</script>
