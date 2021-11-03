<template>
<div class="flex flex-col justify-center items-center w-100 h-105 p-8 bg-white shadow-lg rounded-lg space-y-4">
	<img src="@/assets/profpic.jpg" :alt="name" class="w-56 h-56 border-4 border-green-vlight rounded-full" />
	<div>
		<h1 class="text-center font-bold text-4xl text-green-dark">{{ name }}</h1>
		<h3 class="text-center font-semibold text-2xl text-green">{{ occupation }}</h3>
	</div>
</div>
</template>

<script lang="ts">
import Common from "@/common.json";

export default {
	name: "ProfileCard",
	data: () => {
		return {
			name: Common.name,
			occupation: Common.occupation
		};
	}
};
</script>