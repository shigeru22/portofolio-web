<template>
<transition name="fade" class="lg:hidden">
	<dim-background
		v-if="opened"
		@close-modal="
			opened = false;
			toggleBodyOverflow();
		"
	>
		<transition name="fade">
			<project-dropdown-modal
				:projects="projects"
				@close-modal="
					opened = false;
					toggleBodyOverflow();
				"
			/>
		</transition>
	</dim-background>
</transition>
<div class="flex flex-col lg:flex-row flex-grow justify-center mx-4 lg:mx-32 my-4 lg:my-8 gap-x-16 gap-y-8 overflow-y-none">
	<project-dropdown
		:name="projects[$route.params.id - 1].name"
		:icon="projects[$route.params.id - 1].icon"
		:color="projects[$route.params.id - 1].color"
		@open-dropdown-menu="
			opened = true;
			toggleBodyOverflow();
		"
		class="block lg:hidden"
	/>
	<project-sidebar :projects="projects" class="hidden lg:block" />
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
import ProjectDropdownModal from "@/components/portofolio/ProjectDropdownModal.vue";
import ProjectDropdown from "@/components/portofolio/ProjectDropdown.vue";
import ProjectSidebar from "@/components/portofolio/ProjectSidebar.vue";
import ProjectDetailCard from "@/components/portofolio/ProjectDetailCard.vue";
import IProjectItem from "@/types/project-item";
import Common from "@/common.json";

export default defineComponent({
	name: "ProjectDetails",
	components: {
		DimBackground,
		ProjectDropdownModal,
		ProjectDropdown,
		ProjectSidebar,
		ProjectDetailCard
	},
	data: function() {
		return {
			projects: Common.projects as IProjectItem[],
			opened: false
		};
	},
	methods: {
		toggleBodyOverflow() {
			this.opened
				? document.body.classList.add("overflow-y-hidden")
				: document.body.classList.remove("overflow-y-hidden");
		}
	}
});
</script>