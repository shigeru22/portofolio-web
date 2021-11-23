<template>
<div class="flex flex-col w-100 card-full-height shadow-lg rounded-lg">
	<div class="flex flex-col sidebar-contents-height-lg xl:sidebar-contents-height-xl m-6 xl:m-8 overflow-y-auto gap-y-2">
		<project-item v-for="(project, index) in projects" :key="index + 1" :index="index + 1" :name="project.name" :icon="project.icon" :color="project.color" />
	</div>
</div>
</template>

<style scoped>
.card-full-height {
	height: calc(100vh - theme("height.60"));
}

.sidebar-contents-height-lg {
	height: calc(100% - theme("height.12"));
}

.sidebar-contents-height-xl {
	height: calc(100% - theme("height.16"));
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