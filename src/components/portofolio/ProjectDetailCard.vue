<template>
<transition name="fade">
	<screenshot-modal
		v-if="opened"
		:img="modalImg"
		alt="Latus"
		@close-modal="
			opened = false
		"
	/>
</transition>
<div class="flex flex-col w-240 p-10 card-full-height shadow-lg rounded-lg">
	<div class="flex flex-col overflow-y-auto gap-y-10">
		<div class="flex justify-between items-center">
			<div class="flex items-center space-x-6">
				<img :src="require(`@/assets/${ icon }`)" :alt="name" class="w-16 h-16" />
				<h1 class="font-bold text-4xl" :style="`color: ${ color }EE;`">{{ name }}</h1>
			</div>
			<div class="flex items-center space-x-6">
				<font-awesome-icon v-for="item in technologies" :key="item.name" :icon="[ item.type, item.name ]" class="text-2xl text-gray-500" />
				<a :href="link" class="mx-auto">
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
				"
				:key="screenshot.name"
				:src="require(`@/assets/${ screenshot.image }`)"
				:alt="screenshot.description"
				class="h-56 mx-auto rounded-lg"
			/>
		</div>
	</div>
</div>
</template>

<style scoped>
.card-full-height {
	height: calc(100vh - theme("height.60"));
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

<script lang="ts">
import ScreenshotModal from "@/components/portofolio/ScreenshotModal.vue";

export default {
	components: { ScreenshotModal },
	name: "ProjectDetailCard",
	data: () => {
		return {
			opened: false,
			modalImg: ""
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
