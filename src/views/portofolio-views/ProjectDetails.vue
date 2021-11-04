<template>
<div class="flex justify-center mx-32 mt-8 gap-x-16">
	<project-sidebar :projects="projects" />
	<project-detail-card
		:name="projects[$route.params.id - 1].name"
		:icon="projects[$route.params.id - 1].icon"
		:description="projects[$route.params.id - 1].longDescription"
		:color="projects[$route.params.id - 1].color"
		:technologies="projects[$route.params.id - 1].technologyIcon"
		:link="projects[$route.params.id - 1].link"
		:screenshots="projects[$route.params.id - 1].screenshots"
	/>
</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProjectSidebar from "@/components/portofolio/ProjectSidebar.vue";
import ProjectDetailCard from "@/components/portofolio/ProjectDetailCard.vue";
import IProjectItem from "@/types/project-item";
import Common from "@/common.json";

export default defineComponent({
	name: "ProjectDetails",
	components: {
		ProjectSidebar,
		ProjectDetailCard
	},
	data: function() {
		return {
			projects: Common.projects as IProjectItem[]
		};
	}
});
</script>