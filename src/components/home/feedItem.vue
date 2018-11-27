<template>
	<el-card :body-style="{ padding: '0px', display: 'flex'}" class="appeal-item">
		<img :src="feed.image" class="image">
		<div class="appeal-content">
			<h5>{{feed.name}}</h5>
			<p>{{feed.content}}</p>
		</div>
	</el-card>
</template>

<style scoped>
.appeal-item {
	display: flex;
	justify-content: start;
	align-items: start;
	flex-direction: row;
	margin: .2em;
}
.image {
	width: 140px;
	height: 100%;
	display: block;
}
h5, p { text-align: left; }
.appeal-content {
	padding-left: 1.6em;
	padding-right: 1em;
}
</style>

<script>
export default {
	name: 'feedItem',
	props: {feed: Object},
}
</script>
