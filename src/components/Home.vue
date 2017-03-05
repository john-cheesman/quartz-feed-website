<template>
    <div id="home">
        <h1>Fill Quartz Feed with your essential content.</h1>
        <router-link to="/add-feed">Add feed</router-link>

        <h2>Feeds</h2>

        <ul v-for="feed in $parent.feeds">
            <li>{{ feed }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'home'
    }
</script>
