<template>
<div class="w-full md:max-w-md h-full max-h-112 md:max-h-138 m-4 p-8 bg-white shadow-lg rounded-lg">
	<div class="flex flex-col h-full overflow-y-auto gap-y-2">
		<project-item v-for="(project, index) in projects" @click="$emit('close-modal')" :key="index + 1" :index="index + 1" :name="project.name" :icon="project.icon" :color="project.color" />
	</div>
</div>
</template>

<script lang="ts">
import ProjectItem from "@/components/portofolio/ProjectItem.vue";
import IProjectItem from "@/types/project-item";

export default {
	name: "ProjectDropdownModal",
	components: {
		ProjectItem
	},
	props: {
		projects: {
			type: Object as () => IProjectItem[],
			required: true
		}
	}
};
</script>