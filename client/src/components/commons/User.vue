<template>
	<div class="is-inline">
		<span v-if="nickname">
			<b-tooltip 
				:label="address"
				position="is-right"
				type="is-info"
				>
					{{nickname}}
			</b-tooltip></span>
		<span v-else>{{address}}</span>
	</div>
</template>

<script>

	export default {
		props: {
			nickname: {
				type: String,
				required: false,
				default: null,
			},
			address: {
				type: String,
				required: true,
			},
		},
	}
</script>

<style lang='scss' scoped>

</style>
