<template>
    <article class="feed">
        <h3><a :href="itemData.url">{{ itemData.title }}</a></h3>
        <time :datetime="date.toISOString()">{{ formattedDate }}</time>
        <p>{{ itemData.author }}</p>
    </article>
</template>

<script>
    export default {
        name: 'feed-item',
        props: [
            'itemData'
        ],
        data() {
            return {
                date: new Date(this.itemData.date.date)
            }
        },
        computed: {
            formattedDate() {
                return `${this.date.getDate()}/${this.date.getMonth() + 1}/${this.date.getFullYear()}`
            }
        }
    }
</script>
