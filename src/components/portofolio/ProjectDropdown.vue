<template>
<div @click="$emit('open-dropdown-menu')" class="flex justify-between items-center w-full h-16 px-10 space-x-4 shadow-lg rounded-lg cursor-pointer">
	<div class="flex items-center space-x-4">
		<img :src="require(`@/assets/${ icon }`)" alt="Test" class="w-8 h-8" />
		<h2 class="min-w-sm font-semibold text-xl truncate" :style="{ 'color': color }">{{ name }}</h2>
	</div>
	<font-awesome-icon :icon="[ 'fas', 'chevron-down' ]" class="text-xl" />
</div>
</template>

<script lang="ts">
export default {
	name: "ProjectDropdown",
	props: {
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