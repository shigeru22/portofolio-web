<template>
<router-link :to="`/portofolio/${ index }`" class="flex items-center px-6 w-full h-18 rounded-2xl space-x-4 item" active-class="selected" :style="cssProps">
	<img :src="require(`@/assets/${ icon }`)" :alt="name" class="w-10 h-10" />
	<h3 class="font-bold text-2xl" :style="{ 'color': color }">{{ name }}</h3>
</router-link>
</template>

<style scoped>
.item:hover {
	background-color: var(--hover-color);
}

.item.selected {
	background-color: var(--selected-color);
}

.item.selected:hover {
	background-color: var(--selected-color);
}
</style>

<script lang="ts">
export default {
	name: "ProjectItem",
	props: {
		index: {
			type: Number,
			required: true
		},
		name: {
			type: String,
			required: true
		},
		icon: {
			type: String,
			required: true
		},
		color: {
			type: String,
			default: "#70EE81"
		}
	},
	computed: {
		cssProps() {
			return {
				"--hover-color": `${ this.color }11`,
				"--selected-color": `${ this.color }22`
			};
		}
	}
};
</script>