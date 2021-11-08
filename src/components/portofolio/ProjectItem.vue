<template>
<router-link :to="`/portofolio/${ index }`" class="flex items-center px-4 md:px-6 py-2 w-full rounded-2xl space-x-4 item" active-class="selected" :style="`--hover-color: ${ color }11; --selected-color: ${ color }22;`">
	<img :src="require(`@/assets/${ icon }`)" :alt="name" class="w-8 md:w-10 h-8 md:h-10" />
	<h3 class="font-bold text-xl md:text-2xl truncate" :style="{ 'color': color }">
		<abbr :title="name">{{ name }}</abbr>
	</h3>
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
	}
};
</script>