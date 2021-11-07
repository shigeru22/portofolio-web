<template>
<transition name="fade">
	<dim-background v-if="opened" @close-modal="opened = false">
		<transition name="fade">
			<screenshot-modal
				v-if="opened"
				:img="modalImg"
				:alt="modalAlt"
				:description="modalDesc"
				:color="color"
			/>
		</transition>
	</dim-background>
</transition>
<div class="flex flex-col w-240 p-10 card-full-height shadow-lg rounded-lg">
	<div class="flex flex-col overflow-y-auto gap-y-10">
		<div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
			<div class="flex items-center space-x-6">
				<img :src="require(`@/assets/${ icon }`)" :alt="name" class="w-16 h-16" />
				<h1 class="font-bold text-4xl" :style="`color: ${ color }EE;`">{{ name }}</h1>
			</div>
			<div class="flex flex-col md:flex-row items-center md:space-x-6 space-y-4 md:space-y-0">
				<div class="space-x-6">
					<font-awesome-icon v-for="item in technologies" :key="item.name" :icon="[ item.type, item.name ]" class="text-2xl text-gray-500" />
				</div>
				<a :href="link" target="_blank" class="mx-auto">
					<button class="flex justify-center items-center w-48 h-12 font-bold text-2xl text-white rounded-xl space-x-4" :style="`background-color: ${ color };`">
						<font-awesome-icon :icon="[ 'fab', 'github' ]" class="text-3xl" />
						<span>GitHub</span>
					</button>
				</a>
			</div>
		</div>
		<div class="flex-grow">
			<p class="font-semibold text-2xl whitespace-pre-wrap" :style="`color: ${ color }E3;`">{{ description }}</p>
		</div>
		<div class="h-64">
			<img
				v-for="screenshot in screenshots"
				@click="
					opened = true;
					modalImg = screenshot.image;
					modalAlt = screenshot.description;
					modalDesc = screenshot.description;
				"
				:key="screenshot.name"
				:src="require(`@/assets/${ screenshot.image }`)"
				:alt="screenshot.description"
				class="h-56 mx-auto rounded-lg cursor-pointer"
			/>
		</div>
	</div>
</div>
</template>

<style scoped>
.card-full-height {
	height: calc(100vh - theme("height.60"));
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>

<script lang="ts">
import DimBackground from "@/components/shared/DimBackground.vue";
import ScreenshotModal from "@/components/portofolio/ScreenshotModal.vue";

export default {
	name: "ProjectDetailCard",
	components: {
		DimBackground,
		ScreenshotModal
	},
	data: () => {
		return {
			opened: false,
			modalImg: "",
			modalAlt: "",
			modalDesc: ""
		};
	},
	props: {
		name: {
			type: String,
			required: true
		},
		icon: {
			type: String,
			required: true
		},
		description: {
			type: String,
			required: true
		},
		color: {
			type: String,
			default: "#70EE81"
		},
		technologies: {
			type: Object as () => {
				type: string,
				name: string
			}[],
			required: true
		},
		link: {
			type: String,
			required: true
		},
		screenshots: {
			type: Object as () => {
				image: string,
				description: string
			}[],
			required: true
		}
	}
};
</script>
