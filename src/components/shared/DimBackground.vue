<template>
<div @click.self="$emit('close-modal')" class="fixed top-0 left-0 flex justify-center items-center w-screen h-screen bg-black bg-opacity-10 z-20">
	<slot />
</div>
</template>

<script lang="ts">
export default {
	name: "DimBackground"
};
</script>