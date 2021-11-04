<template>
<div class="flex justify-center mx-32 mt-8 gap-x-16">
	<project-sidebar :projects="projects" />
</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProjectSidebar from "@/components/portofolio/ProjectSidebar.vue";
import IProjectItem from "@/types/project-item";
import Common from "@/common.json";

export default defineComponent({
	name: "ProjectDetails",
	components: {
		ProjectSidebar
	},
	data: function() { // for some reason this.$route can't be used with arrow function
		return {
			id: this.$route.params.id,
			projects: Common.projects as IProjectItem[]
		};
	}
});
</script>