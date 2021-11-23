<template>
<div class="flex-grow my-4">
	<div class="text-center space-y-2 lg:space-y-4 xl:space-y-6">
		<h1 class="text-4xl xl:text-5xl font-bold text-green-vdark">Projects</h1>
		<h3 class="text-xl xl:text-2xl font-semibold text-green">Here are some of my projects I've done in the past.</h3>
	</div>
	<div class="flex flex-wrap justify-center mx-2 lg:mx-12 xl:mx-24 2xl:mx-36 mt-8 text-center gap-4">
		<div v-for="(project, index) in projects" :key="index" class="w-full md:w-auto max-w-sm md:max-w-none">
			<router-link :to="`/portofolio/${ index + 1 }`">
				<project-card :key="project.name" :img="project.icon" :name="project.name" :desc="project.description" :color="project.color" />
			</router-link>
		</div>
	</div>
</div>
</template>

<script lang="ts">
import ProjectCard from "@/components/portofolio/ProjectCard.vue";
import IProjectItem from "@/types/project-item";
import Common from "@/common.json";

export default {
	name: "ProjectList",
	components: {
		ProjectCard
	},
	data: () => {
		return {
			projects: Common.projects as unknown as IProjectItem[]
		};
	}
};
</script>