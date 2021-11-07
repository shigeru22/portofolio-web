<template>
<transition name="fade">
	<dim-background v-if="opened" @close-modal="opened = false">
		<transition name="fade">
			Dropdown goes here
		</transition>
	</dim-background>
</transition>
<div class="flex flex-col md:flex-row justify-center mx-8 md:mx-32 mt-8 gap-x-16">
	<project-dropdown
		:name="projects[$route.params.id - 1].name"
		:icon="projects[$route.params.id - 1].icon"
		:color="projects[$route.params.id - 1].color"
		@open-dropdown-menu="opened = true"
		class="block md:hidden"
	/>
	<project-sidebar :projects="projects" class="hidden md:block" />
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

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import DimBackground from "@/components/shared/DimBackground.vue";
import ProjectDropdown from "@/components/portofolio/ProjectDropdown.vue";
import ProjectSidebar from "@/components/portofolio/ProjectSidebar.vue";
import ProjectDetailCard from "@/components/portofolio/ProjectDetailCard.vue";
import IProjectItem from "@/types/project-item";
import Common from "@/common.json";

export default defineComponent({
	name: "ProjectDetails",
	components: {
		DimBackground,
		ProjectDropdown,
		ProjectSidebar,
		ProjectDetailCard
	},
	data: function() {
		return {
			projects: Common.projects as IProjectItem[],
			opened: false
		};
	}
});
</script>