<template>
<div class="flex flex-col w-100 p-8 card-full-height shadow-lg rounded-lg gap-y-2">
	<project-item v-for="(project, index) in projects" :key="index + 1" :index="index + 1" :name="project.name" :icon="project.icon" :color="project.color" />
</div>
</template>

<style scoped>
.card-full-height {
	height: calc(100vh - theme("height.60"));
}
</style>

<script lang="ts">
import ProjectItem from "@/components/portofolio/ProjectItem.vue";
import IProjectItem from "@/types/project-item";

export default {
	name: "ProjectSidebar",
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