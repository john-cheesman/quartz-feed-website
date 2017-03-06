<template>
    <article class="feed">
        <h2>{{ title }}</h2>
	<div>{{ description }}</div>
    </article>
</template>

<script>
    export default {
        name: 'feed',
	data: [
	    feedData    
	],
	data() {
            return {
	        title: this.feedData.title,
	        description: this.feedData.description
	    }
	}
    }
</script>
