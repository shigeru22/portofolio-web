<template>
<div class="my-4">
	<div class="text-center space-y-6">
		<h1 class="text-5xl font-bold text-green-vdark">Projects</h1>
		<h3 class="text-2xl font-semibold text-green">Here are some of my projects I've done in the past.</h3>
	</div>
	<div class="flex flex-wrap justify-center mx-32 mt-8 text-center gap-4">
		<project-card v-for="project in projects" :key="project.name" :img="project.icon" :name="project.name" :desc="project.description" :color="project.color" />
	</div>
</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProjectCard from "@/components/portofolio/ProjectCard.vue";
import IProjectItem from "@/types/project-item";
import Common from "@/common.json";

export default defineComponent({
	name: "Home",
	components: {
		ProjectCard
	},
	data: () => {
		return {
			projects: Common.projects as unknown as IProjectItem[]
		};
	}
});
</script>